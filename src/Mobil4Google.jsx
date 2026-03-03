import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = { css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)" };

export const Mobil4Google = () => {
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
          <defs><radialGradient id="leafM4" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafM4)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Google tester med en
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            <span style={gradientText(gradient.css, 100)}>telefon fra 2016.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
          <div style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.4, marginTop: 20, opacity: 0.55 }}>
            Med vilje. Fordi det er virkeligheten
            <br />
            til mange av besøkerne dine.
          </div>
        </div>

        {/* Phone mockup card */}
        <div style={{ position: "absolute", bottom: 70, left: "50%", transform: "translateX(-50%)", zIndex: zIndex.frontImage }}>
          <div style={{ width: 700, background: "#fff", borderRadius: 18, padding: "28px 36px", boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#5BA07E" strokeWidth="2" /><path d="M16 16l4 4" stroke="#5BA07E" strokeWidth="2" strokeLinecap="round" /></svg>
              <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Google Lighthouse-simulering</span>
            </div>

            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {/* Phone icon */}
              <div style={{ width: 100, height: 160, borderRadius: 16, border: "2px solid #dee2e6", background: "#fafbfc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                <div style={{ width: 24, height: 3, borderRadius: 2, background: "#dee2e6", position: "absolute", top: 10 }} />
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 8 }}>
                  <rect x="5" y="2" width="14" height="20" rx="3" stroke="#B56B4A" strokeWidth="1.5" />
                  <line x1="9" y1="18" x2="15" y2="18" stroke="#B56B4A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>Moto G4</span>
                <span style={{ fontSize: 8, fontFamily: fontFamily.body, color: "#B56B4A", fontWeight: 600 }}>2016</span>
              </div>

              {/* Specs */}
              <div style={{ flex: 1 }}>
                {[
                  { label: "Enhet", value: "Moto G4 (simulert)", color: "#B56B4A" },
                  { label: "CPU", value: "4x throttled", color: "#B56B4A" },
                  { label: "Nettverk", value: "Slow 4G (1.6 Mbps)", color: "#B56B4A" },
                  { label: "RTT", value: "150ms latency", color: "#9ca3af" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 3 ? "1px solid #f3f4f6" : "none" }}>
                    <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</span>
                    <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: item.color, fontWeight: 600 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
