import React from "react";
import {
  AbsoluteFill,
  staticFile,
} from "remotion";
import { fontFamily } from "./lib/fonts";
import { themes, googleGradients } from "./lib/colors";
import {
  gradientText,
  overlays,
} from "./lib/styles";
import {
  spacing,
  logo,
  zIndex,
} from "./lib/layout";

// --- Intern komponent (statisk) ---
const Slide8Oppsummering = ({ theme, gradient, leafId }) => {
  const factors = [
    "Innhold som faktisk hjelper brukeren.",
    "Riktige søkeord i tittelen.",
    "Lenker fra troverdige sider.",
    "At du viser at du er ekspert på temaet ditt.",
    "At folk engasjerer seg — leser, deler, kommer tilbake.",
  ];

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          transform: "scale(2)",
          transformOrigin: "top left",
          fontFamily: fontFamily.headline,
        }}
      >
      {/* Bakgrunn */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: theme.bg,
        }}
      />

      <div style={overlays.whiteFade} />

      {/* Blad-dekorasjon */}
      <svg
        width="1800"
        height="1800"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          bottom: -900,
          right: -900,
          opacity: 0.12,
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

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: logo.top,
          left: logo.left,
          zIndex: zIndex.ui,
          display: "flex",
          alignItems: "center",
          gap: spacing.gap,
        }}
      >
        <img
          src={staticFile("logo.png")}
          style={{
            width: logo.iconSize,
            height: logo.iconSize,
            objectFit: "contain",
          }}
        />
        <span
          style={{
            fontFamily: fontFamily.logo,
            fontSize: logo.fontSize,
            fontWeight: logo.fontWeight,
            letterSpacing: logo.letterSpacing,
            color: theme.text,
          }}
        >
          Mediegruppen
        </span>
      </div>

      {/* Tekst */}
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
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Hva betyr dette{" "}
          <span style={gradientText(gradient.css, 100)}>for deg?</span>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
        </div>

        {/* Intro */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            lineHeight: 1.4,
            marginTop: 28,
            opacity: 0.55,
          }}
        >
          De 5 viktigste faktorene for Google-synlighet:
        </div>

        {/* Faktor-liste */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            textAlign: "left",
            maxWidth: 820,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {factors.map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <div
                style={{
                  minWidth: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: gradient.css,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: fontFamily.body,
                }}
              >
                {i + 1}
              </div>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  lineHeight: 1.4,
                  paddingTop: 2,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Avslutning */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.4,
            marginTop: 44,
            opacity: 0.7,
          }}
        >
          Google ser alt.
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};

// --- Eksporterte varianter ---
export const Slide8OppsummeringGray = () => (
  <Slide8Oppsummering
    theme={themes.gray}
    gradient={googleGradients.coral}
    leafId="leafS8Gray"
  />
);

export const Slide8OppsummeringGray2 = () => (
  <Slide8Oppsummering
    theme={themes.gray2}
    gradient={googleGradients.teal}
    leafId="leafS8Gray2"
  />
);
