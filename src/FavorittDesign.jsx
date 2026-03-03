import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";

const GREEN_GRAD = "linear-gradient(180deg, #5BA07E 0%, #4A8A6A 40%, #3D7558 100%)";

export const FavorittDesign = () => {
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
          overflow: "hidden",
        }}
      >
        {/* Grønn gradient bakgrunn */}
        <div style={{ position: "absolute", inset: 0, background: GREEN_GRAD }} />

        {/* Subtil lys overlay øverst */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />

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
          }}
        >
          <defs>
            <radialGradient id="leafFavoritt" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0" />
              <stop offset="70%" stopColor="#fff" stopOpacity="0" />
              <stop offset="100%" stopColor="#fff" stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafFavoritt)"
          />
        </svg>

        {/* Logo — top 40px, left 50px */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 50,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <img
            src={staticFile("logo.png")}
            style={{ width: 28, height: 28, filter: "brightness(10)" }}
          />
          <span
            style={{
              fontFamily: fontFamily.logo,
              fontSize: 14,
              color: "#fff",
              letterSpacing: "1px",
              opacity: 0.9,
            }}
          >
            MEDIEGRUPPEN
          </span>
        </div>

        {/* Høyre topp */}
        <span
          style={{
            position: "absolute",
            top: 46,
            right: 50,
            fontFamily: fontFamily.body,
            fontSize: 12,
            fontWeight: 500,
            color: "#fff",
            opacity: 0.5,
            letterSpacing: "0.5px",
          }}
        >
          mediegruppen.no
        </span>

        {/* Hovedtittel */}
        <div
          style={{
            position: "absolute",
            top: 120,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 58,
              fontWeight: 500,
              lineHeight: 1.15,
              color: "#fff",
              fontStyle: "italic",
            }}
          >
            Mine Favoritt
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 500,
              lineHeight: 1.15,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              fontStyle: "italic",
            }}
          >
            Nettside
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 14,
                backdropFilter: "blur(10px)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </span>
            Design
          </div>
        </div>

        {/* 3 overlappende screenshot-placeholders */}

        {/* Venstre — delvis synlig */}
        <div
          style={{
            position: "absolute",
            top: 380,
            left: -80,
            width: 380,
            height: 520,
            transform: "rotate(-2deg)",
            zIndex: 1,
          }}
        >
          <DashedPlaceholder label="Bilde 1" />
        </div>

        {/* Senter — stor, fremhevet */}
        <div
          style={{
            position: "absolute",
            top: 340,
            left: 280,
            width: 520,
            height: 680,
            zIndex: 3,
            filter: "drop-shadow(0 8px 30px rgba(0,0,0,0.25))",
          }}
        >
          <DashedPlaceholder label="Bilde 2" large />
        </div>

        {/* Høyre — delvis synlig */}
        <div
          style={{
            position: "absolute",
            top: 400,
            right: -80,
            width: 380,
            height: 520,
            transform: "rotate(2deg)",
            zIndex: 1,
          }}
        >
          <DashedPlaceholder label="Bilde 3" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* Stiplet grå placeholder-boks */
const DashedPlaceholder = ({ label, large }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      background: large ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
      borderRadius: 12,
      border: "3px dashed rgba(255,255,255,0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      backdropFilter: "blur(4px)",
    }}
  >
    {/* Bilde-ikon */}
    <svg width={large ? "40" : "30"} height={large ? "40" : "30"} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: large ? 14 : 11,
        color: "rgba(255,255,255,0.4)",
        fontWeight: 500,
        fontStyle: "normal",
        letterSpacing: "0.5px",
      }}
    >
      {label}
    </span>
  </div>
);
