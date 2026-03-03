import React from "react";
import {
  AbsoluteFill,
  staticFile,
  Img,
} from "remotion";

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

export const NettsiderFadeBlurClean = () => {
  // Static still — all animations at final state
  const cardAnims = grid.map((card) => {
    const x = GRID_LEFT + card.col * (CARD_W + GAP);
    const yOffset = card.side === "right" ? -12 : 0;
    const finalY = card.row * (CARD_H + GAP) + yOffset;

    return { x, y: finalY, blur: 0, opacity: 1, rotate: card.rotate };
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

        {/* White fade over toppen av bildene */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -300,
            right: -300,
            height: 450,
            background: "linear-gradient(180deg, #fefefe 0%, #fefefe 50%, #fefefedd 70%, #fefefe88 85%, transparent 100%)",
            zIndex: 8,
            pointerEvents: "none",
            transform: "rotate(10deg)",
            transformOrigin: "center bottom",
          }}
        />

        {/* 2x2 SCREENSHOT-GRID — flyttet opp for å fylle mer */}
        <div
          style={{
            position: "absolute",
            top: 180,
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
                filter: `blur(${cardAnims[i].blur}px)`,
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

        {/* Blad */}
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
            <radialGradient id="leafFadeBlurClean" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#111" stopOpacity="0" />
              <stop offset="70%" stopColor="#111" stopOpacity="0" />
              <stop offset="100%" stopColor="#111" stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafFadeBlurClean)"
          />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
