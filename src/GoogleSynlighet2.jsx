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

const fontLoaded = loadFont({
  family: "Clash Display",
  url: staticFile("ClashDisplay-Medium.woff2"),
  weight: "500",
});

const fontLogoPanchang = loadFont({
  family: "Panchang",
  url: staticFile("Panchang-SemiBold.woff2"),
  weight: "600",
});

const ACCENT_GRADIENT = "linear-gradient(135deg, #657dff, #8b9dff)";

const checkpoints = [
  { arrow: true, text: "Matcher innholdet det folk søker etter?" },
  { arrow: true, text: "Er tittelen din relevant?" },
  { arrow: true, text: "Ser det ut som spam?" },
];

export const GoogleSynlighet2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Title animation ---
  const title = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const titleY = interpolate(title, [0, 1], [30, 0]);

  // --- Checkpoint animations (staggered) ---
  const cp1 = spring({ frame: frame - 10, fps, config: { damping: 200 } });
  const cp2 = spring({ frame: frame - 16, fps, config: { damping: 200 } });
  const cp3 = spring({ frame: frame - 22, fps, config: { damping: 200 } });
  const cpAnims = [cp1, cp2, cp3];

  const cp1Y = interpolate(cp1, [0, 1], [20, 0]);
  const cp2Y = interpolate(cp2, [0, 1], [20, 0]);
  const cp3Y = interpolate(cp3, [0, 1], [20, 0]);
  const cpYs = [cp1Y, cp2Y, cp3Y];

  // --- Bottom line animation ---
  const bottom = spring({
    frame: frame - 32,
    fps,
    config: { damping: 200 },
  });
  const bottomY = interpolate(bottom, [0, 1], [30, 0]);

  // --- Logo animation ---
  const logo = spring({
    frame: frame - 38,
    fps,
    config: { damping: 200 },
  });
  const logoY = interpolate(logo, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        fontFamily: "'Clash Display', sans-serif",
      }}
    >
      {/* Background image */}
      <img
        src={staticFile("bg-mediegruppen.png")}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Leaf — gradient fill fading inward from edge + sharp stroke */}
      <svg
        width="1800"
        height="1800"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          bottom: -900,
          right: -900,
          opacity: 0.1,
          transform: "rotate(-30deg)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <defs>
          <radialGradient id="leafFadeDark2" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
          fill="url(#leafFadeDark2)"
          stroke="#ffffff"
          strokeWidth="0.06"
        />
      </svg>

      {/* Logo — top left */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 50,
          opacity: logo,
          transform: `translateY(${logoY}px)`,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img
          src={staticFile("logo.png")}
          style={{
            width: 28,
            height: 28,
            objectFit: "contain",
            filter: "invert(1)",
          }}
        />
        <span
          style={{
            fontFamily: "'Panchang', sans-serif",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.5px",
            color: "#ffffff",
          }}
        >
          Mediegruppen
        </span>
      </div>

      {/* Main content — centered */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 70,
          right: 70,
        }}
      >
        {/* Title */}
        <div
          style={{
            opacity: title,
            transform: `translateY(${titleY}px)`,
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: "0.01em",
            color: "#ffffff",
            marginBottom: 60,
          }}
        >
          Google sjekker det{" "}
          <span
            style={{
              background: ACCENT_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            grunnleggende
          </span>{" "}
          først:
        </div>

        {/* Checkpoints */}
        {checkpoints.map((cp, i) => (
          <div
            key={i}
            style={{
              opacity: cpAnims[i],
              transform: `translateY(${cpYs[i]}px)`,
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontSize: 28,
                color: "rgba(101, 125, 255, 0.9)",
                lineHeight: 1.4,
                flexShrink: 0,
              }}
            >
              →
            </span>
            <span
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: 1.4,
              }}
            >
              {cp.text}
            </span>
          </div>
        ))}

        {/* Bottom warning line */}
        <div
          style={{
            opacity: bottom,
            transform: `translateY(${bottomY}px)`,
            marginTop: 50,
            display: "flex",
            alignItems: "flex-start",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 36, lineHeight: 1.3, flexShrink: 0 }}>
            ❌
          </span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: 1.3,
              color: "#ffffff",
            }}
          >
            Består du ikke dette steget,
            <br />
            <span
              style={{
                background: ACCENT_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              blir du aldri vist til noen.
            </span>
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
