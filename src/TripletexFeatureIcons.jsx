// ============================================
// TRIPLETEX — Feature Icons Illustration
// ============================================
// Full-frame. Bakgrunn #f9fafb matcher features-seksjon.

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
  400: "#ee7a85", 500: "#e24d5e", 600: "#ce2d44",
};
const n = {
  50: "#f9fafb", 100: "#f1f3f5", 200: "#e5e7eb", 400: "#9ca3af",
  500: "#6b7280", 800: "#1f2937", 900: "#111827",
};

const features = [
  {
    label: "Regnskap", desc: "Løpende oppdatert",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    accent: blue, indicator: "pulse",
  },
  {
    label: "Faktura", desc: "Send med ett klikk",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    accent: teal, indicator: "check",
  },
  {
    label: "Lønn", desc: "Fleksibelt lønnsystem",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75",
    accent: rose, indicator: "bars",
  },
  {
    label: "Reiser og utlegg", desc: "Registrer hvor som helst",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
    accent: teal, indicator: "dot",
  },
  {
    label: "Prosjekt", desc: "Full prosjektkontroll",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    accent: blue, indicator: "progress",
  },
  {
    label: "Årsoppgjør", desc: "Enkel og forståelig",
    icon: "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 012.625 1.25",
    accent: rose, indicator: "rotate",
  },
];

const Indicator = ({ type, frame, accent }) => {
  const t = frame * 0.06;

  switch (type) {
    case "pulse": {
      return (
        <div style={{ position: "absolute", top: -3, right: -3 }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: accent[500],
            boxShadow: `0 0 ${6 + 4 * Math.sin(t)}px ${accent[300]}60`,
            opacity: 0.6 + 0.4 * Math.sin(t),
          }} />
        </div>
      );
    }
    case "check": {
      return (
        <div style={{ position: "absolute", top: -3, right: -3 }}>
          <div style={{
            width: 16, height: 16, borderRadius: "50%",
            background: accent[400], display: "flex", alignItems: "center", justifyContent: "center",
            opacity: 0.5 + 0.5 * Math.sin(t * 0.7),
          }}>
            <svg width={9} height={9} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={4}>
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      );
    }
    case "bars": {
      return (
        <div style={{ position: "absolute", bottom: 0, right: 6, display: "flex", alignItems: "flex-end", gap: 2 }}>
          {[0.5, 0.8, 0.6].map((base, i) => (
            <div key={i} style={{
              width: 3, borderRadius: 1,
              height: 4 + (base + 0.2 * Math.sin(t + i)) * 10,
              background: accent[300],
            }} />
          ))}
        </div>
      );
    }
    case "dot": {
      return (
        <div style={{ position: "absolute", top: -2, right: -2 }}>
          <div style={{
            width: 9, height: 9, borderRadius: "50%",
            background: accent[400],
            boxShadow: `0 0 ${4 + 2 * Math.sin(t)}px ${accent[300]}60`,
          }} />
        </div>
      );
    }
    case "progress": {
      const prog = 0.55 + 0.15 * Math.sin(t * 0.5);
      return (
        <div style={{ position: "absolute", bottom: 2, left: 8, right: 8 }}>
          <div style={{ height: 3, borderRadius: 2, background: accent[100] }}>
            <div style={{ height: "100%", borderRadius: 2, width: `${prog * 100}%`, background: accent[400] }} />
          </div>
        </div>
      );
    }
    case "rotate": {
      const angle = frame * 0.8;
      return (
        <svg width={56} height={56} viewBox="0 0 56 56" style={{ position: "absolute", top: -2, left: -2, pointerEvents: "none" }}>
          <circle cx={28} cy={28} r={25} fill="none" stroke={accent[100]} strokeWidth={1.5} />
          <path
            d={`M28,3 A25,25 0 0,1 ${28 + 25 * Math.cos((angle - 90) * Math.PI / 180)},${28 + 25 * Math.sin((angle - 90) * Math.PI / 180)}`}
            fill="none" stroke={accent[300]} strokeWidth={1.5} strokeLinecap="round"
          />
        </svg>
      );
    }
    default: return null;
  }
};

const FeatureCard = ({ feature, frame, fps, delay }) => {
  const prog = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 100 } });
  const op = interpolate(prog, [0, 0.3], [0, 1], { extrapolateRight: "clamp" });
  const ty = interpolate(prog, [0, 1], [16, 0]);
  const { accent } = feature;

  return (
    <div style={{
      padding: 24, borderRadius: 18,
      background: "#fff", border: `1px solid ${n[200]}`,
      boxShadow: `0 2px 16px ${accent[50]}`,
      display: "flex", flexDirection: "column", alignItems: "center",
      textAlign: "center", gap: 12,
      opacity: op, transform: `translateY(${ty}px)`,
      position: "relative",
    }}>
      {/* Colored top edge */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${accent[300]}, transparent)`,
        borderRadius: "18px 18px 0 0",
      }} />

      <div style={{ position: "relative" }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          background: accent[50], border: `1px solid ${accent[100]}`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={accent[600]} strokeWidth={1.5}>
            <path d={feature.icon} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Indicator type={feature.indicator} frame={frame} accent={accent} />
      </div>

      <div style={{ fontSize: 15, fontWeight: 600, color: n[900] }}>{feature.label}</div>
      <div style={{ fontSize: 12, color: n[500], lineHeight: 1.4 }}>{feature.desc}</div>
    </div>
  );
};

export const TripletexFeatureIcons = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - 2, fps, config: { damping: 18, stiffness: 90 } });
  const op = interpolate(frame, [2, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: n[50],
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: 40,
      opacity: op,
      transform: `scale(${interpolate(enter, [0, 1], [0.96, 1])})`,
    }}>
      <div style={{
        width: "100%", height: "100%",
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
        alignContent: "center",
      }}>
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} frame={frame} fps={fps} delay={8 + i * 6} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
