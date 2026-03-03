// ============================================
// MEDIEGRUPPEN — Workflows & Metoder
// ============================================
//
// Denne filen dokumenterer HOW-TO for alt som gjøres i prosjektet.
// Bruk dette som oppslagsverk når du lager nye varianter.
//
// INNHOLD:
// 1. Render-kommandoer
// 2. Ny komponent-mal (boilerplate)
// 3. Registrering i Root.jsx
// 4. Hvordan legge til nytt tema
// 5. Hvordan legge til nye bilder/assets
// 6. Hvordan justere timing/hastighet
// ============================================

import { spring, interpolate, staticFile } from "remotion";
import { springs, timings, makeSlideIn, calcTextBlurs, calcFocusPull, calcGlassAngles, calcGradientPosition } from "./animations";
import { themes, googleGradients, glass } from "./colors";
import { fontFamily } from "./fonts";
import { spacing, logo, images, zIndex, compositions, imagePositions, headline, arrow } from "./layout";
import { glassmorphism, frostedVignette, imageFilter, gradientText, overlays, shadows, imageWrapper } from "./styles";

// ============================================
// 1. RENDER-KOMMANDOER
// ============================================
//
// FORHÅNDSVISNING (starter Remotion Studio i nettleseren):
//   npm start
//   ELLER: npx remotion studio
//
// RENDER TIL VIDEO:
//
//   Standard kvalitet (H.264, 1080x1080):
//     npx remotion render src/index.js <CompositionId> renders/<filnavn>.mp4
//
//   Høy kvalitet (ProRes 4444, 2x oppløsning = 2160x2160):
//     npx remotion render src/index.js <CompositionId> renders/<filnavn>.mov \
//       --scale 2 --codec prores --prores-profile 4444
//
//   Eksempler:
//     npx remotion render src/index.js GoogleSynlighetGray renders/GoogleSynlighetGray.mp4
//     npx remotion render src/index.js GoogleSynlighetGray renders/GoogleSynlighetGray-4K.mov --scale 2 --codec prores --prores-profile 4444
//
//   Still (enkeltbilde, f.eks. FunnelImage):
//     npx remotion still src/index.js <StillId> renders/<filnavn>.png --scale 2
//
//   Alle rendrede filer lagres i /renders/ mappen.
//

// ============================================
// 2. NY KOMPONENT — BOILERPLATE
// ============================================
//
// Kopier denne malen til en ny .jsx-fil i src/.
// Erstatt PLACEHOLDERS med dine verdier.
//
// FILNAVN-KONVENSJON: PascalCase, beskrivende.
//   Eksempel: GoogleSynlighetDark3.jsx, SEOTipsBlue.jsx
//

/**
 * Mal for en ny Instagram-post (1080x1080) med animasjoner.
 *
 * STEG FOR Å LAGE EN NY VARIANT:
 *
 * 1. Kopier denne malen til src/NyttNavn.jsx
 * 2. Velg tema fra themes (dark/light/gray/gray2) eller lag nytt i colors.js
 * 3. Velg timing fra timings (standard/smooth) eller lag egne offsets
 * 4. Bytt ut tekst, bilder og Google-gradient
 * 5. Registrer i Root.jsx (se seksjon 3)
 * 6. Test med: npm start → velg din composition i Studio
 * 7. Render med kommandoene i seksjon 1
 */
export const COMPONENT_TEMPLATE = `
import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
} from "remotion";
// --- Importer fra biblioteket ---
import { clashDisplay, panchang, fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import { springs, timings, makeSlideIn, makeSlideX, calcTextBlurs, calcFocusPull, calcGlassAngles, calcGradientPosition } from "./lib/animations";
import { glassmorphism, frostedVignette, imageFilter, gradientText, overlays, imageWrapper } from "./lib/styles";
import { spacing, logo, images, zIndex, imagePositions, headline } from "./lib/layout";

// --- Velg tema og timing ---
const THEME = themes.gray;          // Bytt til: themes.dark, themes.light, themes.gray2
const TIMING = timings.smooth;      // Bytt til: timings.standard (30fps)
const GOOGLE_GRAD = googleGradients.coral;  // Bytt til: .teal, .red, .blue

export const MittNyeInnlegg = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Animasjoner (bruk hjelpefunksjoner) ---
  const line1 = makeSlideIn(frame, fps, TIMING.line1);
  const line2 = makeSlideIn(frame, fps, TIMING.line2);
  const arrowAnim = makeSlideX(frame, fps, TIMING.arrow);
  const [blur1, blur2, blur3] = calcTextBlurs(frame, TIMING);

  // --- Bilder med focus pull ---
  const img1Spring = spring({ frame: frame - TIMING.img1, fps, config: springs.smooth });
  const img1Y = interpolate(img1Spring, [0, 1], [50, 0]);
  const img1Focus = calcFocusPull(img1Spring);

  const img2Spring = spring({ frame: frame - TIMING.img2, fps, config: springs.smooth });
  const img2Y = interpolate(img2Spring, [0, 1], [50, 0]);
  const img2Focus = calcFocusPull(img2Spring);

  // --- Glassmorphism + gradient-tekst ---
  const { angle1, angle2 } = calcGlassAngles(frame, TIMING.duration);
  const gradPos = calcGradientPosition(frame, TIMING.duration);

  return (
    <AbsoluteFill style={{ fontFamily: fontFamily.headline }}>
      {/* Bakgrunn */}
      <div style={{ position: "absolute", inset: 0, background: THEME.bg }} />

      {/* Overlay */}
      <div style={overlays.whiteFade} />

      {/* Logo */}
      <div style={{
        position: "absolute",
        top: logo.top, left: logo.left,
        zIndex: zIndex.ui,
        display: "flex", alignItems: "center", gap: spacing.gap,
      }}>
        <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
        <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, color: THEME.text }}>
          Mediegruppen
        </span>
      </div>

      {/* Tekst */}
      <div style={{
        position: "absolute", top: spacing.textTop, left: spacing.margin, right: spacing.margin,
        textAlign: "center", fontSize: headline.fontSize, fontWeight: headline.fontWeight,
        lineHeight: spacing.lineHeight, letterSpacing: spacing.letterSpacing, color: THEME.text,
      }}>
        <div style={{ opacity: line1.opacity, transform: \\\`translateY(\\\${line1.translateY}px)\\\` }}>
          Din første linje her
        </div>
        <div style={{ opacity: line2.opacity, transform: \\\`translateY(\\\${line2.translateY}px)\\\` }}>
          <span style={{ filter: blur1 > 0.1 ? \\\`blur(\\\${blur1}px)\\\` : "none" }}>ord1 </span>
          <span style={{ filter: blur2 > 0.1 ? \\\`blur(\\\${blur2}px)\\\` : "none" }}>ord2 </span>
          <span style={{ ...gradientText(GOOGLE_GRAD.css, gradPos), filter: blur3 > 0.1 ? \\\`blur(\\\${blur3}px)\\\` : "none" }}>
            Nøkkelord
          </span>
        </div>
      </div>

      {/* Bilde 1 (bak) */}
      <div style={{
        position: "absolute",
        bottom: imagePositions.back.bottom, left: "50%",
        transform: \\\`translateX(\\\${imagePositions.back.translateX}) translateY(\\\${img1Y}px) rotate(\\\${imagePositions.back.rotate}deg)\\\`,
        opacity: img1Spring, zIndex: zIndex.backImage,
        ...glassmorphism(angle1),
      }}>
        <div style={imageWrapper}>
          <img src={staticFile("ditt-bilde-1.png")} style={{ width: images.width, borderRadius: images.borderRadius, display: "block", ...imageFilter(img1Focus.blur, img1Focus.brightness, img1Focus.scale) }} />
          <div style={frostedVignette} />
        </div>
      </div>

      {/* Bilde 2 (front) */}
      <div style={{
        position: "absolute",
        bottom: imagePositions.front.bottom, left: "50%",
        transform: \\\`translateX(\\\${imagePositions.front.translateX}) translateY(\\\${img2Y}px) rotate(\\\${imagePositions.front.rotate}deg)\\\`,
        opacity: img2Spring, zIndex: zIndex.frontImage,
        ...glassmorphism(angle2, "alt"),
      }}>
        <div style={imageWrapper}>
          <img src={staticFile("ditt-bilde-2.png")} style={{ width: images.width, borderRadius: images.borderRadius, display: "block", ...imageFilter(img2Focus.blur, img2Focus.brightness, img2Focus.scale) }} />
          <div style={frostedVignette} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
`;

// ============================================
// 3. REGISTRERING I Root.jsx
// ============================================
//
// Legg til import + Composition i Root.jsx:
//
//   import { MittNyeInnlegg } from "./MittNyeInnlegg";
//
//   <Composition
//     id="MittNyeInnlegg"            ← Unikt navn (brukes i render-kommando)
//     component={MittNyeInnlegg}
//     durationInFrames={240}          ← 240 for 60fps (4 sek), 120 for 30fps (4 sek)
//     fps={60}                        ← 60 for smooth, 30 for standard
//     width={1080}                    ← 1080 for Instagram
//     height={1080}                   ← 1080 for Instagram
//   />
//
// DIMENSJONER:
//   Instagram post:  1080 x 1080  (compositions.instagram)
//   Instagram story: 1080 x 1920
//   Bred banner:     1800 x 600   (compositions.wide)
//   Hero-banner:     1200 x 675   (compositions.hero)
//
// VARIGHET:
//   4 sekunder ved 30fps = 120 frames
//   4 sekunder ved 60fps = 240 frames
//   10 sekunder ved 30fps = 300 frames
//

// ============================================
// 4. HVORDAN LEGGE TIL NYTT TEMA
// ============================================
//
// Åpne src/lib/colors.js og legg til i themes-objektet:
//
//   export const themes = {
//     ...eksisterende,
//     mittTema: {
//       bg: "#fafafa",                 // Bakgrunnsfarge (eller gradient-streng)
//       text: "#222",                  // Hovedtekstfarge
//       leaf: "#222",                  // Dekorativ bladfarge
//       arrow: "rgba(0,0,0,0.4)",     // Pilfarge
//     },
//   };
//
// For en ny Google-gradient, legg til i googleGradients:
//
//   export const googleGradients = {
//     ...eksisterende,
//     mittGrad: {
//       colors: ["#ff6b6b", "#ee5a24", "#ff6b6b"],
//       css: "linear-gradient(90deg, #ff6b6b, #ee5a24, #ff6b6b)",
//     },
//   };
//

// ============================================
// 5. HVORDAN LEGGE TIL NYE BILDER/ASSETS
// ============================================
//
// 1. Legg bildet i public/-mappen:
//      public/mitt-nye-bilde.png
//
// 2. Referér til det i komponenten med staticFile():
//      <img src={staticFile("mitt-nye-bilde.png")} />
//
// TIPS FOR BILDER:
//   - Bruk PNG for screenshots (skarpere)
//   - Anbefalt bredde: minst 1160px (580px × 2 for --scale 2)
//   - Screenshots av Google SERP: bruk full bredde, crop høyden
//   - Fonter: .woff2 format, legg i public/
//
// NAVNEKONVENSJON:
//   google-serp-1.png, google-serp-2.png   (nummererte serier)
//   logo.png                                (alltid samme logo)
//   bg-mediegruppen.png                     (bakgrunner med prefix bg-)
//

// ============================================
// 6. HVORDAN JUSTERE TIMING/HASTIGHET
// ============================================
//
// GJØRE ALT TREGERE:
//   Multipliser alle frame-offsets med en faktor > 1.
//   Eksempel: 50% tregere = alle offsets × 1.5
//
// GJØRE ALT RASKERE:
//   Multipliser alle frame-offsets med en faktor < 1.
//   Eksempel: 30% raskere = alle offsets × 0.7
//
// BYTTE FRA 30fps TIL 60fps:
//   1. Doble alle frame-offsets (fordi dobbelt så mange frames per sekund)
//   2. Doble durationInFrames i Root.jsx
//   3. Endre fps i Root.jsx
//
// EGNE TIMINGS:
//   Lag en ny entry i timings-objektet i animations.js:
//
//   export const timings = {
//     ...eksisterende,
//     mittTiming: {
//       fps: 60,
//       duration: 300,     // 5 sekunder ved 60fps
//       line1: 0,
//       line2: 20,
//       arrow: 45,
//       img1: 60,
//       img2: 80,
//       blur1: { start: 20, end: 50 },
//       blur2: { start: 26, end: 55 },
//       blur3: { start: 32, end: 60 },
//     },
//   };
//

// ============================================
// 7. SJEKKLISTE FOR NYTT INNLEGG
// ============================================
//
// □ Velg tema (eller lag nytt i colors.js)
// □ Velg timing (standard 30fps eller smooth 60fps)
// □ Skriv tekst (linje 1 + linje 2 + nøkkelord)
// □ Legg inn bilder i public/
// □ Opprett komponent-fil i src/
// □ Registrer i Root.jsx
// □ Test i Studio (npm start)
// □ Render til renders/-mappen
// □ Sjekk video i QuickTime/VLC
//
