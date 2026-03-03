import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";

const WARM_GRAD = "linear-gradient(90deg, #B56B4A, #C87B5A, #B56B4A)";

export const BesteDesign = () => {
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
        {/* Bakgrunn — standard #E8F0F6 */}
        <div style={{ position: "absolute", inset: 0, background: "#E8F0F6" }} />

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
            <radialGradient id="leafBeste" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#2C3E50" stopOpacity="0" />
              <stop offset="70%" stopColor="#2C3E50" stopOpacity="0" />
              <stop offset="100%" stopColor="#2C3E50" stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafBeste)"
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
            style={{ width: 28, height: 28 }}
          />
          <span
            style={{
              fontFamily: fontFamily.logo,
              fontSize: 14,
              color: "#2C3E50",
              letterSpacing: "1px",
            }}
          >
            MEDIEGRUPPEN
          </span>
        </div>

        {/* Høyre topp — nettside */}
        <span
          style={{
            position: "absolute",
            top: 46,
            right: 50,
            fontFamily: fontFamily.body,
            fontSize: 12,
            fontWeight: 500,
            color: "#2C3E50",
            opacity: 0.5,
            letterSpacing: "0.5px",
          }}
        >
          mediegruppen.no
        </span>

        {/* Hovedtittel — top ~140px for å gi plass til mockups */}
        <div
          style={{
            position: "absolute",
            top: 120,
            left: 50,
            right: 50,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#2C3E50",
              letterSpacing: "-0.5px",
            }}
          >
            DE BESTE
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#2C3E50",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 4,
            }}
          >
            NETTSIDE
            <span
              style={{
                display: "inline-block",
                background: WARM_GRAD,
                color: "#fff",
                padding: "6px 18px 8px",
                fontSize: 44,
                fontStyle: "italic",
                fontWeight: 500,
                letterSpacing: "1px",
                lineHeight: 1.1,
                borderRadius: 4,
              }}
            >
              DESIGN
            </span>
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#2C3E50",
              letterSpacing: "-0.5px",
              marginTop: 4,
            }}
          >
            DENNE MÅNEDEN
          </div>
        </div>

        {/* 4 browser-mockups i grid */}
        <div
          style={{
            position: "absolute",
            top: 420,
            left: 50,
            right: 50,
            bottom: 50,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 14,
          }}
        >
          {/* Mockup 1 — lys */}
          <BrowserMockup bg="#fff" barBg="#F0F0F0" dotColor="#D0D0D0">
            <div style={{ width: "65%", height: 10, background: "#E0E0E0", borderRadius: 3 }} />
            <div style={{ width: "85%", height: 7, background: "#EDEDED", borderRadius: 3 }} />
            <div style={{ width: "75%", height: 7, background: "#EDEDED", borderRadius: 3 }} />
            <div style={{ flex: 1, marginTop: 8, background: "#F0F0F0", borderRadius: 6 }} />
          </BrowserMockup>

          {/* Mockup 2 — mørk */}
          <BrowserMockup bg="#1C2B3A" barBg="#253745" dotColor="#3A4F5F">
            <div style={{ width: "55%", height: 12, background: "#2C3E50", borderRadius: 3 }} />
            <div style={{ width: "80%", height: 7, background: "#253745", borderRadius: 3 }} />
            <div style={{ width: "65%", height: 7, background: "#253745", borderRadius: 3 }} />
            <div style={{ flex: 1, marginTop: 8, background: "linear-gradient(135deg, #253745, #2C3E50)", borderRadius: 6 }} />
          </BrowserMockup>

          {/* Mockup 3 — minimal med grid */}
          <BrowserMockup bg="#fff" barBg="#F0F0F0" dotColor="#D0D0D0">
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 32, height: 32, background: "#E8F0F6", borderRadius: 6 }} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4, justifyContent: "center" }}>
                <div style={{ width: "50%", height: 7, background: "#E0E0E0", borderRadius: 3 }} />
                <div style={{ width: "70%", height: 5, background: "#EDEDED", borderRadius: 3 }} />
              </div>
            </div>
            <div style={{ flex: 1, marginTop: 6, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              <div style={{ background: "#E8F0F6", borderRadius: 4 }} />
              <div style={{ background: "#E8F0F6", borderRadius: 4 }} />
              <div style={{ background: "#E8F0F6", borderRadius: 4 }} />
              <div style={{ background: "#E8F0F6", borderRadius: 4 }} />
            </div>
          </BrowserMockup>

          {/* Mockup 4 — med hero-boks */}
          <BrowserMockup bg="#fff" barBg="#F0F0F0" dotColor="#D0D0D0">
            <div style={{ width: "75%", height: 14, background: "#E0E0E0", borderRadius: 4 }} />
            <div style={{ width: "90%", height: 7, background: "#EDEDED", borderRadius: 3 }} />
            <div style={{ width: "55%", height: 7, background: "#EDEDED", borderRadius: 3 }} />
            <div
              style={{
                flex: 1,
                marginTop: 8,
                background: "linear-gradient(135deg, #E8F0F6, #D8E8F0)",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "50%", height: "35%", background: "#D0DFE8", borderRadius: 6 }} />
            </div>
          </BrowserMockup>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* macOS-style browser mockup — som i SPESIFIKASJONER.md */
const BrowserMockup = ({ children, bg, barBg, dotColor }) => (
  <div
    style={{
      background: bg,
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 2px 16px rgba(44,62,80,0.08)",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* macOS browser bar med røde/gule/grønne knapper */}
    <div
      style={{
        height: 22,
        background: barBg,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        gap: 5,
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF5F57" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FEBC2E" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28C840" }} />
    </div>
    {/* Innhold */}
    <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      {children}
    </div>
  </div>
);
