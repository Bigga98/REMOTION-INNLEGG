import React from "react";
import { staticFile } from "remotion";

const palette = {
  bg: "#f0f2f7",
  surface: "#ffffff",
  accent: "#7392c4",
  accentLight: "#c5d4e8",
  secondary: "#c4a573",
  secondaryLight: "#e8d8c2",
  secondarySubtle: "#f5efe5",
  text: "#1e2a3d",
  textMuted: "#6b7a94",
  border: "#dce2ed",
};

export const GAIllustrasjon = () => {
  const w = 550;
  const h = 260;

  const bars = [
    { h: 40 }, { h: 65 }, { h: 55 }, { h: 80 },
    { h: 95 }, { h: 72 }, { h: 108 }, { h: 88 },
    { h: 125 }, { h: 135 }, { h: 115 }, { h: 148 },
    { h: 130 }, { h: 140 },
  ];

  const barW = 24;
  const gap = 12;
  const totalW = bars.length * (barW + gap) - gap;
  const startX = (w - totalW) / 2;
  const chartBottom = h - 10;

  const linePoints = bars.map((b, i) => {
    const x = startX + i * (barW + gap) + barW / 2;
    const y = chartBottom - b.h * 0.55 - 20;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div style={{
      width: w, height: h,
      transform: "scale(2)",
      transformOrigin: "top left",
      background: palette.bg,
      fontFamily: "'General Sans', -apple-system, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* GA logo øverst til høyre */}
      <img
        src={staticFile("Logo_Google_Analytics.svg")}
        style={{
          position: "absolute",
          top: 16, right: 24,
          height: 22,
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      {/* Legend øverst til venstre */}
      <div style={{
        position: "absolute",
        top: 16, left: 24,
        display: "inline-flex",
        gap: 20,
        background: palette.surface,
        borderRadius: 4,
        padding: "8px 14px",
        border: `1px solid ${palette.border}`,
        zIndex: 2,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 500, color: palette.text }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: palette.accent }} />
          Besøkende
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 500, color: palette.text }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: palette.secondary }} />
          Konverteringsrate
        </div>
      </div>

      {/* Chart */}
      <svg width={w} height={h} style={{ position: "absolute", top: 0, left: 0 }}>
        {/* Horisontale gridlinjer */}
        {[0, 1, 2, 3].map(i => (
          <line key={i}
            x1={startX - 5} x2={startX + totalW + 5}
            y1={chartBottom - i * 45} y2={chartBottom - i * 45}
            stroke={palette.border} strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5" />
        ))}

        {/* Stolper */}
        {bars.map((b, i) => {
          const x = startX + i * (barW + gap);
          const isHighlight = i === 8;
          return (
            <rect key={i}
              x={x} y={chartBottom - b.h} width={barW} height={b.h}
              rx={3}
              fill={isHighlight ? palette.accent : "#dde3ed"}
              opacity={isHighlight ? 0.8 : 0.6}
            />
          );
        })}

        {/* Linje */}
        <polyline
          points={linePoints}
          fill="none" stroke={palette.secondary} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />

        {/* Dots */}
        {bars.map((b, i) => {
          const x = startX + i * (barW + gap) + barW / 2;
          const y = chartBottom - b.h * 0.55 - 20;
          const isHighlight = i === 8;
          return (
            <circle key={i} cx={x} cy={y} r={isHighlight ? 4.5 : 3}
              fill={isHighlight ? "#fff" : palette.secondary}
              stroke={palette.secondary} strokeWidth={isHighlight ? 2 : 0} />
          );
        })}
      </svg>
    </div>
  );
};
