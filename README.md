# Vadale-Campaign

A one-page campaign site for Vadale Lake (Vadale Talao), Old Panvel.

Visitors choose English or Marathi, add their name, and press one button. A ready-written,
respectful email opens in their own mail app, addressed to Panvel's MP and MLA, with a copy
to the Panvel Municipal Corporation and the Chief Minister's Office. They only press Send.

The page also shows two live numbers:

- **Weed cover right now**, read from [Vadale Lake Watch](https://naman1911.github.io/Vadale-Watch/)
  (`data/site.json`), with that date's satellite weed map.
- **Emails sent**, a shared counter that goes up when someone taps "Open in my email app".

## Publishing it (one time)

*Settings → Pages → Build and deployment → Source: Deploy from a branch*, pick the branch
that holds these files and the `/ (root)` folder, then Save. The page appears at
`https://naman1911.github.io/Vadale-Campaign/` a minute or two later.

There is nothing to build or install: it is plain HTML, CSS and JavaScript.

## Updating the live site

Any change pushed to a branch whose name starts with `claude/` is merged into `main` automatically
by the *Publish to main* workflow (`.github/workflows/publish.yml`), and GitHub Pages republishes
within a minute or two. No pull request is needed. If a change conflicts with `main`, the workflow
fails and leaves `main` untouched.

## Changing things

Everything editable is at the top of [`assets/app.js`](assets/app.js):

| What | Where |
|---|---|
| Email addresses, names and titles of the recipients | `CONFIG.to` and `CONFIG.cc` |
| The English and Marathi letters | `LETTER.en` and `LETTER.mr` |
| All other text on the page, in both languages | `T.en` and `T.mr` |
| Tracker address | `CONFIG.trackerUrl` |
| Counter name | `CONFIG.counter` |

The English page text is also written into `index.html` so the page reads correctly before the script runs.

A link ending in `?lang=mr` opens the page directly in Marathi.

## How the numbers work

- **Weed cover.** The page reads the newest reliable entry from the tracker and compares it with the
  highest reading of the previous 45 days. If the tracker cannot be reached it shows a saved figure
  (`CONFIG.weedSnapshot`), always labelled with its date. The same sentence goes into the letter.
- **Emails sent.** The site cannot see anyone's mailbox, so it cannot know that an email really left.
  It counts each tap on "Open in my email app", once per device, so a few people who open the email
  but do not send it are included.
  The count is kept by [Abacus](https://abacus.jasoncameron.dev), a free public counting service.
  No name, email address or other personal detail is sent to it. Because the counter is public,
  it is an honest indication, not an audited figure.

## Sources for the facts in the letter

- Weed and weevils: Panvel Municipal Corporation, with ICAR-Directorate of Weed Research (Jabalpur),
  released 20,000 *Cyrtobagous salviniae* weevils on 7 May 2026 and 50,000 more in September 2026
  to control *Salvinia molesta* (Free Press Journal, Pudhari, Sakal reports).
- History: Marathi Vishwakosh ("पनवेल") credits Balajipant Bapat with building the Vadale lake in the Peshwa era.
- Addresses: Lok Sabha member profile (MP), Panvel Municipal Corporation contact page, Government of Maharashtra directory (CMO).
  The MLA's address comes from his own website and should be confirmed with his office.
