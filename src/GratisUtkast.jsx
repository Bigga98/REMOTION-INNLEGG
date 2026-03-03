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
const ACCENT = "#B56B4A";
const ACCENT_GRADIENT =
  "linear-gradient(90deg, #A05A3A, #B56B4A, #C87B5A, #B56B4A, #A05A3A)";

export const GratisUtkast = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Text animations
  const line1 = spring({ frame, fps, config: { damping: 200 } });
  const line2 = spring({ frame: frame - 12, fps, config: { damping: 200 } });
  const sub = spring({ frame: frame - 28, fps, config: { damping: 200 } });
  const divider = spring({ frame: frame - 22, fps, config: { damping: 200 } });

  const line1Y = interpolate(line1, [0, 1], [30, 0]);
  const line2Y = interpolate(line2, [0, 1], [30, 0]);
  const subY = interpolate(sub, [0, 1], [20, 0]);

  // Gradient position
  const gradPos = interpolate(frame, [0, 240], [0, 200]);

  // Browser mockup
  const mockup = spring({ frame: frame - 40, fps, config: { damping: 200 } });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);

  // Wireframe elements inside mockup
  const wire1 = spring({ frame: frame - 56, fps, config: { damping: 200 } });
  const wire2 = spring({ frame: frame - 64, fps, config: { damping: 200 } });
  const wire3 = spring({ frame: frame - 72, fps, config: { damping: 200 } });

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
          <radialGradient id="leafUtkast" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
          fill="url(#leafUtkast)" stroke={theme.leaf} strokeWidth="0.06"
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
            letterSpacing: "-0.5px", color: theme.text,
          }}
        >
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
        <div
          style={{
            fontSize: 62, fontWeight: 500, lineHeight: 1.25,
            opacity: line1, transform: `translateY(${line1Y}px)`,
          }}
        >
          Vi lager et{" "}
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
            gratis utkast
          </span>
        </div>
        <div
          style={{
            fontSize: 62, fontWeight: 500, lineHeight: 1.25, marginTop: 4,
            opacity: line2, transform: `translateY(${line2Y}px)`,
          }}
        >
          til nettsiden din.
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex", justifyContent: "center", marginTop: 24,
            opacity: divider,
          }}
        >
          <div
            style={{
              width: interpolate(divider, [0, 1], [0, 120]),
              height: 2, background: ACCENT_GRADIENT, borderRadius: 1,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 30, fontWeight: 500, lineHeight: 1.5,
            marginTop: 20, opacity: interpolate(sub, [0, 1], [0, 0.5]),
            transform: `translateY(${subY}px)`,
          }}
        >
          Ingen forpliktelser. Ingen kostnad.
          <br />
          Bare et konkret forslag du kan ta stilling til.
        </div>
      </div>

      {/* Browser mockup */}
      <div
        style={{
          position: "absolute", bottom: 50, left: "50%",
          transform: `translateX(-50%) translateY(${mockupY}px)`,
          opacity: mockup,
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: 820, borderRadius: 14,
            background: "#fff",
            boxShadow: "0 12px 48px rgba(44,62,80,0.12), 0 2px 8px rgba(44,62,80,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              height: 32, background: "#f8f9fa",
              display: "flex", alignItems: "center",
              padding: "0 14px", gap: 6,
              borderBottom: "1px solid #e9ecef",
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
            <div
              style={{
                marginLeft: 12, flex: 1, height: 18, borderRadius: 4,
                background: "#e9ecef", display: "flex", alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
                <rect x="3" y="11" width="18" height="2" rx="1" fill="#adb5bd" />
                <rect x="3" y="11" width="8" height="2" rx="1" fill={ACCENT} />
              </svg>
              <span style={{ fontSize: 8, fontFamily: fontFamily.body, color: "#adb5bd" }}>
                dinbedrift.no
              </span>
            </div>
          </div>

          {/* Wireframe content */}
          <div style={{ padding: 20, height: 380, background: "#fafbfc" }}>
            {/* Nav */}
            <div
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20,
                opacity: wire1,
              }}
            >
              <div style={{ width: 80, height: 10, borderRadius: 5, background: "#dee2e6" }} />
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ width: 40, height: 8, borderRadius: 4, background: "#e9ecef" }} />
                <div style={{ width: 40, height: 8, borderRadius: 4, background: "#e9ecef" }} />
                <div style={{ width: 40, height: 8, borderRadius: 4, background: "#e9ecef" }} />
                <div style={{ width: 56, height: 22, borderRadius: 6, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 30, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.7)" }} />
                </div>
              </div>
            </div>

            {/* Hero area */}
            <div style={{ display: "flex", gap: 20, opacity: wire2 }}>
              <div style={{ flex: 1, paddingTop: 20 }}>
                <div style={{ width: "90%", height: 14, borderRadius: 7, background: "#ced4da", marginBottom: 10 }} />
                <div style={{ width: "70%", height: 14, borderRadius: 7, background: "#ced4da", marginBottom: 18 }} />
                <div style={{ width: "100%", height: 8, borderRadius: 4, background: "#e9ecef", marginBottom: 6 }} />
                <div style={{ width: "85%", height: 8, borderRadius: 4, background: "#e9ecef", marginBottom: 6 }} />
                <div style={{ width: "92%", height: 8, borderRadius: 4, background: "#e9ecef", marginBottom: 18 }} />
                <div style={{ width: 100, height: 28, borderRadius: 8, background: ACCENT }}>
                  <div style={{ width: 50, height: 7, borderRadius: 3, background: "rgba(255,255,255,0.6)", margin: "10px auto 0" }} />
                </div>
              </div>
              <div
                style={{
                  flex: 1, borderRadius: 10, background: "linear-gradient(135deg, #e9ecef, #dee2e6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  minHeight: 200,
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" opacity="0.3">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#6c757d" strokeWidth="1.5" />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#6c757d" />
                  <path d="M21 15l-5-5L5 21" stroke="#6c757d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Feature cards */}
            <div style={{ display: "flex", gap: 12, marginTop: 20, opacity: wire3 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1, borderRadius: 8, background: "#fff",
                    border: "1px solid #e9ecef", padding: "12px 10px",
                  }}
                >
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: i === 0 ? `${ACCENT}22` : "#f1f3f5", marginBottom: 8 }} />
                  <div style={{ width: "80%", height: 7, borderRadius: 3, background: "#dee2e6", marginBottom: 5 }} />
                  <div style={{ width: "60%", height: 6, borderRadius: 3, background: "#e9ecef" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};
