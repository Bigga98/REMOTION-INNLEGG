import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = { css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)" };

export const Mobil8CTA = () => {
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
          <defs><radialGradient id="leafM8" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafM8)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Vil du se forskjellen
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            på <span style={gradientText(gradient.css, 100)}>din side</span>?
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>

        {/* CTA card */}
        <div style={{ position: "absolute", bottom: 100, left: "50%", transform: "translateX(-50%)", zIndex: zIndex.frontImage }}>
          <div style={{ width: 720, background: "#fff", borderRadius: 18, padding: "36px 44px", boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)", textAlign: "center" }}>
            {/* Comment icon */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(91,160,126,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#5BA07E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div style={{ fontSize: 16, fontFamily: fontFamily.body, color: "#9ca3af", fontWeight: 500, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Skriv i kommentarfeltet:
            </div>

            {/* MOBIL badge */}
            <div style={{ display: "inline-block", background: gradient.css, borderRadius: 12, padding: "14px 40px", marginBottom: 22 }}>
              <span style={{ fontSize: 32, fontFamily: fontFamily.body, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>MOBIL</span>
            </div>

            <div style={{ fontSize: 16, fontFamily: fontFamily.body, color: "#374151", lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
              Vi kjører en gratis hastighetstest og viser deg
              <br />
              hva mobil-besøkerne dine faktisk opplever.
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
