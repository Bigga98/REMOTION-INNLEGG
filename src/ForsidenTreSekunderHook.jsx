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
import { themes, googleGradients } from "./lib/colors";
import { overlays } from "./lib/styles";
import { spacing, logo, zIndex } from "./lib/layout";

const theme = themes.gray;
const gradient = googleGradients.coral;

export const ForsidenTreSekunderHook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Text animations ---
  const line1 = spring({ frame, fps, config: { damping: 200 } });
  const line2 = spring({ frame: frame - 14, fps, config: { damping: 200 } });
  const line3 = spring({ frame: frame - 60, fps, config: { damping: 200 } });
  const arrowAnim = spring({ frame: frame - 80, fps, config: { damping: 200 } });

  const line1Y = interpolate(line1, [0, 1], [30, 0]);
  const line2Y = interpolate(line2, [0, 1], [30, 0]);
  const line3Y = interpolate(line3, [0, 1], [20, 0]);
  const arrowX = interpolate(arrowAnim, [0, 1], [-20, 0]);

  // Gradient animation
  const gradPos = interpolate(frame, [0, 240], [0, 200]);

  // Countdown: 3 → 2 → 1 → 0
  const countdownProgress = interpolate(frame, [20, 180], [3, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const countdownNumber = Math.ceil(countdownProgress);
  const countdownDisplay = countdownNumber > 0 ? countdownNumber : 0;

  // Progress bar (fills over time)
  const barWidth = interpolate(frame, [20, 180], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pulse on countdown number
  const countdownScale = spring({
    frame: frame % 53, // Pulse roughly every ~53 frames (slightly less than 1 sec at 60fps)
    fps,
    config: { damping: 12, mass: 0.4 },
  });
  const scale = interpolate(countdownScale, [0, 0.5, 1], [1, 1.08, 1]);

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
        {/* Bakgrunn */}
        <div style={{ position: "absolute", inset: 0, background: theme.bg }} />
        <div style={overlays.whiteFade} />

        {/* Blad-dekorasjon */}
        <svg
          width="1800" height="1800" viewBox="0 0 24 24"
          style={{
            position: "absolute", bottom: -900, right: -900, opacity: 0.12,
            transform: "rotate(-30deg)", pointerEvents: "none", zIndex: zIndex.background,
          }}
        >
          <defs>
            <radialGradient id="leafFTS1" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
              <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafFTS1)" stroke={theme.leaf} strokeWidth="0.06"
          />
        </svg>

        {/* Logo */}
        <div
          style={{
            position: "absolute", top: logo.top, left: logo.left,
            zIndex: zIndex.ui, display: "flex", alignItems: "center", gap: spacing.gap,
          }}
        >
          <img src={staticFile("logo.png")} style={{ width: logo.iconSize, height: logo.iconSize, objectFit: "contain" }} />
          <span style={{ fontFamily: fontFamily.logo, fontSize: logo.fontSize, fontWeight: logo.fontWeight, letterSpacing: logo.letterSpacing, color: theme.text }}>
            Mediegruppen
          </span>
        </div>

        {/* Tekst */}
        <div
          style={{
            position: "absolute", top: 200, left: spacing.margin, right: spacing.margin,
            textAlign: "center", color: theme.text,
          }}
        >
          <div style={{ fontSize: 62, fontWeight: 500, lineHeight: 1.3, opacity: line1, transform: `translateY(${line1Y}px)` }}>
            Forsiden din har
          </div>
          <div style={{ fontSize: 62, fontWeight: 500, lineHeight: 1.3, marginTop: 4, opacity: line2, transform: `translateY(${line2Y}px)` }}>
            <span
              style={{
                background: gradient.css, backgroundSize: "200% 100%",
                backgroundPosition: `${gradPos}% 0%`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                fontSize: 72, fontWeight: 600,
              }}
            >
              3 sekunder.
            </span>
          </div>

          {/* Delayed line */}
          <div
            style={{
              fontSize: 36, fontWeight: 500, lineHeight: 1.5, marginTop: 28,
              opacity: interpolate(line3, [0, 1], [0, 0.55]),
              transform: `translateY(${line3Y}px)`,
            }}
          >
            De fleste kaster bort alle tre.
          </div>
        </div>

        {/* Countdown + progress bar */}
        <div
          style={{
            position: "absolute", bottom: 160, left: "50%",
            transform: "translateX(-50%)",
            opacity: line2,
            textAlign: "center",
          }}
        >
          {/* Countdown tall */}
          <div
            style={{
              fontSize: 120, fontWeight: 600, fontFamily: fontFamily.body,
              transform: `scale(${scale})`,
              background: gradient.css, backgroundSize: "200% 100%",
              backgroundPosition: `${gradPos}% 0%`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            {countdownDisplay}
          </div>

          {/* Progress bar */}
          <div style={{ width: 400, height: 6, background: "rgba(27,42,74,0.1)", borderRadius: 3, marginTop: 12 }}>
            <div
              style={{
                width: `${barWidth}%`, height: "100%", borderRadius: 3,
                background: gradient.css,
                transition: "width 0.05s linear",
              }}
            />
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            position: "absolute", bottom: 100, left: "50%",
            transform: `translateX(-50%) translateX(${arrowX}px)`,
            opacity: arrowAnim,
          }}
        >
          <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
            <path d="M4 14h36M30 4l10 10-10 10" stroke={theme.arrow} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
