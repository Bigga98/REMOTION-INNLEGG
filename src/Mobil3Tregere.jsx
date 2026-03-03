import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = { css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)" };

const reasons = [
  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", text: "Sparer batteri, ikke tid." },
  { icon: "M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.97L13.04 4.18a2 2 0 00-3.5 0L2.32 16.03A2 2 0 004.07 19z", text: "Bremser ned når den blir varm." },
  { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M1.642 10.897A10.976 10.976 0 0112 6c3.867 0 7.368 1.986 9.358 4.897M5.282 13.3A7.483 7.483 0 0112 10.5c2.623 0 4.992 1.073 6.718 2.8", text: "Tregere mobilnett." },
  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "Ingen vifte til å kjøle seg ned." },
];

export const Mobil3Tregere = () => {
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
          <defs><radialGradient id="leafM3" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafM3)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Mobilen{" "}<span style={gradientText(gradient.css, 100)}>sparer batteri</span>,
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            ikke tid.
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>

        {/* Reason cards */}
        <div style={{ position: "absolute", bottom: 70, left: "50%", transform: "translateX(-50%)", zIndex: zIndex.frontImage }}>
          <div style={{ width: 780, background: "#fff", borderRadius: 18, padding: "24px 32px", boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)" }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: i < reasons.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(91,160,126,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d={r.icon} stroke="#5BA07E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: 18, fontFamily: fontFamily.body, fontWeight: 500, color: "#374151" }}>{r.text}</span>
              </div>
            ))}

            <div style={{ marginTop: 14, textAlign: "center", fontSize: 14, fontFamily: fontFamily.body, color: "#B56B4A", fontWeight: 600, opacity: 0.8 }}>
              Samme nettside — mye lenger ventetid.
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
