// Email counter for the Save Vadale Lake page, as a Cloudflare Worker.
//
//   GET  /get   -> {"value": 123}            the number of emails so far
//   POST /hit   -> {"value": 124}            adds one, only when called from the campaign page
//
// The number lives in a Durable Object with built-in SQLite storage, so two
// people tapping at the same moment are both counted. Free plan, no card.

import { DurableObject } from "cloudflare:workers";

// One network address may add at most this many emails per hour. Mobile networks
// share one address between many phones, so this is deliberately generous; it only
// stops someone running the counter up with a script.
const HITS_PER_ADDRESS_PER_HOUR = 30;

export class Counter extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    const sql = ctx.storage.sql;
    sql.exec("CREATE TABLE IF NOT EXISTS total (id INTEGER PRIMARY KEY CHECK (id = 1), n INTEGER NOT NULL)");
    sql.exec("INSERT OR IGNORE INTO total (id, n) VALUES (1, 0)");
    sql.exec("CREATE TABLE IF NOT EXISTS recent (who TEXT NOT NULL, hour INTEGER NOT NULL, n INTEGER NOT NULL, PRIMARY KEY (who, hour))");
  }

  read() {
    return this.ctx.storage.sql.exec("SELECT n FROM total WHERE id = 1").one().n;
  }

  add(who) {
    const sql = this.ctx.storage.sql;
    const hour = Math.floor(Date.now() / 3600000);
    sql.exec("DELETE FROM recent WHERE hour < ?", hour);
    const seen = sql.exec(
      "INSERT INTO recent (who, hour, n) VALUES (?, ?, 1) ON CONFLICT (who, hour) DO UPDATE SET n = n + 1 RETURNING n",
      who, hour).one().n;
    if (seen > HITS_PER_ADDRESS_PER_HOUR) return { value: this.read(), limited: true };
    return { value: sql.exec("UPDATE total SET n = n + 1 WHERE id = 1 RETURNING n").one().n, limited: false };
  }
}

const HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
};
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: HEADERS });

// The address is never stored as it is: only a scrambled form, kept for at most an hour.
async function scramble(text) {
  const bytes = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
  return Array.from(bytes.slice(0, 12), (b) => b.toString(16).padStart(2, "0")).join("");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: HEADERS });

    const counter = env.COUNTER.get(env.COUNTER.idFromName("emails-sent"));
    const startAt = Number(env.START_AT) || 0;   // emails counted before this Worker existed

    if (url.pathname === "/get" && request.method === "GET") {
      return json({ value: startAt + (await counter.read()) });
    }

    if (url.pathname === "/hit" && request.method === "POST") {
      const allowed = (env.ALLOWED_ORIGIN || "").split(",").map((s) => s.trim()).filter(Boolean);
      if (!allowed.includes(request.headers.get("Origin") || "")) {
        return json({ error: "Emails are counted only from the campaign page." }, 403);
      }
      const who = await scramble(`${request.headers.get("CF-Connecting-IP") || "unknown"}|vadale`);
      const result = await counter.add(who);
      return json({ value: startAt + result.value, ...(result.limited ? { limited: true } : {}) });
    }

    if (url.pathname === "/") return json({ about: "Email counter for the Save Vadale Lake campaign.", read: "/get" });
    return json({ error: "Not found" }, 404);
  },
};
