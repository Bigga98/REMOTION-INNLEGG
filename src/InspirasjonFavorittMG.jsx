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
 * InspirasjonFavorittMG — MG-branded versjon.
 *
 * Samme layout/struktur som InspirasjonFavoritt, men med
 * Mediegruppen visuell identitet:
 *   - Gray-gradient bakgrunn
 *   - #1B2A4A tekstfarge
 *   - Coral-gradient aksent (#D4806B → #C4607A)
 *   - Glassmorphism på mockup-rammer
 *   - White fade overlay i bunnen
 *   - Standard blad-dekorasjon (0.12 opacity)
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

// MG-farger fra colors.js themes.gray + standard
const MG = {
  bg: "linear-gradient(160deg, #f0eeee 0%, #e8e6e6 40%, #ddd9d9 100%)",
  text: "#1B2A4A",
  coral: "#D4806B",
  coralDark: "#C4607A",
  coralGradient: "linear-gradient(135deg, #D4806B, #C4607A)",
  teal: "#6B9B9E",
  tealDark: "#5B8BC0",
  green: "#5BA07E",
  warm: "#B56B4A",
  leaf: "#1B2A4A",
  arrow: "rgba(26,26,46,0.4)",
};

// ── Glassmorphism wrapper for mockups ──
const GlassFrame = ({ children, gradAngle, style }) => (
  <div
    style={{
      padding: 10,
      borderRadius: 18,
      background: `linear-gradient(${gradAngle}deg, rgba(80,120,200,0.35) 0%, rgba(255,255,255,0.5) 40%, rgba(40,70,160,0.2) 70%, rgba(100,150,220,0.3) 100%)`,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(80,120,200,0.3)",
      boxShadow: "0 12px 40px rgba(80,120,200,0.18), 0 4px 12px rgba(40,70,160,0.1)",
      ...style,
    }}
  >
    {children}
  </div>
);

// ── Browser-mockup: 3 varianter med MG-farger ──

const MockupDark = () => (
  <div
    style={{
      width: 560,
      height: 370,
      borderRadius: 12,
      background: "#1B2A4A",
      overflow: "hidden",
    }}
  >
    <div style={{ height: 26, background: "#142038", display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
      <div style={{ marginLeft: 14, width: 120, height: 12, borderRadius: 3, background: "rgba(255,255,255,0.06)" }} />
    </div>
    <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", gap: 10 }}>
      <div style={{ width: 16, height: 16, borderRadius: 3, background: "rgba(255,255,255,0.12)" }} />
      <div style={{ width: 50, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.15)" }} />
      <div style={{ flex: 1 }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
    </div>
    <div style={{ display: "flex", padding: "8px 16px", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <div style={{ width: "80%", height: 11, borderRadius: 3, background: "rgba(255,255,255,0.7)", marginBottom: 6 }} />
        <div style={{ width: "55%", height: 11, borderRadius: 3, background: "rgba(255,255,255,0.7)", marginBottom: 12 }} />
        <div style={{ width: "95%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginBottom: 4 }} />
        <div style={{ width: "80%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginBottom: 4 }} />
        <div style={{ width: "65%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.15)", marginBottom: 14 }} />
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 70, height: 22, borderRadius: 5, background: MG.coral }} />
          <div style={{ width: 70, height: 22, borderRadius: 5, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }} />
        </div>
      </div>
      <div style={{ width: 180, height: 130, borderRadius: 10, background: "linear-gradient(145deg, #223A5A, #142038)", display: "flex", flexDirection: "column", padding: 10, gap: 6 }}>
        <div style={{ width: "60%", height: 6, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
        <div style={{ flex: 1, borderRadius: 6, background: `linear-gradient(180deg, ${MG.teal}44, ${MG.teal}11)`, display: "flex", alignItems: "flex-end", padding: "0 6px 6px" }}>
          {[35, 55, 40, 65, 50, 75, 60].map((h, i) => (
            <div key={i} style={{ flex: 1, marginRight: 2, height: `${h}%`, background: i === 5 ? MG.green : "rgba(255,255,255,0.15)", borderRadius: 2 }} />
          ))}
        </div>
      </div>
    </div>
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

const MockupLight = () => (
  <div
    style={{
      width: 560,
      height: 370,
      borderRadius: 12,
      background: "#ffffff",
      overflow: "hidden",
    }}
  >
    <div style={{ height: 26, background: "#f5f5f5", display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
      <div style={{ marginLeft: 14, width: 120, height: 12, borderRadius: 3, background: "rgba(0,0,0,0.05)" }} />
    </div>
    <div style={{ display: "flex", alignItems: "center", padding: "10px 16px", gap: 10 }}>
      <div style={{ width: 16, height: 16, borderRadius: 3, background: MG.coral }} />
      <div style={{ width: 55, height: 7, borderRadius: 2, background: MG.text, opacity: 0.5 }} />
      <div style={{ flex: 1 }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: MG.text, opacity: 0.15 }} />
      <div style={{ width: 28, height: 7, borderRadius: 2, background: MG.text, opacity: 0.15 }} />
      <div style={{ width: 60, height: 20, borderRadius: 5, background: MG.warm }} />
    </div>
    <div style={{ padding: "12px 16px", display: "flex", gap: 14 }}>
      <div style={{ flex: 1 }}>
        <div style={{ width: "75%", height: 13, borderRadius: 3, background: MG.text, opacity: 0.85, marginBottom: 5 }} />
        <div style={{ width: "50%", height: 13, borderRadius: 3, background: MG.text, opacity: 0.85, marginBottom: 14 }} />
        <div style={{ width: "90%", height: 5, borderRadius: 2, background: MG.text, opacity: 0.12, marginBottom: 4 }} />
        <div style={{ width: "80%", height: 5, borderRadius: 2, background: MG.text, opacity: 0.12, marginBottom: 4 }} />
        <div style={{ width: "60%", height: 5, borderRadius: 2, background: MG.text, opacity: 0.12, marginBottom: 14 }} />
        <div style={{ width: 80, height: 22, borderRadius: 6, background: MG.green }} />
      </div>
      <div style={{ width: 180, height: 130, borderRadius: 10, background: "linear-gradient(135deg, #E8F0F6, #d8e2ea)" }} />
    </div>
    <div style={{ display: "flex", gap: 8, padding: "6px 16px" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ flex: 1, height: 85, borderRadius: 8, background: "#f8f9fa", padding: 8, display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ width: "100%", height: 38, borderRadius: 5, background: i === 1 ? `linear-gradient(135deg, ${MG.teal}22, ${MG.teal}08)` : "rgba(0,0,0,0.03)" }} />
          <div style={{ width: "65%", height: 5, borderRadius: 2, background: MG.text, opacity: 0.2 }} />
          <div style={{ width: "45%", height: 5, borderRadius: 2, background: MG.text, opacity: 0.12 }} />
        </div>
      ))}
    </div>
  </div>
);

const MockupCoral = () => (
  <div
    style={{
      width: 560,
      height: 370,
      borderRadius: 12,
      background: "#ffffff",
      overflow: "hidden",
    }}
  >
    <div style={{ height: 26, background: "#f5f5f5", display: "flex", alignItems: "center", padding: "0 10px", gap: 5 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
      <div style={{ marginLeft: 14, width: 120, height: 12, borderRadius: 3, background: "rgba(0,0,0,0.05)" }} />
    </div>
    <div style={{ display: "flex", alignItems: "center", padding: "6px 16px", gap: 8 }}>
      <div style={{ width: 14, height: 14, borderRadius: 3, background: MG.text }} />
      <div style={{ width: 45, height: 6, borderRadius: 2, background: MG.text, opacity: 0.35 }} />
      <div style={{ flex: 1 }} />
      <div style={{ width: 24, height: 6, borderRadius: 2, background: MG.text, opacity: 0.12 }} />
      <div style={{ width: 24, height: 6, borderRadius: 2, background: MG.text, opacity: 0.12 }} />
    </div>
    {/* Coral hero-seksjon */}
    <div
      style={{
        margin: "4px 12px",
        borderRadius: 10,
        background: `linear-gradient(160deg, ${MG.coral}, ${MG.coralDark})`,
        padding: "30px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ width: "40%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.3)", margin: "0 auto 10px" }} />
      <div style={{ width: "80%", height: 12, borderRadius: 3, background: "rgba(255,255,255,0.9)", margin: "0 auto 6px" }} />
      <div style={{ width: "65%", height: 12, borderRadius: 3, background: "rgba(255,255,255,0.9)", margin: "0 auto 14px" }} />
      <div style={{ width: "90%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.25)", margin: "0 auto 3px" }} />
      <div style={{ width: "70%", height: 5, borderRadius: 2, background: "rgba(255,255,255,0.25)", margin: "0 auto" }} />
    </div>
    <div style={{ padding: "14px 16px", textAlign: "center" }}>
      <div style={{ width: "55%", height: 6, borderRadius: 2, background: MG.text, opacity: 0.25, margin: "0 auto 8px" }} />
      <div style={{ width: "75%", height: 5, borderRadius: 2, background: MG.text, opacity: 0.12, margin: "0 auto 3px" }} />
      <div style={{ width: "60%", height: 5, borderRadius: 2, background: MG.text, opacity: 0.12, margin: "0 auto" }} />
    </div>
  </div>
);

export const InspirasjonFavorittMG = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Animasjoner (identisk med original) ---
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

  // Glassmorphism gradient-vinkel animasjon
  const glassAngle1 = interpolate(frame, [0, 240], [120, 280]);
  const glassAngle2 = interpolate(frame, [0, 240], [200, 360]);
  const glassAngle3 = interpolate(frame, [0, 240], [160, 320]);

  // Coral gradient posisjon for badge-tekst
  const coralPos = interpolate(frame, [0, 240], [0, 200]);

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
        {/* Bakgrunn — MG gray gradient */}
        <div style={{ position: "absolute", inset: 0, background: MG.bg }} />

        {/* White fade overlay — bunn */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ===== LOGO — MG standard ===== */}
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 30,
            display: "flex",
            alignItems: "center",
            gap: 7,
            zIndex: 10,
          }}
        >
          <img src={staticFile("logo.png")} style={{ width: 18, height: 18, objectFit: "contain" }} />
          <span
            style={{
              fontFamily: "'Panchang', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              color: MG.text,
              letterSpacing: "-0.3px",
            }}
          >
            Mediegruppen
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 26,
            right: 30,
            fontFamily: "'Inter', sans-serif",
            fontSize: 9,
            color: MG.text,
            opacity: 0.35,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          Mediegruppen.no
        </div>

        {/* ===== HEADLINE ===== */}
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
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: MG.text,
              letterSpacing: "-2px",
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            Mitt favoritt
          </div>

          {/* Badge med coral gradient */}
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
                background: "linear-gradient(90deg, #D4806B, #C4607A, #D4806B, #B87D6A, #D4806B)",
                backgroundSize: "200% 100%",
                backgroundPosition: `${coralPos}% 0%`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: 60,
                fontWeight: 600,
                fontStyle: "italic",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
              }}
            >
              Nettside Design
            </span>
          </div>

          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: MG.text,
              letterSpacing: "-2px",
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            denne måneden
          </div>
        </div>

        {/* ===== MOCKUPS med glassmorphism ===== */}
        <div
          style={{
            position: "absolute",
            top: 420,
            left: 0,
            right: 0,
            height: 850,
          }}
        >
          {/* Mockup 1 (bakerst) — dark MG */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              opacity: m1,
              transform: `translateX(-350px) translateY(${m1Y}px) rotate(-5deg)`,
              zIndex: 1,
            }}
          >
            <GlassFrame gradAngle={glassAngle1}>
              <MockupDark />
            </GlassFrame>
          </div>

          {/* Mockup 2 (midten) — lys */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              opacity: m2,
              transform: `translateX(-310px) translateY(${140 + m2Y}px) rotate(-1deg)`,
              zIndex: 2,
            }}
          >
            <GlassFrame gradAngle={glassAngle2}>
              <MockupLight />
            </GlassFrame>
          </div>

          {/* Mockup 3 (foran) — coral hero */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              opacity: m3,
              transform: `translateX(-250px) translateY(${290 + m3Y}px) rotate(3deg)`,
              zIndex: 3,
            }}
          >
            <GlassFrame gradAngle={glassAngle3}>
              <MockupCoral />
            </GlassFrame>
          </div>
        </div>

        {/* ===== BUNN ===== */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: MG.text,
            opacity: bottomIn * 0.4,
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
            color: MG.text,
            opacity: bottomIn * 0.35,
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
              stroke={MG.arrow}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ===== BLAD — standard MG (0.12 opacity) ===== */}
        <svg
          width="1800"
          height="1800"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            bottom: -900,
            right: -900,
            opacity: 0.12,
            transform: "rotate(-30deg)",
            pointerEvents: "none",
          }}
        >
          <defs>
            <radialGradient id="leafInspFavMG" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={MG.leaf} stopOpacity="0" />
              <stop offset="70%" stopColor={MG.leaf} stopOpacity="0" />
              <stop offset="100%" stopColor={MG.leaf} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafInspFavMG)"
          />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
