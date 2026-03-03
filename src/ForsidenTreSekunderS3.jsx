import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import { overlays, gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = themes.gray;
const gradient = googleGradients.coral;

export const ForsidenTreSekunderS3 = () => {
  const points = [
    { num: 1, title: "Hva du gjør", desc: "Én tydelig setning. Ikke tre avsnitt." },
    { num: 2, title: "For hvem", desc: "Vis målgruppen at dette er for dem." },
    { num: 3, title: "Hva de skal gjøre nå", desc: "En knapp. En handling. Ingen tvil." },
  ];

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute", top: 0, left: 0, width: 1080, height: 1080,
          transform: "scale(2)", transformOrigin: "top left", fontFamily: fontFamily.headline,
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: theme.bg }} />
        <div style={overlays.whiteFade} />

        <svg width="1800" height="1800" viewBox="0 0 24 24" style={{ position: "absolute", bottom: -900, right: -900, opacity: 0.12, transform: "rotate(-30deg)", pointerEvents: "none", zIndex: zIndex.background }}>
          <defs><radialGradient id="leafFTS3" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafFTS3)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        {/* Logo */}
        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        {/* Tekst */}
        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Hva de{" "}
            <span style={gradientText(gradient.css, 100)}>3 sekundene</span>
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            bør inneholde
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>

        {/* 3 punkter */}
        <div
          style={{
            position: "absolute", top: 460, left: spacing.margin, right: spacing.margin,
            display: "flex", flexDirection: "column", gap: 28,
            maxWidth: 820, marginLeft: "auto", marginRight: "auto",
          }}
        >
          {points.map((p) => (
            <div
              key={p.num}
              style={{
                display: "flex", alignItems: "flex-start", gap: 20,
                background: "#fff", borderRadius: 16, padding: "24px 28px",
                boxShadow: "0 4px 20px rgba(27,42,74,0.06)",
              }}
            >
              <div
                style={{
                  minWidth: 44, height: 44, borderRadius: "50%",
                  background: gradient.css,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: fontFamily.body,
                }}
              >
                {p.num}
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 600, color: theme.text, lineHeight: 1.3 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 18, fontFamily: fontFamily.body, color: theme.text, opacity: 0.55, lineHeight: 1.5, marginTop: 4 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            position: "absolute", bottom: 80, left: spacing.margin, right: spacing.margin,
            textAlign: "center", fontSize: 30, fontWeight: 600, color: theme.text, opacity: 0.7,
          }}
        >
          Det er alt.
        </div>
      </div>
    </AbsoluteFill>
  );
};
