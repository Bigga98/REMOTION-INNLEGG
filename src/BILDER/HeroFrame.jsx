import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const W = 1600;
const H = 1000;

export const HeroFrame = ({ imageSrc }) => {
  const src = staticFile(`bilder/${imageSrc}`);

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: W,
          height: H,
          transform: "scale(2)",
          transformOrigin: "top left",
          overflow: "hidden",
          borderRadius: 12,
          background: "#111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Blurret bakgrunn */}
        <Img
          src={src}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(18px) saturate(1.4) brightness(0.95)",
            transform: "scale(1.3)",
          }}
        />

        {/* Glassmorphism hero-wrap */}
        <div
          style={{
            position: "relative",
            width: "80%",
            maxHeight: "80%",
            overflow: "hidden",
            borderRadius: 12,
            padding: 4,
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Img
            src={src}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              borderRadius: 8,
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
