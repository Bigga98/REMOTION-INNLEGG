import React from "react";
import {
  AbsoluteFill,
  staticFile,
} from "remotion";
import { fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import {
  glassmorphism,
  frostedVignette,
  gradientText,
  overlays,
  imageWrapper,
} from "./lib/styles";
import {
  spacing,
  logo,
  zIndex,
  imagePositions,
} from "./lib/layout";

// --- Intern komponent (statisk) ---
const Slide4Adferd = ({ theme, gradient, leafId }) => {
  const angle1 = 200;
  const angle2 = 280;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          transform: "scale(2)",
          transformOrigin: "top left",
          fontFamily: fontFamily.headline,
        }}
      >
      {/* Bakgrunn */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: theme.bg,
        }}
      />

      {/* Hvit fade i bunnen */}
      <div style={overlays.whiteFade} />

      {/* Blad-dekorasjon */}
      <svg
        width="1800"
        height="1800"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          bottom: -900,
          right: -900,
          opacity: 0.12,
          transform: "rotate(-30deg)",
          pointerEvents: "none",
          zIndex: zIndex.background,
        }}
      >
        <defs>
          <radialGradient id={leafId} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
          fill={`url(#${leafId})`}
          stroke={theme.leaf}
          strokeWidth="0.06"
        />
      </svg>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: logo.top,
          left: logo.left,
          zIndex: zIndex.ui,
          display: "flex",
          alignItems: "center",
          gap: spacing.gap,
        }}
      >
        <img
          src={staticFile("logo.png")}
          style={{
            width: logo.iconSize,
            height: logo.iconSize,
            objectFit: "contain",
          }}
        />
        <span
          style={{
            fontFamily: fontFamily.logo,
            fontSize: logo.fontSize,
            fontWeight: logo.fontWeight,
            letterSpacing: logo.letterSpacing,
            color: theme.text,
          }}
        >
          Mediegruppen
        </span>
      </div>

      {/* Tekst */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: spacing.margin,
          right: spacing.margin,
          textAlign: "center",
          color: theme.text,
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 500,
            lineHeight: 1.35,
          }}
        >
          <span style={gradientText(gradient.css, 100)}>Google</span> ser nå på hva
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 500,
            lineHeight: 1.35,
          }}
        >
          ekte mennesker gjør
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 500,
            lineHeight: 1.35,
          }}
        >
          på siden din.
        </div>

        {/* Divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
        </div>
      </div>

      {/* Mockup 1 (bak) — Bounce / dårlig signal */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: `translateX(${imagePositions.back.translateX}) rotate(${imagePositions.back.rotate}deg)`,
          zIndex: zIndex.backImage,
          ...glassmorphism(angle1),
        }}
      >
        <div style={{ ...imageWrapper, width: 680, background: "#fff", padding: 28 }}>
          {/* Status */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#D4806B" }} />
            <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Bruker forlot siden
            </span>
          </div>

          {/* Tidslinje — brukerreise */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 20 }}>
            {/* Steg 1: Søk */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 90 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#9ca3af" strokeWidth="2" />
                  <path d="M16 16l4 4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", marginTop: 6 }}>Søk</span>
            </div>
            {/* Linje */}
            <div style={{ flex: 1, height: 2, background: "#e5e7eb", marginBottom: 16 }} />
            {/* Steg 2: Klikk */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 90 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FDF0EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 15l-2 5L9 9l11 4-5 2z" stroke="#D4806B" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#D4806B", marginTop: 6 }}>Klikk</span>
            </div>
            {/* Linje */}
            <div style={{ flex: 1, height: 2, background: "rgba(212,128,107,0.3)", marginBottom: 16 }} />
            {/* Steg 3: Bounce */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 90 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FDF0EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 14l-4-4 4-4" stroke="#D4806B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 10h11a4 4 0 010 8h-1" stroke="#D4806B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#D4806B", marginTop: 6 }}>Tilbake</span>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Tid på side</div>
              <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>3s</div>
            </div>
            <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Handling</div>
              <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>Ingen</div>
            </div>
            <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Signal</div>
              <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>Bounce</div>
            </div>
          </div>
          <div style={frostedVignette} />
        </div>
      </div>

      {/* Mockup 2 (front) — Engasjement / godt signal */}
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: "50%",
          transform: `translateX(${imagePositions.front.translateX}) rotate(${imagePositions.front.rotate}deg)`,
          zIndex: zIndex.frontImage,
          ...glassmorphism(angle2, "alt"),
        }}
      >
        <div style={{ ...imageWrapper, width: 680, background: "#fff", padding: 28 }}>
          {/* Status */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#5BA07E" }} />
            <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Siste stopp — brukeren ble
            </span>
          </div>

          {/* Tidslinje — brukerreise */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 20 }}>
            {/* Steg 1: Søk */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 90 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#9ca3af" strokeWidth="2" />
                  <path d="M16 16l4 4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", marginTop: 6 }}>Søk</span>
            </div>
            {/* Linje */}
            <div style={{ flex: 1, height: 2, background: "rgba(91,160,126,0.3)", marginBottom: 16 }} />
            {/* Steg 2: Klikk */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 90 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EDF5F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 15l-2 5L9 9l11 4-5 2z" stroke="#5BA07E" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#5BA07E", marginTop: 6 }}>Klikk</span>
            </div>
            {/* Linje */}
            <div style={{ flex: 1, height: 2, background: "rgba(91,160,126,0.3)", marginBottom: 16 }} />
            {/* Steg 3: Ble */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 90 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EDF5F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="#5BA07E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#5BA07E", marginTop: 6 }}>Ble</span>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Tid på side</div>
              <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>4m 12s</div>
            </div>
            <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Handling</div>
              <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>Scrollet</div>
            </div>
            <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Signal</div>
              <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>Last click</div>
            </div>
          </div>
          <div style={frostedVignette} />
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};

// --- Eksporterte varianter ---
export const Slide4AdferdGray = () => (
  <Slide4Adferd
    theme={themes.gray}
    gradient={googleGradients.coral}
    leafId="leafS4Gray"
  />
);

export const Slide4AdferdGray2 = () => (
  <Slide4Adferd
    theme={themes.gray2}
    gradient={googleGradients.teal}
    leafId="leafS4Gray2"
  />
);
