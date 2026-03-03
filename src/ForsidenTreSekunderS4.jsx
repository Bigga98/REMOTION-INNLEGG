import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import { overlays, gradientText, glassmorphism } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = themes.gray;
const gradient = googleGradients.coral;

export const ForsidenTreSekunderS4 = () => {
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
          <defs><radialGradient id="leafFTS4" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafFTS4)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        {/* Logo */}
        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        {/* Title */}
        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.3 }}>
            <span style={gradientText(gradient.css, 100)}>Eksempel</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>

        {/* Dårlig eksempel (bak, vippet venstre) */}
        <div
          style={{
            position: "absolute", bottom: 100, left: "50%",
            transform: "translateX(-65%) rotate(-5deg)",
            zIndex: zIndex.backImage,
            ...glassmorphism(200),
          }}
        >
          <div
            style={{
              width: 580, background: "#fff", borderRadius: 12, padding: 24,
              position: "relative", overflow: "hidden",
            }}
          >
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: "#B56B4A" }} />
              <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#B56B4A", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Dårlig
              </span>
            </div>

            {/* Fake hero section */}
            <div style={{ background: "rgba(27,42,74,0.03)", borderRadius: 8, padding: 20 }}>
              <div style={{ fontSize: 16, fontFamily: fontFamily.body, fontWeight: 600, color: theme.text, lineHeight: 1.4 }}>
                Velkommen til vår nettside.
              </div>
              <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: theme.text, opacity: 0.5, lineHeight: 1.6, marginTop: 8 }}>
                Vi har lang erfaring med å levere kvalitetstjenester til våre kunder i hele Norge. Vi tilbyr et bredt spekter av løsninger...
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <div style={{ fontSize: 10, fontFamily: fontFamily.body, background: "rgba(27,42,74,0.06)", padding: "4px 10px", borderRadius: 6, color: theme.text, opacity: 0.4 }}>Les mer</div>
                <div style={{ fontSize: 10, fontFamily: fontFamily.body, background: "rgba(27,42,74,0.06)", padding: "4px 10px", borderRadius: 6, color: theme.text, opacity: 0.4 }}>Kontakt</div>
                <div style={{ fontSize: 10, fontFamily: fontFamily.body, background: "rgba(27,42,74,0.06)", padding: "4px 10px", borderRadius: 6, color: theme.text, opacity: 0.4 }}>Om oss</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bra eksempel (front, vippet høyre) */}
        <div
          style={{
            position: "absolute", bottom: 140, left: "50%",
            transform: "translateX(-30%) rotate(5deg)",
            zIndex: zIndex.frontImage,
            ...glassmorphism(280, "alt"),
          }}
        >
          <div
            style={{
              width: 580, background: "#fff", borderRadius: 12, padding: 24,
              position: "relative", overflow: "hidden",
            }}
          >
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: "#5BA07E" }} />
              <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Bra
              </span>
            </div>

            {/* Clear hero section */}
            <div style={{ background: "rgba(91,160,126,0.04)", borderRadius: 8, padding: 20 }}>
              <div style={{ fontSize: 18, fontFamily: fontFamily.body, fontWeight: 700, color: theme.text, lineHeight: 1.35 }}>
                Vi lager nettsider for lokale bedrifter.
              </div>
              <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: theme.text, opacity: 0.55, lineHeight: 1.6, marginTop: 8 }}>
                Få et gratis utkast — se hvordan din nye nettside kan se ut.
              </div>
              <div
                style={{
                  marginTop: 14, display: "inline-block",
                  background: "#5BA07E", borderRadius: 8,
                  padding: "8px 20px", fontSize: 13, fontFamily: fontFamily.body,
                  fontWeight: 600, color: "#fff",
                }}
              >
                Få gratis utkast
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
