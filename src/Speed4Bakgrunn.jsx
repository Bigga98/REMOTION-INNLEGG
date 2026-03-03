import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = {
  css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)",
};

const scripts = [
  { name: "chat-widget.js", ms: 340, removed: true },
  { name: "analytics-v3.js", ms: 280, removed: false, optimized: "analytics-lite.js", newMs: 80 },
  { name: "social-buttons.js", ms: 260, removed: true },
  { name: "custom-fonts.css", ms: 190, removed: false, optimized: "fonts-preload.css", newMs: 40 },
];

const totalBefore = scripts.reduce((s, x) => s + x.ms, 0);
const totalAfter = scripts.filter((x) => !x.removed).reduce((s, x) => s + (x.newMs || x.ms), 0);

const Speed4Bakgrunn = () => {
  const maxMs = 400;

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
            <radialGradient id="leafSpd4" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafSpd4)" stroke={theme.leaf} strokeWidth="0.06"
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
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.4, marginBottom: 12, fontFamily: fontFamily.body }}>
            Synder #2
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            For mange ting i{" "}
            <span style={gradientText(gradient.css, 100)}>bakgrunnen.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
          <div
            style={{
              fontSize: 28, fontWeight: 500, lineHeight: 1.4,
              marginTop: 20, opacity: 0.55,
            }}
          >
            En dør med ti låser —
            <br />
            alle må åpnes før noen slipper inn.
          </div>
        </div>

        {/* Single centered dashboard card */}
        <div
          style={{
            position: "absolute", bottom: 60, left: "50%",
            transform: "translateX(-50%)",
            zIndex: zIndex.frontImage,
          }}
        >
          <div
            style={{
              width: 780, background: "#fff", borderRadius: 18,
              padding: "24px 32px 20px",
              boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#2C3E50" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#2C3E50", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Render-blokkerende ressurser
                </span>
              </div>
            </div>

            {/* Script rows — before / after */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {scripts.map((s, i) => {
                const barW = `${(s.ms / maxMs) * 100}%`;
                const newBarW = s.newMs ? `${(s.newMs / maxMs) * 100}%` : null;

                return (
                  <div key={i}>
                    {/* Script name row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span
                        style={{
                          fontSize: 12, fontFamily: fontFamily.mono,
                          color: s.removed ? "#9ca3af" : "#374151",
                          textDecoration: s.removed ? "line-through" : "none",
                        }}
                      >
                        {s.name}
                      </span>
                      {s.removed && (
                        <span
                          style={{
                            fontSize: 9, fontFamily: fontFamily.body,
                            color: "#fff", background: "#5BA07E",
                            padding: "1px 6px", borderRadius: 4, fontWeight: 600,
                            letterSpacing: "0.03em", textTransform: "uppercase",
                          }}
                        >
                          Fjernet
                        </span>
                      )}
                      {s.optimized && (
                        <>
                          <svg width="10" height="10" viewBox="0 0 10 10">
                            <path d="M2 5h6M6 3l2 2-2 2" stroke="#5BA07E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                          <span style={{ fontSize: 12, fontFamily: fontFamily.mono, color: "#5BA07E" }}>
                            {s.optimized}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Bar — before */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, height: 8, borderRadius: 4, background: "#f3f4f6", position: "relative" }}>
                        {/* Before bar (dimmed if changed) */}
                        <div
                          style={{
                            position: "absolute", top: 0, left: 0,
                            width: barW, height: "100%", borderRadius: 4,
                            background: s.removed
                              ? "repeating-linear-gradient(135deg, rgba(212,128,107,0.25), rgba(212,128,107,0.25) 3px, rgba(212,128,107,0.1) 3px, rgba(212,128,107,0.1) 6px)"
                              : "rgba(212,128,107,0.35)",
                          }}
                        />
                        {/* After bar (green, on top) */}
                        {newBarW && (
                          <div
                            style={{
                              position: "absolute", top: 0, left: 0,
                              width: newBarW, height: "100%", borderRadius: 4,
                              background: "#5BA07E",
                            }}
                          />
                        )}
                      </div>
                      <div style={{ width: 50, textAlign: "right" }}>
                        {s.removed ? (
                          <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "#9ca3af", textDecoration: "line-through" }}>
                            {s.ms}ms
                          </span>
                        ) : s.newMs ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end" }}>
                            <span style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textDecoration: "line-through" }}>
                              {s.ms}
                            </span>
                            <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600 }}>
                              {s.newMs}ms
                            </span>
                          </div>
                        ) : (
                          <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600 }}>
                            {s.ms}ms
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Totals row */}
            <div
              style={{
                display: "flex", gap: 12, marginTop: 18,
                borderTop: "1px solid #f3f4f6", paddingTop: 14,
              }}
            >
              <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  Før
                </div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>
                  {(totalBefore / 1000).toFixed(2)}s blokkert
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="#5BA07E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  Etter
                </div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>
                  {(totalAfter / 1000).toFixed(2)}s blokkert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export { Speed4Bakgrunn };
