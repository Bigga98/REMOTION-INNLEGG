import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";
import { gradientText } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const gradient = {
  css: "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)",
};

const Speed2Stakes = () => {
  // Visitor drop-off data points
  const dataPoints = [
    { s: 0, pct: 100 },
    { s: 0.5, pct: 97 },
    { s: 1, pct: 92 },
    { s: 1.5, pct: 85 },
    { s: 2, pct: 72 },
    { s: 2.5, pct: 55 },
    { s: 3, pct: 40 },
    { s: 3.5, pct: 30 },
    { s: 4, pct: 22 },
    { s: 5, pct: 15 },
  ];

  const chartW = 600;
  const chartH = 160;
  const padL = 0;
  const padR = 0;

  const toX = (s) => padL + (s / 5) * (chartW - padL - padR);
  const toY = (pct) => chartH - (pct / 100) * chartH;

  const linePath = dataPoints
    .map((p, i) => `${i === 0 ? "M" : "L"}${toX(p.s)},${toY(p.pct)}`)
    .join(" ");

  const areaPath = `${linePath} L${toX(5)},${chartH} L${toX(0)},${chartH} Z`;

  // 2s marker position
  const x2s = toX(2);

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
            <radialGradient id="leafSpd2" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafSpd2)" stroke={theme.leaf} strokeWidth="0.06"
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
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3 }}>
            Mer enn{" "}
            <span style={gradientText(gradient.css, 100)}>2 sekunder</span>?
          </div>
          <div style={{ fontSize: 52, fontWeight: 500, lineHeight: 1.3, marginTop: 4 }}>
            Halvparten forlater.
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
            De fleste surfer på mobil — der er det enda verre.
          </div>
        </div>

        {/* Single centered card with chart */}
        <div
          style={{
            position: "absolute", bottom: 80, left: "50%",
            transform: "translateX(-50%)",
            zIndex: zIndex.frontImage,
          }}
        >
          <div
            style={{
              width: 780, background: "#fff", borderRadius: 18,
              padding: "28px 36px 24px",
              boxShadow: "0 8px 40px rgba(44,62,80,0.1), 0 2px 8px rgba(44,62,80,0.06)",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="9" cy="7" r="4" stroke="#2C3E50" strokeWidth="2" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#2C3E50", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Besøkende som blir
                </span>
              </div>
              <span style={{ fontSize: 11, fontFamily: fontFamily.body, color: "#9ca3af" }}>
                Lastetid (sekunder)
              </span>
            </div>

            {/* Chart */}
            <svg width={chartW} height={chartH + 30} viewBox={`0 0 ${chartW} ${chartH + 30}`} style={{ display: "block", margin: "0 auto" }}>
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5BA07E" stopOpacity="0.12" />
                  <stop offset={`${(2 / 5) * 100}%`} stopColor="#5BA07E" stopOpacity="0.08" />
                  <stop offset={`${(2 / 5) * 100}%`} stopColor="#D4806B" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#D4806B" stopOpacity="0.03" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5BA07E" />
                  <stop offset={`${(2 / 5) * 100}%`} stopColor="#5BA07E" />
                  <stop offset={`${(2.5 / 5) * 100}%`} stopColor="#D4806B" />
                  <stop offset="100%" stopColor="#D4806B" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path d={areaPath} fill="url(#areaFill)" />

              {/* 2s danger zone line */}
              <line x1={x2s} y1={0} x2={x2s} y2={chartH} stroke="#D4806B" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />

              {/* Curve */}
              <path d={linePath} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

              {/* Data dots */}
              {dataPoints.map((p, i) => (
                <circle
                  key={i}
                  cx={toX(p.s)}
                  cy={toY(p.pct)}
                  r={p.s === 2 ? 5 : 3}
                  fill={p.s <= 2 ? "#5BA07E" : "#D4806B"}
                  stroke="#fff"
                  strokeWidth="2"
                />
              ))}

              {/* 2s label */}
              <text x={x2s} y={chartH + 16} textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="#D4806B" fontWeight="600">
                2s
              </text>

              {/* Start & end labels */}
              <text x={toX(0)} y={chartH + 16} textAnchor="start" fontSize="10" fontFamily="Inter, sans-serif" fill="#9ca3af">
                0s
              </text>
              <text x={toX(5)} y={chartH + 16} textAnchor="end" fontSize="10" fontFamily="Inter, sans-serif" fill="#9ca3af">
                5s
              </text>

              {/* 2s annotation */}
              <text x={x2s + 8} y={toY(72) - 8} fontSize="10" fontFamily="Inter, sans-serif" fill="#D4806B" fontWeight="600">
                72% igjen
              </text>
            </svg>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <div style={{ flex: 1, background: "#EDF5F0", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  Under 2s
                </div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#5BA07E" }}>
                  92% blir
                </div>
              </div>
              <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  Over 3s
                </div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>
                  60% borte
                </div>
              </div>
              <div style={{ flex: 1, background: "#FDF0EC", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 9, fontFamily: fontFamily.body, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  Mobil snitt
                </div>
                <div style={{ fontSize: 20, fontFamily: fontFamily.body, fontWeight: 700, color: "#D4806B" }}>
                  4.2s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export { Speed2Stakes };
