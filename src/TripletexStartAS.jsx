// ============================================
// TRIPLETEX — Start AS Illustration
// ============================================
// Full-frame. Mørk bakgrunn (#0a0f1a) matcher CTA-seksjon.

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
  400: "#7c7dff", 600: "#0532ff", 900: "#092187", 950: "#06134f",
};
const teal = {
  50: "#f0f9fc", 200: "#b8e3f0", 300: "#87cce4", 400: "#59b3cc",
};

const steps = [
  { label: "Velg navn", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" },
  { label: "Registrer", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { label: "Bankkonto", icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75" },
  { label: "Ferdig!", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export const TripletexStartAS = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - 2, fps, config: { damping: 18, stiffness: 90 } });
  const op = interpolate(frame, [2, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const activeStep = Math.min(3, Math.floor(Math.max(0, frame - 20) / 30));
  const pulse = 0.7 + 0.3 * Math.sin(frame * 0.06);

  return (
    <AbsoluteFill style={{
      background: "#0a0f1a",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: 48,
      opacity: op,
      transform: `scale(${interpolate(enter, [0, 1], [0.96, 1])})`,
    }}>
      {/* Title */}
      <div style={{ marginBottom: 36, flexShrink: 0 }}>
        <div style={{ fontSize: 24, fontWeight: 600, color: "#fff", marginBottom: 8 }}>Start ditt AS</div>
        <div style={{ fontSize: 15, color: "#94a3b8" }}>Registrer selskap på få minutter</div>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 40, padding: "0 16px", flexShrink: 0 }}>
        {steps.map((step, i) => {
          const done = i < activeStep;
          const active = i === activeStep;
          const sp = spring({ frame: frame - 20 - i * 30, fps, config: { damping: 15, stiffness: 120 } });
          const cColor = done ? teal[400] : active ? blue[600] : `${blue[900]}60`;
          const glow = done ? `${teal[300]}40` : active ? `${blue[400]}30` : "transparent";
          return (
            <React.Fragment key={i}>
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                opacity: interpolate(sp, [0, 0.5], [0.3, 1], { extrapolateRight: "clamp" }),
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: cColor, border: `2px solid ${done ? teal[300] : active ? blue[400] : `${blue[900]}40`}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 ${16 * pulse}px ${glow}`,
                }}>
                  {done ? (
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3}>
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={active ? "#fff" : `${blue[300]}35`} strokeWidth={1.5}>
                      <path d={step.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ fontSize: 12, fontWeight: 500, color: active ? "#fff" : "#64748b" }}>{step.label}</span>
              </div>
              {i < 3 && (
                <div style={{
                  flex: 1, height: 2, marginBottom: 24, marginLeft: 10, marginRight: 10, borderRadius: 1,
                  background: done ? `linear-gradient(90deg, ${teal[400]}, ${teal[300]})` : `${blue[900]}40`,
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Form */}
      <div style={{
        flex: 1, borderRadius: 18,
        background: "rgba(255,255,255,0.03)",
        border: `1px solid rgba(255,255,255,0.06)`,
        padding: 28, display: "flex", flexDirection: "column", gap: 18,
      }}>
        {[
          { label: "Selskapsnavn", value: "Eksempel AS", at: 0, ac: blue },
          { label: "Organisasjonsnr.", value: "923 456 789", at: 1, ac: teal },
          { label: "Forretningsadresse", value: "Karl Johans gate 1, 0154 Oslo", at: 2, ac: blue },
          { label: "Bankkonto", value: "1234 56 78901", at: 3, ac: teal },
        ].map((f, i) => {
          const show = activeStep >= f.at;
          const fp = spring({ frame: frame - 20 - f.at * 30 - 10, fps, config: { damping: 20, stiffness: 100 } });
          const fop = show ? interpolate(fp, [0, 0.5], [0, 1], { extrapolateRight: "clamp" }) : 0.15;
          return (
            <div key={i} style={{ opacity: fop }}>
              <div style={{ fontSize: 11, color: "#64748b", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>{f.label}</div>
              <div style={{
                height: 44, borderRadius: 10,
                background: show ? `rgba(${f.ac === blue ? "5,50,255" : "89,179,204"},0.08)` : "rgba(255,255,255,0.02)",
                border: `1px solid ${show ? `rgba(${f.ac === blue ? "5,50,255" : "89,179,204"},0.15)` : "rgba(255,255,255,0.04)"}`,
                display: "flex", alignItems: "center", paddingLeft: 16,
              }}>
                <span style={{ fontSize: 15, color: show ? "#fff" : "rgba(255,255,255,0.08)", fontWeight: 400 }}>
                  {show ? f.value : ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
