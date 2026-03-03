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

export const GoogleSynlighetGray = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Line animations: smooth, no bounce (damping: 200) ---
  const line1 = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const line2 = spring({
    frame: frame - 16,
    fps,
    config: { damping: 200 },
  });

  const line1Y = interpolate(line1, [0, 1], [30, 0]);
  const line2Y = interpolate(line2, [0, 1], [30, 0]);

  // --- Line 2 gradient blur (left clears first, right clears last) ---
  const blur1 = interpolate(frame, [16, 38], [4, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const blur2 = interpolate(frame, [22, 42], [6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const blur3 = interpolate(frame, [28, 50], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // --- Image 1 animation ---
  const img1 = spring({
    frame: frame - 50,
    fps,
    config: { damping: 200 },
  });

  const img1Y = interpolate(img1, [0, 1], [50, 0]);

  // --- Image 2 animation ---
  const img2 = spring({
    frame: frame - 64,
    fps,
    config: { damping: 200 },
  });

  const img2Y = interpolate(img2, [0, 1], [50, 0]);

  // --- Arrow animation ---
  const arrow = spring({
    frame: frame - 38,
    fps,
    config: { damping: 200 },
  });

  const arrowX = interpolate(arrow, [0, 1], [-20, 0]);

  // --- Google text gradient animation ---
  const googleGradPos = interpolate(frame, [0, 240], [0, 200]);

  // --- Image focus pull + brightness ---
  const img1Blur = interpolate(img1, [0, 0.7, 1], [8, 2, 0]);
  const img1Brightness = interpolate(img1, [0, 0.6, 1], [1.3, 1.08, 1]);
  const img1Scale = interpolate(img1, [0, 1], [1.04, 1]);
  const img2Blur = interpolate(img2, [0, 0.7, 1], [8, 2, 0]);
  const img2Brightness = interpolate(img2, [0, 0.6, 1], [1.3, 1.08, 1]);
  const img2Scale = interpolate(img2, [0, 1], [1.04, 1]);

  // --- Animated gradient for glassmorphism ---
  const gradAngle1 = interpolate(frame, [0, 240], [120, 280]);
  const gradAngle2 = interpolate(frame, [0, 240], [200, 360]);

  return (
    <AbsoluteFill
      style={{
        fontFamily: "'Clash Display', sans-serif",
      }}
    >
      {/* Background — #e8e6e6 subtle gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, #f0eeee 0%, #e8e6e6 40%, #ddd9d9 100%)",
        }}
      />

      {/* White fade overlay at bottom */}
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

      {/* Leaf — gradient fill fading inward from edge + sharp stroke */}
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
          zIndex: 0,
        }}
      >
        <defs>
          <radialGradient id="leafFadeGray" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0" />
            <stop offset="70%" stopColor="#1B2A4A" stopOpacity="0" />
            <stop offset="100%" stopColor="#1B2A4A" stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
          fill="url(#leafFadeGray)"
          stroke="#1B2A4A"
          strokeWidth="0.06"
        />
      </svg>

      {/* Text — absolute positioned */}
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 50,
          right: 50,
          textAlign: "center",
          fontSize: 64,
          fontWeight: 500,
          lineHeight: 1.35,
          letterSpacing: "0.02em",
          color: "#1B2A4A",
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            opacity: line1,
            transform: `translateY(${line1Y}px)`,
          }}
        >
          Hvorfor konkurrentene dine
        </div>

        {/* Line 2 — gradient blur: left clears first, right last */}
        <div
          style={{
            opacity: line2,
            transform: `translateY(${line2Y}px)`,
          }}
        >
          <span style={{ filter: blur1 > 0.1 ? `blur(${blur1}px)` : "none" }}>
            er mer{" "}
          </span>
          <span style={{ filter: blur2 > 0.1 ? `blur(${blur2}px)` : "none" }}>
            synlig på{" "}
          </span>
          <span
            style={{
              filter: blur3 > 0.1 ? `blur(${blur3}px)` : "none",
              background: "linear-gradient(90deg, #D4806B, #C4607A, #D4806B, #B87D6A, #D4806B)",
              backgroundSize: "200% 100%",
              backgroundPosition: `${googleGradPos}% 0%`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Google
          </span>
        </div>
        {/* Arrow pointing right */}
        <div
          style={{
            opacity: arrow,
            transform: `translateX(${arrowX}px)`,
            marginTop: 20,
          }}
        >
          <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
            <path
              d="M4 14h36M30 4l10 10-10 10"
              stroke="rgba(26,26,46,0.4)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Logo — top left, always visible */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 50,
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
          }}
        />
        <span
          style={{
            fontFamily: "'Panchang', sans-serif",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.5px",
            color: "#1B2A4A",
          }}
        >
          Mediegruppen
        </span>
      </div>

      {/* Screenshot 1 (back) — slightly left, tilted left */}
      <div
        style={{
          position: "absolute",
          bottom: -140,
          left: "50%",
          transform: `translateX(-65%) translateY(${img1Y}px) rotate(-5deg)`,
          opacity: img1,
          padding: 10,
          borderRadius: 18,
          background: `linear-gradient(${gradAngle1}deg, rgba(80,120,200,0.35) 0%, rgba(255,255,255,0.5) 40%, rgba(40,70,160,0.2) 70%, rgba(100,150,220,0.3) 100%)`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(80,120,200,0.3)",
          boxShadow:
            "0 12px 40px rgba(80,120,200,0.18), 0 4px 12px rgba(40,70,160,0.1)",
          zIndex: 1,
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}>
          <img
            src={staticFile("google-serp-2.png")}
            style={{
              width: 580,
              borderRadius: 12,
              display: "block",
              filter: `blur(${img1Blur}px) brightness(${img1Brightness})`,
              transform: `scale(${img1Scale})`,
            }}
          />
          {/* Frosted edge vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 12,
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 50%, rgba(255,255,255,0.25) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Screenshot 2 (front) — slightly right, tilted right, overlapping */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: "50%",
          transform: `translateX(-30%) translateY(${img2Y}px) rotate(5deg)`,
          opacity: img2,
          padding: 10,
          borderRadius: 18,
          background: `linear-gradient(${gradAngle2}deg, rgba(40,70,160,0.2) 0%, rgba(255,255,255,0.5) 35%, rgba(80,120,200,0.35) 65%, rgba(40,70,160,0.15) 100%)`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(80,120,200,0.3)",
          boxShadow:
            "0 12px 40px rgba(80,120,200,0.18), 0 4px 12px rgba(40,70,160,0.1)",
          zIndex: 2,
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}>
          <img
            src={staticFile("google-serp-3.png")}
            style={{
              width: 580,
              borderRadius: 12,
              display: "block",
              filter: `blur(${img2Blur}px) brightness(${img2Brightness})`,
              transform: `scale(${img2Scale})`,
            }}
          />
          {/* Frosted edge vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 12,
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 50%, rgba(255,255,255,0.25) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
