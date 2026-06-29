# Homepage Copy Framework — B2B RFQ Conversion

> **Purpose:** Section-by-section homepage template for sciengtech.in — Deep-Tech, institutional, quote-led.  
> **Prerequisite:** [01-brand-style-guide.md](./01-brand-style-guide.md)  
> **Goal:** Convert defense, space, and elite lab buyers within one scroll — no e-commerce paths.

---

## Conversion Model

Single primary conversion path. No cart, no checkout, no dual-mode confusion.

| User intent | Action | Destination |
|-------------|--------|-------------|
| Ready to specify | Request Technical Quote | `/engineering/rfq/` |
| Has drawings | Upload schematics | `/engineering/upload/` |
| Exploring catalog | Browse Components | `/components/` |
| Needs credentials | Contact / institutional page | `/company/contact/` |

**Rule:** Every section supports **quote, upload, or spec browse** — never purchase.

---

## Page-Level Metadata

```yaml
title: SciEngTech — Precision Hardware for Advanced Science and Engineering
meta_description: Certified optics, optomechanics, laser diagnostics, and vacuum systems for defense, space, and research labs. Request a technical quote or upload schematics.
og_title: Precision Hardware for Advanced Science and Engineering
theme_color: "#0E1118"
```

---

## Wireframe Architecture

```markdown
================================================================================
[NAVIGATION BAR]
Logo: SciEngTech          Solutions | Components ▾ | Utilities | About | [RFQ Portal]
================================================================================

[SECTION 1: HERO ZONE]
--------------------------------------------------------------------------------
|  H1: Precision Hardware for Advanced Science and Engineering.                |
|  Subhead: Certified optics, optomechanics, laser diagnostic instruments,     |
|           and vacuum systems designed to withstand absolute tolerances.      |
|  [ Request Technical Quote ] (Ruby)     [ Browse Components ] (Outline)      |
--------------------------------------------------------------------------------

[SECTION 2: INSTITUTIONAL VALIDATION]
--------------------------------------------------------------------------------
|  Label: Powering research across India's leading defense, space, and         |
|         academic labs.                                                       |
|  [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]   (grayscale)            |
--------------------------------------------------------------------------------

[SECTION 3: INFRASTRUCTURE FRAMEWORK — THREE-PILLAR MATRIX]
--------------------------------------------------------------------------------
|  H2: Engineered for flawless replication. Tested for structural integrity.   |
|  [01. OPTICS & LASERS]  |  [02. OPTOMECHANICS]  |  [03. VACUUM SYSTEMS]    |
|  -> View System Specs   |  -> View System Specs |  -> View System Specs     |
--------------------------------------------------------------------------------

[SECTION 4: DEEP DATA PROOF]
--------------------------------------------------------------------------------
|  H2: Rigorous compliance. Guaranteed field performance.                      |
|  Metric: 100% Quality Inspected                                            |
|  Supporting copy + spec table preview or inspection process summary          |
--------------------------------------------------------------------------------

[SECTION 5: SCHEMATIC UPLOADER / CLOSING CTA]
--------------------------------------------------------------------------------
|  H2: Ready to configure your system requirements?                            |
|  Subhead: Upload engineering schematics or request custom specifications.    |
|  [ Upload Tech Specs & Connect ] (Ruby)   [ Contact System Engineer ]        |
--------------------------------------------------------------------------------

[FOOTER]
Company credentials · GST · GeM · Lab coordinates · Legal
================================================================================
```

---

## Section Templates

---

### Navigation Bar

```
SciEngTech Solutions     Solutions   Components ▾   Utilities   About   [RFQ Portal]
```

**Components dropdown (on hover):**

| LASERS & PHOTONICS | PRECISION OPTICS | OPTOMECHANICS | VACUUM & HV |
|--------------------|------------------|---------------|-------------|
| Laser Sources | Optical Lenses | High-Spec Mounts | Chambers |
| Metrology & Diagnostics | Laser Mirrors | Breadboards | Power Supplies |
| Fiber Optics | Beamsplitters | Motion Control | Pockels Cells |

Footer link in dropdown: **→ View Complete Technical Catalog**

**RFQ Portal button:** Ruby `#E11D48`, always visible desktop; sticky on mobile.

**Retired from nav:** Shop, Cart, Login/Register (unless future portal phase), Knowledge as top-level (lives under Engineering Hub).

---

### Section 1 — Hero (Above the Fold)

**Job:** Establish authority in 5 seconds. One primary action.

| Element | Copy |
|---------|------|
| **H1** | Precision Hardware for Advanced Science and Engineering. |
| **Subheadline** | Sourcing certified optics, optomechanics, laser diagnostic instruments, and vacuum systems designed to withstand absolute tolerances. |
| **Primary CTA** | **Request Technical Quote** (Ruby) → `/engineering/rfq/` |
| **Secondary CTA** | **Browse Components** (Outline) → `/components/` |
| **Visual** | Full-bleed dark hero — optical bench, vacuum chamber, or hardware macro on `#0E1118` scrim |

#### Hero Don'ts

- No "Welcome to SciEngTech"  
- No carousel of 16 product slides  
- No "Add to cart" or pricing  
- No consumer taglines ("economical", "great expertise")  

#### Hero A/B variants (headline only)

- A: *Precision Hardware for Advanced Science and Engineering.* (locked)  
- B: *Certified Deep-Tech Hardware for Mission-Critical Labs.*  
- C: *Field-Tested Optics and Lab Systems. Absolute Tolerances.*  

---

### Section 2 — Institutional Validation

**Job:** Social proof for procurement committees and PI sign-off.

| Element | Copy |
|---------|------|
| **Label (overline)** | Powering research across India's leading defense, space, and academic labs. |
| **Visual** | Horizontal grayscale logo row — equal height, `#64748B` mute, no color |
| **Fallback (pre-permission)** | Omit logos; use text: "Trusted by national research laboratories and engineering institutes" only if substantiated |

**Rules:**
- Only logos with written permission  
- No fake placeholders  
- Optional: single line beneath — "GST-registered vendor · GeM listed" (when verified)  

---

### Section 3 — Infrastructure Framework (Three-Pillar Matrix)

**Job:** Route technical buyers to core catalog columns without overwhelming choice.

| Element | Copy |
|---------|------|
| **H2** | Engineered for flawless replication. Tested for structural integrity. |
| **Layout** | 3-column matrix on dark elevated cards |

#### Pillar 1 — Optics & Laser Diagnostics

| Field | Copy |
|-------|------|
| **Label** | 01. OPTICS & LASER DIAGNOSTICS |
| **Body** | From custom laser mirrors to power meters, engineered for ultra-precise pulse and contrast measurements. |
| **Link** | View System Specs → `/components/precision-optics/` or `/components/lasers-photonics/` |

#### Pillar 2 — Optomechanics & Hardware

| Field | Copy |
|-------|------|
| **Label** | 02. OPTOMECHANICS & HARDWARE |
| **Body** | High-stability mounting systems, custom rails, and lab tools machined to exact micron tolerances. |
| **Link** | View System Specs → `/components/optomechanics/` |

#### Pillar 3 — Vacuum & HV Power Supplies

| Field | Copy |
|-------|------|
| **Label** | 03. VACUUM & HV POWER SUPPLIES |
| **Body** | Low-leakage vacuum technology alongside high-voltage power components for extreme lab conditions. |
| **Link** | View System Specs → `/components/vacuum-hv/` |

**Optional fourth row (below fold or Utilities cross-link):** Detectors, chillers, cleaning — link to `/utilities/` without competing with three pillars.

---

### Section 4 — Deep Data Proof (Structural Asset)

**Job:** Replace marketing adjectives with inspectable credibility.

| Element | Copy |
|---------|------|
| **H2** | Rigorous compliance. Guaranteed field performance. |
| **Metric callout** | **100% Quality Inspected** |
| **Supporting copy** | Every lens, mirror, and structural mount undergoes mechanical validation before dispatch. We remove the operational uncertainty from your procurement pipeline. |
| **Visual** | Spec table preview (JetBrains Mono), inspection checklist icon row, or process diagram (Receive → Inspect → Validate → Dispatch) |
| **Secondary CTA** | Download quality process overview (PDF) — when available |

**Governance:** Legal/ops must approve "100%" and "Guaranteed" language before publish.

---

### Section 5 — Closing CTA (Schematic Uploader)

**Job:** Capture highest-intent OEM / custom fabrication leads.

| Element | Copy |
|---------|------|
| **H2** | Ready to configure your system requirements? |
| **Subheadline** | Upload your engineering schematics or request custom component specifications directly from our specialists. |
| **Body (extended)** | Drop technical drawings (`.dxf`, `.step`, or `.pdf`) straight to our engineering team for verification. |
| **Primary CTA** | **Upload Tech Specs & Connect** (Ruby) → `/engineering/upload/` |
| **Secondary CTA** | **Contact System Engineer** (Outline) → `/company/contact/` |

**Form preview (inline optional):** File drop zone + email + organization — full form on dedicated page.

---

### Footer

| Column | Content |
|--------|---------|
| **Company** | About · Contact & Credentials |
| **Engineering** | RFQ Portal · Upload Schematics · Knowledge Center |
| **Catalog** | Components · Utilities · Solutions |
| **Legal** | Terms · Privacy · Refunds |
| **Credentials block** | GST · GeM Vendor ID · Lab coordinates (Pune) |

**Copyright:** `© [Year] Sci.Eng.Tech Solutions`

**Retired footer patterns:** "Shop", "Products" (e-commerce), WooCommerce links.

---

## Homepage Copy QA Checklist

- [ ] H1 matches positioning line exactly  
- [ ] Zero "add to cart" / "shop now" / "economical" language  
- [ ] Primary CTA is ruby **Request Technical Quote** above fold  
- [ ] Institutional logos have permission or section omitted  
- [ ] "100% Quality Inspected" approved by operations  
- [ ] All pillar links resolve to live component category pages  
- [ ] Upload CTA accepts `.dxf`, `.step`, `.pdf` — backend wired  
- [ ] Dark `#0E1118` default background verified on mobile  
- [ ] Meta description mentions defense/research + quote, not shop  
- [ ] No hidden Elementor sections  

---

## Metrics (Post-Launch)

| Event | Trigger |
|-------|---------|
| `click_rfq_hero` | Hero Request Technical Quote |
| `click_browse_components` | Hero Browse Components |
| `click_upload_cta` | Upload Tech Specs & Connect |
| `click_pillar_specs` | View System Specs (any pillar) |
| `submit_rfq` | RFQ form complete |
| `upload_schematic` | File upload success |
| `view_credentials` | Footer credentials click |

**North star:** Qualified RFQ submissions + schematic uploads per month.

---

*Related: [03-digital-product-strategy.md](./03-digital-product-strategy.md) · [04-information-architecture-ux-copy.md](./04-information-architecture-ux-copy.md)*
