// ============================================
// IMAGE SLIDE — Fullt bilde sentrert på bakgrunn
// ============================================
// Viser et bilde fra public/bilder/ sentrert på en bakgrunn.
// Bakgrunnen kan være en farge eller en gradient.

import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

/**
 * @param {Object} props
 * @param {string} props.imageSrc - Filnavn fra public/bilder/ (f.eks. "iphone-solbord.png")
 * @param {string} [props.bg] - Bakgrunnsfarge (hex). Default: "#BDB09B"
 * @param {string} [props.fit] - "contain" | "cover" | "center". Default: "contain"
 */
export const ImageSlide = ({
  imageSrc,
  bg = "#BDB09B",
  fit = "contain",
}) => {
  const src = staticFile(`bilder/${imageSrc}`);

  return (
    <AbsoluteFill style={{ background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Img
        src={src}
        style={{
          width: fit === "cover" ? "100%" : "auto",
          height: fit === "cover" ? "100%" : "100%",
          objectFit: fit === "center" ? "contain" : fit,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </AbsoluteFill>
  );
};
