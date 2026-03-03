import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const W = 1600;
const H = 1000;

export const ShowcaseFrame = ({
  imageSrc,
  gradient = "linear-gradient(145deg, #1a2a3a, #0f1f2e, #0a1520)",
}) => {
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
          background: gradient,
        }}
      >
        {/* Glassmorphism front-wrap */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "55%",
            height: "85%",
            overflow: "hidden",
            borderRadius: "12px 12px 0 0",
            padding: "4px 4px 0 4px",
            background: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderBottom: "none",
            boxShadow: "0 -4px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Img
            src={src}
            style={{
              width: "100%",
              display: "block",
              borderRadius: "8px 8px 0 0",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
