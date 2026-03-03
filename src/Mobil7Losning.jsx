import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = { css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)" };

const checks = [
  "Lett kode.",
  "Optimaliserte bilder.",
  "Minimal JavaScript.",
  "Fungerer det på mobil, fungerer det overalt.",
];

export const Mobil7Losning = () => {
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute", top: 0, left: 0, width: 1080, height: 1080,
          transform: "scale(2)", transformOrigin: "top left", fontFamily: fontFamily.headline,
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: theme.bg }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 100%)", pointerEvents: "none" }} />

        <svg width="1800" height="1800" viewBox="0 0 24 24" style={{ position: "absolute", bottom: -900, right: -900, opacity: 0.07, transform: "rotate(-30deg)", pointerEvents: "none", zIndex: zIndex.background }}>
          <defs><radialGradient id="leafM7" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafM7)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Bygg for{" "}<span style={gradientText(gradient.css, 100)}>mobil først</span>
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            — ikke som en ettertanke.
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>

        {/* Checklist card */}
        <div style={{ position: "absolute", bottom: 70, left: "50%", transform: "translateX(-50%)", zIndex: zIndex.frontImage }}>
          <div style={{ width: 720, background: "#fff", borderRadius: 18, padding: "28px 36px", boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#5BA07E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Mobile-first tilnærming</span>
            </div>

            {checks.map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: i < checks.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: i < 3 ? "rgba(91,160,126,0.1)" : "rgba(91,160,126,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#5BA07E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{
                  fontSize: i === checks.length - 1 ? 17 : 18,
                  fontFamily: fontFamily.body,
                  fontWeight: i === checks.length - 1 ? 600 : 500,
                  color: i === checks.length - 1 ? "#5BA07E" : "#374151",
                }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
