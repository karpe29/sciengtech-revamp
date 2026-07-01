# Client Decisions & Open Questions

> **Status:** Stakeholder input captured July 2026. Locked items are implemented in site + docs. Open items go to SciEngTech at next review.

---

## Locked decisions (implemented)

| # | Topic | Decision |
|---|--------|----------|
| 8 | Legal / display name | **SciEngTech Solutions** |
| 9 | Approved marketing claims | **Made in India** · **ISO certified** · **Approved GeM vendor** · **100% Quality Inspected** |
| 10 | Certification | **ISO** — display on site (certificate detail TBD from client) |
| 11 | Legal pages | **Terms** + **Privacy** written by agency — **no Refunds & Returns page** (RFQ-only model) |
| 12 | Imaginate footer credit | **Remove** — do not show |
| 13 | Pune address | **Confirmed** — 14, Om Shanti, 156/2 Mangalwar Peth, Pune – 411 011 |
| 15 | Email | **info@sciengtech.in** (all routing for now) |
| 16 | GSTIN | **Confirmed** — `27AEOFS5239R1ZY` |
| 17–18 | UDYAM | **Show UDYAM** — `UDYAM-MH-26-0215820` (not labelled as GeM ID) |
| 19 | Google Maps | **No** embed on Contact |
| 30–31 | Catalog scope | **Current build is fine** — 8 solutions + 47 components |
| 36–37 | Downloads | **No** public datasheet PDFs or CAD files at launch |
| 38 | Pricing | **No** public prices — quote on request only |
| 45 | Image rights | **Client confirms** rights to use supplied / legacy images |
| 47–48 | IA scope | **No** Utilities nav · **No** Vacuum & HV section |
| 49 | Knowledge Center | **Migrate** existing articles from legacy site |
| 50 | Header RFQ button | **Not needed** — RFQ via hero, About mega, product CTAs |
| 51 | Blog vs Knowledge | **Same hub** — `/engineering/knowledge/` |
| 52 | Search | **Global** catalog search (built) |
| 54 | Hosting | **GitHub Pages** + custom domain |
| 55–56 | Legacy WP / 301s | **Not needed** for now — no parallel hosting requirement, no bulk redirect implementation |
| 57 | WooCommerce | **Decommission** — cart/checkout retired |
| 60 | SEO basics | **Yes** — `sitemap.xml` + `robots.txt` for delivered pages |

### Deferred (you will provide later)

| # | Topic | When |
|---|--------|------|
| 53 | DNS cutover for `sciengtech.in` | After site approval |
| 58 | GA4 property ID + event list | Client will specify |

---

## Open questions — ask SciEngTech

### Contact & credentials

| # | Question |
|---|----------|
| 14 | **Phone number(s)** — sales, engineering, accounts; hours/timezone |
| 17b | **GeM Seller ID** — separate from UDYAM; confirm official ID for display alongside “Approved GeM vendor” |
| 10b | **ISO certificate** — standard (e.g. ISO 9001:2015), cert number, scope line for About/Contact |

### Trust & marketing

| # | Question |
|---|----------|
| 20 | **Institutional logo wall** — provide permissioned logos (IIT, IISc, DRDO, etc.) or approve credential-only proof block |
| 21 | **Social media** — Facebook, Instagram, LinkedIn URLs for footer |
| 22 | **Named contacts** — optional founder / technical lead photo + bio for About |

### RFQ & forms

| # | Question |
|---|----------|
| 1–7 | **Google Form URLs** — Technical Quote + Schematic Upload; thank-you redirect to `/thank-you.html` |
| 32 | **RFQ response SLA** — e.g. “Engineering responds within 2 business days” |
| 33 | **Thank-you copy** — confirm “reference number” wording matches actual process |
| 34 | **Upload method** — Google Drive field in Form vs email-only fallback |

### Catalog & content

| # | Question |
|---|----------|
| 32–34 | **Legacy categories** — fate of vacuum, detectors, chillers, cleaning, metrology (confirm stay out of v1) |
| 33 | **Webpage_Writeup docx** — resupply source files for ingest pipeline |
| 34 | **Spec cleanup** — approve rewrites (Thorlabs-style cage plate copy, malformed Optics product title, diode laser range table) |
| 35 | **SKU convention** — approve `SET-` prefix and master spreadsheet |
| 39 | **“Bomb Tester” kit name** — keep educational name or institutional-safe alternative |
| 40 | **Regenerative Delay Line** — Training Kits vs Quantum Set-Ups grouping |

### Photography & visuals

| # | Question |
|---|----------|
| 41 | **10 source photos** for hero revamp — which products/lab shots to prioritize |
| 42 | **Per-product images** — official photos per SKU or approve legacy import |
| 43 | **Homepage carousel** — approve mapping of placeholder slides until product photos arrive |
| 44 | **Hero slide subjects** — confirm README slide set until WaveSpeed/final composites |
| 46 | **Lab / facility photos** — for About page |

### Launch & analytics

| # | Question |
|---|----------|
| 59 | **Google Search Console** — who owns property for `sciengtech.in` |
| 58 | **GA4** — measurement ID + events when ready |
| 61–67 | **POC, review SLA, sign-off owners, handover attendees** — standard project closeout |

---

## Implementation notes

- Homepage proof block uses **credential chips** (Made in India, ISO, GeM, 100% inspected) until real logos are supplied.
- Carousel / strip use **SVG slide placeholders** (`assets/slides/01–06`) per README until client photography is ready.
- Knowledge Center migration is **scoped** but pages not built until articles are exported from WordPress.

---

*Related: [03-digital-product-strategy.md](./03-digital-product-strategy.md) · [00-README.md](./00-README.md)*
