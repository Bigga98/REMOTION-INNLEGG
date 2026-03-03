import React from "react";

const palette = {
  bg: "#f5f5f7",
  surface: "#ffffff",
  accent: "#2b5aad",
  accentLight: "#dce5f3",
  green: "#22c55e",
  greenBg: "#dcfce7",
  amber: "#f59e0b",
  amberBg: "#fef3c7",
  text: "#1a1a1a",
  textMuted: "#6b6b6b",
  border: "#e5e5e5",
};

// Sirkulær progress ring
function CircleProgress({ score, size, strokeWidth, color }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={palette.border}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}

// Horisontal bar
function MetricBar({ label, value, max, color, colorBg }) {
  const pct = (value / max) * 100;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 90, fontSize: 12, fontWeight: 500, color: palette.textMuted }}>{label}</div>
      <div style={{ flex: 1, height: 8, background: colorBg, borderRadius: 100, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 100 }} />
      </div>
      <div style={{ width: 36, textAlign: "right", fontSize: 13, fontWeight: 600, color: palette.text }}>{value}</div>
    </div>
  );
}

export const PageSpeedGauge2 = () => {
  const w = 520;
  const h = 380;

  return (
    <div
      style={{
        width: w,
        height: h,
        transform: "scale(2)",
        transformOrigin: "top left",
        background: palette.surface,
        borderRadius: 16,
        border: `1px solid ${palette.border}`,
        fontFamily: "'General Sans', -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "28px 32px",
        gap: 24,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 600, color: palette.text, letterSpacing: "-0.02em" }}>
            Nettside-ytelse
          </div>
          <div style={{ fontSize: 12, color: palette.textMuted, marginTop: 2 }}>Siste 30 dager</div>
        </div>
        <div style={{
          padding: "5px 12px",
          background: palette.greenBg,
          borderRadius: 100,
          fontSize: 12,
          fontWeight: 600,
          color: "#16a34a",
        }}>
          ▲ 12% bedre
        </div>
      </div>

      {/* Scores: 4 sirkler */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {[
          { label: "Ytelse", score: 96, color: palette.green },
          { label: "Tilgjengelighet", score: 91, color: palette.accent },
          { label: "Best Practices", score: 100, color: palette.green },
          { label: "SEO", score: 97, color: palette.green },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ position: "relative" }}>
              <CircleProgress score={item.score} size={72} strokeWidth={6} color={item.color} />
              <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 600,
                color: palette.text,
                letterSpacing: "-0.03em",
              }}>
                {item.score}
              </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: palette.textMuted }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: palette.border }} />

      {/* Metric bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <MetricBar label="Lastetid" value="0.8s" max={3} color={palette.green} colorBg={palette.greenBg} />
        <MetricBar label="FCP" value="1.2s" max={3} color={palette.green} colorBg={palette.greenBg} />
        <MetricBar label="CLS" value="0.02" max={0.25} color={palette.green} colorBg={palette.greenBg} />
        <MetricBar label="LCP" value="1.8s" max={4} color={palette.amber} colorBg={palette.amberBg} />
      </div>
    </div>
  );
};
