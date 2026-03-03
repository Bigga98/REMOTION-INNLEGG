import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import { overlays, gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = themes.gray;
const gradient = googleGradients.coral;

export const ForsidenTreSekunderS2 = () => {
  const items = [
    { icon: "briefcase", label: "Tjenester" },
    { icon: "users", label: "Ansatte" },
    { icon: "clock", label: "Historie" },
    { icon: "newspaper", label: "Nyheter" },
    { icon: "star", label: "Priser" },
    { icon: "image", label: "Galleri" },
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
          <defs><radialGradient id="leafFTS2" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafFTS2)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        {/* Logo */}
        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        {/* Tekst */}
        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.3 }}>
            <span style={gradientText(gradient.css, 100)}>Problemet</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>

          <div style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.5, marginTop: 24, opacity: 0.6 }}>
            De fleste forsider prøver å si
            <br />
            alt på en gang:
          </div>
        </div>

        {/* Kaos-kort — viser alt som er stappet inn */}
        <div
          style={{
            position: "absolute", bottom: 80, left: "50%",
            transform: "translateX(-50%)", zIndex: zIndex.frontImage,
          }}
        >
          <div
            style={{
              width: 760, background: "#fff", borderRadius: 18,
              padding: "32px 36px",
              boxShadow: "0 8px 40px rgba(27,42,74,0.08), 0 2px 8px rgba(27,42,74,0.04)",
            }}
          >
            {/* Grid med "alt på en gang" */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 24 }}>
              {items.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(27,42,74,0.04)", borderRadius: 10,
                    padding: "10px 18px", fontSize: 14, fontFamily: fontFamily.body,
                    color: theme.text, fontWeight: 500, opacity: 0.7,
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Chaos lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[85, 70, 92, 60].map((w, i) => (
                <div
                  key={i}
                  style={{
                    width: `${w}%`, height: 8, borderRadius: 4,
                    background: `rgba(27,42,74,${0.04 + i * 0.02})`,
                  }}
                />
              ))}
            </div>

            {/* Verdict */}
            <div
              style={{
                marginTop: 24, textAlign: "center",
                fontSize: 22, fontFamily: fontFamily.body, fontWeight: 600,
                color: "#B56B4A",
              }}
            >
              Kunden ser kaos.
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
