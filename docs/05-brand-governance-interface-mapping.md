# Brand Governance & Interface Mapping (v2.0)

> **Purpose:** Connect Gemini brand system to UI components, tokens, and governance for RFQ-led deep-tech B2B.  
> **Prerequisites:** [01-brand-style-guide.md](./01-brand-style-guide.md) · [04-information-architecture-ux-copy.md](./04-information-architecture-ux-copy.md)

---

## 1. Governance Model

### 1.1 Roles (RACI)

| Activity | Brand/Marketing | Engineering | Institutional Sales | Dev/Agency | Leadership |
|----------|-----------------|-------------|---------------------|------------|------------|
| Brand voice & dark UI | **A/R** | C | C | R | A |
| Component specs | C | **A/R** | I | I | I |
| RFQ / quote responses | I | C | **A/R** | I | I |
| GST / GeM / credentials | C | I | **A/R** | I | A |
| Quality claims ("100% inspected") | R | **A/R** | I | I | **A** |
| Schematic upload workflow | I | **A/R** | C | R | I |
| UI / token implementation | C | I | I | **A/R** | I |
| Institutional logos | **A/R** | I | C | I | A |

### 1.2 Approval Workflow

```
Draft (copy / spec / UI)
  → Engineering review (specs, claims, upload flow)
  → Brand review (voice, ruby usage, dark UI compliance)
  → Legal review (certified, guaranteed, GST/GeM, logos)
  → Staging QA (checklist §10)
  → Production
  → Quarterly audit
```

**Fast-track:** Typo fixes, coordinate updates, knowledge article additions (no new claims)

**Legal required:** "100% Quality Inspected", "certified", "guaranteed", GeM/GST display, client logos

### 1.3 Brand Compliance Checklist

- [ ] Dark UI `#0E1118` default — no legacy white consumer template  
- [ ] Ruby `#E11D48` used **only** for conversion CTAs  
- [ ] Zero e-commerce language (cart, shop, buy, economical)  
- [ ] Space Grotesk headings · JetBrains Mono spec tables  
- [ ] RFQ + upload paths functional with ticket ID  
- [ ] Credentials block accurate on Contact page  
- [ ] Institutional logos permissioned  
- [ ] Component pages are spec documents with quote CTA  

---

## 2. Design Token System

### 2.1 CSS Custom Properties

```css
:root {
  /* Brand colors — Gemini archetype */
  --color-bg-primary: #0E1118;
  --color-bg-elevated: #161B26;
  --color-bg-light: #F3F4F6;
  --color-bg-white: #FFFFFF;
  --color-text-primary: #FFFFFF;
  --color-text-on-light: #0E1118;
  --color-text-muted: #64748B;
  --color-accent-ruby: #E11D48;
  --color-accent-ruby-hover: #BE123C;
  --color-border: #2A3142;
  --color-border-light: #E2E8F0;

  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Typography */
  --font-display: 'Space Grotesk', 'SF Pro Display', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-spec: 'JetBrains Mono', monospace;

  --text-display-xl: 3.5rem;
  --text-display-lg: 2.5rem;
  --text-h1: 2rem;
  --text-h2: 1.5rem;
  --text-h3: 1.125rem;
  --text-body-lg: 1.125rem;
  --text-body-md: 1rem;
  --text-body-sm: 0.875rem;
  --text-label: 0.6875rem;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Layout */
  --layout-max: 1280px;
  --layout-gutter: 24px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-full: 999px;
  --shadow-elevated: 0 4px 24px rgba(0, 0, 0, 0.4);

  /* Motion */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
}
```

### 2.2 Color Usage Ratio

```
60% — Deep Space Charcoal (#0E1118, #161B26) backgrounds
30% — Clean Lab Silver / White (#F3F4F6, #FFFFFF) data surfaces
10% — Precision Laser Ruby (#E11D48) interactive CTAs only
Functional — Muted Steel (#64748B) labels and meta
```

**Ruby guardrail:** Max 1–2 ruby elements per viewport. Nav RFQ Portal + one section CTA — not both competing in hero AND sticky bar on mobile without hierarchy.

---

## 3. Component Library

### 3.1 Inventory

| ID | Component | Primary use |
|----|-----------|-------------|
| C01 | Dark site header | Global nav + RFQ Portal ruby |
| C02 | Components mega-menu | 4-column technical catalog |
| C03 | Hero (dark) | Homepage + landing |
| C04 | Institutional proof grid | Grayscale logos |
| C05 | Three-pillar matrix | Homepage infrastructure framework |
| C06 | Deep data proof block | 100% Quality Inspected + process |
| C07 | Schematic upload CTA band | Closing conversion |
| C08 | Component spec table | White panel, JetBrains Mono |
| C09 | RFQ form panel | Engineering Hub |
| C10 | File upload dropzone | .dxf / .step / .pdf |
| C11 | Component list row | Category pages |
| C12 | Solution pillar card | Solutions hub |
| C13 | Credentials block | GST, GeM, coordinates |
| C14 | Dark footer | 4-column + credentials |
| C15 | Button ruby (primary) | All conversion actions |
| C16 | Button outline (secondary) | Browse, view specs |
| C17 | Breadcrumbs | Component spec pages |
| C18 | Knowledge article layout | Engineering knowledge |
| C19 | Domain catalog card | Components hub 01–04 |
| C20 | Quote confirmation state | Post-RFQ success |

**Retired components:** Cart icon, product card with price, add-to-cart button, WooCommerce purchase box, stock badges for commerce.

---

### 3.2 Component Specifications

#### C01 — Dark Site Header

| Property | Value |
|----------|-------|
| Background | `#0E1118` + 1px bottom `#2A3142` |
| Height | 72px desktop · 64px mobile |
| Logo | White on dark, Space Grotesk wordmark optional |
| Nav links | Inter `body-md`, `#FFFFFF` 85% → 100% hover |
| RFQ Portal | C15 ruby, right-aligned, min-width 140px |

#### C02 — Components Mega-Menu

| Property | Value |
|----------|-------|
| Background | `#161B26` |
| Columns | 4 × category groups |
| Column title | Space Grotesk `label` uppercase `#64748B` |
| Links | Inter `body-sm` `#FFFFFF` |
| Footer link | "View Complete Technical Catalog" `#E11D48` |
| Trigger | Hover desktop · accordion mobile |

#### C03 — Hero (Dark)

```
┌────────────────────────────────────────────────────────────┐
│  bg: #0E1118 (+ optional hardware image @ 20% opacity)      │
│                                                             │
│  [optional overline — label, #64748B]                       │
│  H1 display-xl Space Grotesk #FFFFFF                       │
│  Subhead body-lg #64748B max-width 560px                    │
│  [C15 Request Technical Quote]  [C16 Browse Components]     │
└────────────────────────────────────────────────────────────┘
```

#### C04 — Institutional Proof Grid

| Property | Value |
|----------|-------|
| Background | `#F3F4F6` light section OR `#161B26` on dark |
| Label | Overline: institutional validation copy |
| Logos | Grayscale, height 32–40px, opacity 0.6 |
| Spacing | Equal horizontal distribution |

#### C05 — Three-Pillar Matrix

| Property | Value |
|----------|-------|
| Card bg | `#161B26` |
| Number prefix | `01.` `#64748B` JetBrains Mono |
| Title | Space Grotesk h3 `#FFFFFF` |
| Body | Inter body-sm `#64748B` |
| Link | C16 "View System Specs →" |

#### C08 — Component Spec Table

| Property | Value |
|----------|-------|
| Container | `#FFFFFF` on dark page — max contrast |
| Font | JetBrains Mono `spec` size |
| Header row | `#F3F4F6` bg, `#0E1118` text, weight 600 |
| Rows | 1px `#E2E8F0` border |
| Mobile | Stack as dl (Parameter / Value) |

#### C09 — RFQ Form Panel

| Field group | Style |
|-------------|-------|
| Container | `#161B26` elevated OR white panel |
| Labels | `#64748B` uppercase label |
| Inputs | `#0E1118` bg, `#2A3142` border, white text |
| Submit | C15 Submit RFQ Request |
| Validation | `#EF4444` inline, plain language |

#### C10 — File Upload Dropzone

| Property | Value |
|----------|-------|
| Border | 2px dashed `#64748B` |
| Active | border `#E11D48` |
| Copy | "Drop `.dxf`, `.step`, or `.pdf` files" |
| Max size | Display limit (e.g. 25MB) |

#### C13 — Credentials Block

```
┌─────────────────────────────────────┐
│  INSTITUTIONAL CREDENTIALS          │
│  GST Registration    [value]        │
│  GeM Vendor ID       [value]        │
│  Laboratory / HQ     [address]      │
│  Engineering Email   info@...       │
└─────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `#161B26` or light `#F3F4F6` on contact page |
| Labels | JetBrains Mono `#64748B` |
| Values | Inter `#FFFFFF` or `#0E1118` on light |

#### C15 / C16 — Buttons

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Ruby (C15) | `#E11D48` | `#FFFFFF` | none |
| Ruby hover | `#BE123C` | `#FFFFFF` | none |
| Outline (C16) | transparent | `#FFFFFF` | 1px `#64748B` |
| Outline on light | transparent | `#0E1118` | 1px `#0E1118` |
| Min height | 48px | | |
| Font | Space Grotesk 600 | | |

---

## 4. Page → Component Matrix

| Component | Home | Solutions | Components | Spec page | Utilities | RFQ | Upload | Knowledge | About | Contact |
|-----------|:----:|:---------:|:----------:|:---------:|:---------:|:---:|:------:|:---------:|:-----:|:-------:|
| C01 Header | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| C02 Mega-menu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| C03 Hero | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| C04 Proof grid | ✓ | optional | — | — | — | — | — | — | ✓ | optional |
| C05 Pillar matrix | ✓ | — | — | — | — | — | — | — | — | — |
| C06 Data proof | ✓ | optional | — | optional | — | — | — | — | ✓ | — |
| C07 Upload CTA band | ✓ | ✓ | — | ✓ | — | — | — | ✓ | — | — |
| C08 Spec table | — | — | — | ✓ | — | — | — | optional | — | — |
| C09 RFQ form | — | — | — | — | — | ✓ | — | — | — | optional |
| C10 Upload zone | — | — | — | ✓ | — | — | ✓ | — | — | — |
| C11 Component list | — | — | ✓ | — | ✓ | — | — | — | — | — |
| C12 Solution card | — | ✓ | — | — | — | — | — | — | — | — |
| C13 Credentials | — | — | — | — | — | — | — | — | optional | ✓ |
| C14 Footer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| C15 Ruby CTA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| C17 Breadcrumbs | — | — | ✓ | ✓ | ✓ | — | — | ✓ | — | — |
| C19 Domain card | — | — | ✓ | — | — | — | — | — | — | — |
| C20 Confirmation | — | — | — | — | — | ✓ | ✓ | — | — | — |

---

## 5. Platform Mapping

### 5.1 WordPress (if retained — WooCommerce removed)

| Component | Implementation |
|-----------|----------------|
| Dark theme | Custom Astra child or block theme with token CSS |
| Mega-menu | Elementor Pro nav or custom walker |
| Component spec pages | Custom post type `component` + ACF spec repeater |
| RFQ | WPForms / Fluent Forms → CRM + email |
| Upload | Form with file field → secure storage (S3/local) |
| Knowledge | Standard posts under `/engineering/knowledge/` |
| **Remove** | WooCommerce, cart fragments, product archive templates |

### 5.2 Next.js / Headless (alternative)

| Layer | Stack |
|-------|-------|
| Frontend | Next.js + token CSS / Tailwind mapped to variables |
| CMS | Sanity / Strapi for components + knowledge |
| RFQ | API route → CRM webhook + S3 upload |
| Search | Algolia on spec fields |

**Either platform:** No checkout SDK, no Stripe for public site v1.

---

## 6. Responsive Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Mobile | <768px | Sticky ruby RFQ bar bottom; hamburger nav |
| Tablet | 768–1023px | 2-col pillars; condensed mega-menu → accordion |
| Desktop | ≥1024px | Full mega-menu; 3-col pillar matrix |
| Wide | ≥1280px | Max-width container centered |

Touch targets: 48px minimum (ruby CTAs especially).

---

## 7. Iconography

| Context | Icon | Color |
|---------|------|-------|
| RFQ | `file-text` or `clipboard-list` | Ruby when in button |
| Upload | `upload-cloud` | Ruby in dropzone active |
| Spec / datasheet | `download` | `#64748B` |
| Credentials | `shield-check` | `#64748B` |
| Location | `map-pin` | `#64748B` |
| Email | `mail` | `#64748B` |

Stroke 1.5px, Lucide family.

---

## 8. Email & Offline Touchpoints

| Touchpoint | Brand rules |
|------------|-------------|
| RFQ confirmation | Charcoal header `#0E1118`, reference ID in JetBrains Mono, SLA statement |
| Upload confirmation | Same + file list received |
| Quote response PDF | White body, charcoal header, spec table styling matches C08 |
| Email signature | White logo on dark strip OR charcoal logo · full legal name · Pune · RFQ link |

**Retired:** Order confirmation, shipping notification (commerce).

---

## 9. Version Log

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-27 | Initial dual commerce + quote model |
| **2.0** | **2026-06-27** | **Gemini alignment: RFQ-only, dark UI, ruby CTAs, new IA, WooCommerce retired** |

---

## 10. Pre-Release QA

- [ ] No `/cart`, `/checkout`, add-to-cart in HTML or nav  
- [ ] Ruby appears only on conversion elements  
- [ ] Homepage matches 5-section wireframe  
- [ ] Mega-menu 4 columns + catalog link works  
- [ ] RFQ pre-fill from component pages (`?component=`)  
- [ ] Upload accepts .dxf, .step, .pdf  
- [ ] Credentials block verified with finance/sales  
- [ ] "100% Quality Inspected" approved  
- [ ] Spec tables use JetBrains Mono on white panel  
- [ ] Lighthouse accessibility ≥90 on homepage + spec template  
- [ ] All legacy commerce URLs 301'd  

---

*Return to [00-README.md](./00-README.md)*
