// ============================================
// TRIPLETEX — Hero Dashboard Illustration
// ============================================
// Full-frame dashboard. Bakgrunn matcher hero-seksjon (#f9fafb).
// Shade-skala: blå #0532ff, teal #59b3cc, rose #f8c6ca.

import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";

const blue = {
  50: "#eef1ff", 100: "#dfe5ff", 200: "#c5cdff", 300: "#a2abff",
  400: "#7c7dff", 500: "#5b55f8", 600: "#0532ff", 700: "#0329d6",
};
const teal = {
  50: "#f0f9fc", 100: "#d9f0f7", 200: "#b8e3f0", 300: "#87cce4",
  400: "#59b3cc", 500: "#3397b5", 600: "#2c7a99",
};
const rose = {
  50: "#fff5f6", 100: "#ffecee", 200: "#f8c6ca", 300: "#f5a5ac",
  400: "#ee7a85", 500: "#e24d5e",
};
const n = {
  50: "#f9fafb", 100: "#f1f3f5", 200: "#e5e7eb", 300: "#d1d5db",
  400: "#9ca3af", 500: "#6b7280", 800: "#1f2937", 900: "#111827",
};

const BarChart = ({ frame, fps, delay }) => {
  const bars = [
    { h: 35, c: blue[200] }, { h: 48, c: blue[200] }, { h: 38, c: blue[200] },
    { h: 58, c: teal[300] }, { h: 52, c: teal[300] }, { h: 68, c: teal[400] },
    { h: 62, c: blue[300] }, { h: 78, c: blue[400] }, { h: 72, c: blue[400] },
    { h: 88, c: blue[500] }, { h: 82, c: blue[500] }, { h: 100, c: blue[600] },
  ];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: "100%" }}>
      {bars.map((b, i) => {
        const p = spring({ frame: frame - delay - i * 3, fps, config: { damping: 22, stiffness: 100 } });
        return (
          <div key={i} style={{
            flex: 1, height: `${interpolate(p, [0, 1], [0, b.h])}%`,
            borderRadius: 5, background: b.c,
          }} />
        );
      })}
    </div>
  );
};

const DonutChart = ({ frame, fps, delay, pct, size }) => {
  const p = spring({ frame: frame - delay, fps, config: { damping: 25, stiffness: 80 } });
  const angle = interpolate(p, [0, 1], [0, pct * 3.6]);
  const r = size * 0.38; const cx = size / 2; const cy = size / 2;
  const rad = (angle - 90) * (Math.PI / 180);
  const x = cx + r * Math.cos(rad);
  const y = cy + r * Math.sin(rad);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={teal[100]} strokeWidth={size * 0.1} />
      {angle > 0.5 && (
        <path d={`M${cx},${cy - r} A${r},${r} 0 ${angle > 180 ? 1 : 0},1 ${x},${y}`}
          fill="none" stroke={teal[400]} strokeWidth={size * 0.1} strokeLinecap="round" />
      )}
      <text x={cx} y={cy + 2} textAnchor="middle" dominantBaseline="middle"
        style={{ fontSize: size * 0.2, fontWeight: 700, fill: n[900], fontFamily: "'Satoshi', sans-serif" }}>
        {Math.round(pct * p)}%
      </text>
    </svg>
  );
};

const Sparkline = ({ frame, fps, delay, points, w, h }) => {
  const p = spring({ frame: frame - delay, fps, config: { damping: 30, stiffness: 60 } });
  const vis = Math.floor(p * points.length);
  if (vis < 2) return null;
  const step = w / (points.length - 1);
  const maxV = Math.max(...points); const minV = Math.min(...points);
  const pathD = points.slice(0, vis).map((v, i) => {
    const px = i * step;
    const py = h - ((v - minV) / (maxV - minV)) * h * 0.8 - h * 0.1;
    return `${i === 0 ? "M" : "L"}${px},${py}`;
  }).join(" ");
  const lastI = vis - 1;
  const lx = lastI * step;
  const ly = h - ((points[lastI] - minV) / (maxV - minV)) * h * 0.8 - h * 0.1;
  const fillD = pathD + ` L${lx},${h} L0,${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="sf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={rose[200]} stopOpacity="0.5" />
          <stop offset="100%" stopColor={rose[200]} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillD} fill="url(#sf)" />
      <path d={pathD} fill="none" stroke={rose[400]} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lx} cy={ly} r={4} fill={rose[500]} />
    </svg>
  );
};

export const TripletexHeroDashboard = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - 3, fps, config: { damping: 18, stiffness: 90 } });
  const op = interpolate(frame, [3, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pulse = 0.6 + 0.4 * Math.sin(frame * 0.08);

  return (
    <AbsoluteFill style={{
      background: n[50],
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: 40,
      opacity: op,
      transform: `scale(${interpolate(enter, [0, 1], [0.96, 1])})`,
    }}>
      {/* Full-frame card */}
      <div style={{
        width: "100%", height: "100%",
        background: "#fff",
        borderRadius: 24,
        boxShadow: `0 1px 0 0 ${n[200]}, 0 20px 80px ${blue[50]}, 0 4px 20px rgba(0,0,0,0.03)`,
        border: `1px solid ${n[200]}`,
        overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}>
        {/* Top bar */}
        <div style={{
          height: 64, padding: "0 32px", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: `1px solid ${n[200]}`, background: n[50],
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: blue[600], display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>T</span>
            </div>
            <span style={{ fontSize: 16, fontWeight: 600, color: n[900] }}>Dashboard</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {["Oversikt", "Faktura", "Regnskap"].map((t, i) => (
              <div key={i} style={{
                padding: "7px 18px", borderRadius: 10, fontSize: 13, fontWeight: 500,
                background: i === 0 ? blue[50] : "transparent",
                color: i === 0 ? blue[700] : n[500],
                border: i === 0 ? `1px solid ${blue[100]}` : "1px solid transparent",
              }}>{t}</div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Stat cards */}
          <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
            {[
              { label: "Inntekter", value: "284 500", change: "+12.4%", up: true, bg: blue[50], border: blue[100], dot: blue[400] },
              { label: "Utgifter", value: "142 200", change: "-3.1%", up: false, bg: rose[50], border: rose[200], dot: rose[400] },
              { label: "Resultat", value: "142 300", change: "+18.7%", up: true, bg: teal[50], border: teal[200], dot: teal[400] },
            ].map((s, i) => {
              const cp = spring({ frame: frame - 15 - i * 6, fps, config: { damping: 20, stiffness: 100 } });
              return (
                <div key={i} style={{
                  flex: 1, padding: 22, borderRadius: 16, background: s.bg, border: `1px solid ${s.border}`,
                  opacity: cp, transform: `translateY(${interpolate(cp, [0, 1], [12, 0])}px)`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.dot }} />
                    <span style={{ fontSize: 13, color: n[500], fontWeight: 500 }}>{s.label}</span>
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: n[900], marginBottom: 6, fontFamily: "'Satoshi', sans-serif" }}>{s.value}</div>
                  <div style={{
                    fontSize: 12, fontWeight: 600, color: s.up ? teal[600] : rose[500],
                    display: "inline-flex", alignItems: "center", gap: 4,
                    padding: "3px 10px", borderRadius: 8, background: s.up ? teal[50] : rose[50],
                  }}>
                    <svg width={11} height={11} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d={s.up ? "M5 8V2M2.5 4.5 5 2l2.5 2.5" : "M5 2v6M2.5 5.5 5 8l2.5-2.5"} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {s.change}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts */}
          <div style={{ display: "flex", gap: 16, flex: 1, minHeight: 0 }}>
            <div style={{
              flex: 2, padding: 24, borderRadius: 16, background: "#fff", border: `1px solid ${n[200]}`,
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexShrink: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: n[800] }}>Månedlig omsetning</span>
                <div style={{ padding: "4px 12px", borderRadius: 8, background: blue[50], border: `1px solid ${blue[100]}` }}>
                  <span style={{ fontSize: 12, color: blue[700], fontWeight: 500 }}>2026</span>
                </div>
              </div>
              <div style={{ flex: 1, minHeight: 0 }}>
                <BarChart frame={frame} fps={fps} delay={30} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, flexShrink: 0 }}>
                {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
                  <span key={i} style={{ fontSize: 10, color: n[400], flex: 1, textAlign: "center" }}>{m}</span>
                ))}
              </div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{
                flex: 1, padding: 20, borderRadius: 16, background: "#fff", border: `1px solid ${n[200]}`,
                display: "flex", alignItems: "center", gap: 16,
              }}>
                <DonutChart frame={frame} fps={fps} delay={35} pct={73} size={100} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: n[800] }}>Betalingsgrad</div>
                  <div style={{ fontSize: 12, color: n[400], marginTop: 4 }}>146 av 200</div>
                  <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: teal[400] }} />
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: teal[100] }} />
                  </div>
                </div>
              </div>
              <div style={{
                flex: 1, padding: 20, borderRadius: 16, background: "#fff", border: `1px solid ${n[200]}`,
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexShrink: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: n[800] }}>Trend</span>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: teal[500], boxShadow: `0 0 ${4 * pulse}px ${teal[300]}` }} />
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <Sparkline frame={frame} fps={fps} delay={40} points={[20, 25, 22, 30, 28, 35, 32, 42, 38, 45, 50, 48]} w={200} h={70} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
