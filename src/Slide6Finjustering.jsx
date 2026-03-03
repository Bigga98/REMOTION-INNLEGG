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
const Slide6Finjustering = ({ theme, gradient, leafId }) => {
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
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Til slutt{" "}
          <span style={gradientText(gradient.css, 100)}>finjusterer</span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Google resultatene.
        </div>

        {/* Divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
        </div>

        {/* Punchline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.4,
            marginTop: 24,
            opacity: 0.55,
          }}
        >
          Ferskt innhold? Troverdig kilde? Nok variasjon?
        </div>
      </div>

      {/* Mockup 1 (bak) — Utdatert innhold */}
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
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#D4806B" }} />
            <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Nedprioritert
            </span>
          </div>

          {/* Sjekk-liste */}
          {[
            { label: "Sist oppdatert", value: "mars 2019", bad: true },
            { label: "Kilde-autoritet", value: "Lav", bad: true },
            { label: "Innholdsvariasjon", value: "Kun tekst", bad: true },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: i < 2 ? "1px solid rgba(212,128,107,0.15)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(212,128,107,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, color: "#D4806B" }}>&times;</span>
                </div>
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, color: "rgba(212,128,107,0.6)" }}>{item.label}</span>
              </div>
              <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 600, color: "#D4806B" }}>{item.value}</span>
            </div>
          ))}

          {/* Kvalitets-score */}
          <div style={{ marginTop: 16, background: "rgba(212,128,107,0.1)", borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "rgba(212,128,107,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Kvalitetsscore</span>
            <span style={{ fontSize: 22, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>2.1 / 10</span>
          </div>
          <div style={frostedVignette} />
        </div>
      </div>

      {/* Mockup 2 (front) — Ferskt, troverdig innhold */}
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
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#5BA07E" }} />
            <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Prioritert
            </span>
          </div>

          {/* Sjekk-liste */}
          {[
            { label: "Sist oppdatert", value: "jan 2026" },
            { label: "Kilde-autoritet", value: "Høy" },
            { label: "Innholdsvariasjon", value: "Tekst + video + bilder" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: i < 2 ? "1px solid rgba(91,160,126,0.15)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(91,160,126,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, color: "#5BA07E" }}>&check;</span>
                </div>
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, color: "rgba(91,160,126,0.6)" }}>{item.label}</span>
              </div>
              <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 600, color: "#5BA07E" }}>{item.value}</span>
            </div>
          ))}

          {/* Kvalitets-score */}
          <div style={{ marginTop: 16, background: "rgba(91,160,126,0.1)", borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "rgba(91,160,126,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Kvalitetsscore</span>
            <span style={{ fontSize: 22, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>9.2 / 10</span>
          </div>
          <div style={frostedVignette} />
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};

// --- Eksporterte varianter ---
export const Slide6FinjusteringGray = () => (
  <Slide6Finjustering
    theme={themes.gray}
    gradient={googleGradients.coral}
    leafId="leafS6Gray"
  />
);

export const Slide6FinjusteringGray2 = () => (
  <Slide6Finjustering
    theme={themes.gray2}
    gradient={googleGradients.teal}
    leafId="leafS6Gray2"
  />
);
