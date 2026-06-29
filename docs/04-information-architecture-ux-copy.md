# Information Architecture & UX Copywriting (v2.0)

> **Purpose:** Gemini-aligned site structure, navigation, page templates, and UX copy for RFQ-led deep-tech B2B.  
> **Prerequisite:** [03-digital-product-strategy.md](./03-digital-product-strategy.md)  
> **Lock:** No WooCommerce paths in IA.

---

## 1. IA Goals

1. **RFQ-first** — Every catalog path terminates in quote or upload  
2. **Three-tier catalog** — Solutions (systems) · Components (core hardware) · Utilities (operational)  
3. **Engineering Hub** — Single high-intent conversion zone  
4. **Institutional trust** — Credentials visible on Company, not buried  
5. **Max 3 clicks** — Home → category → component spec → RFQ  

---

## 2. Site Map

```
[HOME] — Strategic Hub: RFQ engine, custom uploads, technical credentials
│
├── [SOLUTIONS / DEEP-TECH INTEGRATION]
│    ├── /solutions/quantum-optical-research/
│    ├── /solutions/laser-metrology-diagnostics/
│    └── /solutions/vacuum-hv-assemblies/
│
├── [HARDWARE & COMPONENTS] — The Reorganized Catalog
│    ├── /components/lasers-photonics/
│    │    ├── /components/lasers-photonics/active-sources-diodes/
│    │    ├── /components/lasers-photonics/metrology-diagnostics/
│    │    └── /components/lasers-photonics/fiber-optics-patchcords/
│    │
│    ├── /components/precision-optics/
│    │    ├── /components/precision-optics/lenses/
│    │    ├── /components/precision-optics/mirrors/
│    │    ├── /components/precision-optics/beamsplitters-polarizers/
│    │    └── /components/precision-optics/filters-waveplates/
│    │
│    ├── /components/optomechanics/
│    │    ├── /components/optomechanics/kinematic-mounts/
│    │    ├── /components/optomechanics/breadboards-tables/
│    │    ├── /components/optomechanics/translation-stages/
│    │    └── /components/optomechanics/posts-rails-hardware/
│    │
│    ├── /components/vacuum-hv/
│    │    ├── /components/vacuum-hv/chambers-flanges/
│    │    ├── /components/vacuum-hv/power-supplies/
│    │    └── /components/vacuum-hv/pockels-cells-drivers/
│    │
│    └── /components/[component-slug]/          ← Individual spec pages
│
├── [LAB UTILITIES & SUPPORT] — Secondary Operational Nodes
│    ├── /utilities/detectors-sensors/
│    ├── /utilities/thermal-management/         (water chillers)
│    ├── /utilities/cleanroom-cleaning/       (swabs, tissues, apparel)
│    └── /utilities/testing-calibration/      (testing lab solutions)
│
├── [ENGINEERING HUB] — High-Intent Conversion
│    ├── /engineering/rfq/                    Request Technical Quote
│    ├── /engineering/upload/                 Submit schematics (.dxf/.step/.pdf)
│    └── /engineering/knowledge/              Specs & whitepapers
│         └── /engineering/knowledge/[slug]/
│
└── [COMPANY]
     ├── /company/about/                       Institutional validation & experts
     └── /company/contact/                     GST, GeM, lab coordinates
```

### Utility URLs (Global)

| Legacy | New | Action |
|--------|-----|--------|
| `/` | `/` | Rebuild homepage |
| `/shop/`, `/cart/`, `/checkout/`, `/my-account/` | `/engineering/rfq/` or `/components/` | **301 redirect** — decommission commerce |
| `/our-oem-products/`, `/our-oem-*` | `/components/...` | 301 to nearest category or component |
| `/product/[slug]/` | `/components/[slug]/` | 301 |
| `/lasers/`, `/optics/`, `/vacuum/`, etc. | `/components/...` or `/solutions/...` | 301 map |
| `/knowledge-center/` | `/engineering/knowledge/` | 301 |
| `/about-us/` | `/company/about/` | 301 |
| `/contact-us/` | `/company/contact/` | 301 |
| `/refund_returns/` | `/company/legal/refunds/` | 301 |

---

## 3. Navigation

### 3.1 Desktop Header

```
+-----------------------------------------------------------------------------------------+
|  SciEngTech Solutions        Solutions   Components ▾   Utilities   About   [RFQ Portal] |
+-----------------------------------------------------------------------------------------+
```

**RFQ Portal:** Ruby button `#E11D48` → `/engineering/rfq/`

### 3.2 Components Mega-Menu (Hover)

```
+-----------------------------------------------------------------------------------------+
|  LASERS & PHOTONICS          PRECISION OPTICS          OPTOMECHANICS      VACUUM & HV   |
|  - Laser Sources             - Optical Lenses          - High-Spec Mounts - Chambers    |
|  - Metrology & Diagnostics   - Laser Mirrors           - Breadboards       - Power Supplies|
|  - Fiber Optics              - Beamsplitters            - Motion Control    - Pockels Cells |
|                                                                                         |
|  --> View Complete Technical Catalog  (/components/)                                    |
+-----------------------------------------------------------------------------------------+
```

**Mega-menu link targets:**

| Label | URL |
|-------|-----|
| Laser Sources | `/components/lasers-photonics/active-sources-diodes/` |
| Metrology & Diagnostics | `/components/lasers-photonics/metrology-diagnostics/` |
| Fiber Optics | `/components/lasers-photonics/fiber-optics-patchcords/` |
| Optical Lenses | `/components/precision-optics/lenses/` |
| Laser Mirrors | `/components/precision-optics/mirrors/` |
| Beamsplitters | `/components/precision-optics/beamsplitters-polarizers/` |
| High-Spec Mounts | `/components/optomechanics/kinematic-mounts/` |
| Breadboards | `/components/optomechanics/breadboards-tables/` |
| Motion Control | `/components/optomechanics/translation-stages/` |
| Chambers | `/components/vacuum-hv/chambers-flanges/` |
| Power Supplies | `/components/vacuum-hv/power-supplies/` |
| Pockels Cells | `/components/vacuum-hv/pockels-cells-drivers/` |

### 3.3 Utilities Nav

Single link **Utilities** → `/utilities/` hub listing four secondary nodes (not mega-menu — intentional deprioritization).

### 3.4 Solutions Nav

Single link **Solutions** → `/solutions/` hub with three deep-tech integration pillars.

### 3.5 Mobile

- Hamburger: Solutions · Components (accordion) · Utilities · About · **RFQ Portal** (sticky ruby bar bottom)  
- No cart icon  

### 3.6 Footer

| Engineering | Components | Company | Legal |
|-------------|------------|---------|-------|
| RFQ Portal | Full catalog | About | Terms |
| Upload Schematics | Lasers & Photonics | Contact & Credentials | Privacy |
| Knowledge Center | Precision Optics | GST · GeM · Coordinates | Refunds |
| | Optomechanics | | |
| | Vacuum & HV | | |

---

## 4. Page Templates & UX Copy

---

### 4.1 Homepage

| Field | Spec |
|-------|------|
| **Job** | RFQ + institutional trust + route to 3 pillars |
| **H1** | Precision Hardware for Advanced Science and Engineering. |
| **Primary CTA** | Request Technical Quote |
| **Secondary CTA** | Browse Components |
| **Sections** | Per [02-homepage-copy-framework.md](./02-homepage-copy-framework.md) |

---

### 4.2 Solutions Hub (`/solutions/`)

| Field | Spec |
|-------|------|
| **Job** | Sell integrated systems, not parts |
| **H1** | Deep-tech integration for mission-critical labs |
| **Intro** | SciEngTech engineers and integrates quantum research systems, laser metrology suites, and vacuum–HV assemblies — specified as complete operational frameworks, not commodity lines. |
| **Cards** | 3 pillars (see sitemap) |
| **CTA** | Contact system engineer |

#### Solution Pillar Copy

**Quantum & Optical Research Systems**
> Integrated optical frameworks for quantum optics, entangled photon experiments, and advanced research benches — specified, validated, and supported by our engineering team.

**Laser Metrology & Diagnostic Suites**
> Pulse characterization, power sensing, and contrast measurement systems configured for ultrafast and high-energy laser programs.

**Vacuum Tech & High-Voltage Assemblies**
> Low-leakage vacuum architectures combined with HV power and control for extreme environment experiments.

**Primary CTA per pillar:** Request system specification → `/engineering/rfq/?type=system`

---

### 4.3 Components Hub (`/components/`)

| Field | Spec |
|-------|------|
| **Job** | Technical catalog entry — browse by engineering domain |
| **H1** | Technical component catalog |
| **Intro** | Precision-specified hardware across four engineering domains. Select a category to review specifications and request a technical quote. |
| **Layout** | 4 domain cards (01–04) matching mega-menu |
| **CTA** | Request Technical Quote (global ruby, top-right persistent) |
| **Retired** | Price filters, sort by price, add to cart |

---

### 4.4 Component Category (`/components/[domain]/[category]/`)

| Field | Spec |
|-------|------|
| **Job** | List components with spec hooks |
| **H1** | `[Category name]` — e.g. Laser Mirrors |
| **Intro** | 2 sentences: application context + tolerance/coatings overview |
| **List item** | Title · 1-line spec hook · "View spec →" |
| **Sidebar** | Filter: wavelength, coating, aperture (where applicable) |
| **Empty state** | No components match these filters. Contact a system engineer for custom specifications. |
| **Primary CTA** | Request quote for this category |

---

### 4.5 Component Spec Page (`/components/[slug]/`)

**Most critical page — technical document, not product tile.**

| Section | Content |
|---------|---------|
| **Title** | H1 = component name |
| **Breadcrumb** | Home > Components > [Domain] > [Category] > [Name] |
| **Overline** | Component specification |
| **Summary** | 2 sentences — application + key differentiator |
| **Spec table** | Full parameters — JetBrains Mono, white panel on dark page |
| **Downloads** | Datasheet PDF, CAD (if available) |
| **Compliance note** | Inspection / validation statement (when applicable) |
| **Related** | 3–4 related components |
| **Primary CTA** | **Request Technical Quote** (ruby, pre-fill `?component=[slug]`) |
| **Secondary CTA** | Upload schematic for custom variant → `/engineering/upload/` |
| **Retired** | Price, quantity selector, add to cart, stock badge |

**Availability microcopy (quote context):**

| State | Copy |
|-------|------|
| Standard | Available for quote — typical lead time provided on response |
| Custom | Custom fabrication — upload drawings for verification |
| Long lead | Extended fabrication — specify required date in RFQ |

**Meta title:** `[Component name] — [key spec] | SciEngTech`

---

### 4.6 Utilities Hub (`/utilities/`)

| Field | Spec |
|-------|------|
| **Job** | Secondary operational procurement |
| **H1** | Lab utilities & support systems |
| **Intro** | Detectors, thermal management, cleanroom consumables, and testing solutions — operational nodes supporting your primary experimental infrastructure. |
| **Tone** | Still authoritative; visually lighter weight than Components |
| **CTA** | Request Technical Quote |

---

### 4.7 Engineering Hub — RFQ (`/engineering/rfq/`)

| Field | Spec |
|-------|------|
| **Job** | Structured lead capture — primary conversion |
| **H1** | Request Technical Quote |
| **Intro** | Submit your component requirements, bill of materials, or system specification. Our engineering team responds with validated pricing, lead times, and compliance documentation. |
| **Fields** | Name · Work email · Organization · Department · Phone · Project/application · Component category · Quantity · Required by date · Message · BOM file upload |
| **Pre-fill** | `?component=`, `?category=`, `?type=system` from upstream pages |
| **Submit** | Submit RFQ Request (ruby) |
| **Confirmation** | Reference #[ID]. Engineering review initiated — response within [SLA] business days. |
| **Meta** | Request Technical Quote | SciEngTech |

---

### 4.8 Engineering Hub — Upload (`/engineering/upload/`)

| Field | Spec |
|-------|------|
| **Job** | Custom fabrication intake |
| **H1** | Submit engineering schematics |
| **Intro** | Drop your technical drawings for verification by our engineering team. Accepted formats: `.dxf`, `.step`, `.pdf`. |
| **Drop zone copy** | Drag files here or click to browse · Max 25MB per file |
| **Fields** | Name · Email · Organization · Application notes · Files |
| **Submit** | Upload Tech Specs & Connect (ruby) |
| **Confirmation** | Files received · Reference #[ID] · Engineer assigned within [SLA] |

---

### 4.9 Engineering Hub — Knowledge (`/engineering/knowledge/`)

| Field | Spec |
|-------|------|
| **Job** | SEO + technical authority + soft RFQ |
| **H1** | Technical knowledge center |
| **Intro** | Laser specifications, optical design notes, and application whitepapers for research and procurement teams. |
| **Article CTA** | Request quote for components referenced in this guide |
| **Note** | Lives under Engineering Hub in IA but must remain **indexable** for SEO — not behind login |

---

### 4.10 Company — About (`/company/about/`)

| Field | Spec |
|-------|------|
| **Job** | Institutional validation |
| **H1** | Engineering depth. Institutional trust. |
| **Sections** | Mission · Engineering team · Manufacturing capability · Quality inspection process · Pune HQ |
| **Motto (internal reference)** | Speed, Quality, Value, Service — reframe publicly as precision/compliance/field-tested |
| **CTA** | Contact system engineer |
| **Retired** | "India's first optics e-cart" |

---

### 4.11 Company — Contact & Credentials (`/company/contact/`)

| Field | Spec |
|-------|------|
| **Job** | Procurement validation + general inquiry |
| **H1** | Contact & institutional credentials |
| **Credentials block (prominent)** | |
| | **GST Registration:** [Number] |
| | **GeM Vendor ID:** [ID] |
| | **Laboratory / HQ:** 14, Om Shanti, 156/2 Mangalwar Peth, Pune – 411 011, India |
| | **Email:** info@sciengtech.in |
| **Form** | General inquiry (routes to same CRM as RFQ with type tag) |
| **Map** | Embedded lab coordinates |
| **CTA** | Request Technical Quote (ruby secondary) |

---

## 5. UX Copywriting Standards

### 5.1 CTA Library (Approved)

| Priority | Labels |
|----------|--------|
| **Primary** | Request Technical Quote · Upload Tech Specs & Connect · Contact System Engineer |
| **Secondary** | Browse Components · View System Specs · View Complete Technical Catalog |
| **Tertiary** | Download datasheet · Read whitepaper |

**Banned:** Add to cart · Shop now · Buy · Checkout · economical · cheap · welcome to our website

### 5.2 Microcopy

| UI | Copy |
|----|------|
| Search placeholder | Search components, specifications, wavelengths… |
| RFQ success | RFQ submitted. Reference #[ID]. Engineering team notified. |
| Upload success | Schematics received. Reference #[ID]. |
| 404 | Page not found. Browse the technical catalog or submit an RFQ. |
| Empty search | No matching specifications. Contact a system engineer for custom requirements. |

### 5.3 SEO Rules

| Element | Rule |
|---------|------|
| Title | `[Topic] | SciEngTech` ≤60 chars |
| Meta | Spec benefit + institutional context + RFQ hint ≤160 chars |
| H1 | Human-readable spec name or category |
| Alt text | `[Component] — [critical spec attribute]` |

---

## 6. Legacy Content Migration

### Map to Components

| Legacy area | New location |
|-------------|--------------|
| WooCommerce SKUs (66) | `/components/[slug]/` — RFQ only |
| `our-oem-*` optomechanics | `/components/optomechanics/...` |
| OEM optics/mirrors/lenses | `/components/precision-optics/...` |
| Photodetector modules | `/components/lasers-photonics/metrology-diagnostics/` or `/utilities/detectors-sensors/` |
| Training kits | `/solutions/quantum-optical-research/` (system-level) |
| Cleaning accessories | `/utilities/cleanroom-cleaning/` |
| Chillers | `/utilities/thermal-management/` |

### Decommission

- `/cart/`, `/checkout/`, `/my-account/` (commerce)  
- WooCommerce plugins (after redirect period)  
- Elementor template posts (`elementor-hf/*`) from public index  

---

## 7. Build Priority

1. Homepage (dark UI + 5 sections)  
2. `/engineering/rfq/` + `/engineering/upload/`  
3. `/components/` hub + mega-menu categories  
4. Component spec page template  
5. `/company/contact/` with credentials  
6. `/solutions/` hub  
7. `/utilities/` hub  
8. `/engineering/knowledge/`  
9. `/company/about/`  
10. 301 redirect deployment  

---

*Next: [05-brand-governance-interface-mapping.md](./05-brand-governance-interface-mapping.md)*
