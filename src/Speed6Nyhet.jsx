import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = {
  css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)",
};

const Speed6Nyhet = () => {
  const actions = [
    {
      num: "1",
      title: "Krympe bildene.",
      desc: "Det alene kan halvere lastetiden.",
    },
    {
      num: "2",
      title: "Fjern det du ikke bruker.",
      desc: "Chat-bobler, sporingsverktøy, ubrukte skript.",
    },
    {
      num: "3",
      title: "Sjekk webhotellet.",
      desc: "Er det godt nok for trafikken du har?",
    },
  ];

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute", top: 0, left: 0,
          width: 1080, height: 1080,
          transform: "scale(2)", transformOrigin: "top left",
          fontFamily: fontFamily.headline,
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: theme.bg }} />
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 100%)",
            pointerEvents: "none",
          }}
        />

        <svg
          width="1800" height="1800" viewBox="0 0 24 24"
          style={{
            position: "absolute", bottom: -900, right: -900, opacity: 0.07,
            transform: "rotate(-30deg)", pointerEvents: "none", zIndex: zIndex.background,
          }}
        >
          <defs>
            <radialGradient id="leafSpd6" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafSpd6)" stroke={theme.leaf} strokeWidth="0.06"
          />
        </svg>

        {/* Logo */}
        <div
          style={{
            position: "absolute", top: logo.top, left: logo.left,
            zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap,
          }}
        >
          <img
            src={staticFile("logo.png")}
            style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: fontFamily.logo, fontSize: logo.fontSize,
              fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing,
              color: theme.text,
            }}
          >
            Mediegruppen
          </span>
        </div>

        {/* Text */}
        <div
          style={{
            position: "absolute", top: 200, left: spacing.margin, right: spacing.margin,
            textAlign: "center", color: theme.text,
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.3 }}>
            Den gode{" "}
            <span style={gradientText(gradient.css, 100)}>nyheten?</span>
          </div>
          <div style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.3, marginTop: 8 }}>
            Du kan fikse mye selv.
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>

          {/* Action items */}
          <div
            style={{
              marginTop: 40, display: "flex", flexDirection: "column", gap: 28,
              textAlign: "left", maxWidth: 820, marginLeft: "auto", marginRight: "auto",
            }}
          >
            {actions.map((item) => (
              <div key={item.num} style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                <div
                  style={{
                    minWidth: 40, height: 40, borderRadius: "50%",
                    background: gradient.css,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, fontWeight: 700, color: "#fff",
                    fontFamily: fontFamily.body,
                  }}
                >
                  {item.num}
                </div>
                <div style={{ paddingTop: 2 }}>
                  <div style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.3 }}>
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 24, fontWeight: 500, lineHeight: 1.4,
                      marginTop: 4, opacity: 0.5,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div
            style={{
              fontSize: 32, fontWeight: 600, lineHeight: 1.4,
              marginTop: 48, opacity: 0.7,
            }}
          >
            Start med bildene — det gir mest effekt.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export { Speed6Nyhet };
