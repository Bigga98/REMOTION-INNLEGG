import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
} from "remotion";
import { fontFamily } from "./lib/fonts";

const ACCENT_GRADIENT =
  "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)";

export const Speed1Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1 = spring({ frame, fps, config: { damping: 200 } });
  const line2 = spring({ frame: frame - 14, fps, config: { damping: 200 } });
  const line3 = spring({ frame: frame - 28, fps, config: { damping: 200 } });

  const line1Y = interpolate(line1, [0, 1], [30, 0]);
  const line2Y = interpolate(line2, [0, 1], [30, 0]);
  const line3Y = interpolate(line3, [0, 1], [40, 0]);

  const gradPos = interpolate(frame, [0, 240], [0, 200]);

  const arrow = spring({ frame: frame - 42, fps, config: { damping: 200 } });
  const arrowX = interpolate(arrow, [0, 1], [-20, 0]);

  // Loading bar
  const barOpacity = spring({ frame: frame - 50, fps, config: { damping: 200 } });
  const barProgress = interpolate(frame, [60, 180], [0, 92], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barStall = interpolate(frame, [180, 240], [92, 95], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const progress = frame < 180 ? barProgress : barStall;

  // Timer
  const timerVal = interpolate(frame, [60, 240], [0, 4.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute", top: 0, left: 0,
          width: 1080, height: 1080,
          transform: "scale(2)", transformOrigin: "top left",
          fontFamily: fontFamily.headline,
        }}
      >
      <div style={{ position: "absolute", inset: 0, background: "#E8F0F6" }} />

      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0, height: "35%",
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 100%)",
          pointerEvents: "none",
        }}
      />

      <svg
        width="1800" height="1800" viewBox="0 0 24 24"
        style={{
          position: "absolute", bottom: -900, right: -900, opacity: 0.07,
          transform: "rotate(-30deg)", pointerEvents: "none",
        }}
      >
        <defs>
          <radialGradient id="leafSpeed1" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2C3E50" stopOpacity="0" />
            <stop offset="70%" stopColor="#2C3E50" stopOpacity="0" />
            <stop offset="100%" stopColor="#2C3E50" stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
          fill="url(#leafSpeed1)" stroke="#2C3E50" strokeWidth="0.06"
        />
      </svg>

      {/* Logo */}
      <div
        style={{
          position: "absolute", top: 40, left: 50, zIndex: 3,
          display: "flex", alignItems: "center", gap: 10,
        }}
      >
        <img
          src={staticFile("logo.png")}
          style={{ width: 28, height: 28, objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: fontFamily.logo, fontSize: 22, fontWeight: 600,
            letterSpacing: "-0.5px", color: "#2C3E50",
          }}
        >
          Mediegruppen
        </span>
      </div>

      {/* Text */}
      <div
        style={{
          position: "absolute", top: 240, left: 50, right: 50,
          textAlign: "center", fontSize: 64, fontWeight: 500,
          lineHeight: 1.35, color: "#2C3E50",
        }}
      >
        <div style={{ opacity: line1, transform: `translateY(${line1Y}px)` }}>
          Disse 3 tingene
        </div>
        <div style={{ opacity: line2, transform: `translateY(${line2Y}px)` }}>
          gjør nettsiden din
        </div>
        <div
          style={{
            opacity: line3,
            transform: `translateY(${line3Y}px)`,
            fontSize: 84,
            marginTop: 4,
          }}
        >
          <span
            style={{
              background: ACCENT_GRADIENT,
              backgroundSize: "200% 100%",
              backgroundPosition: `${gradPos}% 0%`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            treg.
          </span>
        </div>

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
              stroke="rgba(44,62,80,0.35)"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Loading bar */}
      <div
        style={{
          position: "absolute", bottom: 200, left: 140, right: 140,
          opacity: barOpacity,
        }}
      >
        <div
          style={{
            display: "flex", justifyContent: "space-between", marginBottom: 10,
          }}
        >
          <span
            style={{
              fontSize: 13, fontFamily: fontFamily.body,
              color: "rgba(44,62,80,0.5)", textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Laster inn...
          </span>
          <span
            style={{
              fontSize: 13, fontFamily: fontFamily.body,
              color: progress > 80 ? "#D4806B" : "#5BA07E", fontWeight: 600,
            }}
          >
            {timerVal.toFixed(1)}s
          </span>
        </div>
        <div style={{ height: 8, borderRadius: 4, background: "rgba(44,62,80,0.08)" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              borderRadius: 4,
              background:
                progress > 80
                  ? "linear-gradient(90deg, #5BA07E, #D4806B)"
                  : "#5BA07E",
            }}
          />
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};
