import React from "react";
import { AbsoluteFill } from "remotion";
import { themes } from "./lib/colors";

const t = themes.mgBrand;

const colors = [
  { hex: t.bg, label: "Bakgrunn", role: "bg" },
  { hex: t.text, label: "Tekst", role: "text" },
  { hex: t.accent, label: "Aksent", role: "accent" },
];

export const MgBrandPalett = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#1a1a1a",
        fontFamily: "General Sans, sans-serif",
        padding: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 80,
      }}
    >
      <div style={{ color: "#fff", fontSize: 72, fontWeight: 600, letterSpacing: "-0.02em" }}>
        MG Brand
      </div>

      <div style={{ display: "flex", gap: 60 }}>
        {colors.map((c) => (
          <div key={c.hex} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
            <div
              style={{
                width: 400,
                height: 400,
                borderRadius: 40,
                background: c.hex,
                border: c.hex === "#ffffff" ? "4px solid rgba(255,255,255,0.2)" : "none",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              }}
            />
            <div style={{ color: "#fff", fontSize: 48, fontWeight: 500 }}>{c.label}</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 40, fontFamily: "monospace" }}>
              {c.hex}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
