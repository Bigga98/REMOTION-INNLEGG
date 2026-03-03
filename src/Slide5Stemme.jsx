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
const Slide5Stemme = ({ theme, gradient, leafId }) => {
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
        {/* Hovedtekst */}
        <div
          style={{
            fontSize: 50,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Sider folk liker,{" "}
          <span style={gradientText(gradient.css, 100)}>skyves opp.</span>
        </div>
        <div
          style={{
            fontSize: 50,
            fontWeight: 500,
            lineHeight: 1.3,
            marginTop: 4,
          }}
        >
          Sider folk forlater, skyves ned.
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
          Hva stemmer dine besøkende?
        </div>
      </div>

      {/* Mockup 1 (bak) — Side som skyves ned */}
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
              Skyves ned
            </span>
          </div>

          {/* Ranking-kort */}
          {[
            { pos: "#4", title: "Billige CRM-løsninger 2026", change: "-2", bad: true },
            { pos: "#5", title: "CRM for små bedrifter — guide", change: "-1", bad: true },
            { pos: "#8", title: "Topp 10 CRM-systemer", change: "-3", bad: true },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: i < 2 ? "1px solid #f3f4f6" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 700, color: "#d1d5db", width: 28 }}>{item.pos}</span>
                <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#374151", fontWeight: 500 }}>{item.title}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 2v6M2 5l3 3 3-3" stroke="#D4806B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                <span style={{ fontSize: 12, fontFamily: fontFamily.body, fontWeight: 600, color: "#D4806B" }}>{item.change}</span>
              </div>
            </div>
          ))}

          {/* Engasjement-bar */}
          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Brukerengasjement</span>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600 }}>18%</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: "#f3f4f6" }}>
              <div style={{ width: "18%", height: "100%", borderRadius: 3, background: "#D4806B" }} />
            </div>
          </div>
          <div style={frostedVignette} />
        </div>
      </div>

      {/* Mockup 2 (front) — Side som skyves opp */}
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
              Skyves opp
            </span>
          </div>

          {/* Ranking-kort */}
          {[
            { pos: "#1", title: "Beste CRM for bedrifter (2026)", change: "+3" },
            { pos: "#2", title: "CRM-guide: Slik velger du riktig", change: "+2" },
            { pos: "#3", title: "Komplett CRM-sammenligning", change: "+1" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: i < 2 ? "1px solid #f3f4f6" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 700, color: i === 0 ? "#5BA07E" : "#d1d5db", width: 28 }}>{item.pos}</span>
                <span style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#374151", fontWeight: 500 }}>{item.title}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 8V2M2 5l3-3 3 3" stroke="#5BA07E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                <span style={{ fontSize: 12, fontFamily: fontFamily.body, fontWeight: 600, color: "#5BA07E" }}>{item.change}</span>
              </div>
            </div>
          ))}

          {/* Engasjement-bar */}
          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em" }}>Brukerengasjement</span>
              <span style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600 }}>87%</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: "#f3f4f6" }}>
              <div style={{ width: "87%", height: "100%", borderRadius: 3, background: "#5BA07E" }} />
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
export const Slide5StemmeGray = () => (
  <Slide5Stemme
    theme={themes.gray}
    gradient={googleGradients.coral}
    leafId="leafS5Gray"
  />
);

export const Slide5StemmeGray2 = () => (
  <Slide5Stemme
    theme={themes.gray2}
    gradient={googleGradients.teal}
    leafId="leafS5Gray2"
  />
);
