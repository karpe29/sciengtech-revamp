# SciEngTech — Brand Style Guide (v2.0)

> **Scope:** Digital brand system for sciengtech.in revamp — Deep-Tech B2B, RFQ-led.  
> **Status:** Aligned to Gemini strategic repositioning. Validate logo against dark UI before sign-off.

---

## 1. Brand Foundation

### 1.1 Brand Name & Usage

| Context | Use | Avoid |
|---------|-----|-------|
| Legal / formal | **Sci.Eng.Tech Solutions** | SciEngTech Solutions (in contracts) |
| Digital / nav | **SciEngTech** or **SciEngTech Solutions** | SET, S.E.T., Sci Eng Tech |
| Tagline lockup | *Precision Hardware for Advanced Science and Engineering* | "Specialists in Lasers and Optics" (legacy — retire) |
| Legacy phrases | — | "India's first optics e-cart", "economical items", "Welcome to our website" |

### 1.2 Strategic Repositioning

**Sci.Eng.Tech Solutions** is deeply rooted in high-precision hardware — catering to labs, defense, space tech, and academic institutions. The current digital presentation hides this high-spec engineering under a standard, template-heavy layout.

```
[Current Core Issue]
Dense navigation + generic e-commerce structure ("add to cart" for high-end optical mirrors)
+ fragmented technical categories
= High drop-off from B2B clients, defense labs, and elite engineering institutes.
```

**The shift:**

| From | To |
|------|-----|
| Standard e-commerce shop | **Premier Deep-Tech Hardware Infrastructure Engine** |
| Selling components | **Powering reliable, field-tested engineering systems** |
| Price-led consumer copy | **Spec-led, compliance-led institutional copy** |
| Cart / checkout | **Request Technical Quote + schematic upload** |

### 1.3 Brand Essence

| Element | Definition |
|---------|------------|
| **Purpose** | Supply certified, field-tested photonics and lab hardware that withstands absolute tolerances for India's most demanding R&D environments. |
| **Promise** | Rigorous compliance. Guaranteed field performance. Operational certainty in procurement. |
| **Personality** | Absolute Precision · Authoritative · Minimalist · Field-Tested |
| **Not** | Discount shop · Generic importer · Template B2C catalog · Hype-driven startup |

### 1.4 Value Pillars (Reframed for B2B)

| Pillar | Message | Proof direction |
|--------|---------|-----------------|
| **Precision** | Micron-tolerance optomechanics and wavelength-specified optics | Spec tables, inspection process |
| **Compliance** | Quality-inspected dispatch; institutional procurement ready | GST, GeM, validation metrics |
| **Field performance** | Components tested for structural integrity before dispatch | "100% Quality Inspected" (validate operationally) |
| **Engineering partnership** | Direct access to system engineers, not sales scripts | RFQ portal, schematic upload, SLA |

**Retire from primary messaging:** "Speed, Quality, Value, Service" as consumer-facing shorthand — keep internally if needed for sales decks.

---

## 2. Audience & Tone

### 2.1 Primary Audiences

| Segment | Priority | What they need |
|---------|----------|----------------|
| **Defense & space labs** | Highest | Certified specs, traceability, tender/GeM readiness, NDA-friendly engagement |
| **Elite academic / research institutes** | High | Quantum/optics systems, metrology suites, technical whitepapers |
| **Industrial R&D / photonics OEM** | High | Custom fabrication, `.STEP`/`.DXF` submission, volume quotes |
| **Lab procurement / institutional buyers** | High | GST invoices, PO workflows, vendor credentials, lead times |
| **General university labs** | Secondary | Training systems under Solutions, not primary nav focus |

### 2.2 Tone of Voice Attributes

**Absolute Precision · Authoritative · Minimalist · Field-Tested**

| Attribute | Sounds like | Does not sound like |
|-----------|-------------|---------------------|
| **Absolute Precision** | "Dielectric mirror, 800 nm, λ/10 surface quality, validated before dispatch." | "High-quality mirror at great prices!" |
| **Authoritative** | "Engineered for flawless replication. Tested for structural integrity." | "We try our best to help you find items." |
| **Minimalist** | Short declarative sentences. Data over adjectives. | Long welcome paragraphs, filler copy |
| **Field-Tested** | "Removes operational uncertainty from your procurement pipeline." | "Amazing products you'll love!" |

### 2.3 The "Do / Don't" Messaging Guardrail

| Do say | Don't say |
|--------|-----------|
| "Precision-engineered optics for quantum research and industrial applications." | "Welcome to our website. We offer high-quality items at economical prices with great expertise." |
| "Request a technical quote for certified components." | "Add to cart" / "Shop now" / "Buy online" |
| "Upload engineering schematics for verification." | "Contact us for more info" (vague) |
| "Sourcing certified optics, optomechanics, and vacuum systems." | "Browse our wide range of services below" |

**Why:** Deep-tech buyers don't buy "economical items." They source certified, reliable components that won't ruin a million-dollar experiment or industrial line.

### 2.4 Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Homepage hero | Authoritative, outcome-led | "Precision Hardware for Advanced Science and Engineering." |
| Component specs | Neutral, data-dense | "Clear aperture: 25 mm · Surface: λ/10 · Coating: HR @ 800 nm" |
| CTAs | Direct, engineering-led | "Request Technical Quote" / "Upload Tech Specs & Connect" |
| Institutional block | Credible, understated | "Powering research across India's leading defense, space, and academic labs." |
| Legal / policy | Plain, formal | Standard contractual language |

### 2.5 Writing Rules

- **Reading level:** Technical professional — no dumbing down; define acronyms once per page  
- **Numbers:** SI units, tabular alignment in spec blocks (`25 mm`, `800 nm`, `±0.5 arcsec`)  
- **Capitalization:** Sentence case for body; nav labels title case  
- **India context:** GST, GeM Vendor ID, Pune lab coordinates on Company pages — not buried in footer  
- **Claims:** Every superlative ("100% Quality Inspected", "certified") requires operational sign-off  

---

## 3. Visual Identity

### 3.1 Color Archetype

```
Primary (60%)     : Deep Space Charcoal  #0E1118  — Backgrounds, depth, nav
Secondary (30%)   : Clean Lab Silver     #F3F4F6  — Section alternates, cards on dark
                    Pure White           #FFFFFF  — Data surfaces, spec tables
Accent (10%)      : Precision Laser Ruby #E11D48  — CTAs ONLY (RFQ, upload, primary actions)
Functional        : Muted Steel          #64748B  — Spec labels, meta, captions
```

#### Extended Token Set

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-primary` | `#0E1118` | Page background (default dark mode site) |
| `--color-bg-elevated` | `#161B26` | Cards on dark background |
| `--color-bg-light` | `#F3F4F6` | Light sections (proof grid, spec tables) |
| `--color-bg-white` | `#FFFFFF` | Maximum readability data panels |
| `--color-text-primary` | `#FFFFFF` | Headlines on dark |
| `--color-text-on-light` | `#0E1118` | Headlines on light sections |
| `--color-text-muted` | `#64748B` | Spec labels, captions |
| `--color-accent-ruby` | `#E11D48` | Primary CTA buttons, RFQ Portal nav |
| `--color-accent-ruby-hover` | `#BE123C` | CTA hover |
| `--color-border` | `#2A3142` | Subtle dividers on dark |
| `--color-border-light` | `#E2E8F0` | Dividers on light |

#### Color Rules

- **Ruby is sacred** — use exclusively for interactive conversion elements (RFQ, upload, contact engineer). Never for decoration.  
- **60/30/10 discipline** — dark depth dominates; light sections create rhythm; ruby punctuates action.  
- **No legacy blue/teal palette** from v1 docs — fully replaced.  
- Contrast ≥ 4.5:1 on all text; spec tables on white for maximum legibility.  

### 3.2 Typography

| Role | Font | Fallback | Use |
|------|------|----------|-----|
| **Display / Headings** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | SF Pro Display, system-ui | H1–H3, nav, hero |
| **Body / UI** | [Inter](https://fonts.google.com/specimen/Inter) | system-ui, sans-serif | Prose, nav links, forms |
| **Specs / Data** | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | monospace | Dimensions, SKU codes, spec tables, file types |

*Rationale:* Geometric industrial precision (Space Grotesk) + crisp spec rendering (JetBrains Mono). Matches deep-tech, laboratory instrument aesthetic.

#### Type Scale

| Token | Size | Weight | Line height | Use |
|-------|------|--------|-------------|-----|
| `display-xl` | 56px / 3.5rem | 700 | 1.05 | Homepage H1 |
| `display-lg` | 40px / 2.5rem | 700 | 1.1 | Page heroes |
| `heading-1` | 32px / 2rem | 600 | 1.15 | Section H2 |
| `heading-2` | 24px / 1.5rem | 600 | 1.25 | Subsections |
| `heading-3` | 18px / 1.125rem | 600 | 1.35 | Card titles, pillar labels |
| `body-lg` | 18px / 1.125rem | 400 | 1.65 | Hero subhead |
| `body-md` | 16px / 1rem | 400 | 1.6 | Default body |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | Captions |
| `spec` | 14px / 0.875rem | 400 | 1.5 | JetBrains Mono — tables |
| `label` | 11px / 0.6875rem | 600 | 1.4 | Overlines, uppercase, +0.08em tracking |

**Typography rules**
- Spec tables: JetBrains Mono, right-aligned numerics, left-aligned parameters  
- One H1 per page — always Space Grotesk  
- No italic except quotations  
- Max prose width: 640px on dark; spec panels may go full grid width  

### 3.3 Logo Usage

| Rule | Specification |
|------|---------------|
| Default site | White or silver logo on `#0E1118` |
| Light sections | Charcoal logo on `#F3F4F6` or white |
| Clear space | 1× logo height minimum |
| Minimum digital width | 140px |
| Don't | Color logo on ruby background; drop shadows; gradient overlays |

### 3.4 Imagery

#### Photography

- **Subject:** Hardware macro shots, optical benches, vacuum chambers, metrology setups  
- **Treatment:** High contrast, desaturated or grayscale for institutional logo row; full color for product hero shots on dark scrims  
- **Avoid:** Stock handshakes, generic scientists smiling at microscopes, clip-art optics  

#### Illustration / Icons

- Thin line icons, 1.5px stroke, `#64748B` default, `#FFFFFF` on hover  
- Lucide or Phosphor — no filled cartoon icons  

#### Institutional Proof Grid

- Grayscale logos only, equal height, muted — never colorful logo wall  
- Only logos with written permission  

---

## 4. UI Components (Brand-Level)

### 4.1 Buttons

| Variant | Style | Use |
|---------|-------|-----|
| **Primary (Ruby)** | `#E11D48` bg, white text | Request Technical Quote, Upload Tech Specs, RFQ Portal |
| **Secondary (Outline)** | Transparent, 1px `#FFFFFF` or `#64748B` border | Browse Components, View System Specs |
| **Ghost** | Text only, `#64748B` → white on hover | Tertiary navigation |
| **On light bg** | Ruby primary unchanged; outline uses `#0E1118` border | Light section CTAs |

**Retired:** "Add to cart", commerce green buttons, WooCommerce patterns.

**Button copy:** Engineering verbs — `Request Technical Quote`, `Upload Tech Specs & Connect`, `Contact System Engineer`, `View System Specs`.

### 4.2 Cards

- Dark cards: `#161B26` on `#0E1118`, 1px `#2A3142` border, 8px radius  
- Light cards: white on `#F3F4F6` for spec/data  
- Pillar card: number prefix (`01.`), Space Grotesk title, 2-line spec summary, outline CTA  

### 4.3 Forms (RFQ / Upload)

- Dark form on elevated surface OR white form panel on dark page  
- Labels: `body-sm`, `#64748B`, uppercase optional for field groups  
- Required: `*` in ruby only for missing validation, not by default  
- File upload: explicit `.dxf`, `.step`, `.pdf` acceptance copy  

---

## 5. Brand Messaging Framework

### 5.1 Positioning Line

> **Precision Hardware for Advanced Science and Engineering.**

### 5.2 Elevator Pitch

> SciEngTech supplies certified optics, optomechanics, laser diagnostic instruments, and vacuum systems — engineered to withstand absolute tolerances. We serve defense, space, academic, and industrial R&D labs across India through rigorous specification, quality inspection, and direct engineering support.

### 5.3 Proof Points (use when verified)

- 100% Quality Inspected dispatch process  
- Pune engineering HQ with lab coordinates  
- GST registration · GeM Vendor ID (when confirmed)  
- Institutional client logos (with permission)  
- Custom fabrication via schematic upload  

### 5.4 Words We Use / Avoid

| Use | Avoid |
|-----|-------|
| Certified, precision-engineered, field-tested | Economical, cheap, best price |
| Request Technical Quote | Add to cart, Buy now, Shop |
| System specs, compliance, tolerances | Items, products (alone without context) |
| System engineer, specialists | Sales team, agents |
| Upload schematics | Attach file (vague) |

---

## 6. Accessibility & Localization

- WCAG 2.1 AA — especially ruby on dark (verify contrast for large button text)  
- Alt text: technical description (`800 nm dielectric mirror, λ/10 surface, mounted`)  
- Currency in quotes: `₹` with Indian grouping when RFQ response includes pricing  
- Date format: `DD MMM YYYY`  

---

## 7. Asset Checklist

- [ ] Logo kit — white, charcoal, favicon (dark bg optimized)  
- [ ] Space Grotesk + Inter + JetBrains Mono licensed/loaded  
- [ ] Institutional logo permissions documented  
- [ ] Ruby CTA contrast verified (4.5:1+)  
- [ ] RFQ confirmation email template (dark header optional)  
- [ ] Datasheet PDF template — white spec body, charcoal header bar  

---

*Next: [02-homepage-copy-framework.md](./02-homepage-copy-framework.md)*
