// ============================================
// BASE LAYOUT — Felles wrapper for alle slides
// ============================================
// Håndterer: bakgrunn, logo, leaf, overlay, scale(2).
// Templates rendrer sitt innhold som children.

import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "../lib/fonts";
import { themes } from "../lib/colors";
import { overlays } from "../lib/styles";
import { logo as logoConfig, spacing, zIndex } from "../lib/layout";
import { formats } from "../config/formats";
import { defaults } from "../config/defaults";

export const BaseLayout = ({
  theme: themeName = defaults.theme,
  format: formatName = defaults.format,
  showLogo = defaults.showLogo,
  showLeaf = defaults.showLeaf,
  showOverlay = defaults.showOverlay,
  leafOpacity = defaults.leafOpacity,
  leafId = "leafBase",
  children,
}) => {
  const theme = themes[themeName] || themes.gray;
  const fmt = formats[formatName] || formats.post;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: fmt.inner.width,
          height: fmt.inner.height,
          transform: "scale(2)",
          transformOrigin: "top left",
          fontFamily: fontFamily.headline,
        }}
      >
        {/* Bakgrunn */}
        <div style={{ position: "absolute", inset: 0, background: theme.bg }} />

        {/* Hvit fade overlay */}
        {showOverlay && <div style={overlays.whiteFade} />}

        {/* Blad-dekorasjon */}
        {showLeaf && (
          <svg
            width="1800"
            height="1800"
            viewBox="0 0 24 24"
            style={{
              position: "absolute",
              bottom: -900,
              right: -900,
              opacity: leafOpacity,
              transform: "rotate(-30deg)",
              pointerEvents: "none",
              zIndex: zIndex.background,
            }}
          >
            <defs>
              <radialGradient id={leafId} cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
                <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
                <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
              </radialGradient>
            </defs>
            <path
              d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
              fill={`url(#${leafId})`}
              stroke={theme.leaf}
              strokeWidth="0.06"
            />
          </svg>
        )}

        {/* Logo */}
        {showLogo && (
          <div
            style={{
              position: "absolute",
              top: logoConfig.top,
              left: logoConfig.left,
              zIndex: zIndex.ui,
              display: "flex",
              alignItems: "center",
              gap: spacing.gap,
            }}
          >
            <img
              src={staticFile("logo.png")}
              style={{
                width: logoConfig.iconSize,
                height: logoConfig.iconSize,
                objectFit: "contain",
              }}
            />
            <span
              style={{
                fontFamily: fontFamily.logo,
                fontSize: logoConfig.fontSize,
                fontWeight: logoConfig.fontWeight,
                letterSpacing: logoConfig.letterSpacing,
                color: theme.text,
              }}
            >
              Mediegruppen
            </span>
          </div>
        )}

        {/* Innhold fra template */}
        {children}
      </div>
    </AbsoluteFill>
  );
};
