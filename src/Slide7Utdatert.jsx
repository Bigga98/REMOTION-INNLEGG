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
const Slide7Utdatert = ({ theme, gradient, leafId }) => {
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
          <span style={gradientText(gradient.css, 100)}>Utdatert</span> innhold
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          = lavere synlighet.
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
          De som oppdaterer jevnlig, får en stille fordel.
        </div>
      </div>

      {/* Mockup 1 (bak) — Gammelt innhold, synker */}
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
              Utdatert — synker i søk
            </span>
          </div>

          {/* Tidslinje: innhold som eldes */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "rgba(212,128,107,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Publisert</span>
              <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "rgba(212,128,107,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>I dag</span>
            </div>
            <div style={{ height: 6, background: "rgba(212,128,107,0.15)", borderRadius: 3, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: 6, width: "100%", background: "linear-gradient(90deg, rgba(212,128,107,0.3) 0%, #D4806B 100%)", borderRadius: 3 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600 }}>feb 2021</span>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600 }}>4 år uten oppdatering</span>
            </div>
          </div>

          {/* Posisjonstrend */}
          {[
            { period: "2022", pos: "Side 1, plass 3", trend: "—" },
            { period: "2023", pos: "Side 1, plass 8", trend: "↓ 5" },
            { period: "2024", pos: "Side 2, plass 4", trend: "↓ 6" },
            { period: "2025", pos: "Side 3+", trend: "↓ ?" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: i < 3 ? "1px solid rgba(212,128,107,0.15)" : "none",
              }}
            >
              <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "rgba(212,128,107,0.6)", width: 50 }}>{item.period}</span>
              <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 500 }}>{item.pos}</span>
              <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 700, width: 40, textAlign: "right" }}>{item.trend}</span>
            </div>
          ))}

          <div style={frostedVignette} />
        </div>
      </div>

      {/* Mockup 2 (front) — Oppdatert innhold, stiger */}
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
              Oppdatert — klatrer i søk
            </span>
          </div>

          {/* Tidslinje: jevnlig oppdatert */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "rgba(91,160,126,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Publisert</span>
              <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "rgba(91,160,126,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Sist oppdatert</span>
            </div>
            <div style={{ height: 6, background: "rgba(91,160,126,0.15)", borderRadius: 3, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: 6, width: "100%", background: "linear-gradient(90deg, rgba(91,160,126,0.3) 0%, #5BA07E 100%)", borderRadius: 3 }} />
              {/* Oppdateringspunkter */}
              {[25, 45, 65, 85].map((pct, i) => (
                <div key={i} style={{ position: "absolute", left: `${pct}%`, top: -2, width: 10, height: 10, borderRadius: "50%", background: "#fff", border: "2px solid #5BA07E" }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600 }}>feb 2021</span>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600 }}>jan 2026</span>
            </div>
          </div>

          {/* Posisjonstrend */}
          {[
            { period: "2022", pos: "Side 1, plass 6", trend: "—" },
            { period: "2023", pos: "Side 1, plass 4", trend: "↑ 2" },
            { period: "2024", pos: "Side 1, plass 2", trend: "↑ 2" },
            { period: "2025", pos: "Side 1, plass 1", trend: "↑ 1" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: i < 3 ? "1px solid rgba(91,160,126,0.15)" : "none",
              }}
            >
              <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "rgba(91,160,126,0.6)", width: 50 }}>{item.period}</span>
              <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 500 }}>{item.pos}</span>
              <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 700, width: 40, textAlign: "right" }}>{item.trend}</span>
            </div>
          ))}

          <div style={frostedVignette} />
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};

// --- Eksporterte varianter ---
export const Slide7UtdatertGray = () => (
  <Slide7Utdatert
    theme={themes.gray}
    gradient={googleGradients.coral}
    leafId="leafS7Gray"
  />
);

export const Slide7UtdatertGray2 = () => (
  <Slide7Utdatert
    theme={themes.gray2}
    gradient={googleGradients.teal}
    leafId="leafS7Gray2"
  />
);
