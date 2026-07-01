# Homepage Copy Framework — B2B RFQ Conversion (v3.0 — Quantum)

> **Purpose:** Section-by-section homepage template for sciengtech.in — quantum-led, institutional, quote-led.  
> **Prerequisite:** [03-digital-product-strategy.md](./03-digital-product-strategy.md)  
> **Goal:** Convert academic institutes, quantum labs, and photonics education buyers within one scroll — no e-commerce paths.  
> **Live reference:** [`index.html`](../index.html)

---

## Conversion Model

Single primary conversion path. No cart, no checkout, no dual-mode confusion.

| User intent | Action | Destination |
|-------------|--------|-------------|
| Ready to specify a system | Request Technical Quote | `/engineering/rfq.html` |
| Exploring quantum solutions | Explore Quantum Solutions | `/solutions.html` |
| Has drawings | Upload schematics | `/engineering/upload.html` |
| Building a bench | Browse Components | `/components.html` |
| Needs credentials | Contact / institutional page | `/company/contact.html` |

**Rule:** Every section supports **quote, solutions browse, upload, or bench catalog** — never purchase.

---

## Page-Level Metadata

```yaml
title: Quantum Optics Systems & Photonics Hardware | SciEngTech
meta_description: Integrated quantum set-ups, training kits, and bench components for research and education. Request a technical quote.
og_title: Integrated Quantum Systems for Research, Education, and Advanced Photonics
theme_color: "#0E1118"
```

---

## Wireframe Architecture

```markdown
================================================================================
[NAVIGATION BAR]
Logo: SciEngTech          Solutions ▾ | Components ▾ | About ▾ | [Search]
================================================================================

[SECTION 1: HERO ZONE — with solutions carousel]
--------------------------------------------------------------------------------
|  Overline: Quantum Optics Infrastructure                                     |
|  H1: Integrated Quantum Systems for Research, Education, and Advanced        |
|       Photonics.                                                             |
|  Subhead: SciEngTech engineers entangled photon sources, quantum             |
|           demonstration set-ups, and training kits — supported by a full     |
|           bench-component catalog for optical assembly.                      |
|  [ Request Technical Quote ] (Ruby)   [ Explore Quantum Solutions ]        |
|  Carousel: 5 featured solutions with spec callouts                           |
--------------------------------------------------------------------------------

[SECTION 2: QUANTUM SOLUTIONS STRIP]
--------------------------------------------------------------------------------
|  H2: Quantum set-ups & training kits                                         |
|  Horizontal scroll: 8 solution cards (image + SKU)                           |
|  Link: View all solutions →                                                 |
--------------------------------------------------------------------------------

[SECTION 3: INSTITUTIONAL VALIDATION]
--------------------------------------------------------------------------------
|  Label: Powering quantum optics education and research across India's        |
|         leading academic and R&D laboratories.                               |
|  [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]   (grayscale — permission required) |
--------------------------------------------------------------------------------

[SECTION 4: THREE-PILLAR MATRIX]
--------------------------------------------------------------------------------
|  H2: Engineered for quantum demonstration. Specified for the lab bench.      |
|  [01. QUANTUM SET-UPS]  |  [02. TRAINING KITS]  |  [03. BENCH COMPONENTS]  |
|  -> View quantum systems | -> View training kits | -> Browse components     |
--------------------------------------------------------------------------------

[SECTION 5: DEEP DATA PROOF]
--------------------------------------------------------------------------------
|  H2: Rigorous compliance. Guaranteed field performance.                      |
|  Metric: 100% Quality Inspected                                            |
|  Spec table preview: Product line · Origin · Procurement · Status          |
--------------------------------------------------------------------------------

[SECTION 6: SCHEMATIC UPLOADER / CLOSING CTA]
--------------------------------------------------------------------------------
|  H2: Ready to configure your quantum lab requirements?                       |
|  Subhead: Upload engineering schematics or request a technical quote for     |
|           quantum systems and bench components.                              |
|  [ Upload Tech Specs & Connect ] (Ruby)   [ Contact System Engineer ]        |
--------------------------------------------------------------------------------

[FOOTER]
Solutions · Catalog · Engineering · Contact
================================================================================
```

---

## Section Templates

---

### Navigation Bar

```
SciEngTech Solutions     Solutions ▾   Components ▾   About ▾   [Search]
```

**Solutions dropdown:**

| Quantum Set-Ups | Training Kits |
|-----------------|---------------|
| Entangled Photon Source | Fourier Optics Kit |
| Quantum Key Distribution | Polarized 3D Cinema |
| Quantum Eraser | Regenerative Delay Line |
| Bomb Tester | View all training kits → |
| Michelson Interferometer | |
| View all quantum set-ups → | |

**Components dropdown (3 columns):**

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Opto-Mechanics | Hardware | Lasers |
| Motion & Positioning | Fibre Optics | Optics |

Footer link: **→ View full catalog** (`/components.html`)

**RFQ access:** Via hero CTA, About mega-menu, solution pages, and footer — persistent header RFQ button is Phase 1.

**Retired from nav:** Shop, Cart, Login/Register, Utilities (Phase 2), top-level Knowledge Center (Phase 2).

---

### Section 1 — Hero (Above the Fold)

**Job:** Establish quantum systems authority in 5 seconds. One primary action.

| Element | Copy |
|---------|------|
| **Overline** | Quantum Optics Infrastructure |
| **H1** | Integrated Quantum Systems for Research, Education, and Advanced Photonics. |
| **Subheadline** | SciEngTech engineers entangled photon sources, quantum demonstration set-ups, and training kits — supported by a full bench-component catalog for optical assembly. |
| **Primary CTA** | **Request Technical Quote** (Ruby) → `/engineering/rfq.html` |
| **Secondary CTA** | **Explore Quantum Solutions** (Outline) → `/solutions.html` |
| **Visual** | Solutions carousel — 5 featured quantum/training products with JetBrains Mono spec callouts |

#### Hero Don'ts

- No "Welcome to SciEngTech"  
- No generic "Precision Hardware for Advanced Science" as H1 (retired v2.0 headline)  
- No "Add to cart" or pricing  
- No consumer taglines ("economical", "great expertise")  
- No 16-slide mixed OEM carousel (replaced by curated quantum solutions carousel)

#### Hero A/B variants (headline only)

- A: *Integrated Quantum Systems for Research, Education, and Advanced Photonics.* **(locked — live)**  
- B: *Turnkey Quantum Optics for India's Research and Education Labs.*  
- C: *Entangled Photon Sources, Demonstration Set-Ups, and Training Kits — Made in India.*  

---

### Section 2 — Quantum Solutions Strip

**Job:** Surface the full solutions catalog without leaving the homepage.

| Element | Copy |
|---------|------|
| **H2** | Quantum set-ups & training kits |
| **Layout** | Horizontal scroll cards — image, truncated name, SKU |
| **Link** | View all solutions → `/solutions.html` |
| **Items** | All 8 solutions: regenerative delay line, entangled photon source, bomb tester, Michelson, polarized 3D, quantum eraser, Fourier optics, QKD |

---

### Section 3 — Institutional Validation

**Job:** Social proof for procurement committees and PI sign-off.

| Element | Copy |
|---------|------|
| **Label (overline)** | Powering quantum optics education and research across India's leading academic and R&D laboratories. |
| **Visual** | Horizontal grayscale logo row — equal height, `#64748B` mute |
| **Fallback (pre-permission)** | Omit logos; use substantiated text only — never placeholder names (IIT, DRDO) without permission |

**Rules:**
- Only logos with written permission  
- Academic/quantum lab focus — not defense-first unless logos support it  

---

### Section 4 — Three-Pillar Matrix

**Job:** Route buyers to Solutions vs Components without overwhelming choice.

| Element | Copy |
|---------|------|
| **H2** | Engineered for quantum demonstration. Specified for the lab bench. |
| **Layout** | 3-column matrix on dark elevated cards |

#### Pillar 1 — Quantum Set-Ups

| Field | Copy |
|-------|------|
| **Label** | 01. QUANTUM SET-UPS |
| **Body** | Entangled photon sources, QKD, quantum eraser, bomb tester, and interferometry systems — turnkey for classroom and research. |
| **Link** | View quantum systems → `/solutions/quantum-setups.html` |

#### Pillar 2 — Training & Education Kits

| Field | Copy |
|-------|------|
| **Label** | 02. TRAINING & EDUCATION KITS |
| **Body** | Fourier optics, polarized 3D cinema, and custom delay-line kits for hands-on photonics education. |
| **Link** | View training kits → `/solutions/training-kits.html` |

#### Pillar 3 — Bench Components

| Field | Copy |
|-------|------|
| **Label** | 03. BENCH COMPONENTS |
| **Body** | Opto-mechanics, motion stages, optics, lasers, and hardware — the supporting catalog for quantum bench assembly. |
| **Link** | Browse components → `/components.html` |

**Retired pillars (v2.0):** Optics & Laser Diagnostics · Optomechanics & Hardware · Vacuum & HV — deferred to Phase 2 broad-hardware expansion.

---

### Section 5 — Deep Data Proof (Structural Asset)

**Job:** Replace marketing adjectives with inspectable credibility.

| Element | Copy |
|---------|------|
| **H2** | Rigorous compliance. Guaranteed field performance. |
| **Metric callout** | **100% Quality Inspected** |
| **Supporting copy** | Every system and component undergoes validation before dispatch. Made in India — specified for institutional procurement. |
| **Visual** | Spec table preview — Product line: Quantum Set-Ups · Origin: Made in India · Procurement: RFQ / Quote · Status: PASS |
| **Secondary CTA** | Download quality process overview (PDF) — when available |

**Governance:** Legal/ops must approve "100%" and "Guaranteed" language before publish.

---

### Section 6 — Closing CTA (Schematic Uploader)

**Job:** Capture highest-intent OEM / custom fabrication leads.

| Element | Copy |
|---------|------|
| **H2** | Ready to configure your quantum lab requirements? |
| **Subheadline** | Upload engineering schematics or request a technical quote for quantum systems and bench components. |
| **Body (extended)** | Drop technical drawings (`.dxf`, `.step`, or `.pdf`) straight to our engineering team for verification. |
| **Primary CTA** | **Upload Tech Specs & Connect** (Ruby) → `/engineering/upload.html` |
| **Secondary CTA** | **Contact System Engineer** (Outline) → `/company/contact.html` |

---

### Footer

| Column | Content |
|--------|---------|
| **Company** | SciEngTech · Pune, India |
| **Solutions** | Quantum Set-Ups · Training Kits · All Solutions |
| **Catalog** | Components · Search Catalog |
| **Engineering** | Request Quote · Contact |

**Copyright:** `© [Year] Sci.Eng.Tech Solutions`

**Retired footer patterns:** "Shop", "Products" (e-commerce), Utilities links (Phase 2).

---

## Homepage Copy QA Checklist

- [ ] H1 is quantum-oriented (not v2.0 "Precision Hardware…")  
- [ ] Zero "add to cart" / "shop now" / "economical" language  
- [ ] Primary CTA is ruby **Request Technical Quote** above fold  
- [ ] Secondary hero CTA is **Explore Quantum Solutions** (not Browse Components)  
- [ ] Three pillars are Quantum · Training · Bench (not Optics · Optomechanics · Vacuum)  
- [ ] Institutional logos have permission or section omitted  
- [ ] "100% Quality Inspected" approved by operations  
- [ ] All pillar links resolve to live solution/component pages  
- [ ] Upload CTA accepts `.dxf`, `.step`, `.pdf` — Google Form wired  
- [ ] Dark `#0E1118` default background verified on mobile  
- [ ] Meta description mentions quantum systems + training kits + quote  

---

## Metrics (Post-Launch)

| Event | Trigger |
|-------|---------|
| `click_rfq_hero` | Hero Request Technical Quote |
| `click_explore_solutions` | Hero Explore Quantum Solutions |
| `click_upload_cta` | Upload Tech Specs & Connect |
| `click_pillar` | Any pillar CTA |
| `click_solution_strip` | Hardware strip card |
| `submit_rfq` | RFQ form complete |
| `upload_schematic` | File upload success |
| `view_credentials` | Footer credentials click |

**North star:** Qualified RFQs for quantum systems and training kits per month.

---

*Related: [03-digital-product-strategy.md](./03-digital-product-strategy.md) · [04-information-architecture-ux-copy.md](./04-information-architecture-ux-copy.md)*
