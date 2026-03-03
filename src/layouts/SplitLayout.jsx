// ============================================
// SPLIT LAYOUT — To-kolonne / før-etter
// ============================================
// Brukes for sammenligninger. To paneler side om side.

import React from "react";
import { themes, googleGradients } from "../lib/colors";
import { spacing } from "../lib/layout";
import { gradientText, glassmorphism } from "../lib/styles";
import { defaults } from "../config/defaults";

export const SplitLayout = ({
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  title,
  titleStyle = "gradient",
  leftLabel = "Dårlig",
  leftColor = "#B56B4A",
  rightLabel = "Bra",
  rightColor = "#5BA07E",
  leftContent,
  rightContent,
}) => {
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;

  const titleElement = titleStyle === "gradient" ? (
    <span style={gradientText(gradient.css, 100)}>{title}</span>
  ) : title;

  return (
    <>
      {/* Tittel */}
      {title && (
        <div
          style={{
            position: "absolute",
            top: 200,
            left: spacing.margin,
            right: spacing.margin,
            textAlign: "center",
            color: theme.text,
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.3 }}>
            {titleElement}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>
      )}

      {/* Venstre kort (bak, vippet venstre) */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: "translateX(-65%) rotate(-5deg)",
          zIndex: 1,
          ...glassmorphism(200),
        }}
      >
        <div style={{ width: 580, background: "#fff", borderRadius: 12, padding: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: leftColor }} />
            <span style={{ fontSize: 12, fontFamily: "'Inter', sans-serif", color: leftColor, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {leftLabel}
            </span>
          </div>
          {leftContent}
        </div>
      </div>

      {/* Høyre kort (front, vippet høyre) */}
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: "50%",
          transform: "translateX(-30%) rotate(5deg)",
          zIndex: 2,
          ...glassmorphism(280, "alt"),
        }}
      >
        <div style={{ width: 580, background: "#fff", borderRadius: 12, padding: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: rightColor }} />
            <span style={{ fontSize: 12, fontFamily: "'Inter', sans-serif", color: rightColor, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {rightLabel}
            </span>
          </div>
          {rightContent}
        </div>
      </div>
    </>
  );
};
