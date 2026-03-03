import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = { css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)" };

export const Mobil2Virkelighet = () => {
  const mobilPct = 63;
  const desktopPct = 100 - mobilPct;
  const circumference = 2 * Math.PI * 70;
  const mobilArc = (mobilPct / 100) * circumference;

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
          <defs><radialGradient id="leafM2" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafM2)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        {/* Text */}
        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Over{" "}<span style={gradientText(gradient.css, 100)}>60 %</span>{" "}bruker
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            mobilen.
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
          <div style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.4, marginTop: 20, opacity: 0.55 }}>
            Men mobilen har en brøkdel
            <br />
            av kraften til PC-en din.
          </div>
        </div>

        {/* Donut chart card */}
        <div style={{ position: "absolute", bottom: 80, left: "50%", transform: "translateX(-50%)", zIndex: zIndex.frontImage }}>
          <div style={{ width: 700, background: "#fff", borderRadius: 18, padding: "28px 36px", boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)", display: "flex", alignItems: "center", gap: 40 }}>
            {/* Donut */}
            <svg width="160" height="160" viewBox="0 0 160 160" style={{ flexShrink: 0 }}>
              <circle cx="80" cy="80" r="70" fill="none" stroke="#e9ecef" strokeWidth="14" />
              <circle cx="80" cy="80" r="70" fill="none" stroke="#5BA07E" strokeWidth="14"
                strokeDasharray={`${mobilArc} ${circumference}`}
                strokeDashoffset={circumference / 4}
                strokeLinecap="round"
              />
              <text x="80" y="74" textAnchor="middle" fontSize="28" fontFamily="Inter, sans-serif" fontWeight="700" fill="#2C3E50">{mobilPct}%</text>
              <text x="80" y="94" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" fill="#9ca3af">MOBIL</text>
            </svg>

            {/* Legend + stats */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#5BA07E" }} />
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 600, color: "#374151" }}>Mobil — {mobilPct} %</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#e9ecef" }} />
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 600, color: "#374151" }}>Desktop — {desktopPct} %</span>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px" }}>
                  <div style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Mobil snitt</div>
                  <div style={{ fontSize: 18, fontFamily: fontFamily.body, fontWeight: 700, color: "#B56B4A" }}>4.2s</div>
                </div>
                <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px" }}>
                  <div style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Desktop snitt</div>
                  <div style={{ fontSize: 18, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>1.1s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
