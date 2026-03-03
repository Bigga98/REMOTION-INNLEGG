import React from "react";
import { AbsoluteFill, staticFile, Img } from "remotion";
import { themes } from "./lib/colors";

const t = themes.sortKremGronn;

const colors = [
  { hex: t.text, label: "Sort", role: "dark" },
  { hex: t.darkGreen, label: "Mørk grønn", role: "darkGreen" },
  { hex: t.accent, label: "Grønn", role: "accent" },
  { hex: t.sand, label: "Sand", role: "sand" },
  { hex: t.cream, label: "Krem", role: "cream" },
  { hex: t.bg, label: "Bakgrunn", role: "bg" },
];

export const SortKremGronnPalett = () => {
  return (
    <AbsoluteFill
      style={{
        background: t.bg,
        fontFamily: "Inter, sans-serif",
        padding: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 50,
      }}
    >
      <div style={{ color: t.text, fontSize: 64, fontWeight: 600, letterSpacing: "-0.02em" }}>
        Sort / Krem / Grønn
      </div>

      <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
        {colors.map((c) => (
          <div key={c.role} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: 32,
                background: c.hex,
                border: c.hex === t.bg || c.hex === t.cream ? `3px solid ${t.text}15` : "none",
                boxShadow: "0 6px 30px rgba(0,0,0,0.08)",
              }}
            />
            <div style={{ color: t.text, fontSize: 36, fontWeight: 500 }}>{c.label}</div>
            <div style={{ color: t.text, opacity: 0.5, fontSize: 30, fontFamily: "monospace" }}>
              {c.hex}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 10,
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          height: 280,
        }}
      >
        <Img
          src={staticFile("sort-krem-gronn-ref.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </AbsoluteFill>
  );
};
