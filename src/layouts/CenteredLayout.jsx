// ============================================
// CENTERED LAYOUT — Tittel + innhold sentrert
// ============================================
// Brukes for de fleste slides. Tittel øverst, innhold under.

import React from "react";
import { themes, googleGradients } from "../lib/colors";
import { spacing } from "../lib/layout";
import { gradientText } from "../lib/styles";
import { defaults } from "../config/defaults";

export const CenteredLayout = ({
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  title,
  titleStyle = "normal",    // "normal" | "gradient"
  titleSize = 52,
  subtitle,
  showDivider = true,
  topOffset = 200,
  children,
}) => {
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;

  const titleElement = titleStyle === "gradient" ? (
    <span style={gradientText(gradient.css, 100)}>{title}</span>
  ) : title;

  return (
    <>
      {/* Tittel-seksjon */}
      <div
        style={{
          position: "absolute",
          top: topOffset,
          left: spacing.margin,
          right: spacing.margin,
          textAlign: "center",
          color: theme.text,
        }}
      >
        {title && (
          <div style={{ fontSize: titleSize, fontWeight: 500, lineHeight: 1.4, maxWidth: 780, margin: "0 auto" }}>
            {titleElement}
          </div>
        )}

        {subtitle && (
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.5,
              marginTop: 16,
              opacity: 0.55,
            }}
          >
            {subtitle}
          </div>
        )}

        {showDivider && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div
              style={{
                width: 120,
                height: 2,
                background: gradient.css,
                borderRadius: 1,
              }}
            />
          </div>
        )}
      </div>

      {/* Innhold under tittel */}
      {children}
    </>
  );
};
