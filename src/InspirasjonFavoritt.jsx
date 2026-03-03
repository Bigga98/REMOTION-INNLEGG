import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
} from "remotion";
import { loadFont } from "@remotion/fonts";

/**
 * InspirasjonFavoritt — basert utelukkende på design_analyzer output.
 *
 * Analyse-data:
 *   bg: #f1f1f1 (63.4%), text: #14110f (11.7%), accent: #2c51b3 (4.6%)
 *   secondary: #163731 (8.2%), muted: #e4e4ea (9.2%)
 *   Headline: 10% fra topp, 74% bredde, sentrert — fontSize ~30% av bredde (samlet blokk)
 *   Mockup-blokk: 39% fra topp, 85% bredde, 57% høyde
 *   Logo: 83% x, 2% y (merke øverst til høyre)
 *   Alle regioner: css_reproducible — 0 fotografier
 */

const clashLoaded = loadFont({
  family: "Clash Display",
  url: staticFile("ClashDisplay-Medium.woff2"),
  weight: "500",
});

const panchangLoaded = loadFont({
  family: "Panchang",
  url: staticFile("Panchang-SemiBold.woff2"),
  weight: "600",
});

// Farger fra analyzer — piksel-sampling (eksakt)
const C = {
  bg: "#f4f4f4",
  text: "#080404",
  accent: "#2050c8",
  dark: "#143830",
  muted: "#e4e4ea",
  light: "#fcfcfc",
  gray: "#a8a6a4",
};

// ── Browser-mockup: 3 ulike varianter som matcher originalbildet ──

const MockupDark = ({ style }) => (
  <div
    style={{
      width: 580,
      height: 380,
      borderRadius: 14,
      background: C.dark,
      boxShadow: "0 16px 60px rgba(0,0,0,0.22), 0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
      ...style,
    }}
  >
    {/* Chrome */}
    <div style={{ height: 26, background: "#0e1f1b", display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
      <div style={{ marginLeft: 14, width: 120, height: 12, borderRadius: 3, background: "rgba(255,255,255,0.06)" }} />
    </div>
    {/* Nav */}
    <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", gap: 10 }}>
      <div style={{ width: 16, height: 16, borderRadius: 3, background: "rgba(255,255,255,0.12)" }} />
      <div style={{ width: 50, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.15)" }} />
      <div style={{ flex: 1 }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
    </div>
    {/* Hero split */}
    <div style={{ display: "flex", padding: "8px 16px", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <div style={{ width: "80%", height: 11, borderRadius: 3, background: "rgba(255,255,255,0.7)", marginBottom: 6 }} />
        <div style={{ width: "55%", height: 11, borderRadius: 3, background: "rgba(255,255,255,0.7)", marginBottom: 12 }} />
        <div style={{ width: "95%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginBottom: 4 }} />
        <div style={{ width: "80%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginBottom: 4 }} />
        <div style={{ width: "65%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginBottom: 14 }} />
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 70, height: 22, borderRadius: 5, background: C.accent }} />
          <div style={{ width: 70, height: 22, borderRadius: 5, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }} />
        </div>
      </div>
      {/* Chart/bilde-blokk */}
      <div style={{ width: 180, height: 130, borderRadius: 10, background: "linear-gradient(145deg, #1a3530, #0e1f1b)", display: "flex", flexDirection: "column", padding: 10, gap: 6 }}>
        <div style={{ width: "60%", height: 6, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
        <div style={{ flex: 1, borderRadius: 6, background: "linear-gradient(180deg, rgba(44,81,179,0.3), rgba(44,81,179,0.1))", display: "flex", alignItems: "flex-end", padding: "0 6px 6px" }}>
          {[35, 55, 40, 65, 50, 75, 60].map((h, i) => (
            <div key={i} style={{ flex: 1, marginRight: 2, height: `${h}%`, background: i === 5 ? C.accent : "rgba(255,255,255,0.15)", borderRadius: 2 }} />
          ))}
        </div>
      </div>
    </div>
    {/* Stats row */}
    <div style={{ display: "flex", gap: 8, padding: "8px 16px" }}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} style={{ flex: 1, height: 50, borderRadius: 6, background: "rgba(255,255,255,0.04)", padding: 8, display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 }}>
          <div style={{ width: "50%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ width: "70%", height: 8, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
        </div>
      ))}
    </div>
  </div>
);

const MockupLight = ({ style }) => (
  <div
    style={{
      width: 580,
      height: 380,
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 16px 60px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)",
      overflow: "hidden",
      ...style,
    }}
  >
    {/* Chrome */}
    <div style={{ height: 26, background: "#f5f5f5", display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
      <div style={{ marginLeft: 14, width: 120, height: 12, borderRadius: 3, background: "rgba(0,0,0,0.05)" }} />
    </div>
    {/* Nav */}
    <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", gap: 10 }}>
      <div style={{ width: 16, height: 16, borderRadius: 3, background: C.accent }} />
      <div style={{ width: 55, height: 7, borderRadius: 2, background: "#333", opacity: 0.6 }} />
      <div style={{ flex: 1 }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "#333", opacity: 0.2 }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "#333", opacity: 0.2 }} />
      <div style={{ width: 60, height: 20, borderRadius: 5, background: C.accent }} />
    </div>
    {/* Hero */}
    <div style={{ padding: "12px 16px", display: "flex", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <div style={{ width: "75%", height: 13, borderRadius: 3, background: C.text, opacity: 0.85, marginBottom: 5 }} />
        <div style={{ width: "50%", height: 13, borderRadius: 3, background: C.text, opacity: 0.85, marginBottom: 14 }} />
        <div style={{ width: "90%", height: 5, borderRadius: 2, background: "#333", opacity: 0.15, marginBottom: 4 }} />
        <div style={{ width: "80%", height: 5, borderRadius: 2, background: "#333", opacity: 0.15, marginBottom: 4 }} />
        <div style={{ width: "60%", height: 5, borderRadius: 2, background: "#333", opacity: 0.15, marginBottom: 14 }} />
        <div style={{ width: 80, height: 22, borderRadius: 6, background: C.accent }} />
      </div>
      {/* Bilde-placeholder */}
      <div style={{ width: 180, height: 130, borderRadius: 10, background: `linear-gradient(135deg, ${C.muted}, #d8d8de)` }} />
    </div>
    {/* 3 kort */}
    <div style={{ display: "flex", gap: 8, padding: "6px 16px" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ flex: 1, height: 85, borderRadius: 8, background: "#f8f8f8", padding: 8, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ width: "100%", height: 38, borderRadius: 5, background: i === 1 ? `linear-gradient(135deg, ${C.accent}22, ${C.accent}08)` : "rgba(0,0,0,0.04)" }} />
          <div style={{ width: "65%", height: 5, borderRadius: 2, background: "#333", opacity: 0.25 }} />
          <div style={{ width: "45%", height: 5, borderRadius: 2, background: "#333", opacity: 0.15 }} />
        </div>
      ))}
    </div>
  </div>
);

const MockupTeal = ({ style }) => (
  <div
    style={{
      width: 580,
      height: 380,
      borderRadius: 14,
      background: "#ffffff",
      boxShadow: "0 20px 70px rgba(0,0,0,0.22), 0 6px 16px rgba(0,0,0,0.1)",
      overflow: "hidden",
      ...style,
    }}
  >
    {/* Chrome */}
    <div style={{ height: 26, background: "#f5f5f5", display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
      <div style={{ marginLeft: 14, width: 120, height: 12, borderRadius: 3, background: "rgba(0,0,0,0.05)" }} />
    </div>
    {/* Nav liten */}
    <div style={{ display: "flex", alignItems: "center", padding: "6px 16px", gap: 8, fontSize: 0 }}>
      <div style={{ width: 14, height: 14, borderRadius: 3, background: C.dark }} />
      <div style={{ width: 45, height: 6, borderRadius: 2, background: "#333", opacity: 0.4 }} />
      <div style={{ flex: 1 }} />
      <div style={{ width: 24, height: 6, borderRadius: 2, background: "#333", opacity: 0.15 }} />
      <div style={{ width: 24, height: 6, borderRadius: 2, background: "#333", opacity: 0.15 }} />
    </div>
    {/* Teal hero-seksjon */}
    <div
      style={{
        margin: "4px 12px",
        borderRadius: 10,
        background: `linear-gradient(160deg, ${C.dark}, #0e2420)`,
        padding: "30px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ width: "40%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.25)", margin: "0 auto 10px" }} />
      <div style={{ width: "80%", height: 12, borderRadius: 3, background: "rgba(255,255,255,0.85)", margin: "0 auto 6px" }} />
      <div style={{ width: "65%", height: 12, borderRadius: 3, background: "rgba(255,255,255,0.85)", margin: "0 auto 14px" }} />
      <div style={{ width: "90%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.2)", margin: "0 auto 3px" }} />
      <div style={{ width: "70%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.2)", margin: "0 auto" }} />
    </div>
    {/* Nedre innhold */}
    <div style={{ padding: "14px 16px", textAlign: "center" }}>
      <div style={{ width: "55%", height: 6, borderRadius: 2, background: "#333", opacity: 0.3, margin: "0 auto 8px" }} />
      <div style={{ width: "75%", height: 5, borderRadius: 2, background: "#333", opacity: 0.15, margin: "0 auto 3px" }} />
      <div style={{ width: "60%", height: 5, borderRadius: 2, background: "#333", opacity: 0.15, margin: "0 auto" }} />
    </div>
  </div>
);

export const InspirasjonFavoritt = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Animasjoner ---
  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const titleY = interpolate(titleIn, [0, 1], [25, 0]);

  const badgeIn = spring({ frame: frame - 10, fps, config: { damping: 14, mass: 0.5 } });
  const badgeScale = interpolate(badgeIn, [0, 1], [0.85, 1]);
  const badgeRotate = interpolate(badgeIn, [0, 1], [-5, -2]);

  const m1 = spring({ frame: frame - 20, fps, config: { damping: 200 } });
  const m1Y = interpolate(m1, [0, 1], [50, 0]);

  const m2 = spring({ frame: frame - 32, fps, config: { damping: 200 } });
  const m2Y = interpolate(m2, [0, 1], [50, 0]);

  const m3 = spring({ frame: frame - 44, fps, config: { damping: 200 } });
  const m3Y = interpolate(m3, [0, 1], [50, 0]);

  const bottomIn = spring({ frame: frame - 55, fps, config: { damping: 200 } });
  const swipeX = interpolate(frame % 90, [0, 45, 90], [0, 5, 0]);

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1350,
          transform: "scale(2)",
          transformOrigin: "top left",
          fontFamily: "'Clash Display', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Bakgrunn */}
        <div style={{ position: "absolute", inset: 0, background: C.bg }} />

        {/* ===== BRANDING — topp ===== */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 30,
            display: "flex",
            alignItems: "center",
            gap: 6,
            zIndex: 10,
          }}
        >
          <img src={staticFile("logo.png")} style={{ width: 16, height: 16, objectFit: "contain" }} />
          <span
            style={{
              fontFamily: "'Panchang', sans-serif",
              fontSize: 9,
              fontWeight: 600,
              color: C.text,
              letterSpacing: "0.5px",
              opacity: 0.5,
              textTransform: "uppercase",
            }}
          >
            Mediegruppen
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 30,
            fontFamily: "'Inter', sans-serif",
            fontSize: 9,
            color: C.text,
            opacity: 0.35,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          Mediegruppen.no
        </div>

        {/* ===== HEADLINE — stor, tett, sentrert ===== */}
        {/* Originalen: ~8% til ~35% av canvas, ~27% høyde */}
        <div
          style={{
            position: "absolute",
            top: 58,
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: titleIn,
            transform: `translateY(${titleY}px)`,
          }}
        >
          {/* "MITT FAVORITT" — stor, bold, tight */}
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: C.text,
              letterSpacing: "-2px",
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            Mitt favoritt
          </div>

          {/* "Nettside Design" — blå badge, kursiv, litt rotert */}
          <div
            style={{
              display: "inline-block",
              marginTop: 6,
              marginBottom: 6,
              opacity: badgeIn,
              transform: `scale(${badgeScale}) rotate(${badgeRotate}deg)`,
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: C.accent,
                color: "#ffffff",
                fontSize: 56,
                fontWeight: 600,
                fontStyle: "italic",
                padding: "6px 26px 8px",
                borderRadius: 12,
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
              }}
            >
              Nettside Design
            </span>
          </div>

          {/* "DENNE MÅNEDEN" */}
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: C.text,
              letterSpacing: "-2px",
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            denne måneden
          </div>
        </div>

        {/* ===== MOCKUPS — 3 overlappende, fanned, ~38% til ~92% av canvas ===== */}
        {/* Original: 39% y, 85% bredde, 57% høyde av 1350 = top ~527, height ~770 */}
        <div
          style={{
            position: "absolute",
            top: 420,
            left: 0,
            right: 0,
            height: 850,
          }}
        >
          {/* Mockup 1 (bakerst) — mørk, rotert venstre, øverst */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              opacity: m1,
              transform: `translateX(-350px) translateY(${m1Y}px) rotate(-5deg)`,
              zIndex: 1,
            }}
          >
            <MockupDark />
          </div>

          {/* Mockup 2 (midten) — lys, nesten rett, lavere */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              opacity: m2,
              transform: `translateX(-310px) translateY(${140 + m2Y}px) rotate(-1deg)`,
              zIndex: 2,
            }}
          >
            <MockupLight />
          </div>

          {/* Mockup 3 (foran) — teal hero, rotert høyre, lavest */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              opacity: m3,
              transform: `translateX(-250px) translateY(${290 + m3Y}px) rotate(3deg)`,
              zIndex: 3,
            }}
          >
            <MockupTeal />
          </div>
        </div>

        {/* ===== BUNN — tekst + swipe ===== */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: C.gray,
            opacity: bottomIn,
          }}
        >
          Utforsk design, inspirasjon og strategi
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 30,
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontFamily: "'Inter', sans-serif",
            fontSize: 8,
            color: C.text,
            opacity: bottomIn * 0.45,
          }}
        >
          <span>Swipe right</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            style={{ transform: `translateX(${swipeX}px)` }}
          >
            <path
              d="M1 4h8M7 1l3 3-3 3"
              stroke={C.text}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Blad */}
        <svg
          width="1800"
          height="1800"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            bottom: -900,
            right: -900,
            opacity: 0.04,
            transform: "rotate(-30deg)",
            pointerEvents: "none",
          }}
        >
          <defs>
            <radialGradient id="leafInspFav" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={C.text} stopOpacity="0" />
              <stop offset="70%" stopColor={C.text} stopOpacity="0" />
              <stop offset="100%" stopColor={C.text} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafInspFav)"
          />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
