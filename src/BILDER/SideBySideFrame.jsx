import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const W = 1600;
const H = 1000;

const lightShadow = `
  0 2px 4px rgba(0, 0, 0, 0.04),
  0 8px 16px rgba(0, 0, 0, 0.06),
  0 20px 40px rgba(0, 0, 0, 0.08)
`;

const heavyShadow = `
  0 2px 4px rgba(0, 0, 0, 0.04),
  0 8px 16px rgba(0, 0, 0, 0.08),
  0 24px 48px rgba(0, 0, 0, 0.12),
  0 40px 80px rgba(0, 0, 0, 0.2),
  0 60px 100px rgba(0, 0, 0, 0.15)
`;

export const SideBySideFrame = ({ leftSrc, rightSrc, shadowBottom = false }) => {
  const left = staticFile(`bilder/${leftSrc}`);
  const right = staticFile(`bilder/${rightSrc}`);
  const shadow = shadowBottom ? heavyShadow : lightShadow;

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
          background: "linear-gradient(180deg, #e8e6e6 0%, #f5f3f3 100%)",
          display: "flex",
          alignItems: "flex-end",
          padding: "140px 60px 0 60px",
          gap: 20,
          perspective: 1200,
        }}
      >
        {/* Venstre kort */}
        <div
          style={{
            flex: 1,
            height: "100%",
            overflow: "hidden",
            borderRadius: "12px 12px 0 0",
            padding: "4px 4px 0 4px",
            background: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            borderBottom: "none",
            boxShadow: shadow,
            transform: "rotateY(2deg)",
          }}
        >
          <Img
            src={left}
            style={{
              width: "100%",
              display: "block",
              borderRadius: "8px 8px 0 0",
            }}
          />
        </div>

        {/* Hoyre kort */}
        <div
          style={{
            flex: 1,
            height: "100%",
            overflow: "hidden",
            borderRadius: "12px 12px 0 0",
            padding: "4px 4px 0 4px",
            background: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            borderBottom: "none",
            boxShadow: shadow,
            transform: "rotateY(-2deg)",
          }}
        >
          <Img
            src={right}
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
