// ============================================
// GO LIVE ANIMATION — Browser deploy sequence
// ============================================
// Polished animation: browser mockup → deploying → live with confetti.
// Matches the website's visual style.

import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { fontFamily } from "./lib/fonts";

// --- Confetti particle ---
const Confetti = ({ frame, startFrame, x, y, color, size = 6, angle, speed }) => {
  const elapsed = frame - startFrame;
  if (elapsed < 0) return null;
  const progress = elapsed / 40;
  const px = x + Math.cos(angle) * speed * progress * 60;
  const py = y + Math.sin(angle) * speed * progress * 60 - 20 * progress + 40 * progress * progress;
  const rotation = elapsed * (speed > 0.5 ? 8 : 5);
  const opacity = interpolate(progress, [0, 0.3, 1], [0, 1, 0], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        left: px,
        top: py,
        width: size,
        height: size * 0.6,
        borderRadius: 1,
        background: color,
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
};

export const GoLiveAnimation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Timing ---
  const browserAppear = 5;
  const typingStart = 20;
  const deployStart = 45;
  const deployEnd = 80;
  const liveReveal = 85;
  const confettiStart = 90;

  // --- Browser scale in ---
  const browserScale = spring({ frame: frame - browserAppear, fps, config: { damping: 15, stiffness: 80 } });
  const browserOpacity = interpolate(frame, [browserAppear, browserAppear + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // --- URL typing effect ---
  const fullUrl = "dinbedrift.no";
  const typingProgress = interpolate(frame, [typingStart, typingStart + 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const charsShown = Math.floor(typingProgress * fullUrl.length);
  const typedUrl = fullUrl.substring(0, charsShown);
  const showCursor = frame >= typingStart && frame < deployStart && Math.floor(frame / 4) % 2 === 0;

  // --- Deploy progress bar ---
  const deployProgress = interpolate(frame, [deployStart, deployEnd], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const deployBarOpacity = interpolate(frame, [deployStart - 2, deployStart + 3], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // Eased progress (fast start, slow middle, fast end)
  const easedProgress = deployProgress < 0.5
    ? 2 * deployProgress * deployProgress
    : 1 - Math.pow(-2 * deployProgress + 2, 2) / 2;

  // --- Deploy status text ---
  let statusText = "";
  let statusColor = "#6c757d";
  if (frame >= deployStart && frame < deployStart + 12) {
    statusText = "Bygger nettside...";
    statusColor = "#6c757d";
  } else if (frame >= deployStart + 12 && frame < deployStart + 24) {
    statusText = "Optimaliserer bilder...";
    statusColor = "#6c757d";
  } else if (frame >= deployStart + 24 && frame < deployEnd) {
    statusText = "Publiserer til server...";
    statusColor = "#6c757d";
  } else if (frame >= deployEnd && frame < liveReveal) {
    statusText = "Ferdig!";
    statusColor = "#28c840";
  }

  // --- Live badge ---
  const liveScale = spring({ frame: frame - liveReveal, fps, config: { damping: 12, stiffness: 150 } });
  const liveOpacity = interpolate(frame, [liveReveal, liveReveal + 5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // --- Live dot pulse ---
  const livePulse = frame > liveReveal + 10
    ? 1 + 0.3 * Math.sin((frame - liveReveal) * 0.2)
    : 1;

  // --- Lock icon → check transition ---
  const showCheck = frame >= liveReveal;

  // --- Website content fade in ---
  const contentOpacity = interpolate(frame, [liveReveal, liveReveal + 15], [0.3, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // --- Colors ---
  const green = "#28c840";
  const accent = "#657dff";

  // --- Confetti particles ---
  const confettiColors = ["#657dff", "#28c840", "#febc2e", "#ff5f57", "#8b9dff", "#D4806B"];
  const confettiParticles = [];
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2 + (i % 3) * 0.3;
    const speed = 0.4 + (i % 5) * 0.2;
    confettiParticles.push({
      x: 400 - 3,
      y: 80,
      color: confettiColors[i % confettiColors.length],
      angle,
      speed,
      size: 5 + (i % 3) * 2,
      delay: Math.floor(i / 6) * 2,
    });
  }

  return (
    <div
      style={{
        width: 800,
        height: 450,
        background: "linear-gradient(160deg, #f5f6f8 0%, #ebedf0 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: fontFamily.body,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* --- Subtle grid pattern --- */}
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.04 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 25} x2={800} y2={i * 25} stroke="#000" strokeWidth={1} />
        ))}
        {Array.from({ length: 32 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 25} y1={0} x2={i * 25} y2={450} stroke="#000" strokeWidth={1} />
        ))}
      </svg>

      {/* --- Browser mockup --- */}
      <div
        style={{
          width: 560,
          borderRadius: 14,
          background: "#fff",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
          overflow: "hidden",
          transform: `scale(${browserScale}) translateY(${interpolate(browserScale, [0, 1], [20, 0])}px)`,
          opacity: browserOpacity,
        }}
      >
        {/* --- Browser chrome --- */}
        <div
          style={{
            height: 38,
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            padding: "0 14px",
            gap: 7,
            borderBottom: "1px solid #e9ecef",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />

          {/* URL bar */}
          <div
            style={{
              marginLeft: 14,
              flex: 1,
              height: 22,
              borderRadius: 6,
              background: "#e9ecef",
              display: "flex",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10,
              gap: 6,
            }}
          >
            {/* Lock / Check icon */}
            {showCheck ? (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#adb5bd" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            )}
            <span style={{ fontSize: 11, color: showCheck ? "#1a1a1a" : "#adb5bd", fontWeight: showCheck ? 500 : 400 }}>
              {typedUrl}{showCursor ? "|" : ""}
            </span>

            {/* Live badge in URL bar */}
            {frame >= liveReveal && (
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  opacity: liveOpacity,
                  transform: `scale(${liveScale})`,
                }}
              >
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: green,
                  boxShadow: `0 0 ${4 * livePulse}px ${green}80`,
                }} />
                <span style={{ fontSize: 9, fontWeight: 700, color: green, letterSpacing: 0.5 }}>LIVE</span>
              </div>
            )}
          </div>
        </div>

        {/* --- Deploy progress bar --- */}
        {frame >= deployStart - 2 && frame < liveReveal + 15 && (
          <div style={{ height: 3, background: "#f0f0f0", opacity: deployBarOpacity }}>
            <div
              style={{
                height: "100%",
                width: `${easedProgress * 100}%`,
                background: frame >= deployEnd ? green : `linear-gradient(90deg, ${accent}, #8b9dff)`,
                borderRadius: "0 2px 2px 0",
                transition: frame >= deployEnd ? "background 0.3s" : "none",
              }}
            />
          </div>
        )}

        {/* --- Website content area --- */}
        <div style={{ padding: 20, minHeight: 280, position: "relative", opacity: contentOpacity }}>

          {/* Mini wireframe site */}
          {/* Nav */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div style={{ width: 70, height: 8, borderRadius: 4, background: "#dee2e6" }} />
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ width: 40, height: 6, borderRadius: 3, background: "#e9ecef" }} />
              <div style={{ width: 40, height: 6, borderRadius: 3, background: "#e9ecef" }} />
              <div style={{ width: 40, height: 6, borderRadius: 3, background: "#e9ecef" }} />
              <div style={{ width: 55, height: 20, borderRadius: 5, background: accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 30, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.6)" }} />
              </div>
            </div>
          </div>

          {/* Hero area */}
          <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
            <div style={{ flex: 1, paddingTop: 6 }}>
              <div style={{ width: "90%", height: 10, borderRadius: 5, background: "#ced4da", marginBottom: 8 }} />
              <div style={{ width: "65%", height: 10, borderRadius: 5, background: "#ced4da", marginBottom: 14 }} />
              <div style={{ width: "100%", height: 5, borderRadius: 3, background: "#e9ecef", marginBottom: 4 }} />
              <div style={{ width: "85%", height: 5, borderRadius: 3, background: "#e9ecef", marginBottom: 4 }} />
              <div style={{ width: "92%", height: 5, borderRadius: 3, background: "#e9ecef", marginBottom: 14 }} />
              <div style={{ width: 80, height: 22, borderRadius: 6, background: accent }}>
                <div style={{ width: 40, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.6)", margin: "8px auto 0" }} />
              </div>
            </div>
            <div style={{
              flex: 1, borderRadius: 8, background: "linear-gradient(135deg, #e9ecef, #dee2e6)",
              display: "flex", alignItems: "center", justifyContent: "center", minHeight: 120,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.25">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="#6c757d" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="#6c757d" />
                <path d="M21 15l-5-5L5 21" stroke="#6c757d" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Cards row */}
          <div style={{ display: "flex", gap: 10 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                flex: 1, borderRadius: 8, background: "#fff", border: "1px solid #e9ecef", padding: 10,
              }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: i === 0 ? `${accent}20` : "#f1f3f5", marginBottom: 8 }} />
                <div style={{ width: "75%", height: 6, borderRadius: 3, background: "#dee2e6", marginBottom: 5 }} />
                <div style={{ width: "55%", height: 4, borderRadius: 2, background: "#e9ecef" }} />
              </div>
            ))}
          </div>

          {/* --- Deploy overlay --- */}
          {frame >= deployStart && frame < liveReveal && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(2px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                opacity: interpolate(frame, [deployStart, deployStart + 5], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
              }}
            >
              {/* Spinner */}
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                border: "3px solid #e9ecef",
                borderTopColor: accent,
                transform: `rotate(${frame * 12}deg)`,
              }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: statusColor }}>{statusText}</span>
              {/* Progress percentage */}
              <span style={{ fontSize: 11, color: "#adb5bd" }}>{Math.round(easedProgress * 100)}%</span>
            </div>
          )}
        </div>
      </div>

      {/* --- Confetti --- */}
      {confettiParticles.map((p, i) => (
        <Confetti
          key={i}
          frame={frame}
          startFrame={confettiStart + p.delay}
          x={p.x}
          y={p.y}
          color={p.color}
          angle={p.angle}
          speed={p.speed}
          size={p.size}
        />
      ))}
    </div>
  );
};
