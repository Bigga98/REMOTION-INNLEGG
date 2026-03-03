import React from "react";

const palette = {
  bg: "#ffffff",
  text: "#1a1a1a",
  textMuted: "#6b6b6b",
  border: "#f0f0f0",
  blue: "#2b5aad",
  amber: "#e4a853",
  coral: "#e07a6a",
};

// SVG donut segment via stroke-dasharray
function DonutSegment({ cx, cy, r, strokeWidth, color, startAngle, sweepAngle }) {
  const circ = 2 * Math.PI * r;
  const dashLen = (sweepAngle / 360) * circ;
  const dashGap = circ - dashLen;
  const offset = -((startAngle / 360) * circ) + circ * 0.25; // rotate so 0° = top

  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={`${dashLen} ${dashGap}`}
      strokeDashoffset={offset}
      strokeLinecap="round"
    />
  );
}

export const PageSpeedDonut = () => {
  const w = 400;
  const h = 520;
  const cx = w / 2;
  const cy = 210;
  const r = 110;
  const strokeW = 32;

  const segments = [
    { label: "Organisk", value: "1 243", color: palette.blue, start: 0, sweep: 150 },
    { label: "Direkte", value: "847", color: palette.amber, start: 150, sweep: 120 },
    { label: "Sosiale medier", value: "512", color: palette.coral, start: 270, sweep: 90 },
  ];

  return (
    <div
      style={{
        width: w,
        height: h,
        transform: "scale(2)",
        transformOrigin: "top left",
        background: palette.bg,
        borderRadius: 20,
        border: `1px solid ${palette.border}`,
        fontFamily: "'General Sans', -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "32px 32px 28px",
      }}
    >
      {/* Title */}
      <div style={{ fontSize: 22, fontWeight: 600, color: palette.text, letterSpacing: "-0.02em", marginBottom: 28 }}>
        Trafikkilder
      </div>

      {/* Donut */}
      <div style={{ display: "flex", justifyContent: "center", position: "relative", marginBottom: 32 }}>
        <svg width={r * 2 + strokeW + 20} height={r * 2 + strokeW + 20}>
          {/* Background ring */}
          <circle
            cx={r + strokeW / 2 + 10}
            cy={r + strokeW / 2 + 10}
            r={r}
            fill="none"
            stroke="#f5f5f5"
            strokeWidth={strokeW}
          />
          {segments.map((seg, i) => (
            <DonutSegment
              key={i}
              cx={r + strokeW / 2 + 10}
              cy={r + strokeW / 2 + 10}
              r={r}
              strokeWidth={strokeW}
              color={seg.color}
              startAngle={seg.start}
              sweepAngle={seg.sweep - 4}
            />
          ))}
        </svg>
        {/* Center text */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 38, fontWeight: 600, color: palette.text, letterSpacing: "-0.03em" }}>
            2 602
          </div>
          <div style={{ fontSize: 13, color: palette.textMuted, marginTop: 2 }}>
            besøkende
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 0",
              borderTop: i === 0 ? `1px solid ${palette.border}` : "none",
              borderBottom: `1px solid ${palette.border}`,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 4,
                background: seg.color,
                marginRight: 14,
                flexShrink: 0,
              }}
            />
            <div style={{ fontSize: 16, fontWeight: 500, color: palette.text, flex: 1 }}>
              {seg.label}
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: palette.text, letterSpacing: "-0.02em" }}>
              {seg.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
