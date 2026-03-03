import React from "react";
import { AbsoluteFill } from "remotion";
import { themes } from "./lib/colors";

const t = themes.sortLyseblaa;

const colors = [
  { hex: t.bg, label: "Bakgrunn / Ikon", role: "bg" },
  { hex: t.boxDark, label: "Mørk boks", role: "boxDark" },
  { hex: t.boxLight, label: "Lyseblå boks", role: "boxLight" },
];

export const SortLyseblaPalett = () => {
  return (
    <AbsoluteFill
      style={{
        background: t.bg,
        fontFamily: "Inter, sans-serif",
        padding: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 80,
      }}
    >
      <div style={{ color: t.text, fontSize: 72, fontWeight: 600, letterSpacing: "-0.02em" }}>
        Svart / Lyseblått
      </div>

      <div style={{ display: "flex", gap: 60 }}>
        {colors.map((c) => (
          <div key={c.role} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
            <div
              style={{
                width: 400,
                height: 400,
                borderRadius: 40,
                background: c.hex,
                border: c.hex === t.bg ? `4px solid ${t.boxDark}20` : "none",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              }}
            />
            <div style={{ color: t.text, fontSize: 48, fontWeight: 500 }}>{c.label}</div>
            <div style={{ color: t.text, opacity: 0.5, fontSize: 40, fontFamily: "monospace" }}>
              {c.hex}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
