import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { glassmorphism, frostedVignette, gradientText } from "./lib/styles";
import { spacing, logo, zIndex, imagePositions } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = {
  css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)",
};

const Speed5Webhotell = () => {
  const angle1 = 200;
  const angle2 = 280;

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
            <radialGradient id="leafSpd5" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafSpd5)" stroke={theme.leaf} strokeWidth="0.06"
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
            Synder #3
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Webhotellet er{" "}
            <span style={gradientText(gradient.css, 100)}>for svakt.</span>
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
            Delt wifi på et fullstappet hotell —
            <br />
            jo flere som bruker det, jo tregere.
          </div>
        </div>

        {/* Back card — Delt webhotell */}
        <div
          style={{
            position: "absolute", bottom: 100, left: "50%",
            transform: `translateX(${imagePositions.back.translateX}) rotate(${imagePositions.back.rotate}deg)`,
            zIndex: zIndex.backImage, ...glassmorphism(angle1),
          }}
        >
          <div
            style={{
              position: "relative", overflow: "hidden", borderRadius: 12,
              width: 680, background: "#fff", padding: 28,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: "#D4806B" }} />
              <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Delt webhotell
              </span>
            </div>

            {/* Server visual */}
            <div style={{ background: "#FDF0EC", borderRadius: 10, padding: "14px 18px", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="8" rx="2" stroke="#D4806B" strokeWidth="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" stroke="#D4806B" strokeWidth="2" />
                  <circle cx="6" cy="6" r="1" fill="#D4806B" />
                  <circle cx="6" cy="18" r="1" fill="#D4806B" />
                </svg>
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 600, color: "#374151" }}>Billig delt server</span>
              </div>
              {/* User indicators */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: i === 0 ? "rgba(212,128,107,0.4)" : "rgba(212,128,107,0.15)",
                      border: i === 0 ? "2px solid #D4806B" : "1px solid rgba(212,128,107,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 8, fontFamily: fontFamily.body, color: i === 0 ? "#D4806B" : "#ccc",
                    }}
                  >
                    {i === 0 ? "Du" : ""}
                  </div>
                ))}
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(212,128,107,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af" }}>
                  +82
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>TTFB</div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>1.8s</div>
              </div>
              <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Oppetid</div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>96.2%</div>
              </div>
            </div>
            <div style={frostedVignette} />
          </div>
        </div>

        {/* Front card — Godt webhotell */}
        <div
          style={{
            position: "absolute", bottom: 140, left: "50%",
            transform: `translateX(${imagePositions.front.translateX}) rotate(${imagePositions.front.rotate}deg)`,
            zIndex: zIndex.frontImage, ...glassmorphism(angle2, "alt"),
          }}
        >
          <div
            style={{
              position: "relative", overflow: "hidden", borderRadius: 12,
              width: 680, background: "#fff", padding: 28,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: "#5BA07E" }} />
              <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Riktig webhotell
              </span>
            </div>

            <div style={{ background: "#EDF5F0", borderRadius: 10, padding: "14px 18px", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="8" rx="2" stroke="#5BA07E" strokeWidth="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" stroke="#5BA07E" strokeWidth="2" />
                  <circle cx="6" cy="6" r="1" fill="#5BA07E" />
                  <circle cx="6" cy="18" r="1" fill="#5BA07E" />
                </svg>
                <span style={{ fontSize: 14, fontFamily: fontFamily.body, fontWeight: 600, color: "#374151" }}>Dedikert / VPS</span>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                <div
                  style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: "rgba(91,160,126,0.3)",
                    border: "2px solid #5BA07E",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 8, fontFamily: fontFamily.body, color: "#5BA07E",
                  }}
                >
                  Du
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>TTFB</div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>0.2s</div>
              </div>
              <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px" }}>
                <div style={{ fontSize: 10, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Oppetid</div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>99.9%</div>
              </div>
            </div>
            <div style={frostedVignette} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export { Speed5Webhotell };
