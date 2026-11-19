/* Save Vadale Lake: campaign page.
   Everything a non-programmer may want to change is in CONFIG and in the
   two letters (LETTER.en / LETTER.mr) below. */

const CONFIG = {
  // Who the email goes to. Change an address here and the whole page follows.
  to: [
    {
      email: "sc.barne@sansad.nic.in",
      name: { en: "Shri Shrirang Barne", mr: "श्री. श्रीरंग बारणे" },
      role: { en: "MP, Maval (Lok Sabha)", mr: "खासदार, मावळ" },
    },
    {
      email: "response@prashantthakur.in",
      name: { en: "Shri Prashant Thakur", mr: "श्री. प्रशांत ठाकूर" },
      role: { en: "MLA, Panvel", mr: "आमदार, पनवेल" },
    },
  ],
  cc: [
    {
      email: "panvelcorporation@gmail.com",
      name: { en: "The Commissioner, Panvel Municipal Corporation", mr: "आयुक्त, पनवेल महानगरपालिका" },
    },
    {
      email: "cm@maharashtra.gov.in",
      name: { en: "Chief Minister's Office, Maharashtra", mr: "मुख्यमंत्री कार्यालय, महाराष्ट्र" },
    },
  ],

  // The satellite tracker (Vadale Lake Watch).
  trackerUrl: "https://naman1911.github.io/Vadale-Watch/",

  // Shown only if the tracker cannot be reached. Always labelled with its date.
  weedSnapshot: { date: "2026-11-17", pct: 90.9, from: { date: "2026-10-22", pct: 98.2 } },

  // Shared "emails sent" counter (free Abacus counting service, no account needed).
  counter: { base: "https://abacus.jasoncameron.dev", namespace: "vadale-campaign", key: "emails-sent" },
};

/* ---------- the two letters ---------- */

const LETTER = {
  en: {
    subject: "Request to protect the weevils restoring Vadale Lake, Panvel",
    body: ({ salutation, weed, tracker, name, area }) => [
      `Respected ${salutation},`,
      `I am writing to you as a citizen who cares about Vadale Lake (Ballaleshwar Talao) in Old Panvel.`,
      `Built in the Peshwa era by Balajipant Bapat, beside the Ballaleshwar temple, this lake has been at the heart of Panvel for nearly three hundred years. It is part of our town's history, faith and daily life, and it deserves to be preserved for the generations to come.`,
      `The lake is covered by Salvinia, an invasive water weed. This year the Panvel Municipal Corporation, guided by ICAR's Directorate of Weed Research, released about 70,000 weevils that feed only on this weed. We are grateful for this scientific step.${weed ? " " + weed : ""}`,
      `There are indications that manual cleaning of the lake may be taken up soon. I humbly request you to prevent this. The weevils, with their eggs and larvae, live inside the weed. Removing the weed by hand or machine removes them too, and sets back the natural recovery that has begun.`,
      `My requests:\n1. Please do not allow manual or mechanical removal of the weed while the weevils are at work, unless the ICAR scientists advise it.\n2. Please continue to support and monitor the biological control programme.\n3. Please keep citizens informed about the lake's progress.`,
      `Anyone can follow the lake's weed cover, estimated from satellite images, at:\n${tracker}`,
      `Thank you for your attention and for your service to Panvel.`,
      `Yours respectfully,\n${name}${area ? "\n" + area : ""}`,
    ].join("\n\n"),
    weed: (w) => `The latest satellite estimate (${w.date}) shows weed on about ${w.pct}% of the lake` +
      (w.from ? `, down from about ${w.from.pct}% on ${w.from.date}.` : "."),
    and: " and ",
    ji: (n) => `${n} ji`,
    namePlaceholder: "[Your name]",
  },
  mr: {
    subject: "वडाळे तलाव स्वच्छ करणाऱ्या भुंगेऱ्यांचे संरक्षण व्हावे, ही नम्र विनंती",
    body: ({ salutation, weed, tracker, name, area }) => [
      `आदरणीय ${salutation},`,
      `सप्रेम नमस्कार.`,
      `एक जागरूक नागरिक या नात्याने, जुन्या पनवेलमधील वडाळे तलावाबद्दल (बल्लाळेश्वर तलाव) मी आपणांस हे पत्र लिहीत आहे.`,
      `पेशवेकाळात बाळाजीपंत बापट यांनी बल्लाळेश्वर मंदिराशेजारी बांधलेला हा तलाव जवळपास तीनशे वर्षे पनवेलच्या जीवनाचा केंद्रबिंदू राहिला आहे. तो आपल्या शहराच्या इतिहासाचा, श्रद्धेचा आणि रोजच्या जगण्याचा भाग आहे. पुढच्या पिढ्यांसाठी त्याचे जतन व्हायलाच हवे.`,
      `सध्या हा तलाव 'साल्व्हिनिया' या परदेशी जलपर्णीने व्यापला आहे. या वर्षी पनवेल महानगरपालिकेने भारतीय कृषी अनुसंधान परिषदेच्या (ICAR) तण संशोधन संचालनालयाच्या मार्गदर्शनाखाली, फक्त हीच वनस्पती खाणारे सुमारे ७०,००० भुंगेरे (विव्हिल कीटक) तलावात सोडले. या शास्त्रीय उपक्रमाबद्दल आम्ही मनापासून आभारी आहोत.${weed ? " " + weed : ""}`,
      `तलावातील जलपर्णी लवकरच हाताने काढली जाण्याची शक्यता असल्याचे समजते. असे होऊ नये, अशी माझी नम्र विनंती आहे. हे भुंगेरे, त्यांची अंडी आणि अळ्या जलपर्णीतच राहतात. जलपर्णी हाताने किंवा यंत्राने काढल्यास तेही तिच्याबरोबर बाहेर जातात आणि सुरू झालेली नैसर्गिक प्रक्रिया मागे पडते.`,
      `माझ्या विनंत्या:\n१. भुंगेऱ्यांचे काम सुरू असेपर्यंत, ICAR च्या शास्त्रज्ञांनी सल्ला दिल्याशिवाय, जलपर्णी हाताने किंवा यंत्राने काढू देऊ नये.\n२. जैविक नियंत्रणाच्या या उपक्रमाला पाठबळ द्यावे आणि त्यावर सातत्याने देखरेख ठेवावी.\n३. तलावाच्या स्थितीची माहिती नागरिकांना वेळोवेळी द्यावी.`,
      `उपग्रह छायाचित्रांवरून काढलेले तलावातील जलपर्णीचे प्रमाण कोणालाही या संकेतस्थळावर पाहता येते:\n${tracker}`,
      `आपण वेळ दिल्याबद्दल आणि पनवेलसाठी करत असलेल्या कार्याबद्दल मनःपूर्वक आभार.`,
      `आपला नम्र / आपली नम्र,\n${name}${area ? "\n" + area : ""}`,
    ].join("\n\n"),
    weed: (w) => `उपग्रहावरून केलेल्या ताज्या अंदाजानुसार (${w.date}) तलावाचा सुमारे ${w.pct}% भाग जलपर्णीखाली आहे` +
      (w.from ? `; ${w.from.date} रोजी हे प्रमाण सुमारे ${w.from.pct}% होते.` : "."),
    and: " आणि ",
    ji: (n) => `${n} जी`,
    namePlaceholder: "[तुमचे नाव]",
  },
};

/* ---------- page text ---------- */

const T = {
  en: {
    title: "Save Vadale Lake: send the email",
    brand: "Save Vadale Lake",
    eyebrow: "Vadale Talao · Old Panvel",
    h1: "Vadale Lake is healing. Let the weevils finish their work.",
    lede: "Tiny weevils are clearing the weed from our lake, naturally. Manual cleaning now would remove them too. Ask our representatives to protect them.",
    cta: "Send the email",
    cta_hint: "Takes 30 seconds. Goes from your own mailbox.",
    map_alt: "Satellite map of Vadale Lake: green is weed, blue is open water",
    weed_label: "Weed cover right now",
    weed_sub: (d) => `Satellite estimate, ${d}`,
    weed_down: (p, d) => `Down from ${p}% on ${d}`,
    legend_weed: "weed",
    legend_water: "open water",
    tracker_link: "See the live tracker",
    mail_label: "Emails sent by citizens",
    mail_sub: "Every email is one more voice for the lake.",
    mail_sub_zero: "Be the first to send one.",
    mail_link: "Add yours",
    why_h: "Why we are writing",
    r1_h: "A lake three centuries old",
    r1_p: "Vadale Talao, also called Ballaleshwar Talao, was built in the Peshwa era by Balajipant Bapat, beside the Ballaleshwar temple. For close to three hundred years it has been the heart of Old Panvel: a place of faith, festivals and evening walks.",
    r2_h: "70,000 tiny helpers",
    r2_p: "The lake is covered by Salvinia, an invasive floating weed. In 2026 the Panvel Municipal Corporation, guided by ICAR's Directorate of Weed Research, released about 70,000 weevils that eat only this weed and harm nothing else. Satellite images show the weed has begun to recede.",
    r3_h: "Why manual cleaning would hurt",
    r3_p: "The weevils, their eggs and their larvae live inside the weed. Pulling the weed out by hand or machine takes them out with it, and the weed that is left grows back faster than the few surviving weevils can multiply. Biological control is slow, but it lasts. It needs to be left undisturbed.",
    letter_h: "Your email, ready to send",
    letter_p: "Choose a language, add your name, and press the button. The email opens in your own mail app with everything filled in. You only have to press Send.",
    f_lang: "Language of the email",
    f_name: "Your name",
    f_name_ph: "e.g. Asha Patil",
    f_area: 'Your area <span class="opt">(optional)</span>',
    f_area_ph: "e.g. Old Panvel",
    m_to: "To",
    m_cc: "Copy to",
    m_subject: "Subject",
    send_app: "Open in my email app",
    send_copy: "Copy the text",
    privacy: "This website sends nothing and stores nothing about you. The email goes from your own mailbox, and you can edit it before sending.",
    thanks_h: "Thank you. The lake has one more voice.",
    thanks_p: "Now pass it on. Five more emails from people you know will do more than anything else.",
    share_wa: "Share on WhatsApp",
    share_link: "Copy the link",
    foot_about: 'A citizens\' campaign for Vadale Lake, Panvel. Follow <a href="https://instagram.com/savevadalelake" target="_blank" rel="noopener">@savevadalelake</a> on Instagram.',
    foot_data: (u) => `Weed cover is a satellite estimate from <a href="${u}" target="_blank" rel="noopener">Vadale Lake Watch</a> (Copernicus Sentinel-2 images). The email count is the number of times the email was opened from this page, counted once per device.`,
    need_name: "Please add your name so the letter is signed.",
    copied: "Copied. Paste it into a new email.",
    link_copied: "Link copied.",
    copy_failed: "Could not copy. Please select the text and copy it.",
    share_text: "Vadale Lake is healing, thanks to 70,000 tiny weevils. Manual cleaning could undo their work. Send one email to our MP and MLA. It takes 30 seconds:",
    lbl_to: "To", lbl_cc: "Cc", lbl_subject: "Subject",
  },
  mr: {
    title: "वडाळे तलाव वाचवा: ईमेल पाठवा",
    brand: "वडाळे तलाव वाचवा",
    eyebrow: "वडाळे तलाव · जुने पनवेल",
    h1: "वडाळे तलाव सावरतो आहे. भुंगेऱ्यांना त्यांचे काम पूर्ण करू द्या.",
    lede: "छोटे भुंगेरे आपल्या तलावातील जलपर्णी नैसर्गिकरीत्या कमी करत आहेत. आता हाताने सफाई केली, तर जलपर्णीबरोबर तेही निघून जातील. त्यांचे संरक्षण करण्याची विनंती आपल्या लोकप्रतिनिधींना करा.",
    cta: "ईमेल पाठवा",
    cta_hint: "फक्त ३० सेकंद. ईमेल तुमच्याच मेलबॉक्समधून जाईल.",
    map_alt: "वडाळे तलावाचा उपग्रह नकाशा: हिरवा म्हणजे जलपर्णी, निळा म्हणजे मोकळे पाणी",
    weed_label: "सध्या जलपर्णीने व्यापलेला भाग",
    weed_sub: (d) => `उपग्रह अंदाज, ${d}`,
    weed_down: (p, d) => `${d} रोजीच्या ${p}% वरून घट`,
    legend_weed: "जलपर्णी",
    legend_water: "मोकळे पाणी",
    tracker_link: "थेट ट्रॅकर पाहा",
    mail_label: "नागरिकांनी पाठवलेले ईमेल",
    mail_sub: "प्रत्येक ईमेल म्हणजे तलावासाठी आणखी एक आवाज.",
    mail_sub_zero: "पहिला ईमेल तुम्ही पाठवा.",
    mail_link: "तुमचाही ईमेल पाठवा",
    why_h: "आपण का लिहीत आहोत",
    r1_h: "तीन शतकांचा तलाव",
    r1_p: "वडाळे तलाव, म्हणजेच बल्लाळेश्वर तलाव, पेशवेकाळात बाळाजीपंत बापट यांनी बल्लाळेश्वर मंदिराशेजारी बांधला. जवळपास तीनशे वर्षे तो जुन्या पनवेलचा केंद्रबिंदू आहे: श्रद्धेचे, सणांचे आणि संध्याकाळच्या फेरफटक्याचे ठिकाण.",
    r2_h: "७०,००० छोटे मदतनीस",
    r2_p: "तलाव 'साल्व्हिनिया' या परदेशी तरंगत्या जलपर्णीने व्यापला आहे. २०२६ मध्ये पनवेल महानगरपालिकेने ICAR च्या तण संशोधन संचालनालयाच्या मार्गदर्शनाखाली सुमारे ७०,००० भुंगेरे तलावात सोडले. ते फक्त हीच वनस्पती खातात; इतर कशालाही इजा करत नाहीत. जलपर्णी कमी होऊ लागल्याचे उपग्रह छायाचित्रांत दिसते.",
    r3_h: "हाताने सफाई का नको",
    r3_p: "भुंगेरे, त्यांची अंडी आणि अळ्या जलपर्णीतच राहतात. जलपर्णी हाताने किंवा यंत्राने काढली, तर तेही तिच्याबरोबर बाहेर जातात; आणि उरलेली जलपर्णी, वाचलेल्या थोड्या भुंगेऱ्यांच्या वाढीपेक्षा वेगाने पुन्हा पसरते. जैविक नियंत्रण संथ असते, पण टिकाऊ असते. त्यात व्यत्यय येऊ देऊ नये.",
    letter_h: "तुमचा ईमेल तयार आहे",
    letter_p: "भाषा निवडा, तुमचे नाव लिहा आणि बटण दाबा. सर्व मजकूर भरलेला ईमेल तुमच्याच मेल ॲपमध्ये उघडेल. तुम्ही फक्त 'Send' दाबायचे.",
    f_lang: "ईमेलची भाषा",
    f_name: "तुमचे नाव",
    f_name_ph: "उदा. आशा पाटील",
    f_area: 'तुमचा परिसर <span class="opt">(ऐच्छिक)</span>',
    f_area_ph: "उदा. जुने पनवेल",
    m_to: "प्रति",
    m_cc: "प्रत",
    m_subject: "विषय",
    send_app: "माझ्या ईमेल ॲपमध्ये उघडा",
    send_copy: "मजकूर कॉपी करा",
    privacy: "ही वेबसाइट काहीही पाठवत नाही आणि तुमची कोणतीही माहिती साठवत नाही. ईमेल तुमच्याच मेलबॉक्समधून जातो; पाठवण्यापूर्वी तुम्ही त्यात बदल करू शकता.",
    thanks_h: "धन्यवाद. तलावासाठी आणखी एक आवाज उठला.",
    thanks_p: "आता हे इतरांपर्यंत पोहोचवा. तुमच्या ओळखीतल्या आणखी पाच जणांचे ईमेल सर्वांत मोलाचे ठरतील.",
    share_wa: "WhatsApp वर शेअर करा",
    share_link: "लिंक कॉपी करा",
    foot_about: 'पनवेलच्या वडाळे तलावासाठी नागरिकांची मोहीम. Instagram वर <a href="https://instagram.com/savevadalelake" target="_blank" rel="noopener">@savevadalelake</a> ला फॉलो करा.',
    foot_data: (u) => `जलपर्णीचे प्रमाण हा <a href="${u}" target="_blank" rel="noopener">Vadale Lake Watch</a> वरील उपग्रह अंदाज आहे (Copernicus Sentinel-2 छायाचित्रे). ईमेलची संख्या म्हणजे या पानावरून ईमेल किती वेळा उघडला गेला ती संख्या; प्रत्येक उपकरणावरून एकदाच मोजली जाते.`,
    need_name: "कृपया तुमचे नाव लिहा, म्हणजे पत्रावर तुमची सही राहील.",
    copied: "कॉपी झाले. नवीन ईमेलमध्ये पेस्ट करा.",
    link_copied: "लिंक कॉपी झाली.",
    copy_failed: "कॉपी करता आले नाही. कृपया मजकूर निवडून कॉपी करा.",
    share_text: "७०,००० छोट्या भुंगेऱ्यांमुळे वडाळे तलाव सावरतो आहे. हाताने सफाई झाल्यास त्यांचे काम वाया जाऊ शकते. आपल्या खासदार आणि आमदारांना एक ईमेल पाठवा. फक्त ३० सेकंद लागतात:",
    lbl_to: "To", lbl_cc: "Cc", lbl_subject: "Subject",
  },
};

/* ---------- small helpers ---------- */

const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode: fine */ } },
};

const MONTHS = {
  en: { short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] },
  mr: { short: ["जाने", "फेब्रु", "मार्च", "एप्रि", "मे", "जून", "जुलै", "ऑग", "सप्टें", "ऑक्टो", "नोव्हें", "डिसें"],
        long: ["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"] },
};
// Marathi text uses Devanagari digits.
const num = (n, lang) => {
  const s = Number(n).toLocaleString("en-IN");
  return lang === "mr" ? s.replace(/\d/g, (d) => "०१२३४५६७८९"[d]) : s;
};
const fmtDate = (iso, lang, style = "short", withYear = true) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${num(d, lang)} ${MONTHS[lang][style][m - 1]}${withYear ? " " + String(y).replace(/\d/g, (c) => (lang === "mr" ? "०१२३४५६७८९"[c] : c)) : ""}`;
};

/* ---------- state ---------- */

const state = {
  lang: "en",
  weed: { ...CONFIG.weedSnapshot, live: false },
  count: null,          // null = counter not reachable
};

function pickLanguage() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "mr" || q === "en") return q;
  const saved = store.get("vadale_lang");
  if (saved === "mr" || saved === "en") return saved;
  return (navigator.languages || [navigator.language || ""]).some((l) => /^mr\b/i.test(l)) ? "mr" : "en";
}

/* ---------- the letter ---------- */

function letterParts() {
  const lang = state.lang, L = LETTER[lang];
  const name = $("f-name").value.trim();
  const area = $("f-area").value.trim();
  const w = state.weed;
  const weed = w ? L.weed({
    date: fmtDate(w.date, lang, "long"),
    pct: num(Math.round(w.pct), lang),
    from: w.from ? { date: fmtDate(w.from.date, lang, "long"), pct: num(Math.round(w.from.pct), lang) } : null,
  }) : "";
  const salutation = CONFIG.to.map((p) => L.ji(p.name[lang])).join(L.and);
  const args = { salutation, weed, tracker: CONFIG.trackerUrl, area };
  return {
    name,
    subject: L.subject,
    body: L.body({ ...args, name: name || L.namePlaceholder }),
    to: CONFIG.to.map((p) => p.email),
    cc: CONFIG.cc.map((p) => p.email),
  };
}

function mailtoUrl(p) {
  const body = encodeURIComponent(p.body.replace(/\n/g, "\r\n"));
  return `mailto:${p.to.join(",")}?cc=${p.cc.join(",")}&subject=${encodeURIComponent(p.subject)}&body=${body}`;
}

function plainCopy(p) {
  const t = T[state.lang];
  return `${t.lbl_to}: ${p.to.join(", ")}\n${t.lbl_cc}: ${p.cc.join(", ")}\n${t.lbl_subject}: ${p.subject}\n\n${p.body}`;
}

function renderLetter() {
  const lang = state.lang, L = LETTER[lang], p = letterParts();
  const who = (x) => `<span class="who">${esc(x.name[lang])}${x.role ? ", " + esc(x.role[lang]) : ""} <span class="addr">&lt;${esc(x.email)}&gt;</span></span>`;
  $("m-to").innerHTML = CONFIG.to.map(who).join("");
  $("m-cc").innerHTML = CONFIG.cc.map(who).join("");
  $("m-subject").textContent = p.subject;

  // Highlight the signature so people see where their name goes.
  const shown = p.name || L.namePlaceholder;
  const html = esc(p.body);
  const at = html.lastIndexOf(esc(shown));
  $("m-body").innerHTML = at < 0 ? html : `${html.slice(0, at)}<span class="sig">${esc(shown)}</span>${html.slice(at + esc(shown).length)}`;
  $("m-body").lang = lang;

  $("send-mailto").href = mailtoUrl(p);
}

/* ---------- page language ---------- */

function applyLanguage() {
  const lang = state.lang, t = T[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = t[el.dataset.i18nHtml];
    el.innerHTML = typeof v === "function" ? v(CONFIG.trackerUrl) : v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t[el.dataset.i18nPh]; });
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  $("action-note").textContent = "";
  renderWeed();
  renderCount();
  renderLetter();
}

function setLanguage(lang) {
  state.lang = lang;
  store.set("vadale_lang", lang);
  applyLanguage();
}

/* ---------- weed cover, from the satellite tracker ---------- */

function renderWeed() {
  const lang = state.lang, t = T[lang], w = state.weed;
  $("weed-pct").textContent = num(Math.round(w.pct), lang);
  $("weed-sub").textContent = t.weed_sub(fmtDate(w.date, lang));
  const tr = $("weed-trend");
  tr.hidden = !w.from;
  if (w.from) tr.textContent = "↓ " + t.weed_down(num(Math.round(w.from.pct), lang), fmtDate(w.from.date, lang, "short", false));
}

async function loadWeed() {
  try {
    const res = await fetch(`${CONFIG.trackerUrl}data/site.json`, { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    const site = await res.json();
    const good = (site.entries || []).filter((e) => !e.flag && typeof e.weed_pct === "number");
    if (!good.length) throw new Error("no entries");
    const last = good[good.length - 1];
    // Compare with the highest reading of the previous 45 days (latest one on a tie).
    const day = (iso) => Date.parse(iso + "T00:00:00Z") / 864e5;
    let peak = null;
    for (const e of good.slice(0, -1)) {
      if (day(last.date) - day(e.date) > 45) continue;
      if (!peak || e.weed_pct >= peak.weed_pct) peak = e;
    }
    const falling = peak && Math.round(peak.weed_pct) - Math.round(last.weed_pct) >= 2;
    state.weed = { date: last.date, pct: last.weed_pct, from: falling ? { date: peak.date, pct: peak.weed_pct } : null, live: true };
    // Show that date's weed map; keep the bundled picture if it fails to load.
    const img = $("lakemap-img"), url = `${CONFIG.trackerUrl}data/images/${last.date}_weed.png`;
    const probe = new Image();
    probe.onload = () => img.setAttribute("href", url);
    probe.src = url;
  } catch { /* tracker unreachable: the dated snapshot stays */ }
  renderWeed();
  renderLetter();
}

/* ---------- shared email counter ---------- */

function renderCount() {
  const lang = state.lang, t = T[lang];
  $("mail-count").textContent = state.count === null ? "–" : num(state.count, lang);
  $("mail-sub").textContent = state.count === 0 ? t.mail_sub_zero : t.mail_sub;
}

async function counter(action) {
  const c = CONFIG.counter;
  // keepalive: the request still completes when the mail app takes over the screen
  const res = await fetch(`${c.base}/${action}/${c.namespace}/${c.key}`, { cache: "no-store", keepalive: true });
  if (res.status === 404) return 0;           // nobody has sent one yet
  if (!res.ok) throw new Error(res.status);
  return Number((await res.json()).value) || 0;
}

async function loadCount() {
  try { state.count = await counter("get"); } catch { state.count = null; }
  renderCount();
}

async function countMyEmail() {
  if (store.get("vadale_sent")) return;        // one count per device
  store.set("vadale_sent", "1");
  if (state.count !== null) { state.count += 1; renderCount(); }
  try { state.count = Math.max(await counter("hit"), state.count || 0); renderCount(); } catch { /* shown locally only */ }
}

/* ---------- sending ---------- */

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch { /* fall through */ }
  const ta = document.createElement("textarea");
  ta.value = text; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
  document.body.appendChild(ta); ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch { ok = false; }
  ta.remove();
  return ok;
}

function note(msg, bad = false) {
  const n = $("action-note");
  n.textContent = msg;
  n.style.color = bad ? "#9a2f12" : "";
}

function requireName(ev) {
  if ($("f-name").value.trim()) return true;
  ev.preventDefault();
  note(T[state.lang].need_name, true);
  $("f-name").focus();
  return false;
}

// Tapping "Open in my email app" counts as one email (once per device) and
// shows the thank-you with the share buttons, ready for when the person returns.
function emailOpened() {
  countMyEmail();
  $("thanks").hidden = false;
  state.showThanks = true;
}

function wire() {
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLanguage(b.dataset.lang)));
  ["f-name", "f-area"].forEach((id) => $(id).addEventListener("input", () => { note(""); renderLetter(); }));

  $("send-mailto").addEventListener("click", (ev) => { if (requireName(ev)) { note(""); emailOpened(); } });

  $("copy-text").addEventListener("click", async (ev) => {
    if (!requireName(ev)) return;
    const ok = await copyText(plainCopy(letterParts()));
    note(ok ? T[state.lang].copied : T[state.lang].copy_failed, !ok);
  });

  // Back from the mail app: bring the thank-you into view.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible" || !state.showThanks) return;
    state.showThanks = false;
    $("thanks").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  const shareUrl = () => location.origin + location.pathname + (state.lang === "mr" ? "?lang=mr" : "");
  $("share-wa").addEventListener("click", (ev) => {
    ev.currentTarget.href = `https://wa.me/?text=${encodeURIComponent(T[state.lang].share_text + " " + shareUrl())}`;
  });
  $("share-link").addEventListener("click", async () => {
    const ok = await copyText(shareUrl());
    $("share-link").textContent = ok ? T[state.lang].link_copied : T[state.lang].share_link;
  });
}

state.lang = pickLanguage();
wire();
applyLanguage();
loadWeed();
loadCount();
