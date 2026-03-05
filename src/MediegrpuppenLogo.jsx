import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { loadFont } from "@remotion/fonts";

loadFont({
  family: "Panchang",
  url: staticFile("Panchang-SemiBold.woff2"),
  weight: "600",
});

export const MediegrpuppenLogo = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#F5F5F3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Panchang', sans-serif",
          fontSize: 176,
          fontWeight: 600,
          letterSpacing: "-4px",
          color: "#1B2A4A",
          lineHeight: 1,
        }}
      >
        Mediegruppen
      </div>
    </AbsoluteFill>
  );
};
