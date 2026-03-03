import React from "react";

const palette = {
  bg: "#f5f5f7",
  surface: "#ffffff",
  accent: "#2b5aad",
  accentLight: "#a3bde0",
  gray1: "#c8c8cd",
  gray2: "#a8a8b0",
  gray3: "#d5d5da",
  gray4: "#e0e0e4",
  green: "#3a9a5c",
  text: "#1a1a1a",
  textMuted: "#6b6b6b",
};

// Hjelpefunksjon: beregn punkt på sirkel-bue
function arcPoint(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

// Lag SVG arc path mellom to vinkler
function arcPath(cx, cy, r, startDeg, endDeg) {
  const start = arcPoint(cx, cy, r, startDeg);
  const end = arcPoint(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

export const PageSpeedGauge = () => {
  const w = 480;
  const h = 380;
  const cx = w / 2;
  const cy = 260;

  // Ytre ring segmenter (180 grader, fra 180° til 360°)
  const outerR = 130;
  const outerStroke = 36;
  const outerSegments = [
    { start: 180, end: 225, color: palette.gray1, label: "SEO" },
    { start: 225, end: 261, color: palette.gray2, label: "Best Practices" },
    { start: 261, end: 288, color: palette.gray3, label: "Tilgjengelighet" },
    { start: 288, end: 360, color: palette.accent, label: "Ytelse" },
  ];

  // Indre ring segmenter
  const innerR = 88;
  const innerStroke = 24;
  const innerSegments = [
    { start: 180, end: 234, color: palette.gray3 },
    { start: 234, end: 275, color: palette.gray4 },
    { start: 275, end: 360, color: palette.accentLight },
  ];

  return (
    <div
      style={{
        width: w,
        height: h,
        transform: "scale(2)",
        transformOrigin: "top left",
        background: palette.bg,
        borderRadius: 16,
        fontFamily: "'General Sans', -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "28px 32px 20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 0,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: palette.text,
              letterSpacing: "-0.02em",
            }}
          >
            PageSpeed
          </div>
          <div
            style={{
              fontSize: 13,
              color: palette.textMuted,
              marginTop: 2,
            }}
          >
            ytelse
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, textAlign: "right" }}>
          <div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: palette.text,
                letterSpacing: "-0.03em",
              }}
            >
              92%
            </div>
            <div style={{ fontSize: 12, color: palette.textMuted }}>
              score
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 4,
                fontSize: 28,
                fontWeight: 600,
                color: palette.green,
                letterSpacing: "-0.03em",
              }}
            >
              <span style={{ fontSize: 13 }}>▲</span>18%
            </div>
            <div style={{ fontSize: 12, color: palette.textMuted }}>
              månedlig
            </div>
          </div>
        </div>
      </div>

      {/* Gauge */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg
          width={w - 40}
          height={200}
          viewBox={`0 60 ${w} 220`}
          style={{ overflow: "visible" }}
        >
          {/* Ytre ring bakgrunn */}
          <path
            d={arcPath(cx, cy, outerR, 180, 360)}
            fill="none"
            stroke={palette.gray4}
            strokeWidth={outerStroke}
            strokeLinecap="butt"
          />
          {/* Ytre ring segmenter */}
          {outerSegments.map((seg, i) => (
            <path
              key={`outer-${i}`}
              d={arcPath(cx, cy, outerR, seg.start, seg.end)}
              fill="none"
              stroke={seg.color}
              strokeWidth={outerStroke}
              strokeLinecap="butt"
            />
          ))}

          {/* Indre ring bakgrunn */}
          <path
            d={arcPath(cx, cy, innerR, 180, 360)}
            fill="none"
            stroke={palette.gray4}
            strokeWidth={innerStroke}
            strokeLinecap="butt"
          />
          {/* Indre ring segmenter */}
          {innerSegments.map((seg, i) => (
            <path
              key={`inner-${i}`}
              d={arcPath(cx, cy, innerR, seg.start, seg.end)}
              fill="none"
              stroke={seg.color}
              strokeWidth={innerStroke}
              strokeLinecap="butt"
            />
          ))}

          {/* Senter-tekst */}
          <text
            x={cx}
            y={cy - 20}
            textAnchor="middle"
            style={{
              fontSize: 42,
              fontWeight: 600,
              fontFamily: "'General Sans', sans-serif",
              fill: palette.text,
              letterSpacing: "-0.03em",
            }}
          >
            92
          </text>
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            style={{
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "'General Sans', sans-serif",
              fill: palette.textMuted,
            }}
          >
            av 100
          </text>
        </svg>
      </div>

      {/* Bunnlinje: legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          paddingTop: 4,
        }}
      >
        {outerSegments.map((seg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              fontWeight: 500,
              color: palette.textMuted,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: seg.color,
              }}
            />
            {seg.label}
          </div>
        ))}
      </div>
    </div>
  );
};
