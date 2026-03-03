import React from "react";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont();

const BG = "#f5f6f8";
const TEXT = "#000000";
const TEXT_SEC = "#5c6070";
const TEXT_MUTED = "#9ea2b3";
const GREEN = "#1a7a45";
const BLUE = "#4a62d6";

function DownArrow() {
  return (
    <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
      <path d="M10 2v24M4 20l6 6 6-6" stroke="#c0c3ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PageCard({ accentColor, variantLabel }) {
  return (
    <div
      style={{
        width: 240,
        background: "#fff",
        borderRadius: 4,
        border: "1px solid #d8dae2",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* browser bar */}
      <div
        style={{
          height: 28,
          background: "#ecedf1",
          borderBottom: "1px solid #d8dae2",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: 5,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#cccdd4" }} />
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#cccdd4" }} />
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#cccdd4" }} />
        <div style={{ flex: 1, height: 14, background: "#e0e1e7", borderRadius: 2, marginLeft: 8 }} />
      </div>

      {/* variant label */}
      <div
        style={{
          position: "absolute",
          top: 36,
          right: 12,
          fontFamily,
          fontSize: 11,
          fontWeight: 700,
          color: accentColor,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          opacity: 0.6,
        }}
      >
        {variantLabel}
      </div>

      {/* content */}
      <div style={{ padding: "18px 16px 20px", display: "flex", flexDirection: "column", gap: 7 }}>
        {/* heading */}
        <div style={{ width: "70%", height: 9, borderRadius: 2, background: "#c8cad2" }} />
        <div style={{ width: "50%", height: 9, borderRadius: 2, background: "#c8cad2" }} />

        {/* body */}
        <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ width: "92%", height: 5, borderRadius: 1, background: "#e4e5ea" }} />
          <div style={{ width: "78%", height: 5, borderRadius: 1, background: "#e4e5ea" }} />
          <div style={{ width: "85%", height: 5, borderRadius: 1, background: "#e4e5ea" }} />
          <div style={{ width: "60%", height: 5, borderRadius: 1, background: "#e4e5ea" }} />
        </div>

        {/* CTA */}
        <div
          style={{
            alignSelf: "flex-start",
            marginTop: 12,
            padding: "7px 28px",
            borderRadius: 3,
            background: accentColor,
          }}
        >
          <div style={{ width: 44, height: 5, borderRadius: 1, background: "rgba(255,255,255,.65)" }} />
        </div>

        {/* more content */}
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ width: "65%", height: 5, borderRadius: 1, background: "#e4e5ea" }} />
          <div style={{ width: "48%", height: 5, borderRadius: 1, background: "#e4e5ea" }} />
        </div>
      </div>
    </div>
  );
}

export const SplitScreen = () => {
  return (
    <div
      style={{
        width: 1800,
        height: 600,
        background: BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* main layout */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 100,
          marginTop: 10,
        }}
      >
        {/* Variant A */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily,
              fontSize: 12,
              fontWeight: 600,
              color: TEXT_SEC,
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}
          >
            50% besøkende ser variant A
          </span>
          <PageCard accentColor={GREEN} variantLabel="A" />
          <div style={{ marginTop: 6 }}>
            <DownArrow />
          </div>
          <span
            style={{
              fontFamily,
              fontSize: 34,
              fontWeight: 700,
              color: TEXT,
              letterSpacing: "-.03em",
              lineHeight: 1,
            }}
          >
            2.1%
          </span>
          <span
            style={{
              fontFamily,
              fontSize: 12,
              fontWeight: 500,
              color: TEXT_MUTED,
              letterSpacing: ".04em",
              textTransform: "uppercase",
            }}
          >
            konvertering
          </span>
        </div>

        {/* Variant B */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily,
              fontSize: 12,
              fontWeight: 600,
              color: TEXT_SEC,
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}
          >
            50% besøkende ser variant B
          </span>
          <PageCard accentColor={BLUE} variantLabel="B" />
          <div style={{ marginTop: 6 }}>
            <DownArrow />
          </div>
          <span
            style={{
              fontFamily,
              fontSize: 34,
              fontWeight: 700,
              color: BLUE,
              letterSpacing: "-.03em",
              lineHeight: 1,
            }}
          >
            5.1%
          </span>
          <span
            style={{
              fontFamily,
              fontSize: 12,
              fontWeight: 500,
              color: TEXT_MUTED,
              letterSpacing: ".04em",
              textTransform: "uppercase",
            }}
          >
            konvertering
          </span>
        </div>
      </div>
    </div>
  );
};
