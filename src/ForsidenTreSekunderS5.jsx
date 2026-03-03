import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import { overlays, gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = themes.gray;
const gradient = googleGradients.coral;

export const ForsidenTreSekunderS5 = () => {
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
          <defs><radialGradient id="leafFTS5" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafFTS5)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        {/* Logo */}
        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        {/* Title */}
        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Er forsiden din
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            <span style={gradientText(gradient.css, 100)}>tydelig nok?</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>

        {/* CTA card */}
        <div style={{ position: "absolute", bottom: 100, left: "50%", transform: "translateX(-50%)", zIndex: zIndex.frontImage }}>
          <div
            style={{
              width: 720, background: "#fff", borderRadius: 18,
              padding: "36px 44px",
              boxShadow: "0 8px 40px rgba(27,42,74,0.08), 0 2px 8px rgba(27,42,74,0.04)",
              textAlign: "center",
            }}
          >
            {/* Comment icon */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <div
                style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "rgba(212,128,107,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#D4806B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div style={{ fontSize: 16, fontFamily: fontFamily.body, color: "#9ca3af", fontWeight: 500, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Send oss lenken din:
            </div>

            {/* FORSIDE badge */}
            <div style={{ display: "inline-block", background: gradient.css, borderRadius: 12, padding: "14px 40px", marginBottom: 22 }}>
              <span style={{ fontSize: 32, fontFamily: fontFamily.body, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>FORSIDE</span>
            </div>

            <div style={{ fontSize: 16, fontFamily: fontFamily.body, color: "#374151", lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
              Vi gir deg en ærlig vurdering av forsiden din
              <br />
              — helt gratis, ingen forpliktelser.
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
