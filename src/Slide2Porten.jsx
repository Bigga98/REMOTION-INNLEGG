import React from "react";
import {
  AbsoluteFill,
  staticFile,
} from "remotion";
import { clashDisplay, panchang, fontFamily } from "./lib/fonts";
import { themes, googleGradients, glass } from "./lib/colors";
import {
  glassmorphism,
  frostedVignette,
  imageFilter,
  gradientText,
  overlays,
  imageWrapper,
} from "./lib/styles";
import {
  spacing,
  logo,
  images,
  zIndex,
  imagePositions,
} from "./lib/layout";

// --- Intern komponent (statisk — ingen animasjoner) ---
const Slide2Porten = ({ theme, gradient, leafId }) => {
  // Statiske glass-vinkler (midtpunkter fra original animasjon)
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
        {/* Label: "Første porten:" */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 500,
            lineHeight: 1.3,
            marginBottom: 16,
          }}
        >
          Første porten:
        </div>

        {/* Linje 1 */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          <span
            style={{
              ...gradientText(gradient.css, 100),
            }}
          >
            Google
          </span>
          <span>
            {" "}sjekker det helt grunnleggende
          </span>
        </div>

        {/* Linje 2 */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            lineHeight: 1.4,
            marginTop: 4,
          }}
        >
          — matcher innholdet det folk
        </div>

        {/* Linje 3 */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            lineHeight: 1.4,
            marginTop: 4,
          }}
        >
          faktisk søker etter?
        </div>

        {/* Divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
        </div>
      </div>

      {/* Mockup 1 (bak) — Søkefelt */}
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
          {/* Google-logo + søkefelt */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
            <div style={{ fontSize: 22, fontWeight: 600, fontFamily: fontFamily.body, color: "#4285f4", letterSpacing: "-0.5px" }}>
              <span style={{ color: "#4285f4" }}>G</span>
              <span style={{ color: "#ea4335" }}>o</span>
              <span style={{ color: "#fbbc05" }}>o</span>
              <span style={{ color: "#4285f4" }}>g</span>
              <span style={{ color: "#34a853" }}>l</span>
              <span style={{ color: "#ea4335" }}>e</span>
            </div>
          </div>
          <div style={{
            background: "#f8f9fa", borderRadius: 24, padding: "12px 20px",
            border: "1px solid #dfe1e5", fontFamily: fontFamily.body, fontSize: 16, color: "#202124",
          }}>
            beste crm system for bedrifter
          </div>
          {/* Søkeresultat */}
          <div style={{ marginTop: 24, paddingBottom: 4 }}>
            <div style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#70757a", marginBottom: 4 }}>
              www.eksempel.no
            </div>
            <div style={{ fontSize: 18, fontFamily: fontFamily.body, color: "#1a0dab", fontWeight: 500, marginBottom: 6 }}>
              Beste CRM-system for bedrifter i 2026
            </div>
            <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#4d5156", lineHeight: 1.5 }}>
              Komplett guide til å velge riktig <span style={{ fontWeight: 600 }}>CRM-system</span> for din <span style={{ fontWeight: 600 }}>bedrift</span>. Sammenlign de beste løsningene...
            </div>
          </div>
          <div style={frostedVignette} />
        </div>
      </div>

      {/* Mockup 2 (front) — Innhold som matcher */}
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
          {/* Artikkel-header */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#5BA07E" }} />
            <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Innhold matcher søk
            </span>
          </div>
          <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 600, color: "#202124", lineHeight: 1.35, marginBottom: 14 }}>
            Beste CRM-system for bedrifter
          </div>
          <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#5f6368", lineHeight: 1.6, marginBottom: 16 }}>
            Vi har testet og sammenlignet de beste CRM-systemene for norske bedrifter. Her er vår anbefaling basert på funksjoner, pris og brukervennlighet.
          </div>
          {/* Match-indikatorer */}
          <div style={{ display: "flex", gap: 8 }}>
            {["CRM", "bedrifter", "beste"].map((word) => (
              <div key={word} style={{
                fontSize: 11, fontFamily: fontFamily.body, fontWeight: 600,
                color: "#5BA07E", background: "rgba(91,160,126,0.08)",
                padding: "4px 10px", borderRadius: 12,
              }}>
                {word} ✓
              </div>
            ))}
          </div>
          <div style={frostedVignette} />
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};

// --- Eksporterte varianter ---
export const Slide2PortenGray = () => (
  <Slide2Porten
    theme={themes.gray}
    gradient={googleGradients.coral}
    leafId="leafS2Gray"
  />
);

export const Slide2PortenGray2 = () => (
  <Slide2Porten
    theme={themes.gray2}
    gradient={googleGradients.teal}
    leafId="leafS2Gray2"
  />
);
