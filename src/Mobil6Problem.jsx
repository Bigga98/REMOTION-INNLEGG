import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = { css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)" };

const ScoreGauge = ({ score, label, color, bgColor }) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const arc = (score / 100) * circumference;

  return (
    <div style={{ textAlign: "center" }}>
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r={radius} fill="none" stroke="#e9ecef" strokeWidth="10" />
        <circle
          cx="65" cy="65" r={radius} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={`${arc} ${circumference}`}
          strokeDashoffset={circumference / 4}
          strokeLinecap="round"
        />
        <text x="65" y="62" textAnchor="middle" fontSize="30" fontFamily="Inter, sans-serif" fontWeight="700" fill={color}>{score}</text>
        <text x="65" y="80" textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="#9ca3af">/100</text>
      </svg>
      <div style={{ fontSize: 13, fontFamily: fontFamily.body, fontWeight: 600, color, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
    </div>
  );
};

export const Mobil6Problem = () => {
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
          <defs><radialGradient id="leafM6" cx="40%" cy="40%" r="60%"><stop offset="0%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="70%" stopColor={theme.leaf} stopOpacity="0" /><stop offset="100%" stopColor={theme.leaf} stopOpacity="1" /></radialGradient></defs>
          <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" fill="url(#leafM6)" stroke={theme.leaf} strokeWidth="0.06" />
        </svg>

        <div style={{ position: "absolute", top: logo.top, left: logo.left, zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap }}>
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>Mediegruppen</span>
        </div>

        <div style={{ position: "absolute", top: 200, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Bygd for PC,
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            <span style={gradientText("linear-gradient(90deg, #B56B4A, #C87B5A, #B56B4A)", 100)}>tilpasset etterpå.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
          <div style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.4, marginTop: 20, opacity: 0.55 }}>
            Typisk WordPress-resultat:
          </div>
        </div>

        {/* Score comparison card */}
        <div style={{ position: "absolute", bottom: 70, left: "50%", transform: "translateX(-50%)", zIndex: zIndex.frontImage }}>
          <div style={{ width: 700, background: "#fff", borderRadius: 18, padding: "32px 40px", boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#9ca3af" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" /></svg>
              <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#9ca3af", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>PageSpeed Insight</span>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 60, alignItems: "center" }}>
              <ScoreGauge score={97} label="Desktop" color="#5BA07E" bgColor="#EDF5F0" />
              <div style={{ fontSize: 22, color: "rgba(44,62,80,0.25)", fontWeight: 500 }}>vs</div>
              <ScoreGauge score={60} label="Mobil" color="#B56B4A" bgColor="#FDF0EC" />
            </div>

            <div style={{ marginTop: 24, textAlign: "center" }}>
              <span style={{ fontSize: 14, fontFamily: fontFamily.body, color: "#374151", lineHeight: 1.5 }}>
                PC-en tåler tung kode fint.{" "}
                <span style={{ color: "#B56B4A", fontWeight: 600 }}>Mobilen kveles.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
