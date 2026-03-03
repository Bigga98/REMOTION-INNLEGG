# Mediegruppen — Remotion Innlegg

Instagram-karuseller og CTA-videoer for Mediegruppen.
Bygget med [Remotion](https://remotion.dev) — programmatisk video/bilde i React.

**Plassering:** `/Users/birgerbratli/Documents/REMOTIONinnlegg/`

---

## Hvordan kvaliteten fungerer

### Scale(2)-teknikken

Alle innlegg er bygget med et **1080×1080 koordinatsystem**, men rendres ut som **2160×2160 piksler** (4x pikselflate). Dette gir skarp kvalitet på Instagram uten at man trenger å jobbe med doble verdier i koden.

```
┌─────────────────────────────┐
│  Composition: 2160 × 2160   │  ← Remotion output
│  ┌───────────────────────┐  │
│  │  Inner div: 1080×1080 │  │  ← Alt innhold designes her
│  │  transform: scale(2)  │  │  ← CSS skalerer opp 2x
│  │  transformOrigin: top  │  │
│  │  left                 │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

**I praksis:**
- Du skriver `fontSize: 52` → rendres som 104px i output
- Du skriver `width: 680` → rendres som 1360px i output
- Alle pikselverider i koden er halve av det som rendres ut

### Konsistente verdier på tvers av alle slides

| Egenskap | Verdi | Beskrivelse |
|----------|-------|-------------|
| Output | 2160×2160 | Registrert i Root.jsx |
| Inner div | 1080×1080 | Med `scale(2)` |
| Logo top | 40px | Mediegruppen-logo øverst til venstre |
| Title top | 200px | Hovedtittel-posisjon |
| Title fontSize | 52px | Standard for stills |
| Side-margin | 50px | Venstre/høyre padding |
| Bakgrunn | #E8F0F6 | Lys blågrå |
| Tekst | #2C3E50 | Mørk blå |
| Grønn aksent | #5BA07E gradient | Positiv / "etter" |
| Varm aksent | #B56B4A gradient | Negativ / "før" / CTA |

### Fonter

| Font | Bruk |
|------|------|
| Clash Display | Overskrifter |
| Inter | Brødtekst, tall |
| Panchang | "Mediegruppen"-logotekst |

---

## Kom i gang

```bash
cd /Users/birgerbratli/Documents/REMOTIONinnlegg
npm install
npm start    # Åpner Remotion Studio i nettleseren
```

---

## Rendering

```bash
# Video (mp4)
npx remotion render src/index.js Speed1Hook renders/Speed1Hook.mp4

# Still-bilde (png)
npx remotion still src/index.js Speed2Stakes renders/Speed2Stakes.png
```

---

## Aktive templates

Alle innlegg: 2160×2160 output, 1080×1080 inner div med `scale(2)`.

### Gratis-Utkast (CTA)

| ID | Type | Beskrivelse |
|----|------|-------------|
| GratisUtkast | Video (60fps, 4s) | "Vi lager et gratis utkast" — animert CTA med browser-mockup wireframe. Varm aksent (#B56B4A). |

### Mobil-Hastighet (8-slide karusell)

| ID | Type | Beskrivelse |
|----|------|-------------|
| Mobil1Hook | Video (60fps, 4s) | Hook: "Nettsiden din er raskere enn du tror. Og tregere enn du tror." PC vs mobil-ikoner. |
| Mobil2Virkelighet | Still | Virkeligheten: 61% av trafikk er mobil. Donut-chart med statistikk. |
| Mobil3Tregere | Still | Hvorfor mobil er tregere: 4 årsaker (svakere prosessor, 4G, små skjermer, batterisparing). |
| Mobil4Google | Still | Google bruker kun mobil-hastighet for rangering. Telefon-mockup med PageSpeed. |
| Mobil5Konsekvens | Still | Konsekvenser: 53% forlater, 8% tap per sekund, #1 Google rangerer mobil. |
| Mobil6Problem | Still | Typisk WordPress: Desktop 97 vs Mobil 60. ScoreGauge-sammenligning. |
| Mobil7Losning | Still | Løsningen: lett kode, optimaliserte bilder, minimal JS. Sjekkliste. |
| Mobil8CTA | Still | CTA: "Skriv MOBIL i kommentarfeltet" med grønn gradient-badge. |

### Hastighet (6-slide karusell)

| ID | Type | Beskrivelse |
|----|------|-------------|
| Speed1Hook | Video (60fps, 4s) | Hook: "Disse 3 tingene gjør nettsiden din treg." Animert loading bar. |
| Speed2Stakes | Still | Hva som står på spill: 3s → 53% forlater. Linjediagram med tapsstatistikk. |
| Speed3Bilder | Still | Synder #1: Bilder for store. Før/etter-kort (8.2MB → 180KB). Glassmorphism. |
| Speed4Bakgrunn | Still | Synder #2: For mange ting i bakgrunnen. Script-dashboard med fjernet/optimalisert. |
| Speed5Webhotell | Still | Synder #3: Webhotellet for svakt. Delt vs dedikert — TTFB og oppetid. Glassmorphism. |
| Speed6Nyhet | Still | Den gode nyheten: 3 steg du kan fikse selv (bilder, ubrukte skript, webhotell). |

### Arkiv (eldre varianter)

| ID | Type | Dimensjon | Beskrivelse |
|----|------|-----------|-------------|
| GoogleSynlighet | Video | 1080×1080 | Mørkt tema, blur-avdekking |
| GoogleSynlighet2 | Video | 1080×1080 | Mørkt tema, sjekkpunkt-liste |
| GoogleSynlighetLight | Video | 1080×1080 | Lyst tema, rød "Google"-tekst |
| ABTestHero | Video | 1200×675 | A/B-test animasjon med partikler |
| FunnelImage | Still | 1800×600 | Funnel-sammenligning |
| SplitScreen | Still | 1800×600 | Split A/B-kort |

### Gray-Coral / Gray2-Teal (Google SEO-karuseller, 8 slides)

| ID-mønster | Type | Beskrivelse |
|------------|------|-------------|
| GoogleSynlighetGray/Gray2 | Video (60fps) | Hook: animert Google-synlighet |
| Slide2Porten | Still | Google er porten |
| Slide3Sjekk | Still | Sjekk synligheten |
| Slide4Adferd | Still | Brukeratferd |
| Slide5Stemme | Still | Stemmen til bedriften |
| Slide6Finjustering | Still | Finjustering |
| Slide7Utdatert | Still | Utdatert vs oppdatert |
| Slide8Oppsummering | Still | Oppsummering CTA |

---

## Biblioteket (`src/lib/`)

### colors.js — Farger & temaer

```js
import { themes, googleGradients, glass, status } from "./lib/colors";
```

**Temaer** — Ferdig-definerte fargepakker:

| Tema | Bakgrunn | Tekst | Bruk |
|------|----------|-------|------|
| `themes.dark` | `#0f1117` | `#e4e6ec` | Mørke innlegg |
| `themes.light` | `#f5f6f8` | `#000000` | Lyse innlegg |
| `themes.gray` | Gradient (warm gray) | `#1B2A4A` | Grå innlegg, coral accent |
| `themes.gray2` | Gradient (warm gray) | `#1A1A1A` | Grå innlegg, teal accent |

**Google-gradienter** — Animerte farger for nøkkelord:

| Gradient | Farger | Stemning |
|----------|--------|----------|
| `googleGradients.coral` | Rosa/oransje | Varm, organisk |
| `googleGradients.teal` | Teal/blå | Kald, profesjonell |
| `googleGradients.red` | Rød | Advarsel, viktig |
| `googleGradients.blue` | Blå/lilla | Teknisk, Mediegruppen-accent |

**Legge til nytt tema:**

```js
// I colors.js, legg til i themes:
mittTema: {
  bg: "#fafafa",              // Bakgrunn (farge eller gradient-streng)
  text: "#222",               // Hovedtekstfarge
  leaf: "#222",               // Dekorativt blad
  arrow: "rgba(0,0,0,0.4)",  // Pil-farge
},
```

**Legge til ny Google-gradient:**

```js
// I colors.js, legg til i googleGradients:
orange: {
  colors: ["#ff6b6b", "#ee5a24", "#ff6b6b"],
  css: "linear-gradient(90deg, #ff6b6b, #ee5a24, #ff6b6b)",
},
```

---

### animations.js — Animasjoner

```js
import {
  springs,           // Spring-configs
  timings,           // Timing-presets
  makeSlideIn,       // Vertikal slide-in
  makeSlideX,        // Horisontal slide-in
  calcTextBlurs,     // Progressiv blur-avdekking
  calcFocusPull,     // Bilde focus pull effekt
  calcGlassAngles,   // Glassmorphism vinkel-animasjon
  calcGradientPosition, // Gradient-tekst posisjon
} from "./lib/animations";
```

**Spring-configs:**

| Config | Effekt | Bruk |
|--------|--------|------|
| `springs.smooth` | `{ damping: 200 }` | Alt standard — glatt, ingen bounce |
| `springs.bouncy` | `{ damping: 12, mass: 0.6 }` | Winner-badges, oppmerksomhets-elementer |

**Timing-presets:**

| Preset | FPS | Varighet | Bruk |
|--------|-----|----------|------|
| `timings.standard` | 30 | 120 frames (4s) | Vanlige innlegg |
| `timings.smooth` | 60 | 240 frames (4s) | Høykvalitets-innlegg |

**Hjelpefunksjoner:**

```js
// Vertikal slide-in (tekst, elementer)
const line1 = makeSlideIn(frame, fps, delay);
// → { opacity: 0→1, translateY: 30→0 }

// Horisontal slide (piler, ikoner)
const arrow = makeSlideX(frame, fps, delay);
// → { opacity: 0→1, translateX: -20→0 }

// Progressiv blur-avdekking (linje 2)
const [blur1, blur2, blur3] = calcTextBlurs(frame, timings.smooth);
// → Tre blur-verdier som klarner fra venstre til høyre

// Focus pull på bilder
const focus = calcFocusPull(springValue);
// → { blur: 8→0, brightness: 1.3→1, scale: 1.04→1 }

// Glassmorphism vinkel-animasjon
const { angle1, angle2 } = calcGlassAngles(frame, duration);

// Gradient-tekst posisjon
const pos = calcGradientPosition(frame, duration);
```

**Legge til ny timing:**

```js
// I animations.js, legg til i timings:
slow60fps: {
  fps: 60,
  duration: 360,  // 6 sekunder
  line1: 0,
  line2: 24,
  arrow: 56,
  img1: 75,
  img2: 96,
  blur1: { start: 24, end: 56 },
  blur2: { start: 32, end: 62 },
  blur3: { start: 40, end: 70 },
},
```

---

### styles.js — Stilmønstre

```js
import {
  glassmorphism,    // Glassmorphism-ramme
  frostedVignette,  // Bilde-vignette
  imageFilter,      // Focus pull filter
  gradientText,     // Animert gradient-tekst
  shadows,          // Shadow-presets
  overlays,         // Overlay-stiler
  imageWrapper,     // Bilde-wrapper
} from "./lib/styles";
```

**glassmorphism(vinkel, variant)**

```js
// Primær variant (for bakre bilde)
<div style={{ ...glassmorphism(angle1) }}>

// Alternativ variant (for fremre bilde)
<div style={{ ...glassmorphism(angle2, "alt") }}>
```

**gradientText(gradient, posisjon)**

```js
<span style={{
  ...gradientText(googleGradients.coral.css, gradientPosition),
}}>
  Google
</span>
```

**imageFilter(blur, brightness, scale)**

```js
const focus = calcFocusPull(springValue);
<img style={{
  ...imageFilter(focus.blur, focus.brightness, focus.scale),
}} />
```

**Overlays:**

```js
<div style={overlays.whiteFade} />   // Hvit fade i bunnen
<div style={overlays.grid} />        // Subtle grid-mønster
<div style={overlays.dotPattern} />  // Dot-mønster
```

---

### fonts.js — Fonter

```js
import { clashDisplay, panchang, fontFamily } from "./lib/fonts";
```

| Font | Stack | Bruk |
|------|-------|------|
| `fontFamily.headline` | Clash Display | Overskrifter, hovedtekst |
| `fontFamily.body` | Inter | Brødtekst, tall |
| `fontFamily.logo` | Panchang | "Mediegruppen"-logotekst |
| `fontFamily.mono` | Inter monospace | Tall, kode |

Fontene lastes automatisk ved import av `clashDisplay` og `panchang`.

---

### layout.js — Layout

```js
import { spacing, logo, images, zIndex, compositions, imagePositions, headline, arrow } from "./lib/layout";
```

**Viktige verdier:**

| Konstant | Verdi | Beskrivelse |
|----------|-------|-------------|
| `spacing.margin` | 50px | Sidemargin |
| `spacing.textTop` | 260px | Topp-posisjon for tekst |
| `logo.top` | 40px | Logo vertikal posisjon |
| `images.width` | 580px | Standard bildebredde |
| `zIndex.ui` | 3 | Øverste lag (logo, tekst) |

---

## Lage et nytt innlegg — steg for steg

### 1. Forbered innhold

- Bestem tekst (linje 1 + linje 2 + nøkkelord)
- Ta/finn screenshots og legg dem i `public/`
- Velg tema og Google-gradient fra biblioteket

### 2. Opprett komponent

Lag ny fil `src/MittNyeInnlegg.jsx`. Se fullstendig mal i `src/lib/workflows.js` (seksjon 2).

Minimalt eksempel:

```jsx
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, staticFile } from "remotion";
import { clashDisplay, panchang, fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import { springs, timings, makeSlideIn, calcTextBlurs, calcGradientPosition } from "./lib/animations";
import { gradientText } from "./lib/styles";
import { spacing, logo, headline } from "./lib/layout";

const THEME = themes.gray;
const TIMING = timings.smooth;

export const MittNyeInnlegg = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1 = makeSlideIn(frame, fps, TIMING.line1);
  const line2 = makeSlideIn(frame, fps, TIMING.line2);
  const [blur1, blur2, blur3] = calcTextBlurs(frame, TIMING);
  const gradPos = calcGradientPosition(frame, TIMING.duration);

  return (
    <AbsoluteFill style={{ fontFamily: fontFamily.headline }}>
      <div style={{ position: "absolute", inset: 0, background: THEME.bg }} />

      <div style={{
        position: "absolute", top: spacing.textTop,
        left: spacing.margin, right: spacing.margin,
        textAlign: "center", fontSize: headline.fontSize,
        fontWeight: headline.fontWeight, color: THEME.text,
      }}>
        <div style={{ opacity: line1.opacity, transform: `translateY(${line1.translateY}px)` }}>
          Min første linje
        </div>
        <div style={{ opacity: line2.opacity, transform: `translateY(${line2.translateY}px)` }}>
          <span>nøkkelord på </span>
          <span style={gradientText(googleGradients.teal.css, gradPos)}>
            Google
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

### 3. Registrer i Root.jsx

```jsx
import { MittNyeInnlegg } from "./MittNyeInnlegg";

// Legg til inne i <> ... </>:
<Composition
  id="MittNyeInnlegg"
  component={MittNyeInnlegg}
  durationInFrames={240}
  fps={60}
  width={1080}
  height={1080}
/>
```

### 4. Test

```bash
npm start
# Velg "MittNyeInnlegg" i dropdown i Remotion Studio
```

### 5. Render

```bash
# Standard
npx remotion render src/index.js MittNyeInnlegg renders/MittNyeInnlegg.mp4

# Høy kvalitet
npx remotion render src/index.js MittNyeInnlegg renders/MittNyeInnlegg-4K.mov \
  --scale 2 --codec prores --prores-profile 4444
```

---

## Sjekkliste for nytt innlegg

- [ ] Velg tema (eller lag nytt i `colors.js`)
- [ ] Velg timing (standard 30fps eller smooth 60fps)
- [ ] Skriv tekst (linje 1 + linje 2 + nøkkelord)
- [ ] Legg inn bilder i `public/`
- [ ] Opprett komponent-fil i `src/`
- [ ] Registrer i `Root.jsx`
- [ ] Test i Studio (`npm start`)
- [ ] Render til `renders/`
- [ ] Sjekk ferdig video

---

## Bilder og assets

### Navnekonvensjon

```
public/
  logo.png              ← Mediegruppen-logo (alltid samme)
  bg-mediegruppen.png   ← Bakgrunnsbilder (prefix: bg-)
  google-serp-1.png     ← Google screenshots (nummerert serie)
  google-serp-2.png
  ClashDisplay-Medium.woff2   ← Fonter (.woff2)
  Panchang-SemiBold.woff2
```

### Tips for bilder

- **Format:** PNG for screenshots (skarpest)
- **Bredde:** Minst 1160px (dobbel av 580px for `--scale 2` rendering)
- **Google SERP:** Full bredde, crop høyden etter behov
- **Bruk `staticFile()`** for å referere til filer i `public/`

---

## Justere hastighet

| Ønsket endring | Metode |
|----------------|--------|
| 50% tregere | Multipliser alle frame-offsets med 1.5 |
| 30% raskere | Multipliser alle frame-offsets med 0.7 |
| Bytte 30fps → 60fps | Doble alle offsets + durationInFrames, endre fps |

---

## Template-systemet (nytt)

Nye innlegg lages som **JSON-filer** i `content/`. ContentRenderer velger riktig template og sender props automatisk.

### Slik lager du et nytt innlegg med templates

**1. Lag JSON i `content/`** (kopier `_example.json`):

```json
{
  "id": "MittInnlegg",
  "format": "post",
  "theme": "gray",
  "gradient": "coral",
  "slides": [
    {
      "type": "video",
      "template": "HookSlide",
      "compositionId": "MittInnleggHook",
      "props": { "lines": [...], "subtext": "..." }
    },
    {
      "type": "still",
      "template": "ContentSlide",
      "compositionId": "MittInnleggS2",
      "props": { "title": "...", "body": ["..."] }
    }
  ],
  "caption": "Instagram-caption...",
  "hashtags": ["nettside", "webdesign"]
}
```

**2. Registrer i `content/index.js`:**

```js
import mittInnlegg from "./mitt-innlegg.json";
export const allContent = [..., mittInnlegg];
```

Ferdig — Root.jsx registrerer Composition/Still automatisk.

### Tilgjengelige templates

| Template | Type | Props |
|----------|------|-------|
| `HookSlide` | video | `lines[]`, `subtext` |
| `ContentSlide` | still | `title`, `body[]`, `footnote` |
| `ListSlide` | still | `title`, `items[]`, `footnote` |
| `ComparisonSlide` | still | `title`, `left{}`, `right{}` |
| `CTASlide` | still | `title`, `badge`, `instruction`, `description` |
| `SinglePost` | still | `title`, `body[]`, `cta`, `ctaSubtext` |

### Formater

| Format | Ratio | Output |
|--------|-------|--------|
| `post` | 1:1 | 2160×2160 |
| `portrait` | 4:5 | 2160×2700 |
| `story` | 9:16 | 2160×3840 |
| `landscape` | 16:9 | 2160×1216 |

---

## Mappestruktur

```
REMOTIONinnlegg/
├── content/                    ← Innhold (JSON per innlegg)
│   ├── index.js                ← Registrerer alle innlegg
│   ├── _example.json           ← Eksempel-mal
│   └── forsiden-tre-sekunder.json
│
├── src/
│   ├── Root.jsx                ← Registrerer alle compositions
│   ├── ContentRenderer.jsx     ← JSON → riktig template
│   ├── index.js                ← Entry point
│   │
│   ├── config/                 ← Konfigurasjon
│   │   ├── formats.js          ← Dimensjoner (post, portrait, story, landscape)
│   │   ├── presets.js          ← Video/animasjon (fps, springs, timing)
│   │   └── defaults.js         ← Standardverdier for alle templates
│   │
│   ├── layouts/                ← Gjenbrukbare layouts
│   │   ├── BaseLayout.jsx      ← Bakgrunn, logo, leaf, overlay, scale(2)
│   │   ├── CenteredLayout.jsx  ← Tittel + divider + subtitle
│   │   └── SplitLayout.jsx     ← To-kolonne (sammenligning)
│   │
│   ├── templates/              ← Templates som tar props
│   │   ├── HookSlide.jsx       ← Animert hook (video)
│   │   ├── ContentSlide.jsx    ← Tittel + brødtekst (still)
│   │   ├── ListSlide.jsx       ← Nummerert liste (still)
│   │   ├── ComparisonSlide.jsx ← Før/etter (still)
│   │   ├── CTASlide.jsx        ← Call to action med badge (still)
│   │   ├── SinglePost.jsx      ← Enkeltbilde-innlegg (still)
│   │   └── index.js            ← Template-registry
│   │
│   ├── lib/                    ← Designbibliotek
│   │   ├── colors.js           ← Fargepaletter og temaer
│   │   ├── fonts.js            ← Font-loading
│   │   ├── styles.js           ← Glassmorphism, gradients
│   │   ├── layout.js           ← Spacing, z-index
│   │   └── animations.js       ← Springs og beregninger
│   │
│   ├── Mobil1Hook.jsx          ← Manuelle innlegg (eldre)
│   ├── Speed1Hook.jsx
│   └── ...
│
├── public/                     ← Logo, fonter, screenshots
├── renders/                    ← Ferdige rendrede filer
└── package.json
```
