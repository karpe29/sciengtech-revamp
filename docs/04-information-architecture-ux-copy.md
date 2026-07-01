# Information Architecture & UX Copywriting (v3.0 — Quantum)

> **Purpose:** Site structure, navigation, page templates, and UX copy for RFQ-led **quantum optics** B2B.  
> **Prerequisite:** [03-digital-product-strategy.md](./03-digital-product-strategy.md)  
> **Live reference:** [`partials/header.html`](../partials/header.html) · [`index.html`](../index.html)  
> **Lock:** No WooCommerce paths in IA.

---

## 1. IA Goals

1. **Quantum systems first** — Solutions (set-ups + training kits) lead every high-intent path  
2. **Bench components second** — Six engineering categories support quantum bench assembly  
3. **RFQ-first** — Every catalog path terminates in quote or upload  
4. **Engineering Hub** — Single high-intent conversion zone (RFQ + upload)  
5. **Institutional trust** — Credentials visible on Company, not buried  
6. **Max 3 clicks** — Home → solution or category → spec → RFQ  

---

## 2. Site Map (Launch — Built)

```
[HOME] — Quantum optics hub: hero carousel, solutions strip, 3 pillars, RFQ CTAs
│
├── [SOLUTIONS]
│    ├── /solutions.html                          All solutions hub
│    ├── /solutions/quantum-setups.html           Quantum set-ups index
│    ├── /solutions/training-kits.html            Training kits index
│    └── /solutions/[slug].html                   8 solution spec pages:
│         entangled-photon-source · quantum-key-distribution · quantum-eraser
│         bomb-tester · michelson-interferometer · fourier-optics-kit
│         polarized-3d-cinema · regenerative-delay-line
│
├── [COMPONENTS] — Bench hardware catalog (47 products)
│    ├── /components.html                         Catalog hub (6 category cards)
│    ├── /components/search.html                  Full-text catalog search
│    ├── /components/opto-mechanics.html          31 products
│    ├── /components/motion-and-positioning.html  9 products
│    ├── /components/hardware.html                4 products
│    ├── /components/fibre-optics.html            1 product
│    ├── /components/lasers.html                  1 product
│    ├── /components/optics.html                  1 product
│    └── /product.html?id=[slug]                  Dynamic component spec page
│
├── [ENGINEERING HUB]
│    ├── /engineering/rfq.html                    Request Technical Quote
│    ├── /engineering/upload.html                 Submit schematics (.dxf/.step/.pdf)
│    └── /engineering/knowledge/                  *(Phase 2)* Specs & whitepapers
│
├── [COMPANY]
│    ├── /company/about.html                      Engineering · manufacturing · quality
│    └── /company/contact.html                    GST · GeM · Pune HQ
│
└── [UTILITY PAGES]
     ├── /thank-you.html                          Post–Google Form submission
     └── /404.html                                Not found
```

### Phase 2 Expansion (Not in launch build)

```
├── [UTILITIES] — Secondary operational nodes
│    ├── /utilities/detectors-sensors/
│    ├── /utilities/thermal-management/         (water chillers)
│    ├── /utilities/cleanroom-cleaning/
│    └── /utilities/testing-calibration/
│
├── [EXTENDED SOLUTIONS]
│    ├── /solutions/laser-metrology-diagnostics/
│    └── /solutions/vacuum-hv-assemblies/
│
├── [EXTENDED COMPONENTS]
│    └── /components/vacuum-hv/                   Chambers, power supplies, Pockels cells
│
└── [COMPANY LEGAL]
     ├── /company/legal/terms/
     ├── /company/legal/privacy/
     └── /company/legal/refunds/
```

### Utility URLs (Global)

| Legacy | New | Action |
|--------|-----|--------|
| `/` | `/` | Quantum-oriented homepage |
| `/shop/`, `/cart/`, `/checkout/`, `/my-account/` | `/engineering/rfq.html` or `/components.html` | **301 redirect** — decommission commerce |
| `/our-oem-products-training-kits-*` | `/solutions/[slug].html` | 301 to matching solution page |
| `/our-oem-*` (optomechanics, etc.) | `/components/...` or `/product.html?id=` | 301 to nearest category or component |
| `/product/[slug]/` | `/product.html?id=[slug]` | 301 |
| `/lasers/`, `/optics/` | `/components/lasers.html`, `/components/optics.html` | 301 |
| `/vacuum/`, `/detectors/`, etc. | Phase 2 utilities/vacuum paths | 301 when built |
| `/knowledge-center/` | `/engineering/knowledge/` | 301 when built |
| `/about-us/` | `/company/about.html` | 301 |
| `/contact-us/` | `/company/contact.html` | 301 |

---

## 3. Navigation

### 3.1 Desktop Header (Live)

```
+----------------------------------------------------------------------------------+
|  SciEngTech Solutions        Solutions ▾   Components ▾   About ▾   [Search]     |
+----------------------------------------------------------------------------------+
```

**Phase 1 addition:** Persistent ruby **RFQ Portal** button → `/engineering/rfq.html`

### 3.2 Solutions Mega-Menu (Hover)

```
+----------------------------------------------------------------------------------+
|  QUANTUM SET-UPS                    TRAINING KITS                                |
|  - Entangled Photon Source          - Fourier Optics Kit                       |
|  - Quantum Key Distribution         - Polarized 3D Cinema                        |
|  - Quantum Eraser                   - Regenerative Delay Line                  |
|  - Bomb Tester                      View all training kits →                   |
|  - Michelson Interferometer                                                    |
|  View all quantum set-ups →                                                    |
|                                                                                  |
|  View all solutions →  |  System-level procurement · RFQ required               |
+----------------------------------------------------------------------------------+
```

### 3.3 Components Mega-Menu (Hover — 3 columns)

```
+----------------------------------------------------------------------------------+
|  OPTO-MECHANICS · MOTION    HARDWARE · FIBRE OPTICS    LASERS · OPTICS          |
|  - Opto-Mechanics           - Hardware                 - Lasers                  |
|  - Motion & Positioning     - Fibre Optics             - Optics                  |
|                                                                                  |
|  View full catalog →  (/components.html)                                         |
+----------------------------------------------------------------------------------+
```

**Retired v2.0 mega-menu:** 4-column Lasers & Photonics · Precision Optics · Optomechanics · Vacuum & HV — deferred to Phase 2.

### 3.4 About Mega-Menu

```
+----------------------------------------------------------------------------------+
|  COMPANY                              ENGINEERING                                |
|  - About Us                           Request quotes or upload schematics        |
|  - Contact & Credentials              [Request Technical Quote]                  |
|                                       [Upload Schematics]                        |
+----------------------------------------------------------------------------------+
```

### 3.5 Mobile

- Hamburger: Solutions (accordion) · Components (accordion) · About · Search  
- Phase 1: sticky ruby **RFQ Portal** bar at bottom  
- No cart icon  

### 3.6 Footer (Live)

| SciEngTech | Solutions | Catalog | Engineering |
|------------|-----------|---------|-------------|
| Pune, India | Quantum Set-Ups | Components | Request Quote |
| | Training Kits | Search Catalog | Contact |
| | All Solutions | | |

---

## 4. Page Templates & UX Copy

---

### 4.1 Homepage

| Field | Spec |
|-------|------|
| **Job** | Quantum systems authority + route to Solutions and Components |
| **Overline** | Quantum Optics Infrastructure |
| **H1** | Integrated Quantum Systems for Research, Education, and Advanced Photonics. |
| **Primary CTA** | Request Technical Quote |
| **Secondary CTA** | Explore Quantum Solutions |
| **Sections** | Per [02-homepage-copy-framework.md](./02-homepage-copy-framework.md) |

---

### 4.2 Solutions Hub (`/solutions.html`)

| Field | Spec |
|-------|------|
| **Job** | Sell integrated quantum systems and educational kits |
| **H1** | Quantum solutions & training kits |
| **Intro** | Turnkey quantum set-ups and classroom-ready photonics kits — specified, documented, and supported by our engineering team. |
| **Groups** | Quantum Set-Ups · Training Kits |
| **CTA** | Request Technical Quote (per solution page) |

#### Solution Groups

**Quantum Set-Ups**
> Entangled photon sources, QKD platforms, quantum eraser, bomb tester, and interferometry — integrated systems for research and demonstration.

**Training & Education Kits**
> Fourier optics, polarized 3D cinema, and regenerative delay line — hands-on kits for photonics curricula.

**Primary CTA per solution:** Request Technical Quote → `/engineering/rfq.html?product=[slug]`

---

### 4.3 Components Hub (`/components.html`)

| Field | Spec |
|-------|------|
| **Job** | Bench hardware catalog entry |
| **H1** | Technical Component Catalog |
| **Intro** | Bench hardware supporting quantum and photonics assembly — 47 components across six engineering categories. |
| **Layout** | 6 category cards with product counts |
| **CTA** | Request Technical Quote (on spec pages) |
| **Retired** | Price filters, sort by price, add to cart |

---

### 4.4 Component Category (`/components/[category].html`)

| Field | Spec |
|-------|------|
| **Job** | List components with spec hooks |
| **H1** | `[Category name]` — e.g. Opto-Mechanics |
| **Intro** | N spec-verified components from the SciEngTech technical catalog. Request a quote for quantities and custom configurations. |
| **List item** | Image · Title · Spec highlight · SKU |
| **Empty state** | No components in this category yet. Contact a system engineer for custom specifications. |
| **Primary CTA** | Request quote (on detail page) |

---

### 4.5 Component Spec Page (`/product.html?id=[slug]`)

| Section | Content |
|---------|---------|
| **Title** | H1 = component name |
| **Breadcrumb** | Home > Components > [Category] > [Name] |
| **Overline** | Component specification |
| **Summary** | Body paragraphs from writeup |
| **Spec table** | Full parameters — JetBrains Mono |
| **Downloads** | Datasheet PDF, CAD *(when client supplies)* |
| **Primary CTA** | **Request Technical Quote** (ruby, pre-fill `?product=[slug]`) |
| **Secondary CTA** | Upload schematic → `/engineering/upload.html` |
| **Retired** | Price, quantity selector, add to cart |

---

### 4.6 Solution Spec Page (`/solutions/[slug].html`)

| Section | Content |
|---------|---------|
| **Title** | H1 = system/kit name |
| **Breadcrumb** | Home > Solutions > [Group] > [Name] |
| **Overline** | Quantum Set-Ups or Training Kits |
| **Spec table** | SYSTEM SPECIFICATION header |
| **Primary CTA** | **Request Technical Quote** (ruby, pre-fill `?product=[slug]`) |
| **Secondary CTA** | Upload Schematics |

---

### 4.7 Engineering Hub — RFQ (`/engineering/rfq.html`)

| Field | Spec |
|-------|------|
| **Job** | Structured lead capture — primary conversion |
| **H1** | Request Technical Quote |
| **Intro** | Submit your BOM, quantities, and application notes. Our engineering team will respond with specifications and lead times. |
| **Integration** | Google Form embed (client supplies URL) |
| **Pre-fill** | `?product=[slug]` from solution/component pages |
| **Fallback** | `mailto:info@sciengtech.in?subject=Technical%20Quote%20Request` |
| **Post-submit** | Redirect to `/thank-you.html` |

---

### 4.8 Engineering Hub — Upload (`/engineering/upload.html`)

| Field | Spec |
|-------|------|
| **Job** | Custom fabrication intake |
| **H1** | Upload Schematics |
| **Intro** | Submit `.dxf`, `.step`, or `.pdf` drawings for custom component verification. |
| **Integration** | Google Form with file upload (client supplies URL) |
| **Fallback** | `mailto:info@sciengtech.in?subject=Schematic%20Upload` |

---

### 4.9 Company — About (`/company/about.html`)

| Field | Spec |
|-------|------|
| **Job** | Institutional validation |
| **H1** | About SciEngTech |
| **Lead** | Sci.Eng.Tech Solutions engineers quantum optics systems, educational photonics kits, and precision bench hardware for India's research and academic institutions. |
| **Pillars** | Quantum Systems · Manufacturing · Quality |
| **Retired** | "India's first optics e-cart" |

---

### 4.10 Company — Contact (`/company/contact.html`)

| Field | Spec |
|-------|------|
| **Job** | Procurement validation + general inquiry |
| **H1** | Contact & Credentials |
| **Credentials** | GSTIN · GeM Portal ID · Pune HQ · info@sciengtech.in |
| **Engineering links** | RFQ · Upload Schematics |
| **Phase 1** | Phone number · Map embed |

---

## 5. UX Copywriting Standards

### 5.1 CTA Library (Approved)

| Priority | Labels |
|----------|--------|
| **Primary** | Request Technical Quote · Upload Tech Specs & Connect · Contact System Engineer |
| **Secondary** | Explore Quantum Solutions · View quantum systems → · View training kits → · Browse components → |
| **Tertiary** | View all solutions → · Search Catalog · Download datasheet |

**Banned:** Add to cart · Shop now · Buy · Checkout · economical · cheap · welcome to our website

### 5.2 Microcopy

| UI | Copy |
|----|------|
| Search placeholder | Search components, specifications… |
| RFQ success (thank-you) | Your request has been received. Our engineering team will respond with a reference number and next steps. |
| 404 | Page not found. Browse solutions or submit an RFQ. |
| Empty search | No matching specifications. Contact a system engineer for custom requirements. |

### 5.3 SEO Rules

| Element | Rule |
|---------|------|
| Title | `[Topic] \| SciEngTech` ≤60 chars |
| Meta | Quantum/photonics benefit + education/research context + RFQ hint ≤160 chars |
| H1 | Human-readable system or component name |
| Alt text | `[Product] — [critical spec attribute]` |

---

## 6. Legacy Content Migration

### Map to Solutions (Priority)

| Legacy area | New location |
|-------------|--------------|
| Training kits (`our-oem-products-training-kits-*`) | `/solutions/[slug].html` |
| Entangled photon source | `/solutions/entangled-photon-source.html` |
| Michelson, QKD, bomb tester, etc. | Matching `/solutions/` pages |

### Map to Components

| Legacy area | New location |
|-------------|--------------|
| WooCommerce / OEM optomechanics SKUs | `/components/opto-mechanics.html` + `product.html?id=` |
| Translation stages, kinematic mounts | `/components/motion-and-positioning.html` |
| Hardware (bolts, nuts, washers) | `/components/hardware.html` |
| Diode lasers | `/components/lasers.html` |
| Optics (mirrors, lenses) | `/components/optics.html` |

### Phase 2 Migration

| Legacy area | Future location |
|-------------|-----------------|
| Vacuum Technology | `/components/vacuum-hv/` or `/solutions/vacuum-hv-assemblies/` |
| Detectors, chillers, cleaning | `/utilities/...` |
| Laser metrology | `/solutions/laser-metrology-diagnostics/` |
| Knowledge Center articles | `/engineering/knowledge/` |

### Decommission

- `/cart/`, `/checkout/`, `/my-account/` (commerce)  
- WooCommerce plugins (after redirect period)  

---

## 7. Build Priority (Updated)

**Completed (Phase 0):**

1. Homepage (quantum hero + carousel + 3 pillars)  
2. Solutions hub + 8 solution pages  
3. Components hub + 6 categories + `product.html` template  
4. Global search  
5. `/engineering/rfq.html` + `/engineering/upload.html` + `/thank-you.html`  
6. `/company/about.html` + `/company/contact.html`  

**Next (Phase 1):**

7. Google Form embeds + product photography  
8. Header RFQ Portal button  
9. Institutional logo wall  
10. Knowledge Center template  

**Later (Phase 2):**

11. Utilities hub  
12. Vacuum & HV domain  
13. Legal pages  
14. Full 301 redirect deployment  

---

*Next: [05-brand-governance-interface-mapping.md](./05-brand-governance-interface-mapping.md)*
