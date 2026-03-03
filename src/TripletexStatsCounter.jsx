// ============================================
// TRIPLETEX — Stats Counter Illustration
// ============================================
// Full-frame. Bakgrunn #f8f9fb matcher stats-seksjon.

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
  800: "#0724ab", 900: "#092187", 950: "#06134f",
};
const teal = {
  50: "#f0f9fc", 100: "#d9f0f7", 200: "#b8e3f0", 300: "#87cce4",
  400: "#59b3cc", 500: "#3397b5", 600: "#2c7a99", 700: "#29637d",
};
const rose = {
  50: "#fff5f6", 100: "#ffecee", 200: "#f8c6ca", 300: "#f5a5ac",
  400: "#ee7a85", 500: "#e24d5e", 600: "#ce2d44",
};
const n = {
  50: "#f9fafb", 100: "#f1f3f5", 200: "#e5e7eb", 400: "#9ca3af",
  500: "#6b7280", 800: "#1f2937", 900: "#111827",
};

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(".", ",") + "M";
  if (num >= 1000) return Math.round(num).toLocaleString("nb-NO");
  return String(Math.round(num));
};

const StatCard = ({ frame, fps, delay, target, label, suffix, icon, accent }) => {
  const prog = spring({ frame: frame - delay, fps, config: { damping: 30, stiffness: 40 } });
  const cardProg = spring({ frame: frame - delay + 5, fps, config: { damping: 20, stiffness: 100 } });
  const value = interpolate(prog, [0, 1], [0, target]);

  const op = interpolate(cardProg, [0, 0.3], [0, 1], { extrapolateRight: "clamp" });
  const ty = interpolate(cardProg, [0, 1], [20, 0]);

  const ringProg = interpolate(prog, [0, 1], [0, 270]);
  const ringR = 28;
  const ringCx = 32; const ringCy = 32;
  const ringRad = (ringProg - 90) * (Math.PI / 180);
  const ringX = ringCx + ringR * Math.cos(ringRad);
  const ringY = ringCy + ringR * Math.sin(ringRad);

  return (
    <div style={{
      flex: 1, padding: 32, borderRadius: 20,
      background: "#fff",
      border: `1px solid ${n[200]}`,
      boxShadow: `0 4px 24px ${accent[50]}, 0 1px 3px rgba(0,0,0,0.03)`,
      display: "flex", flexDirection: "column", alignItems: "center",
      textAlign: "center",
      opacity: op, transform: `translateY(${ty}px)`,
      position: "relative", overflow: "hidden",
    }}>
      {/* Gradient top strip */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${accent[300]}, ${accent[500]}, ${accent[300]})`,
        borderRadius: "20px 20px 0 0",
      }} />

      {/* Icon with ring */}
      <div style={{ position: "relative", marginBottom: 20, marginTop: 8 }}>
        <svg width={64} height={64} viewBox="0 0 64 64">
          <circle cx={ringCx} cy={ringCy} r={ringR} fill="none" stroke={accent[100]} strokeWidth={3.5} />
          {ringProg > 1 && (
            <path
              d={`M${ringCx},${ringCy - ringR} A${ringR},${ringR} 0 ${ringProg > 180 ? 1 : 0},1 ${ringX},${ringY}`}
              fill="none" stroke={accent[400]} strokeWidth={3.5} strokeLinecap="round"
            />
          )}
        </svg>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 42, height: 42, borderRadius: "50%",
          background: accent[50],
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={accent[600]} strokeWidth={1.5}>
            <path d={icon} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Number */}
      <div style={{
        fontSize: 36, fontWeight: 700, color: n[900], marginBottom: 8,
        fontFamily: "'Satoshi', 'Inter', sans-serif",
        letterSpacing: "-0.02em",
      }}>
        {formatNumber(value)}{suffix}
      </div>

      {/* Label */}
      <div style={{ fontSize: 14, color: n[500], lineHeight: 1.5 }}>{label}</div>
    </div>
  );
};

export const TripletexStatsCounter = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - 2, fps, config: { damping: 18, stiffness: 90 } });
  const op = interpolate(frame, [2, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "#f8f9fb",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: 40,
      opacity: op,
      transform: `scale(${interpolate(enter, [0, 1], [0.96, 1])})`,
    }}>
      <div style={{ display: "flex", gap: 20, height: "100%" }}>
        <StatCard
          frame={frame} fps={fps} delay={8}
          target={150000} label="selskaper bruker Tripletex" suffix="+"
          icon="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          accent={blue}
        />
        <StatCard
          frame={frame} fps={fps} delay={18}
          target={27600000} label="fakturaer sendt siste året" suffix=""
          icon="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          accent={teal}
        />
        <StatCard
          frame={frame} fps={fps} delay={28}
          target={1700000} label="lønnsutbetalinger siste året" suffix=""
          icon="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75"
          accent={rose}
        />
      </div>
    </AbsoluteFill>
  );
};
