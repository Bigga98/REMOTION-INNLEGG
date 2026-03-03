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

const theme = { bg: "#E8F0F6", text: "#2C3E50", leaf: "#2C3E50" };
const GREEN_GRAD = "linear-gradient(90deg, #4A9A6E, #5BA07E, #6BB88E, #5BA07E, #4A9A6E)";
const WARM_GRAD = "linear-gradient(90deg, #B56B4A, #C87B5A, #B56B4A, #A05A3A, #B56B4A)";

export const Mobil1Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1 = spring({ frame, fps, config: { damping: 200 } });
  const line2 = spring({ frame: frame - 14, fps, config: { damping: 200 } });
  const pause = spring({ frame: frame - 60, fps, config: { damping: 200 } });
  const line3 = spring({ frame: frame - 70, fps, config: { damping: 200 } });
  const sub = spring({ frame: frame - 90, fps, config: { damping: 200 } });

  const line1Y = interpolate(line1, [0, 1], [30, 0]);
  const line2Y = interpolate(line2, [0, 1], [30, 0]);
  const line3Y = interpolate(line3, [0, 1], [30, 0]);
  const subY = interpolate(sub, [0, 1], [20, 0]);

  const gradPos = interpolate(frame, [0, 240], [0, 200]);

  // Device icons
  const devices = spring({ frame: frame - 100, fps, config: { damping: 200 } });
  const devicesY = interpolate(devices, [0, 1], [40, 0]);

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
      <div style={{ position: "absolute", inset: 0, background: theme.bg }} />
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
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
          <radialGradient id="leafM1" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
          fill="url(#leafM1)" stroke={theme.leaf} strokeWidth="0.06"
        />
      </svg>

      {/* Logo */}
      <div
        style={{
          position: "absolute", top: 40, left: 50, zIndex: 3,
          display: "flex", alignItems: "center", gap: 10,
        }}
      >
        <img src={staticFile("logo.png")} style={{ width: 28, height: 28, objectFit: "contain" }} />
        <span style={{ fontFamily: fontFamily.logo, fontSize: 22, fontWeight: 600, letterSpacing: "-0.5px", color: theme.text }}>
          Mediegruppen
        </span>
      </div>

      {/* Text */}
      <div
        style={{
          position: "absolute", top: 200, left: 50, right: 50,
          textAlign: "center", color: theme.text,
        }}
      >
        <div style={{ fontSize: 62, fontWeight: 500, lineHeight: 1.3, opacity: line1, transform: `translateY(${line1Y}px)` }}>
          Nettsiden din er
        </div>
        <div style={{ fontSize: 62, fontWeight: 500, lineHeight: 1.3, marginTop: 4, opacity: line2, transform: `translateY(${line2Y}px)` }}>
          <span
            style={{
              background: GREEN_GRAD, backgroundSize: "200% 100%",
              backgroundPosition: `${gradPos}% 0%`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            raskere
          </span>{" "}enn du tror.
        </div>

        <div style={{ fontSize: 62, fontWeight: 500, lineHeight: 1.3, marginTop: 24, opacity: line3, transform: `translateY(${line3Y}px)` }}>
          Og{" "}
          <span
            style={{
              background: WARM_GRAD, backgroundSize: "200% 100%",
              backgroundPosition: `${gradPos}% 0%`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            tregere
          </span>{" "}enn du tror.
        </div>

        <div
          style={{
            fontSize: 28, fontWeight: 500, lineHeight: 1.5, marginTop: 32,
            opacity: interpolate(sub, [0, 1], [0, 0.5]),
            transform: `translateY(${subY}px)`,
          }}
        >
          Det kommer an på om du sjekker
          <br />
          fra PC eller mobil.
        </div>
      </div>

      {/* PC vs Mobile icons */}
      <div
        style={{
          position: "absolute", bottom: 140, left: "50%",
          transform: `translateX(-50%) translateY(${devicesY}px)`,
          opacity: devices,
          display: "flex", gap: 60, alignItems: "flex-end",
        }}
      >
        {/* PC */}
        <div style={{ textAlign: "center" }}>
          <svg width="80" height="64" viewBox="0 0 24 20" fill="none">
            <rect x="2" y="1" width="20" height="14" rx="2" stroke="#5BA07E" strokeWidth="1.5" />
            <path d="M8 18h8M12 15v3" stroke="#5BA07E" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, marginTop: 6 }}>0.8s</div>
        </div>
        <div style={{ fontSize: 20, color: "rgba(44,62,80,0.3)", fontWeight: 500, paddingBottom: 20 }}>vs</div>
        {/* Mobile */}
        <div style={{ textAlign: "center" }}>
          <svg width="48" height="64" viewBox="0 0 16 24" fill="none">
            <rect x="2" y="1" width="12" height="22" rx="3" stroke="#B56B4A" strokeWidth="1.5" />
            <line x1="6" y1="20" x2="10" y2="20" stroke="#B56B4A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#B56B4A", fontWeight: 600, marginTop: 6 }}>4.2s</div>
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};
