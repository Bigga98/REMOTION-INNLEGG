import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
  Img,
} from "remotion";
import { loadFont } from "@remotion/fonts";

const generalSansMedium = loadFont({
  family: "General Sans",
  url: staticFile("GeneralSans-Medium.woff2"),
  weight: "500",
});

const generalSansSemiBold = loadFont({
  family: "General Sans",
  url: staticFile("GeneralSans-SemiBold.woff2"),
  weight: "600",
});

const generalSansBold = loadFont({
  family: "General Sans",
  url: staticFile("GeneralSans-Bold.woff2"),
  weight: "700",
});

const archivoMedium = loadFont({
  family: "Archivo",
  url: staticFile("Archivo-Medium.woff2"),
  weight: "500",
});

const panchangLoaded = loadFont({
  family: "Panchang",
  url: staticFile("Panchang-SemiBold.woff2"),
  weight: "600",
});

const FONT = "'General Sans', sans-serif";

const CARD_W = 500;
const CARD_H = 420;
const GAP = 16;
const GRID_W = CARD_W * 2 + GAP;
const GRID_LEFT = (1080 - GRID_W) / 2;

const grid = [
  { src: "bilder/showcase-laerdom.png", rotate: 0, col: 0, row: 0, side: "left" },
  { src: "bilder/showcase-findera.png", rotate: 0, col: 1, row: 0, side: "right" },
  { src: "bilder/showcase-strandberg.png", rotate: 0, col: 0, row: 1, side: "left" },
  { src: "bilder/showcase-elvemark.png", rotate: 0, col: 1, row: 1, side: "right" },
];

export const NyesteNettsider = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation
  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const titleY = interpolate(titleIn, [0, 1], [30, 0]);

  // Badge animation
  const badgeIn = spring({
    frame: frame - 8,
    fps,
    config: { damping: 18, mass: 0.5 },
  });

  // Card animations — staggered
  const cardAnims = grid.map((card, i) => {
    const delay = 16 + i * 10;
    const prog = spring({
      frame: frame - delay,
      fps,
      config: { damping: 26, mass: 0.7 },
    });

    const startRotate = card.rotate + (card.rotate > 0 ? 12 : -12);
    const rotate = interpolate(prog, [0, 1], [startRotate, card.rotate]);

    const x = GRID_LEFT + card.col * (CARD_W + GAP);
    const yOffset = card.side === "right" ? -12 : 0;
    const finalY = card.row * (CARD_H + GAP) + yOffset;
    const y = interpolate(prog, [0, 1], [300, finalY]);
    const opacity = interpolate(prog, [0, 0.3], [0, 1], {
      extrapolateRight: "clamp",
    });

    return { rotate, y, opacity, x };
  });

  // Bottom fade in
  const bottomIn = spring({
    frame: frame - 60,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          transform: "scale(2)",
          transformOrigin: "top left",
          fontFamily: FONT,
          overflow: "hidden",
        }}
      >
        {/* Bakgrunn */}
        <div style={{ position: "absolute", inset: 0, background: "#fefefe" }} />

        {/* Subtil tekstur */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(0,0,0,0.015) 0%, transparent 70%), radial-gradient(ellipse at 80% 80%, rgba(0,0,0,0.01) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* ===== LOGO ===== */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 32,
            display: "flex",
            alignItems: "center",
            gap: 7,
            zIndex: 10,
          }}
        >
          <img
            src={staticFile("logo.png")}
            style={{ width: 17, height: 17, objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "'Panchang', sans-serif",
              fontSize: 9.5,
              fontWeight: 600,
              color: "#1a1a1a",
              letterSpacing: "-0.2px",
            }}
          >
            Mediegruppen
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 27,
            right: 32,
            fontFamily: FONT,
            fontSize: 9,
            fontWeight: 500,
            color: "#1a1a1a",
            opacity: 0.35,
            letterSpacing: "0.3px",
            textTransform: "uppercase",
            zIndex: 10,
          }}
        >
          Mediegruppen.no
        </div>

        {/* ===== BADGE — sentrert ===== */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: badgeIn,
            transform: `scale(${interpolate(badgeIn, [0, 1], [0.9, 1])})`,
            zIndex: 10,
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 500,
              color: "#555",
              padding: "5px 14px",
              borderRadius: 20,
              border: "1px solid rgba(0,0,0,0.1)",
              background: "rgba(255,255,255,0.8)",
              letterSpacing: "0.3px",
            }}
          >
            FERSKE DESIGN
          </span>
        </div>

        {/* ===== HEADLINE — sentrert ===== */}
        <div
          style={{
            position: "absolute",
            top: 104,
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: titleIn,
            transform: `translateY(${titleY}px)`,
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 78,
              fontWeight: 500,
              color: "#111111",
              letterSpacing: "-3px",
              lineHeight: 0.92,
              textTransform: "uppercase",
              paddingRight: 160,
            }}
          >
            Oppdater
          </div>
          <div
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 78,
              fontWeight: 500,
              color: "#111111",
              letterSpacing: "-3px",
              lineHeight: 0.92,
              textTransform: "uppercase",
              paddingLeft: 200,
            }}
          >
            nettsiden din
          </div>
        </div>

        {/* ===== White fade over toppen av bildene ===== */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -300,
            right: -300,
            height: 550,
            background: "linear-gradient(180deg, #fefefe 0%, #fefefe 60%, #fefefedd 75%, #fefefe88 88%, transparent 100%)",
            zIndex: 8,
            pointerEvents: "none",
            transform: "rotate(10deg)",
            transformOrigin: "center bottom",
          }}
        />

        {/* ===== 2x2 SCREENSHOT-GRID ===== */}
        <div
          style={{
            position: "absolute",
            top: 300,
            left: 0,
            right: 0,
            bottom: 0,
            transform: "rotate(10deg)",
            transformOrigin: "center center",
          }}
        >
          {grid.map((card, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: cardAnims[i].x,
                top: cardAnims[i].y,
                opacity: cardAnims[i].opacity,
                transform: `rotate(${cardAnims[i].rotate}deg)`,
                zIndex: i + 1,
              }}
            >
              <div
                style={{
                  width: CARD_W,
                  borderRadius: 10,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: card.side === "left"
                    ? "0 12px 40px rgba(0,0,0,0.10), 0 4px 14px rgba(0,0,0,0.06)"
                    : "0 4px 20px rgba(0,0,0,0.05), 0 1px 6px rgba(0,0,0,0.03)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <Img
                  src={staticFile(card.src)}
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "top",
                    height: CARD_H,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ===== KARUSELL-PRIKKER ===== */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 6,
            opacity: bottomIn * 0.5,
            zIndex: 10,
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: i === 0 ? 8 : 6,
                height: i === 0 ? 8 : 6,
                borderRadius: "50%",
                background: i === 0 ? "#333" : "rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>

        {/* ===== Pil hoyre ===== */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 32,
            opacity: bottomIn * 0.3,
            zIndex: 10,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <path d="M10 8l4 4-4 4" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* ===== Blad ===== */}
        <svg
          width="1800"
          height="1800"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            bottom: -900,
            right: -900,
            opacity: 0.06,
            transform: "rotate(-30deg)",
            pointerEvents: "none",
          }}
        >
          <defs>
            <radialGradient id="leafNyeste" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#111" stopOpacity="0" />
              <stop offset="70%" stopColor="#111" stopOpacity="0" />
              <stop offset="100%" stopColor="#111" stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafNyeste)"
          />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
