import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const W = 1600;
const H = 1000;

const cardBase = {
  position: "absolute",
  width: "38%",
  overflow: "hidden",
  borderRadius: 10,
  padding: 4,
  background: "rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
};

export const StackedFrame = ({ bgSrc, leftSrc, centerSrc, rightSrc }) => {
  const bg = staticFile(`bilder/${bgSrc}`);
  const leftImg = staticFile(`bilder/${leftSrc}`);
  const centerImg = staticFile(`bilder/${centerSrc}`);
  const rightImg = staticFile(`bilder/${rightSrc}`);

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
          src={bg}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            filter: "blur(18px) saturate(1.4) brightness(0.95)",
            transform: "scale(1.3)",
          }}
        />

        {/* Tre overlappende kort */}
        <div
          style={{
            position: "relative",
            width: "90%",
            height: "85%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Venstre */}
          <div
            style={{
              ...cardBase,
              left: "2%",
              top: "18%",
              zIndex: 1,
              transform: "rotate(-3deg)",
            }}
          >
            <Img
              src={leftImg}
              style={{ width: "100%", display: "block", borderRadius: 7 }}
            />
          </div>

          {/* Senter */}
          <div
            style={{
              ...cardBase,
              zIndex: 3,
              top: "5%",
            }}
          >
            <Img
              src={centerImg}
              style={{ width: "100%", display: "block", borderRadius: 7 }}
            />
          </div>

          {/* Hoyre */}
          <div
            style={{
              ...cardBase,
              right: "2%",
              top: "25%",
              zIndex: 2,
              transform: "rotate(3deg)",
            }}
          >
            <Img
              src={rightImg}
              style={{ width: "100%", display: "block", borderRadius: 7 }}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
