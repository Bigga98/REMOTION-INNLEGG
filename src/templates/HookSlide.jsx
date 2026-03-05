// ============================================
// HOOK SLIDE — Animert karusell-hook
// ============================================
// Video-slide med animert tekst, valgfri visuell effekt, og pil.

import React from "react";
import { loadFont as loadRobotoMono } from "@remotion/google-fonts/RobotoMono";
const { fontFamily: robotoMono } = loadRobotoMono();
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
} from "remotion";
import { BaseLayout } from "../layouts/BaseLayout";
import { themes, googleGradients } from "../lib/colors";
import { spacing } from "../lib/layout";
import { springConfigs, hookTimings } from "../config/presets";
import { defaults } from "../config/defaults";

/**
 * PC Monitor mockup — URL-bar med cursor-animasjon
 */
const BrowserMockup = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);

  // Timing (relative to delay) — tregere cursor-bevegelse
  const t = frame - delay;
  const URL_TEXT = "dinbedrift.no";

  // Cursor appears and moves to input (slower)
  const cursorAppear = Math.max(0, interpolate(t, [20, 35], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  // Cursor X/Y positions (relative to monitor) — slower movement
  const cursorX = interpolate(
    t,
    [20, 50, 60, 130, 150],
    [580, 300, 300, 300, 660],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const cursorY = interpolate(
    t,
    [20, 50, 60, 130, 150],
    [100, 240, 240, 240, 240],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  // Click animation (scale cursor down briefly)
  const clickInput = t >= 52 && t <= 58;
  const clickBtn = t >= 152 && t <= 158;
  const cursorScale = (clickInput || clickBtn) ? 0.85 : 1;

  // Input focus state (border turns accent after click)
  const inputFocused = t >= 55;

  // Typing animation (slower: every 5 frames instead of 4)
  const typedChars = t < 62 ? 0 : Math.min(URL_TEXT.length, Math.floor((t - 62) / 5));
  const typedText = URL_TEXT.slice(0, typedChars);
  const showCaret = inputFocused && t < 135 && Math.floor(t / 15) % 2 === 0;

  // Button highlight on click
  const btnPressed = t >= 152 && t <= 160;

  return (
    <div
      style={{
        position: "absolute",
        bottom: -80,
        left: "50%",
        transform: `translateX(-50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Monitor */}
      <div
        style={{
          width: 840,
          height: 500,
          borderRadius: 16,
          background: "#1a1a1a",
          padding: 8,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        {/* Skjermflate */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            background: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              height: 28,
              background: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 5,
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
            <div
              style={{
                marginLeft: 10,
                flex: 1,
                height: 16,
                borderRadius: 4,
                background: "#e9ecef",
                display: "flex",
                alignItems: "center",
                paddingLeft: 8,
              }}
            >
              <span style={{ fontSize: 7, fontFamily: "Inter, sans-serif", color: "#adb5bd" }}>
                mediegruppen.no/hastighet
              </span>
            </div>
          </div>

          {/* PageSpeed Insights logo */}
          <div
            style={{
              position: "absolute",
              top: "28%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <img
              src={staticFile("pagespeed-icon.png")}
              style={{ width: 28, height: 28, objectFit: "contain" }}
            />
            <span style={{ fontSize: 18, fontFamily: "Inter, sans-serif", color: "#5f6368", fontWeight: 400 }}>
              PageSpeed Insights
            </span>
          </div>

          {/* URL input bar — sentrert på skjermen */}
          <div
            style={{
              position: "absolute",
              top: "52%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 680,
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            {/* Input felt */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
              <div
                style={{
                  height: 48,
                  borderRadius: 8,
                  border: `2px solid ${inputFocused ? accent : "#d0d0d0"}`,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 14px",
                  transition: "border-color 0.15s",
                }}
              >
                {typedChars === 0 ? (
                  <span style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#999" }}>
                    Skriv inn en nettsideadresse
                  </span>
                ) : (
                  <span style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#1a1a1a", fontWeight: 500 }}>
                    {typedText}
                    {showCaret && <span style={{ color: accent, fontWeight: 400 }}>|</span>}
                  </span>
                )}
              </div>
            </div>

            {/* Analysér-knapp */}
            <div
              style={{
                height: 48,
                padding: "0 22px",
                borderRadius: 8,
                background: btnPressed ? "#4338CA" : accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: btnPressed ? "scale(0.96)" : "scale(1)",
                boxShadow: btnPressed ? "none" : `0 2px 8px ${accent}44`,
              }}
            >
              <span style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#fff", fontWeight: 600 }}>
                Analysér
              </span>
            </div>
          </div>
        </div>

        {/* Cursor — SVG overlay */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            opacity: cursorAppear,
            transform: `scale(${cursorScale})`,
            zIndex: 10,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            pointerEvents: "none",
          }}
        >
          <path
            d="M17.2607 12.4008C19.3774 11.2626 20.4357 10.6935 20.7035 10.0084C20.9359 9.41393 20.8705 8.74423 20.5276 8.20587C20.1324 7.58551 18.984 7.23176 16.6872 6.52425L8.00612 3.85014C6.06819 3.25318 5.09923 2.95471 4.45846 3.19669C3.90068 3.40733 3.46597 3.85584 3.27285 4.41993C3.051 5.06794 3.3796 6.02711 4.03681 7.94545L6.94793 16.4429C7.75632 18.8025 8.16052 19.9824 8.80519 20.3574C9.36428 20.6826 10.0461 20.7174 10.6354 20.4507C11.3149 20.1432 11.837 19.0106 12.8813 16.7454L13.6528 15.0719C13.819 14.7113 13.9021 14.531 14.0159 14.3736C14.1168 14.2338 14.2354 14.1078 14.3686 13.9984C14.5188 13.8752 14.6936 13.7812 15.0433 13.5932L17.2607 12.4008Z"
            fill="#1a1a1a"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Stativ — hals */}
      <div
        style={{
          width: 60,
          height: 36,
          background: "linear-gradient(180deg, #1a1a1a, #2a2a2a)",
          borderRadius: "0 0 4px 4px",
        }}
      />

      {/* Stativ — fot */}
      <div
        style={{
          width: 180,
          height: 10,
          background: "linear-gradient(180deg, #2a2a2a, #333)",
          borderRadius: "0 0 10px 10px",
        }}
      />
    </div>
  );
};

/**
 * Utkast-skjema mockup — URL-felt + Send-knapp med cursor-animasjon
 */
const UtkastFormMockup = ({ frame, fps, config, accent, delay = 40, isPortrait = false }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);

  const t = frame - delay;
  const URL_TEXT = "www.dinbedrift.no";

  // Cursor appears
  const cursorAppear = Math.max(0, interpolate(t, [20, 35], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  // Cursor positions
  const cursorX = interpolate(
    t,
    [20, 50, 60, 140, 160],
    [580, 300, 300, 300, 520],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const cursorY = interpolate(
    t,
    [20, 50, 60, 140, 160],
    [120, 220, 220, 220, 310],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const clickInput = t >= 52 && t <= 58;
  const clickBtn = t >= 162 && t <= 168;
  const cursorScale = (clickInput || clickBtn) ? 0.85 : 1;

  const inputFocused = t >= 55;
  const typedChars = t < 62 ? 0 : Math.min(URL_TEXT.length, Math.floor((t - 62) / 5));
  const typedText = URL_TEXT.slice(0, typedChars);
  const showCaret = inputFocused && t < 150 && Math.floor(t / 15) % 2 === 0;

  const btnPressed = t >= 162 && t <= 170;

  // Success checkmark after button press
  const showSuccess = t >= 180;
  const successOpacity = Math.max(0, interpolate(t, [180, 195], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  return (
    <div
      style={{
        position: "absolute",
        bottom: isPortrait ? 20 : -80,
        left: "50%",
        transform: `translateX(-50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Monitor */}
      <div
        style={{
          width: 920,
          height: 560,
          borderRadius: 16,
          background: "#1a1a1a",
          padding: 8,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        {/* Skjermflate */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            background: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              height: 28,
              background: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 5,
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
            <div
              style={{
                marginLeft: 10,
                flex: 1,
                height: 16,
                borderRadius: 4,
                background: "#e9ecef",
                display: "flex",
                alignItems: "center",
                paddingLeft: 8,
              }}
            >
              <span style={{ fontSize: 7, fontFamily: "Inter, sans-serif", color: "#adb5bd" }}>
                mediegruppen.no/gratis-utkast
              </span>
            </div>
          </div>

          {/* Tittel i skjermen */}
          <div
            style={{
              position: "absolute",
              top: 100,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32, fontFamily: "'Clash Display', sans-serif", fontWeight: 500, color: "#1c1c1c" }}>
              Få et gratis designutkast
            </div>
            <div style={{ fontSize: 17, fontFamily: "'Satoshi', sans-serif", fontWeight: 300, color: "#666", marginTop: 10 }}>
              Skriv inn nettadressen din — vi lager et utkast uten kostnad.
            </div>
          </div>

          {/* Skjema — sentrert */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 620,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginTop: 20,
            }}
          >
            {/* URL input */}
            <div>
              <div style={{ fontSize: 11, fontFamily: "'Satoshi', sans-serif", fontWeight: 400, color: "#555", marginBottom: 5 }}>
                Din nettadresse
              </div>
              <div
                style={{
                  height: 48,
                  borderRadius: 8,
                  border: `2px solid ${inputFocused ? accent : "#d0d0d0"}`,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 14px",
                }}
              >
                {typedChars === 0 ? (
                  <span style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#999" }}>
                    f.eks. www.dinbedrift.no
                  </span>
                ) : (
                  <span style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#1a1a1a", fontWeight: 500 }}>
                    {typedText}
                    {showCaret && <span style={{ color: accent, fontWeight: 400 }}>|</span>}
                  </span>
                )}
              </div>
            </div>

            {/* Send-knapp */}
            <div
              style={{
                height: 48,
                borderRadius: 8,
                background: btnPressed ? "#4338CA" : showSuccess ? "#16a34a" : accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: btnPressed ? "scale(0.97)" : "scale(1)",
                boxShadow: btnPressed ? "none" : `0 2px 8px ${accent}44`,
              }}
            >
              <span style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "#fff", fontWeight: 600 }}>
                {showSuccess ? "✓ Sendt!" : "Send forespørsel"}
              </span>
            </div>
          </div>

          {/* Success melding */}
          {showSuccess && (
            <div
              style={{
                position: "absolute",
                bottom: 30,
                left: "50%",
                transform: "translateX(-50%)",
                opacity: successOpacity,
                fontSize: 11,
                fontFamily: "'Satoshi', sans-serif",
                color: "#16a34a",
                fontWeight: 400,
              }}
            >
              Vi sender deg et utkast innen 24 timer.
            </div>
          )}
        </div>

        {/* Cursor */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            opacity: cursorAppear,
            transform: `scale(${cursorScale})`,
            zIndex: 10,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            pointerEvents: "none",
          }}
        >
          <path
            d="M17.2607 12.4008C19.3774 11.2626 20.4357 10.6935 20.7035 10.0084C20.9359 9.41393 20.8705 8.74423 20.5276 8.20587C20.1324 7.58551 18.984 7.23176 16.6872 6.52425L8.00612 3.85014C6.06819 3.25318 5.09923 2.95471 4.45846 3.19669C3.90068 3.40733 3.46597 3.85584 3.27285 4.41993C3.051 5.06794 3.3796 6.02711 4.03681 7.94545L6.94793 16.4429C7.75632 18.8025 8.16052 19.9824 8.80519 20.3574C9.36428 20.6826 10.0461 20.7174 10.6354 20.4507C11.3149 20.1432 11.837 19.0106 12.8813 16.7454L13.6528 15.0719C13.819 14.7113 13.9021 14.531 14.0159 14.3736C14.1168 14.2338 14.2354 14.1078 14.3686 13.9984C14.5188 13.8752 14.6936 13.7812 15.0433 13.5932L17.2607 12.4008Z"
            fill="#1a1a1a"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Stativ */}
      <div style={{ width: 60, height: 36, background: "linear-gradient(180deg, #1a1a1a, #2a2a2a)", borderRadius: "0 0 4px 4px" }} />
      <div style={{ width: 180, height: 10, background: "linear-gradient(180deg, #2a2a2a, #333)", borderRadius: "0 0 10px 10px" }} />
    </div>
  );
};

/**
 * Analytics Dashboard mockup — GA4 Oversikt-side, tro mot ekte layout
 */
const AnalyticsDashboardMockup = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);
  const t = frame - delay;

  // Metric count-up (extended timing)
  const countProgress = Math.max(0, interpolate(t, [40, 200], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const aktive = Math.floor(countProgress * 47);
  const hendelser = Math.floor(countProgress * 892);
  const viktige = Math.floor(countProgress * 6);
  const nyeBrukere = Math.floor(countProgress * 31);

  // Chart draw (extended)
  const chartDraw = Math.max(0, interpolate(t, [80, 260], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  // Dashed line draws slightly behind
  const dashedDraw = Math.max(0, interpolate(t, [100, 280], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  // Realtime count-up
  const realtimeProgress = Math.max(0, interpolate(t, [60, 150], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const realtimeUsers = Math.floor(realtimeProgress * 3);

  // Chart data — main line (siste 7 dagene)
  const mainLine = [3, 4, 3.5, 8, 12, 11, 6, 5, 3, 4, 5, 4, 3.5];
  // Dashed line (forrige periode)
  const prevLine = [2, 2.5, 2, 3, 3.5, 3, 2.5, 2, 2.5, 3, 2, 2.5, 2];
  // Teal line (median)
  const medianLine = [3, 3, 3, 3.2, 3.5, 3.3, 3, 3, 3.2, 3, 3.1, 3, 3];
  const dateLabels = ["15\nfeb.", "16", "17", "18", "19", "20", "21"];

  const chartW = 440;
  const chartH = 170;
  const chartPadL = 10;
  const chartPadR = 22;
  const chartPadT = 8;
  const chartPadB = 28;
  const maxY = 15;
  const stepX = (chartW - chartPadL - chartPadR) / (mainLine.length - 1);

  const toPath = (points, visible) => {
    let d = "";
    const vis = Math.min(Math.floor(visible * points.length), points.length);
    for (let i = 0; i < vis; i++) {
      const x = chartPadL + i * stepX;
      const y = chartPadT + (1 - points[i] / maxY) * (chartH - chartPadT - chartPadB);
      d += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return d;
  };

  // Metric highlight (which one is "selected" — like "Nye brukere" in screenshot)
  const selectedMetric = t >= 120 ? 3 : 0;

  const f = "Inter, sans-serif";

  return (
    <div
      style={{
        position: "absolute",
        bottom: -80,
        left: "50%",
        transform: `translateX(-50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Monitor */}
      <div
        style={{
          width: 880,
          height: 520,
          borderRadius: 16,
          background: "#1a1a1a",
          padding: 8,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        {/* Skjermflate */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            background: "#f8f9fa",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* GA top navigation bar */}
          <div
            style={{
              height: 36,
              background: "#fff",
              borderBottom: "1px solid #dadce0",
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: 8,
            }}
          >
            {/* GA bar chart icon */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5 }}>
              <div style={{ width: 4, height: 6, borderRadius: 1.5, background: "#e37400" }} />
              <div style={{ width: 4, height: 11, borderRadius: 1.5, background: "#f9ab00" }} />
              <div style={{ width: 4, height: 16, borderRadius: 1.5, background: "#f9ab00" }} />
            </div>
            <span style={{ fontSize: 10, fontFamily: f, color: "#5f6368", fontWeight: 400 }}>
              Analytics
            </span>
            <div style={{ flex: 1 }} />
            {/* Search + profile placeholders */}
            <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid #5f6368" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#1a73e8" }} />
          </div>

          {/* Content — two columns */}
          <div style={{ display: "flex", height: "calc(100% - 36px)" }}>
            {/* LEFT — main overview */}
            <div style={{ flex: 1, padding: 12, display: "flex", flexDirection: "column", gap: 10, overflow: "hidden" }}>
              {/* Metric cards — GA4 style (white card, border-bottom colored) */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  border: "1px solid #dadce0",
                  padding: "10px 0 0 0",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex" }}>
                  {[
                    { label: "Aktive brukere", value: aktive, change: "+34,1 %", up: true },
                    { label: "Antall hendelser", value: hendelser, change: "-12,8 %", up: false },
                    { label: "Viktige hendelser", value: viktige, change: "-", up: null },
                    { label: "Nye brukere", value: nyeBrukere, change: "+42,5 %", up: true },
                  ].map((m, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        padding: "0 12px 10px",
                        borderBottom: selectedMetric === i ? "3px solid #1a73e8" : "3px solid transparent",
                      }}
                    >
                      <div style={{
                        fontSize: 7,
                        fontFamily: f,
                        color: selectedMetric === i ? "#1a73e8" : "#5f6368",
                        marginBottom: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}>
                        {m.label} <span style={{ fontSize: 5 }}>▼</span>
                      </div>
                      <div style={{ fontSize: 18, fontFamily: "'Satoshi', sans-serif", fontWeight: 400, color: "#202124" }}>
                        {m.value.toLocaleString("nb-NO")}
                      </div>
                      {m.up !== null && (
                        <div style={{
                          fontSize: 7,
                          fontFamily: f,
                          color: m.up ? "#137333" : "#c5221f",
                          marginTop: 2,
                        }}>
                          {m.up ? "↑" : "↓"} {m.change}
                        </div>
                      )}
                      {m.up === null && (
                        <div style={{ fontSize: 7, fontFamily: f, color: "#5f6368", marginTop: 2 }}>-</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Line chart area */}
                <div style={{ padding: "6px 10px 6px 10px" }}>
                  <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`} style={{ width: "100%", height: "auto" }}>
                    {/* Horizontal grid lines */}
                    {[5, 10, 15].map((val) => {
                      const y = chartPadT + (1 - val / maxY) * (chartH - chartPadT - chartPadB);
                      return (
                        <g key={val}>
                          <line x1={chartPadL} y1={y} x2={chartW - chartPadR} y2={y} stroke="#dadce0" strokeWidth="0.5" />
                          <text x={chartW - chartPadR + 4} y={y + 3} fontSize="6" fill="#5f6368" fontFamily={f}>{val}</text>
                        </g>
                      );
                    })}
                    {/* Bottom axis line */}
                    <line x1={chartPadL} y1={chartH - chartPadB} x2={chartW - chartPadR} y2={chartH - chartPadB} stroke="#dadce0" strokeWidth="0.5" />
                    <text x={chartW - chartPadR + 4} y={chartH - chartPadB + 3} fontSize="6" fill="#5f6368" fontFamily={f}>0</text>

                    {/* Date labels */}
                    {dateLabels.map((label, i) => {
                      const x = chartPadL + i * ((chartW - chartPadL - chartPadR) / (dateLabels.length - 1));
                      const lines = label.split("\n");
                      return (
                        <text key={i} x={x} y={chartH - chartPadB + 10} fontSize="6" fill="#5f6368" fontFamily={f} textAnchor="middle">
                          {lines.map((ln, li) => (
                            <tspan key={li} x={x} dy={li === 0 ? 0 : 8}>{ln}</tspan>
                          ))}
                        </text>
                      );
                    })}

                    {/* Teal median area/line */}
                    {dashedDraw > 0 && (
                      <path d={toPath(medianLine, dashedDraw)} fill="none" stroke="#70cbc0" strokeWidth="1.5" opacity="0.5" />
                    )}
                    {/* Dashed prev period line */}
                    {dashedDraw > 0 && (
                      <path d={toPath(prevLine, dashedDraw)} fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
                    )}
                    {/* Main solid line */}
                    {chartDraw > 0 && (
                      <path d={toPath(mainLine, chartDraw)} fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                  </svg>
                </div>

                {/* Legend */}
                <div style={{ display: "flex", gap: 14, padding: "4px 12px 8px", alignItems: "center" }}>
                  {[
                    { label: "de siste 7 dagene", color: "#1a73e8", dash: false },
                    { label: "Forrige periode", color: "#1a73e8", dash: true },
                    { label: "Median", color: "#70cbc0", dash: false },
                  ].map((leg, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <div style={{
                        width: 14,
                        height: 0,
                        borderTop: `2px ${leg.dash ? "dashed" : "solid"} ${leg.color}`,
                        opacity: leg.dash ? 0.5 : 1,
                      }} />
                      <span style={{ fontSize: 6, fontFamily: f, color: "#5f6368" }}>{leg.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom link */}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 12px 8px", borderTop: "1px solid #dadce0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <span style={{ fontSize: 7, fontFamily: f, color: "#5f6368" }}>de siste 7 dagene</span>
                    <span style={{ fontSize: 5, color: "#5f6368" }}>▼</span>
                  </div>
                  <span style={{ fontSize: 7, fontFamily: f, color: "#1a73e8" }}>Se en rapportoversikt →</span>
                </div>
              </div>

              {/* Nylig brukt — bottom section */}
              <div>
                <div style={{ fontSize: 10, fontFamily: f, fontWeight: 600, color: "#202124", marginBottom: 6 }}>
                  Nylig brukt
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {["Datastrømmer", "Data Filters", "Datainnsamling"].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        background: "#fff",
                        borderRadius: 8,
                        border: "1px solid #dadce0",
                        padding: "8px 10px",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <div style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#f1f3f4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#5f6368" strokeWidth="2" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="#5f6368" strokeWidth="2" />
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: 7, fontFamily: f, color: "#1a73e8" }}>{item}</div>
                        <div style={{ fontSize: 6, fontFamily: f, color: "#5f6368" }}>for 5 døgn siden</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — realtime panel */}
            <div style={{ width: 200, padding: 12, display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  border: "1px solid #dadce0",
                  padding: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 6, fontFamily: f, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.3 }}>
                    Aktive brukere siste 30 min
                  </span>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", border: "1.5px solid #34a853", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="#34a853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div style={{ fontSize: 28, fontFamily: "'Satoshi', sans-serif", fontWeight: 400, color: "#202124" }}>
                  {realtimeUsers}
                </div>
                <div style={{ fontSize: 6, fontFamily: f, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.3 }}>
                  Aktive brukere per minutt
                </div>
                {/* Mini realtime bar chart */}
                <div style={{ height: 30, display: "flex", alignItems: "flex-end", gap: 1, marginTop: 4 }}>
                  {Array.from({ length: 30 }, (_, i) => {
                    const h = i < 25 ? Math.random() * 4 + 1 : Math.random() * 8 + 2;
                    const vis = interpolate(t, [60 + i * 2, 80 + i * 2], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
                    return (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: h * vis,
                          background: "#1a73e8",
                          borderRadius: 0.5,
                          opacity: 0.6,
                        }}
                      />
                    );
                  })}
                </div>
                {/* Dropdowns */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <span style={{ fontSize: 6, fontFamily: f, color: "#202124", fontWeight: 500 }}>LAND ▼</span>
                  <span style={{ fontSize: 6, fontFamily: f, color: "#202124", fontWeight: 500 }}>AKTIVE BRUKERE ▼</span>
                </div>
              </div>
              {/* Realtime link */}
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: 7, fontFamily: f, color: "#1a73e8" }}>Se sanntidsrapporten →</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Stativ */}
      <div style={{ width: 60, height: 36, background: "linear-gradient(180deg, #1a1a1a, #2a2a2a)", borderRadius: "0 0 4px 4px" }} />
      <div style={{ width: 180, height: 10, background: "linear-gradient(180deg, #2a2a2a, #333)", borderRadius: "0 0 10px 10px" }} />
    </div>
  );
};

/**
 * Google Search Results mockup — søkeresultater som skrives inn og vises
 */
const GoogleSearchMockup = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);
  const t = frame - delay;

  const QUERY = "advokat oslo";
  const f = "Inter, sans-serif";

  // Typing animation
  const typedChars = t < 30 ? 0 : Math.min(QUERY.length, Math.floor((t - 30) / 5));
  const typedText = QUERY.slice(0, typedChars);
  const showCaret = t >= 30 && t < 100 && Math.floor(t / 15) % 2 === 0;
  const typingDone = typedChars >= QUERY.length;

  // Results appear sequentially after typing
  const r1 = Math.max(0, interpolate(t, [110, 130], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const r2 = Math.max(0, interpolate(t, [140, 160], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const r3 = Math.max(0, interpolate(t, [170, 190], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const headerOpacity = Math.max(0, interpolate(t, [105, 115], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  // Tabs appear with results
  const tabsOpacity = Math.max(0, interpolate(t, [100, 112], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  // Highlight #1 result after all results are visible
  const highlightOpacity = Math.max(0, interpolate(t, [220, 250], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  // Position badges fade in
  const badge1 = Math.max(0, interpolate(t, [240, 260], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const badge2 = Math.max(0, interpolate(t, [255, 275], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const badge3 = Math.max(0, interpolate(t, [270, 290], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  const results = [
    {
      favicon: "as",
      faviconBg: "#4285f4",
      faviconColor: "#fff",
      siteName: "Advokatsmart",
      url: "https://www.advokatsmart.no › tjeneste › advokat-oslo",
      title: "Advokat Oslo: De 10 beste advokatene i 2026",
      desc: "Finn den rette advokaten i Oslo ved å sammenligne tilbud fra flere advokatfirma. Start med å se eksempler på advokatfirma i Oslo og les deretter hvordan du ...",
      opacity: r1,
    },
    {
      favicon: "L",
      faviconBg: "#f1f3f4",
      faviconColor: "#5f6368",
      siteName: "Advokatfirmaet Legalis AS",
      url: "https://legalis.no",
      title: "Advokatfirmaet Legalis AS: Forside",
      desc: "Våre advokater har høy kompetanse innen private og forretningsjuridiske spørsmål. Advokater i Oslo, men hjelper klienter i hele landet.",
      opacity: r2,
    },
    {
      favicon: "○",
      faviconBg: "#f1f3f4",
      faviconColor: "#5f6368",
      siteName: "Osloadvokatene",
      url: "https://osloadvokatene.no",
      title: "Osloadvokatene | Når du trenger hjelp",
      desc: "Våre advokater er best på eiendomsrett, familierett, erstatningsrett, nav, arbeidsrett og kontraktsrett.",
      opacity: r3,
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        bottom: -80,
        left: "50%",
        transform: `translateX(-50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Monitor */}
      <div
        style={{
          width: 880,
          height: 520,
          borderRadius: 16,
          background: "#1a1a1a",
          padding: 8,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        {/* Skjermflate */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            background: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Google header area */}
          <div style={{ padding: "14px 18px 0", display: "flex", alignItems: "center", gap: 16 }}>
            {/* Google logo */}
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 18, fontFamily: "'Product Sans', Arial, sans-serif", fontWeight: 500 }}>
                <span style={{ color: "#4285f4" }}>G</span>
                <span style={{ color: "#ea4335" }}>o</span>
                <span style={{ color: "#fbbc05" }}>o</span>
                <span style={{ color: "#4285f4" }}>g</span>
                <span style={{ color: "#34a853" }}>l</span>
                <span style={{ color: "#ea4335" }}>e</span>
              </span>
            </div>
            {/* Search bar */}
            <div
              style={{
                flex: 1,
                height: 34,
                borderRadius: 20,
                border: "1px solid #dfe1e5",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                boxShadow: "0 1px 6px rgba(32,33,36,0.08)",
                maxWidth: 520,
              }}
            >
              {/* Search icon */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginRight: 8 }}>
                <circle cx="11" cy="11" r="7" stroke="#9aa0a6" strokeWidth="2.5" />
                <path d="M16 16l4.5 4.5" stroke="#9aa0a6" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 11, fontFamily: f, color: "#202124", flex: 1 }}>
                {typedText}
                {showCaret && <span style={{ color: "#4285f4" }}>|</span>}
              </span>
              {/* X and mic icons */}
              {typingDone && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="#70757a" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <div style={{ width: 1, height: 16, background: "#dadce0" }} />
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <rect x="9" y="2" width="6" height="12" rx="3" fill="#4285f4" />
                    <path d="M5 11a7 7 0 0 0 14 0" stroke="#34a853" strokeWidth="2" fill="none" />
                    <path d="M12 18v4" stroke="#ea4335" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Navigation tabs */}
          <div
            style={{
              display: "flex",
              gap: 16,
              padding: "10px 18px 0 70px",
              borderBottom: "1px solid #ebebeb",
              opacity: tabsOpacity,
            }}
          >
            {["Alle", "Bilder", "Nyheter", "Kart", "Shopping", "Mer"].map((tab, i) => (
              <div
                key={tab}
                style={{
                  fontSize: 8,
                  fontFamily: f,
                  color: i === 0 ? "#1a73e8" : "#70757a",
                  paddingBottom: 8,
                  borderBottom: i === 0 ? "2px solid #1a73e8" : "2px solid transparent",
                  fontWeight: i === 0 ? 500 : 400,
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Results count */}
          <div
            style={{
              padding: "8px 18px 4px 70px",
              opacity: headerOpacity,
            }}
          >
            <span style={{ fontSize: 7, fontFamily: f, color: "#70757a" }}>
              Omtrent 2 340 000 resultater (0,42 sekunder)
            </span>
          </div>

          {/* Search results */}
          <div style={{ padding: "0 18px 0 70px", display: "flex", flexDirection: "column", gap: 16 }}>
            {results.map((r, i) => {
              const badgeOp = i === 0 ? badge1 : i === 1 ? badge2 : badge3;
              const isFirst = i === 0;
              return (
                <div
                  key={i}
                  style={{
                    opacity: r.opacity,
                    transform: `translateY(${interpolate(r.opacity, [0, 1], [12, 0])}px)`,
                    position: "relative",
                    padding: "6px 8px",
                    marginLeft: -8,
                    borderRadius: 8,
                    background: isFirst ? `rgba(26,115,232,${highlightOpacity * 0.06})` : "transparent",
                    border: isFirst ? `1.5px solid rgba(26,115,232,${highlightOpacity * 0.3})` : "1.5px solid transparent",
                  }}
                >
                  {/* Position badge */}
                  <div
                    style={{
                      position: "absolute",
                      left: -28,
                      top: "50%",
                      transform: `translateY(-50%) scale(${interpolate(badgeOp, [0, 1], [0.6, 1])})`,
                      opacity: badgeOp,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: isFirst ? "#1a73e8" : "#e8eaed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      fontFamily: f,
                      fontWeight: 600,
                      color: isFirst ? "#fff" : "#5f6368",
                    }}
                  >
                    {i + 1}
                  </div>
                  {/* Favicon + site info row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: r.faviconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 8,
                        fontFamily: f,
                        fontWeight: 600,
                        color: r.faviconColor,
                      }}
                    >
                      {r.favicon}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                      <span style={{ fontSize: 8, fontFamily: f, color: "#202124", fontWeight: 400 }}>
                        {r.siteName}
                      </span>
                      <span style={{ fontSize: 7, fontFamily: f, color: "#4d5156" }}>
                        {r.url}
                      </span>
                    </div>
                    <span style={{ fontSize: 10, color: "#70757a", marginLeft: 4, lineHeight: 1 }}>⋮</span>
                  </div>
                  {/* Title */}
                  <div style={{ fontSize: 13, fontFamily: f, color: "#1a0dab", fontWeight: 400, marginBottom: 2, lineHeight: 1.3 }}>
                    {r.title}
                  </div>
                  {/* Description */}
                  <div style={{ fontSize: 8, fontFamily: f, color: "#4d5156", lineHeight: 1.5, maxWidth: 540 }}>
                    {r.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stativ */}
      <div style={{ width: 60, height: 36, background: "linear-gradient(180deg, #1a1a1a, #2a2a2a)", borderRadius: "0 0 4px 4px" }} />
      <div style={{ width: 180, height: 10, background: "linear-gradient(180deg, #2a2a2a, #333)", borderRadius: "0 0 10px 10px" }} />
    </div>
  );
};

/**
 * Gratis utkast mockup — URL-skjema + e-postvarsel etter sending
 */
const GratisUtkastMockup = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);
  const t = frame - delay;

  const URL_TEXT = "www.dinbedrift.no";
  const f = "Inter, sans-serif";

  // Cursor appears and moves to input
  const cursorAppear = Math.max(0, interpolate(t, [15, 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const cursorX = interpolate(t,
    [15, 40, 50, 120, 140],
    [580, 320, 320, 320, 540],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const cursorY = interpolate(t,
    [15, 40, 50, 120, 140],
    [100, 230, 230, 230, 310],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const clickInput = t >= 42 && t <= 48;
  const clickBtn = t >= 142 && t <= 148;
  const cursorScale = (clickInput || clickBtn) ? 0.85 : 1;

  const inputFocused = t >= 45;
  const typedChars = t < 52 ? 0 : Math.min(URL_TEXT.length, Math.floor((t - 52) / 4));
  const typedText = URL_TEXT.slice(0, typedChars);
  const showCaret = inputFocused && t < 125 && Math.floor(t / 15) % 2 === 0;

  const btnPressed = t >= 142 && t <= 150;
  const showSuccess = t >= 155;
  const successOpacity = Math.max(0, interpolate(t, [155, 170], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  // E-postvarsel glir inn fra høyre
  const emailProgress = t >= 180
    ? spring({ frame: t - 180, fps, config: { damping: 15, mass: 0.8 } })
    : 0;
  const emailX = interpolate(emailProgress, [0, 1], [200, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Monitor */}
      <div
        style={{
          width: 880,
          height: 520,
          borderRadius: 16,
          background: "#1a1a1a",
          padding: 8,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        {/* Skjermflate */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            background: "#ffffff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              height: 28,
              background: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 5,
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
            <div
              style={{
                marginLeft: 10,
                flex: 1,
                height: 16,
                borderRadius: 4,
                background: "#e9ecef",
                display: "flex",
                alignItems: "center",
                paddingLeft: 8,
              }}
            >
              <span style={{ fontSize: 7, fontFamily: f, color: "#adb5bd" }}>
                mediegruppen.no/gratis-utkast
              </span>
            </div>
          </div>

          {/* Tittel i skjermen */}
          <div
            style={{
              position: "absolute",
              top: 70,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 42, fontFamily: "'Clash Display', sans-serif", fontWeight: 500, color: "#1c1c1c" }}>
              Få et gratis designutkast
            </div>
            <div style={{ fontSize: 20, fontFamily: "'Satoshi', sans-serif", fontWeight: 300, color: "#666", marginTop: 14 }}>
              Skriv inn nettadressen din — vi lager et utkast uten kostnad.
            </div>
          </div>

          {/* Skjema */}
          <div
            style={{
              position: "absolute",
              top: "58%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 560,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 20,
            }}
          >
            {/* URL input */}
            <div>
              <div style={{ fontSize: 10, fontFamily: "'Satoshi', sans-serif", fontWeight: 400, color: "#555", marginBottom: 4 }}>
                Din nettadresse
              </div>
              <div
                style={{
                  height: 44,
                  borderRadius: 8,
                  border: `2px solid ${inputFocused ? accent : "#d0d0d0"}`,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 14px",
                }}
              >
                {typedChars === 0 ? (
                  <span style={{ fontSize: 13, fontFamily: f, color: "#999" }}>
                    f.eks. www.dinbedrift.no
                  </span>
                ) : (
                  <span style={{ fontSize: 13, fontFamily: f, color: "#1a1a1a", fontWeight: 500 }}>
                    {typedText}
                    {showCaret && <span style={{ color: accent, fontWeight: 400 }}>|</span>}
                  </span>
                )}
              </div>
            </div>

            {/* Send-knapp */}
            <div
              style={{
                height: 44,
                borderRadius: 8,
                background: btnPressed ? "#4338CA" : showSuccess ? "#16a34a" : accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: btnPressed ? "scale(0.97)" : "scale(1)",
                boxShadow: btnPressed ? "none" : `0 2px 8px ${accent}44`,
              }}
            >
              <span style={{ fontSize: 13, fontFamily: f, color: "#fff", fontWeight: 600 }}>
                {showSuccess ? "✓ Sendt!" : "Send forespørsel"}
              </span>
            </div>
          </div>

          {/* Suksessmelding */}
          {showSuccess && (
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                opacity: successOpacity,
                fontSize: 10,
                fontFamily: "'Satoshi', sans-serif",
                color: "#16a34a",
                fontWeight: 400,
              }}
            >
              Vi sender deg et utkast innen 24 timer.
            </div>
          )}

          {/* E-postvarsel — macOS-stil notifikasjon */}
          {t >= 180 && (
            <div
              style={{
                position: "absolute",
                top: 40,
                right: 12,
                width: 240,
                background: "rgba(255,255,255,0.97)",
                borderRadius: 12,
                padding: "10px 12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
                transform: `translateX(${emailX}px)`,
                opacity: emailProgress,
                display: "flex",
                gap: 9,
                alignItems: "flex-start",
                zIndex: 20,
              }}
            >
              {/* Mail-ikon */}
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #5B9DFF, #3478F6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="#fff" strokeWidth="2" />
                  <path d="M2 7l10 7 10-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                  <span style={{ fontSize: 8, fontFamily: f, color: "#1a1a1a", fontWeight: 600 }}>Mail</span>
                  <span style={{ fontSize: 6, fontFamily: f, color: "#999" }}>nå</span>
                </div>
                <div style={{ fontSize: 8, fontFamily: f, color: "#1a1a1a", fontWeight: 600, marginBottom: 2 }}>
                  Ditt designutkast er klart
                </div>
                <div style={{ fontSize: 7, fontFamily: f, color: "#666", lineHeight: 1.4 }}>
                  Hei! Vi har laget et designutkast av nettsiden din. Se vedlegget for...
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cursor */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: "absolute",
            left: cursorX,
            top: cursorY,
            opacity: cursorAppear,
            transform: `scale(${cursorScale})`,
            zIndex: 10,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            pointerEvents: "none",
          }}
        >
          <path
            d="M17.2607 12.4008C19.3774 11.2626 20.4357 10.6935 20.7035 10.0084C20.9359 9.41393 20.8705 8.74423 20.5276 8.20587C20.1324 7.58551 18.984 7.23176 16.6872 6.52425L8.00612 3.85014C6.06819 3.25318 5.09923 2.95471 4.45846 3.19669C3.90068 3.40733 3.46597 3.85584 3.27285 4.41993C3.051 5.06794 3.3796 6.02711 4.03681 7.94545L6.94793 16.4429C7.75632 18.8025 8.16052 19.9824 8.80519 20.3574C9.36428 20.6826 10.0461 20.7174 10.6354 20.4507C11.3149 20.1432 11.837 19.0106 12.8813 16.7454L13.6528 15.0719C13.819 14.7113 13.9021 14.531 14.0159 14.3736C14.1168 14.2338 14.2354 14.1078 14.3686 13.9984C14.5188 13.8752 14.6936 13.7812 15.0433 13.5932L17.2607 12.4008Z"
            fill="#1a1a1a"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Stativ */}
      <div style={{ width: 60, height: 36, background: "linear-gradient(180deg, #1a1a1a, #2a2a2a)", borderRadius: "0 0 4px 4px" }} />
      <div style={{ width: 180, height: 10, background: "linear-gradient(180deg, #2a2a2a, #333)", borderRadius: "0 0 10px 10px" }} />
    </div>
  );
};

/**
 * 200 Faktorer — animert rutenett som fyller seg opp
 */
const FactorGridVisual = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [50, 0]);
  const t = frame - delay;
  const f = "Inter, sans-serif";

  const totalDots = 200;
  const cols = 20;
  const rows = Math.ceil(totalDots / cols);

  // Dots fill in progressively
  const filledCount = Math.floor(
    Math.max(0, interpolate(t, [20, 220], [0, totalDots], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }))
  );

  // Counter animation
  const counterVal = Math.floor(
    Math.max(0, interpolate(t, [20, 220], [0, 200], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }))
  );

  // Category labels that fade in after grid fills
  const labelsOp = Math.max(0, interpolate(t, [230, 260], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  const categories = [
    "Hastighet", "Innhold", "Lenker", "Mobilvennlig", "Sikkerhet",
    "Brukeropplevelse", "Domene-alder", "Metadata", "Struktur", "..."
  ];

  // Color palette for dots (Google-inspired)
  const dotColors = ["#4285f4", "#34a853", "#fbbc05", "#ea4335", "#6366f1", "#8b5cf6"];

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateY(${mockupY + 80}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      {/* Animated counter */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{
          fontSize: 80, fontFamily: "'Satoshi', sans-serif", fontWeight: 700, color: accent,
          display: "inline-block", width: 200, textAlign: "right",
        }}>
          {counterVal}+
        </span>
        <span style={{
          fontSize: 32, fontFamily: robotoMono, fontWeight: 400,
          color: accent, opacity: 0.8,
        }}>
          faktorer
        </span>
      </div>

      {/* Dot grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: cols * 28,
          gap: 5,
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalDots }, (_, i) => {
          const filled = i < filledCount;
          const colorIdx = Math.floor((i / totalDots) * dotColors.length);
          return (
            <div
              key={i}
              style={{
                width: 18,
                height: 18,
                borderRadius: 5,
                background: filled ? dotColors[colorIdx] : "#e8e8e8",
                opacity: filled ? 0.85 : 0.3,
                transform: `scale(${filled ? 1 : 0.7})`,
              }}
            />
          );
        })}
      </div>

      {/* Category labels */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          maxWidth: 700,
          marginTop: 4,
          opacity: labelsOp,
          transform: `translateY(${interpolate(labelsOp, [0, 1], [10, 0])}px)`,
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{
              fontSize: 18,
              fontFamily: f,
              color: "#555",
              background: "#f3f4f6",
              borderRadius: 16,
              padding: "8px 16px",
              fontWeight: 400,
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Subtitle text — under tags */}
      <div
        style={{
          fontSize: 32,
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 500,
          color: "#1c1c1c",
          textAlign: "center",
          marginTop: 40,
          opacity: labelsOp,
          transform: `translateY(${interpolate(labelsOp, [0, 1], [10, 0])}px)`,
        }}
      >
        Hastighet, innhold, lenker, sikkerhet — og mye mer.
      </div>
    </div>
  );
};

/**
 * Søkevolum-visualisering — animerte søkeord med bar charts
 */
const SearchVolumeVisual = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);
  const t = frame - delay;
  const f = "Inter, sans-serif";

  const keywords = [
    { keyword: "Eiendomsmegler", volume: 6600, barWidth: 100 },
    { keyword: "Verdivurdering bolig", volume: 4400, barWidth: 67 },
    { keyword: "Eiendomsmegler Oslo", volume: 1500, barWidth: 23 },
  ];

  const rowAnims = keywords.map((_, i) => {
    const start = 30 + i * 50;
    const op = Math.max(0, interpolate(t, [start, start + 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
    return op;
  });

  // Counter animation for each row
  const counterAnims = keywords.map((kw, i) => {
    const start = 60 + i * 50;
    const val = Math.max(0, interpolate(t, [start, start + 60], [0, kw.volume], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
    return Math.round(val);
  });

  // Bar fill animation
  const barAnims = keywords.map((kw, i) => {
    const start = 50 + i * 50;
    const val = Math.max(0, interpolate(t, [start, start + 50], [0, kw.barWidth], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
    return val;
  });

  // Total counter
  const totalStart = 180;
  const totalVal = Math.max(0, interpolate(t, [totalStart, totalStart + 80], [0, 150000], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const totalOp = Math.max(0, interpolate(t, [totalStart - 10, totalStart + 10], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  const gradientColors = ["#5B6BF5", "#8B5CF6", "#7C3AED"];

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateY(${mockupY + 60}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        width: 750,
      }}
    >
      {/* Search volume rows */}
      {keywords.map((kw, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            opacity: rowAnims[i],
            transform: `translateY(${interpolate(rowAnims[i], [0, 1], [20, 0])}px)`,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* Keyword + volume */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: 28,
                fontFamily: f,
                fontWeight: 500,
                color: "#1c1c1c",
              }}
            >
              {kw.keyword}
            </div>
            <div
              style={{
                fontSize: 32,
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 400,
                color: accent,
              }}
            >
              {counterAnims[i].toLocaleString("nb-NO")}/mnd
            </div>
          </div>

          {/* Bar */}
          <div
            style={{
              width: "100%",
              height: 18,
              background: "#f0f0f5",
              borderRadius: 9,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${barAnims[i]}%`,
                height: "100%",
                borderRadius: 9,
                background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
              }}
            />
          </div>
        </div>
      ))}

      {/* Total per year */}
      <div
        style={{
          marginTop: 20,
          opacity: totalOp,
          transform: `translateY(${interpolate(totalOp, [0, 1], [15, 0])}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontFamily: f,
            fontWeight: 400,
            color: "#888",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Totalt per år
        </div>
        <div
          style={{
            fontSize: 72,
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 400,
            color: accent,
          }}
        >
          {Math.round(totalVal).toLocaleString("nb-NO")}+
        </div>
      </div>
    </div>
  );
};

/**
 * SEO Rapport mockup — 5-siders rapport som bygges opp
 */
const SeoReportMockup = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);
  const t = frame - delay;
  const f = "Inter, sans-serif";

  const pages = [
    { title: "1. Teknisk analyse", items: ["Hastighet", "Mobilvennlighet", "SSL-sikkerhet", "Core Web Vitals"] },
    { title: "2. Innholdsanalyse", items: ["Meta-titler", "Beskrivelser", "Overskrifter", "Nøkkelord"] },
    { title: "3. Synlighet", items: ["Google-posisjon", "Søkeord-rangering", "Lokal SEO", "Konkurrenter"] },
    { title: "4. Lenker & autoritet", items: ["Tilbakelenker", "Domene-styrke", "Intern linking", "Broken links"] },
    { title: "5. Anbefalinger", items: ["Prioritert liste", "Quick wins", "Langsiktig plan", "Konkrete tiltak"] },
  ];

  // Pages slide in from right, stacked with offset
  const pageAnims = pages.map((_, i) => {
    const start = 30 + i * 35;
    const op = Math.max(0, interpolate(t, [start, start + 25], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
    return op;
  });

  // Checkmarks appear after all pages
  const checkOp = Math.max(0, interpolate(t, [240, 270], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  return (
    <div
      style={{
        position: "absolute",
        bottom: -40,
        left: "50%",
        transform: `translateX(-50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        alignItems: "flex-start",
        gap: 0,
      }}
    >
      {/* Stacked report pages — vertical list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 580 }}>
        {pages.map((page, i) => {
          const op = pageAnims[i];
          const slideX = interpolate(op, [0, 1], [40, 0]);
          const slideY = interpolate(op, [0, 1], [10, 0]);
          return (
            <div
              key={i}
              style={{
                opacity: op,
                transform: `translateX(${slideX}px) translateY(${slideY}px)`,
                background: "#fff",
                borderRadius: 12,
                padding: "14px 20px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Page header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `${accent}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: accent,
                    fontFamily: f,
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontSize: 16, fontFamily: "'Satoshi', sans-serif", fontWeight: 600, color: "#1c1c1c" }}>
                  {page.title.replace(/^\d+\.\s*/, "")}
                </span>
                {/* Checkmark */}
                {checkOp > 0 && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: "auto", opacity: checkOp }}>
                    <circle cx="12" cy="12" r="10" fill="#34a853" />
                    <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              {/* Items */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {page.items.map((item, j) => (
                  <div
                    key={j}
                    style={{
                      fontSize: 10,
                      fontFamily: f,
                      color: "#555",
                      background: "#f8f9fa",
                      borderRadius: 6,
                      padding: "5px 10px",
                      border: "1px solid #f0f0f0",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

/**
 * Crawl → Index → Rank — animert 3-stegs flytdiagram
 */
const CrawlFlowDiagram = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [50, 0]);
  const t = frame - delay;

  const f = "Inter, sans-serif";

  const steps = [
    {
      icon: "spider",
      label: "Crawl",
      desc: "Google sender roboter som leser nettsiden din — side for side.",
      color: "#4285f4",
    },
    {
      icon: "database",
      label: "Index",
      desc: "Innholdet lagres i Googles database. Uten indeksering finnes du ikke.",
      color: "#34a853",
    },
    {
      icon: "trophy",
      label: "Rank",
      desc: "Algoritmen bestemmer rekkefølgen. Relevans, hastighet og kvalitet avgjør.",
      color: "#ea4335",
    },
  ];

  const stepAnims = steps.map((_, i) => {
    const start = 30 + i * 60;
    const op = Math.max(0, interpolate(t, [start, start + 25], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
    const y = interpolate(op, [0, 1], [20, 0]);
    return { opacity: op, y };
  });

  const arrow1 = Math.max(0, interpolate(t, [70, 90], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const arrow2 = Math.max(0, interpolate(t, [130, 150], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const arrowOps = [arrow1, arrow2];

  const renderIcon = (type, color) => {
    if (type === "spider") {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="7" r="3" stroke={color} strokeWidth="2" />
          <path d="M12 10v4M8 8l-3 3M16 8l3 3M9 14l-4 4M15 14l4 4M8 12H4M16 12h4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }
    if (type === "database") {
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="7" ry="3" stroke={color} strokeWidth="2" />
          <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke={color} strokeWidth="2" />
          <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" stroke={color} strokeWidth="2" />
        </svg>
      );
    }
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M8 2h8v9a4 4 0 0 1-8 0V2Z" stroke={color} strokeWidth="2" />
        <path d="M16 4h2a2 2 0 0 1 0 4h-2M8 4H6a2 2 0 0 0 0 4h2" stroke={color} strokeWidth="2" />
        <path d="M12 15v3M8 21h8M12 18h0" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 70,
        left: "50%",
        transform: `translateX(-50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        gap: 0,
      }}
    >
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div
            style={{
              opacity: stepAnims[i].opacity,
              transform: `translateY(${stepAnims[i].y}px)`,
              width: 220,
              background: "#fff",
              borderRadius: 16,
              padding: "24px 18px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: `1.5px solid ${step.color}20`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: `${step.color}12`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {renderIcon(step.icon, step.color)}
            </div>
            <div>
              <div style={{ fontSize: 11, fontFamily: f, color: step.color, fontWeight: 600, marginBottom: 2 }}>
                Steg {i + 1}
              </div>
              <div style={{ fontSize: 24, fontFamily: "'Satoshi', sans-serif", fontWeight: 600, color: "#1c1c1c" }}>
                {step.label}
              </div>
            </div>
            <div style={{ fontSize: 14, fontFamily: f, color: "#444", lineHeight: 1.5, fontWeight: 400 }}>
              {step.desc}
            </div>
          </div>
          {i < 2 && (
            <div
              style={{
                opacity: arrowOps[i],
                transform: `scaleX(${interpolate(arrowOps[i], [0, 1], [0.3, 1])})`,
                padding: "0 6px",
              }}
            >
              <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
                <path d="M2 10h28M24 4l6 6-6 6" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/**
 * Google Search Console mockup — Ytelse-rapport med posisjonsgraf
 */
const SearchConsoleMockup = ({ frame, fps, config, accent, delay = 40 }) => {
  const mockup = spring({ frame: frame - delay, fps, config });
  const mockupY = interpolate(mockup, [0, 1], [60, 0]);
  const t = frame - delay;

  const f = "Inter, sans-serif";

  const countProgress = Math.max(0, interpolate(t, [30, 180], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const klikk = Math.floor(countProgress * 1247);
  const visninger = Math.floor(countProgress * 18400);
  const ctr = (countProgress * 6.8).toFixed(1);
  const posisjon = (14.2 - countProgress * 11.1).toFixed(1);

  const chartDraw = Math.max(0, interpolate(t, [60, 240], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  const posData = [14, 13.5, 14, 12, 11, 10, 9, 11, 8, 7, 6, 5, 4.5, 4, 3.5, 3.2, 3.1];
  const clickData = [20, 25, 22, 35, 40, 55, 60, 50, 75, 90, 100, 120, 130, 140, 150, 155, 160];

  const chartW = 560;
  const chartH = 180;
  const padL = 40;
  const padR = 20;
  const padT = 10;
  const padB = 30;
  const usableW = chartW - padL - padR;
  const usableH = chartH - padT - padB;
  const stepX = usableW / (posData.length - 1);

  const posPath = (visible) => {
    let d = "";
    const vis = Math.min(Math.floor(visible * posData.length), posData.length);
    for (let i = 0; i < vis; i++) {
      const x = padL + i * stepX;
      const y = padT + (posData[i] / 20) * usableH;
      d += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return d;
  };

  const clickPath = (visible) => {
    let d = "";
    const vis = Math.min(Math.floor(visible * clickData.length), clickData.length);
    for (let i = 0; i < vis; i++) {
      const x = padL + i * stepX;
      const y = padT + usableH - (clickData[i] / 200) * usableH;
      d += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return d;
  };

  const months = ["Des", "Jan", "Feb"];

  const metrics = [
    { label: "Klikk", value: klikk.toLocaleString("nb-NO"), color: "#4285f4", active: true },
    { label: "Visninger", value: visninger.toLocaleString("nb-NO"), color: "#5f6368", active: false },
    { label: "Gjsn. CTR", value: `${ctr} %`, color: "#5f6368", active: false },
    { label: "Gjsn. posisjon", value: posisjon, color: "#e8710a", active: true },
  ];

  return (
    <div
      style={{
        position: "absolute",
        bottom: -80,
        left: "50%",
        transform: `translateX(-50%) translateY(${mockupY}px)`,
        opacity: mockup,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 880,
          height: 520,
          borderRadius: 16,
          background: "#1a1a1a",
          padding: 8,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            background: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* GSC top bar */}
          <div
            style={{
              height: 36,
              background: "#fff",
              borderBottom: "1px solid #dadce0",
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: 8,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#4285f4" strokeWidth="2.5" />
              <path d="M16 16l4.5 4.5" stroke="#4285f4" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 11, fontFamily: f, color: "#5f6368", fontWeight: 400 }}>
              Google Search Console
            </span>
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 8, fontFamily: f, color: "#5f6368" }}>
              osloadvokatene.no
            </span>
          </div>

          <div style={{ display: "flex", height: "calc(100% - 36px)" }}>
            {/* Sidebar */}
            <div style={{ width: 140, borderRight: "1px solid #dadce0", padding: "10px 0" }}>
              {["Oversikt", "Ytelse", "Nettadresseinspeksjon", "Indeksering", "Opplevelse"].map((item, i) => (
                <div
                  key={item}
                  style={{
                    fontSize: 8,
                    fontFamily: f,
                    color: i === 1 ? "#1a73e8" : "#5f6368",
                    padding: "7px 14px",
                    background: i === 1 ? "#e8f0fe" : "transparent",
                    fontWeight: i === 1 ? 500 : 400,
                    borderRight: i === 1 ? "3px solid #1a73e8" : "3px solid transparent",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div style={{ flex: 1, padding: "14px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontFamily: f, fontWeight: 400, color: "#202124" }}>
                  Ytelse
                </span>
                <span style={{ fontSize: 7, fontFamily: f, color: "#5f6368", padding: "3px 8px", border: "1px solid #dadce0", borderRadius: 4 }}>
                  Siste 3 måneder
                </span>
              </div>

              {/* Metric cards */}
              <div style={{ display: "flex", gap: 10 }}>
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: `1.5px solid ${m.active ? m.color : "#dadce0"}`,
                      background: m.active ? `${m.color}08` : "#fff",
                    }}
                  >
                    <div style={{ fontSize: 7, fontFamily: f, color: m.color, fontWeight: 500, marginBottom: 4 }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: 18, fontFamily: "'Satoshi', sans-serif", fontWeight: 400, color: "#202124" }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div style={{ flex: 1, background: "#fff", borderRadius: 8, border: "1px solid #dadce0", padding: 8 }}>
                <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`} style={{ width: "100%", height: "100%" }}>
                  {[0.25, 0.5, 0.75].map((pct) => {
                    const y = padT + pct * usableH;
                    return <line key={pct} x1={padL} y1={y} x2={chartW - padR} y2={y} stroke="#f1f3f4" strokeWidth="0.8" />;
                  })}
                  <line x1={padL} y1={padT + usableH} x2={chartW - padR} y2={padT + usableH} stroke="#dadce0" strokeWidth="0.8" />
                  {[0, 50, 100, 150, 200].map((val) => {
                    const y = padT + usableH - (val / 200) * usableH;
                    return <text key={val} x={padL - 6} y={y + 3} fontSize="6" fill="#4285f4" fontFamily={f} textAnchor="end">{val}</text>;
                  })}
                  {[1, 5, 10, 15, 20].map((val) => {
                    const y = padT + (val / 20) * usableH;
                    return <text key={val} x={chartW - padR + 6} y={y + 3} fontSize="6" fill="#e8710a" fontFamily={f} textAnchor="start">{val}</text>;
                  })}
                  {months.map((m, i) => {
                    const x = padL + (i / (months.length - 1)) * usableW;
                    return <text key={m} x={x} y={chartH - 6} fontSize="7" fill="#5f6368" fontFamily={f} textAnchor="middle">{m}</text>;
                  })}
                  {chartDraw > 0 && (
                    <path d={clickPath(chartDraw)} fill="none" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                  {chartDraw > 0 && (
                    <path d={posPath(chartDraw)} fill="none" stroke="#e8710a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                  {/* Annotation labels that appear after chart draws */}
                  {chartDraw > 0.9 && (() => {
                    const labelOp = Math.max(0, interpolate(t, [250, 275], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
                    const lastX = padL + (posData.length - 1) * stepX;
                    const startY = padT + (posData[0] / 20) * usableH;
                    const endY = padT + (posData[posData.length - 1] / 20) * usableH;
                    return (
                      <g opacity={labelOp}>
                        {/* Position label at end of orange line */}
                        <rect x={lastX + 8} y={endY - 10} width={38} height={18} rx={4} fill="#e8710a" />
                        <text x={lastX + 27} y={endY + 2} fontSize="8" fill="#fff" fontFamily={f} fontWeight="600" textAnchor="middle">#3</text>
                        {/* Start position label */}
                        <rect x={padL - 42} y={startY - 10} width={38} height={18} rx={4} fill="#e8710a" opacity="0.3" />
                        <text x={padL - 23} y={startY + 2} fontSize="8" fill="#e8710a" fontFamily={f} fontWeight="500" textAnchor="middle">#14</text>
                        {/* Arrow showing improvement */}
                        <path d={`M${padL - 23},${startY + 14} L${padL - 23},${startY + 28}`} stroke="#e8710a" strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
                        <text x={padL - 23} y={startY + 40} fontSize="6" fill="#34a853" fontFamily={f} fontWeight="600" textAnchor="middle">↑ Bedre</text>
                      </g>
                    );
                  })()}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stativ */}
      <div style={{ width: 60, height: 36, background: "linear-gradient(180deg, #1a1a1a, #2a2a2a)", borderRadius: "0 0 4px 4px" }} />
      <div style={{ width: 180, height: 10, background: "linear-gradient(180deg, #2a2a2a, #333)", borderRadius: "0 0 10px 10px" }} />
    </div>
  );
};

/**
 * Finner felles prefix og suffix i en liste med strenger,
 * slik at kun den unike midtdelen morphes.
 */
const getCommonParts = (values) => {
  if (!values || values.length < 2) return { prefix: "", suffix: "", cores: values || [] };
  const minLen = Math.min(...values.map((v) => v.length));

  let prefixLen = 0;
  for (let i = 0; i < minLen; i++) {
    if (values.every((v) => v[i] === values[0][i])) prefixLen++;
    else break;
  }

  let suffixLen = 0;
  for (let i = 1; i <= minLen - prefixLen; i++) {
    if (values.every((v) => v[v.length - i] === values[0][values[0].length - i])) suffixLen++;
    else break;
  }

  const prefix = values[0].slice(0, prefixLen);
  const suffix = suffixLen > 0 ? values[0].slice(-suffixLen) : "";
  const cores = values.map((v) => v.slice(prefixLen, suffixLen > 0 ? v.length - suffixLen : undefined));
  return { prefix, suffix, cores };
};

/**
 * Cycle text helper — morphes kun den unike midtdelen,
 * prefix og suffix forblir statiske.
 */
const useCycleText = (frame, fps, cycleValues, holdFrames = 120, morphFrames = 30) => {
  if (!cycleValues || cycleValues.length <= 1) {
    return { prefix: "", suffix: "", coreChars: null, currentIndex: 0, morphing: false, currentCore: cycleValues?.[0] || "" };
  }

  const { prefix, suffix, cores } = getCommonParts(cycleValues);

  const cycleDuration = holdFrames + morphFrames;
  const totalDuration = cycleValues.length * cycleDuration;
  const loopFrame = frame % totalDuration;
  const currentIndex = Math.floor(loopFrame / cycleDuration);
  const frameInCycle = loopFrame % cycleDuration;

  const fromCore = cores[currentIndex];
  const toCore = cores[(currentIndex + 1) % cores.length];

  if (frameInCycle < holdFrames) {
    return { prefix, suffix, coreChars: null, currentCore: fromCore, currentIndex, morphing: false };
  }

  // Morph phase — kun midtdelen
  const morphProgress = (frameInCycle - holdFrames) / morphFrames;
  const maxLen = Math.max(fromCore.length, toCore.length);
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const chars = [];
  for (let c = 0; c < maxLen; c++) {
    const charProgress = Math.max(0, Math.min(1, (morphProgress * maxLen * 1.8 - c) / 2.5));
    const fromChar = fromCore[c] || " ";
    const toChar = toCore[c] || " ";

    if (charProgress <= 0) {
      chars.push({ char: fromChar, settled: true });
    } else if (charProgress >= 1) {
      chars.push({ char: toChar, settled: true });
    } else {
      const seed = (frame * 7 + c * 13) % scrambleChars.length;
      chars.push({ char: scrambleChars[seed], settled: false });
    }
  }

  return { prefix, suffix, coreChars: chars, currentCore: toCore, currentIndex, morphing: true };
};

/**
 * Glass Showcase — nettside-bilde i tynn browser-ramme med glass-effekter
 * Samme ramme som ContentSlide (tynn #1a1a1a bezel) + subtil shimmer, lys-refleksjon og bevegelse
 */
const GlassShowcaseVisual = ({ frame, fps, config, accent, delay = 40, image }) => {
  const t = frame - delay;

  // Inngang: stiger opp med scale
  const enterSpring = spring({ frame: t, fps, config: { damping: 180, mass: 1.2 } });
  const enterY = interpolate(enterSpring, [0, 1], [80, 0]);
  const enterScale = interpolate(enterSpring, [0, 1], [0.92, 1]);

  // Subtil shimmer som feier over bildet etter inngang
  const shimmerX = interpolate(t, [40, 180], [-30, 130], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Svak pust etter landing (±1px)
  const breathe = t > 60 ? Math.sin((t - 60) * 0.025) * 1 : 0;

  // Glass-refleksjon som beveger seg sakte (lysstråle over rammen)
  const reflectY = interpolate(t, [50, 300], [-20, 120], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        top: 380,
        bottom: 0,
        left: "50%",
        transform: `translateX(-50%) translateY(${enterY + breathe}px) scale(${enterScale})`,
        opacity: enterSpring,
        width: 840,
      }}
    >
      {/* Browser-ramme — litt tykkere, glassmorphism-bakgrunn */}
      <div
        style={{
          borderRadius: "16px 16px 0 0",
          background: "linear-gradient(165deg, rgba(30,30,38,0.92), #1a1a1a 40%, rgba(26,26,26,0.95))",
          padding: "5px 5px 0",
          boxShadow: "0 -4px 50px rgba(0,0,0,0.15), 0 8px 30px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Glass shimmer — feier diagonalt over rammen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(-55deg, transparent ${shimmerX - 18}%, rgba(255,255,255,0.10) ${shimmerX - 4}%, rgba(255,255,255,0.14) ${shimmerX}%, rgba(255,255,255,0.10) ${shimmerX + 4}%, transparent ${shimmerX + 18}%)`,
            pointerEvents: "none",
            zIndex: 3,
            borderRadius: "16px 16px 0 0",
          }}
        />

        {/* Glass lys-refleksjon — sakte vertikal bevegelse */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `${reflectY}%`,
            height: 80,
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.05), transparent)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />

        {/* Glass-kant øverst (lys refleksjon langs toppen) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.08) 60%, transparent 90%)",
            pointerEvents: "none",
            zIndex: 4,
          }}
        />

        {/* Browser chrome (original lys stil) */}
        <div
          style={{
            height: 24,
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            gap: 4,
            borderRadius: "10px 10px 0 0",
            flexShrink: 0,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
          <div style={{ marginLeft: 8, flex: 1, height: 13, borderRadius: 4, background: "#e9ecef" }} />
        </div>

        {/* Screenshot */}
        <img
          src={staticFile(image || "showcase-elvemark.png")}
          style={{
            width: "100%",
            flex: 1,
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

/**
 * Website Compare — gammel nettside vs. blurret 2026-versjon
 * Koreografi: gammel stiger opp tungt → label → ny glir inn lett → label+shimmer → pust
 */
const WebsiteCompareMockup = ({ frame, fps, config, accent, delay = 40 }) => {
  const t = frame - delay;

  // --- Beat 1: Gammel nettside stiger opp (tung, treg) ---
  const oldSpring = spring({ frame: t, fps, config: { damping: 180, mass: 1.5 } });
  const oldY = interpolate(oldSpring, [0, 1], [70, 0]);
  const oldScale = interpolate(oldSpring, [0, 1], [0.88, 1]);
  const oldRotate = interpolate(oldSpring, [0, 1], [2.5, 0]);
  const oldShadowOpacity = interpolate(oldSpring, [0, 1], [0, 0.12]);

  // --- Beat 2: "I dag"-label (micro-bounce etter gammel har landet) ---
  const oldLabelSpring = spring({ frame: t - 28, fps, config: { damping: 120, mass: 0.6, stiffness: 300 } });
  const oldLabelScale = interpolate(oldLabelSpring, [0, 0.5, 0.75, 1], [0.5, 1.08, 0.97, 1], { extrapolateRight: "clamp" });

  // --- Beat 3: Ny nettside glir inn fra høyre (lett, rask) ---
  const newSpring = spring({ frame: t - 30, fps, config: { damping: 200, mass: 0.8 } });
  const newX = interpolate(newSpring, [0, 1], [80, 0]);
  const newScale = interpolate(newSpring, [0, 1], [0.92, 1]);
  const newShadowOpacity = interpolate(newSpring, [0, 1], [0, 0.10]);

  // --- Beat 4: "2026"-label med glow ---
  const newLabelSpring = spring({ frame: t - 55, fps, config: { damping: 120, mass: 0.6, stiffness: 300 } });
  const newLabelScale = interpolate(newLabelSpring, [0, 0.5, 0.75, 1], [0.5, 1.08, 0.97, 1], { extrapolateRight: "clamp" });

  // --- Shimmer: lys-sweep over frosted overlay ---
  const shimmerPos = interpolate(t, [55, 140], [-100, 200], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // --- Kontinuerlig pust på ny mockup (±2px, sakte sinus) ---
  const breathe = Math.sin((t - 60) * 0.04) * 2;
  const breatheActive = t > 70 ? 1 : 0;

  const browserW = 430;
  const browserH = 320;
  const chromeH = 26;

  const BrowserChrome = ({ url }) => (
    <div
      style={{
        height: chromeH,
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        gap: 4,
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#febc2e" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
      <div
        style={{
          marginLeft: 8, flex: 1, height: 14, borderRadius: 4, background: "#e9ecef",
          display: "flex", alignItems: "center", paddingLeft: 6,
        }}
      >
        <span style={{ fontSize: 6, fontFamily: "Inter, sans-serif", color: "#adb5bd" }}>{url}</span>
      </div>
    </div>
  );

  /* ---- Gammel nettside (sliten, datert) ---- */
  const OldSite = () => (
    <div style={{ width: "100%", height: `calc(100% - ${chromeH}px)`, background: "#f4f1eb", position: "relative", overflow: "hidden" }}>
      {/* Utdatert header */}
      <div style={{ height: 52, background: "linear-gradient(180deg, #1a3a5c, #0e2440)", display: "flex", alignItems: "center", padding: "0 14px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, fontFamily: "Times New Roman, serif", color: "#c8b862", fontWeight: 700, letterSpacing: 1 }}>BEDRIFT AS</span>
        <div style={{ display: "flex", gap: 10 }}>
          {["Hjem", "Om oss", "Tjenester", "Kontakt"].map((l) => (
            <span key={l} style={{ fontSize: 6.5, fontFamily: "Arial, sans-serif", color: "#8899aa" }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Gammel hero */}
      <div style={{ height: 80, background: "linear-gradient(135deg, #2c3e50, #4a6741)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <span style={{ fontSize: 13, fontFamily: "Times New Roman, serif", color: "#e8d888", fontWeight: 700, textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>Velkommen til oss!</span>
        <span style={{ fontSize: 7, fontFamily: "Arial, sans-serif", color: "#cccccc", marginTop: 4 }}>Vi leverer kvalitet siden 2003</span>
      </div>

      {/* To-kolonne layout */}
      <div style={{ display: "flex", padding: 10, gap: 8 }}>
        <div style={{ width: 100, display: "flex", flexDirection: "column", gap: 4 }}>
          {["Våre tjenester", "Priser", "Referanser", "FAQ", "Nyheter"].map((l) => (
            <div key={l} style={{ background: "#ddd8ce", borderRadius: 2, padding: "4px 6px", fontSize: 6, fontFamily: "Arial, sans-serif", color: "#444", border: "1px solid #c5c0b5" }}>{l}</div>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ background: "#fff", border: "1px solid #d0c9bc", borderRadius: 2, padding: 8 }}>
            <div style={{ width: "80%", height: 5, background: "#bbb5a8", borderRadius: 1 }} />
            <div style={{ width: "100%", height: 3, background: "#d8d2c6", borderRadius: 1, marginTop: 4 }} />
            <div style={{ width: "90%", height: 3, background: "#d8d2c6", borderRadius: 1, marginTop: 2 }} />
            <div style={{ width: "60%", height: 3, background: "#d8d2c6", borderRadius: 1, marginTop: 2 }} />
          </div>
          <div style={{ background: "#fff", border: "1px solid #d0c9bc", borderRadius: 2, padding: 8 }}>
            <div style={{ width: "70%", height: 5, background: "#bbb5a8", borderRadius: 1 }} />
            <div style={{ width: "100%", height: 3, background: "#d8d2c6", borderRadius: 1, marginTop: 4 }} />
            <div style={{ width: "75%", height: 3, background: "#d8d2c6", borderRadius: 1, marginTop: 2 }} />
          </div>
        </div>
      </div>

      {/* Slitt scan-line overlay */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(200,190,170,0.06) 3px, rgba(200,190,170,0.06) 4px)", pointerEvents: "none" }} />
    </div>
  );

  /* ---- Ny nettside (lys, moderne, nøytral — bak frosted blur) ---- */
  const NewSite = () => (
    <div style={{ width: "100%", height: `calc(100% - ${chromeH}px)`, background: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Lys header */}
      <div style={{ height: 30, background: "#fff", borderBottom: "1px solid #f0f0f0", display: "flex", alignItems: "center", padding: "0 12px", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, background: "#1a1a1a" }} />
          <div style={{ width: 42, height: 4, background: "#222", borderRadius: 2 }} />
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {[30, 26, 22, 34].map((w, i) => (
            <div key={i} style={{ width: w, height: 3, background: "#bbb", borderRadius: 2 }} />
          ))}
          <div style={{ width: 48, height: 16, borderRadius: 4, background: "#1a1a1a", marginLeft: 4 }} />
        </div>
      </div>

      {/* Hero — tekst + bilde-placeholder */}
      <div style={{ display: "flex", padding: "14px 12px 8px", gap: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ width: 50, height: 4, background: "#ccc", borderRadius: 8, marginBottom: 2 }} />
          <div style={{ width: "95%", height: 9, background: "#1a1a1a", borderRadius: 2 }} />
          <div style={{ width: "75%", height: 9, background: "#1a1a1a", borderRadius: 2 }} />
          <div style={{ width: "85%", height: 4, background: "#999", borderRadius: 2, marginTop: 2 }} />
          <div style={{ width: "60%", height: 4, background: "#bbb", borderRadius: 2 }} />
          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
            <div style={{ width: 60, height: 20, borderRadius: 5, background: "#1a1a1a" }} />
            <div style={{ width: 60, height: 20, borderRadius: 5, border: "1.5px solid #ccc" }} />
          </div>
        </div>
        <div style={{ width: 155, height: 95, borderRadius: 8, background: "#f5f5f5", border: "1px solid #eee" }} />
      </div>

      {/* Feature-kort rad */}
      <div style={{ display: "flex", gap: 5, padding: "0 12px" }}>
        {[1, 2, 3].map((n) => (
          <div key={n} style={{ flex: 1, height: 48, borderRadius: 6, background: "#f8f8f8", border: "1px solid #eee", padding: 6, display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: n === 2 ? "#1a1a1a" : "#f0f0f0" }} />
            <div style={{ width: "70%", height: 3, background: "#d0d0d0", borderRadius: 2 }} />
            <div style={{ width: "90%", height: 3, background: "#e5e5e5", borderRadius: 2 }} />
          </div>
        ))}
      </div>

      {/* Stats-rad */}
      <div style={{ display: "flex", gap: 5, padding: "6px 12px 0" }}>
        {[1, 2, 3].map((_, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", padding: "4px 0" }}>
            <div style={{ width: "50%", height: 8, background: "#1a1a1a", borderRadius: 2, margin: "0 auto" }} />
            <div style={{ width: "60%", height: 3, background: "#ddd", borderRadius: 2, margin: "3px auto 0" }} />
          </div>
        ))}
      </div>

      {/* CTA-banner */}
      <div style={{ margin: "6px 12px 0", height: 28, borderRadius: 6, background: "#f8f8f8", border: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ width: 90, height: 4, background: "#1a1a1a", borderRadius: 2 }} />
          <div style={{ width: 60, height: 3, background: "#999", borderRadius: 2 }} />
        </div>
        <div style={{ width: 45, height: 16, borderRadius: 4, background: "#1a1a1a" }} />
      </div>

      {/* Testimonials */}
      <div style={{ display: "flex", gap: 5, padding: "6px 12px 0" }}>
        {[1, 2].map((n) => (
          <div key={n} style={{ flex: 1, height: 30, borderRadius: 6, background: "#fafafa", border: "1px solid #eee", padding: "4px 7px", display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e5e5e5", flexShrink: 0 }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ width: "75%", height: 3, background: "#ccc", borderRadius: 2 }} />
              <div style={{ width: "50%", height: 3, background: "#ddd", borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Frosted blur overlay */}
      <div
        style={{
          position: "absolute", inset: 0, top: chromeH,
          backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8,
        }}
      >
        {/* Shimmer sweep */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(-55deg, transparent ${shimmerPos - 30}%, rgba(255,255,255,0.3) ${shimmerPos}%, transparent ${shimmerPos + 30}%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(0,0,0,0.06), rgba(0,0,0,0.12))",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 24px rgba(0,0,0,0.06)",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="#555" strokeWidth="1.8" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="#555" strokeWidth="1.8" />
          </svg>
        </div>
        <span style={{ fontSize: 13, fontFamily: "'Clash Display', sans-serif", fontWeight: 500, color: "#555", opacity: 0.9 }}>
          Skriv inn URL for å se
        </span>
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 30,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 28,
        alignItems: "flex-end",
      }}
    >
      {/* === Venstre — gammel side (tung inngang) === */}
      <div
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
          opacity: oldSpring,
          transform: `translateY(${oldY}px) scale(${oldScale}) rotate(${oldRotate}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <div
          style={{
            width: browserW, height: browserH, borderRadius: 12,
            background: "#1a1a1a", padding: 5,
            boxShadow: `0 ${12 * oldSpring}px ${40 * oldSpring}px rgba(0,0,0,${oldShadowOpacity})`,
            overflow: "hidden",
          }}
        >
          <div style={{ width: "100%", height: "100%", borderRadius: 8, overflow: "hidden", position: "relative" }}>
            <BrowserChrome url="www.dinbedrift.no" />
            <OldSite />
          </div>
        </div>
        {/* Label med micro-bounce */}
        <div
          style={{
            background: "rgba(0,0,0,0.05)", border: "1.5px solid rgba(0,0,0,0.10)",
            borderRadius: 10, padding: "8px 24px",
            fontSize: 24, fontFamily: "'Clash Display', sans-serif", fontWeight: 500, color: "#666",
            opacity: oldLabelSpring,
            transform: `scale(${oldLabelScale})`,
          }}
        >
          I dag
        </div>
      </div>

      {/* === Høyre — ny side (lett inngang + pust) === */}
      <div
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
          opacity: newSpring,
          transform: `translateX(${newX}px) translateY(${breathe * breatheActive}px) scale(${newScale})`,
        }}
      >
        <div
          style={{
            width: browserW, height: browserH, borderRadius: 12,
            background: "#1a1a1a", padding: 5,
            boxShadow: `0 ${12 * newSpring}px ${40 * newSpring}px ${accent}${Math.round(newShadowOpacity * 255).toString(16).padStart(2, "0")}, 0 4px 12px rgba(0,0,0,0.06)`,
            overflow: "hidden",
          }}
        >
          <div style={{ width: "100%", height: "100%", borderRadius: 8, overflow: "hidden", position: "relative" }}>
            <BrowserChrome url="www.dinbedrift.no — 2026" />
            <NewSite />
          </div>
        </div>
        {/* Label med micro-bounce + glow */}
        <div
          style={{
            background: `linear-gradient(135deg, ${accent}15, ${accent}25)`,
            border: `1.5px solid ${accent}35`,
            borderRadius: 10, padding: "8px 24px",
            fontSize: 24, fontFamily: "'Clash Display', sans-serif", fontWeight: 500, color: accent,
            opacity: newLabelSpring,
            transform: `scale(${newLabelScale})`,
            boxShadow: `0 0 ${16 * newLabelSpring}px ${accent}20`,
          }}
        >
          2026
        </div>
      </div>
    </div>
  );
};

/**
 * Counter Contrast — to store tall som teller opp mot hverandre
 */
const CounterContrastVisual = ({ frame, fps, config, accent, delay = 40 }) => {
  const enter = spring({ frame: frame - delay, fps, config: { damping: 200, mass: 1.2 } });
  const enterY = interpolate(enter, [0, 1], [50, 0]);
  const t = frame - delay;

  // Count up over ~120 frames (2 sekunder)
  const countProgress = Math.max(0, interpolate(t, [20, 140], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  // Eased count
  const eased = 1 - Math.pow(1 - countProgress, 3);
  const highVal = (eased * 14.6).toFixed(1);
  const lowVal = (eased * 1.7).toFixed(1);

  // "vs." fades in between the two numbers
  const vsOpacity = Math.max(0, interpolate(t, [60, 90], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  // Labels fade in after counters
  const labelOpacity = Math.max(0, interpolate(t, [130, 160], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));
  const labelY = interpolate(labelOpacity, [0, 1], [10, 0]);

  const f = "'Satoshi', sans-serif";

  // "Sjanse for å bli kunde" label fades in first
  const contextOpacity = Math.max(0, interpolate(t, [0, 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }));

  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: `translate(-50%, -50%) translateY(${enterY}px)`,
        opacity: enter,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      {/* Kontekst-label over tallene */}
      <div
        style={{
          fontSize: 28,
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 500,
          color: "rgba(0,0,0,0.4)",
          marginBottom: 24,
          opacity: contextOpacity,
          letterSpacing: 1,
        }}
      >
        Sjanse for at de blir kunde:
      </div>

      {/* Tallene side om side */}
      <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
        {/* Høy verdi — Funnet på Google */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 140,
              fontFamily: f,
              fontWeight: 400,
              color: accent,
              lineHeight: 1,
            }}
          >
            {highVal}%
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 500,
              color: accent,
              marginTop: 16,
              opacity: labelOpacity,
              transform: `translateY(${labelY}px)`,
            }}
          >
            Funnet på Google
          </div>
        </div>

        {/* vs. */}
        <div
          style={{
            fontSize: 38,
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 500,
            color: "rgba(0,0,0,0.25)",
            opacity: vsOpacity,
            marginTop: -30,
          }}
        >
          vs.
        </div>

        {/* Lav verdi — Ringt opp */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 140,
              fontFamily: f,
              fontWeight: 400,
              color: "rgba(0,0,0,0.3)",
              lineHeight: 1,
            }}
          >
            {lowVal}%
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 500,
              color: "rgba(0,0,0,0.3)",
              marginTop: 16,
              opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
          }}
        >
          Ringt opp
        </div>
      </div>
      </div>
    </div>
  );
};

export const HookSlide = ({
  lines = [],
  subtext,
  steps,
  visual,
  centerText = false,
  titleExitFrame,
  visualDelay,
  textTop: textTopOverride,
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  timing: timingName = defaults.hookTiming,
  format = defaults.format,
  leafId = "leafHook",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;
  const timing = hookTimings[timingName] || hookTimings.standard;
  const config = springConfigs.smooth;

  // Pre-beregn cycle-data for linjer med cycle-prop
  const cycleData = lines.map((line) => {
    if (!line.cycle || line.cycle.length <= 1) return null;
    return useCycleText(frame, fps, line.cycle, 110, 25);
  });

  const hasVisual = visual && visual.type;
  const isPortrait = format === "portrait";
  const textTopDefault = hasVisual ? (isPortrait ? 280 : 220) : 200;
  const textTop = textTopOverride || textTopDefault;

  // Pre-beregn animasjoner for linjene — jevn kaskade med blur
  const lineAnims = lines.map((_, i) => {
    const delay = i * 18; // jevnt 18-frame mellomrom (~0.3s)
    const progress = spring({ frame: frame - delay, fps, config: { damping: 200, mass: 1.2 } });
    const translateY = interpolate(progress, [0, 1], [20, 0]);
    const blur = interpolate(progress, [0, 0.7, 1], [8, 2, 0], { extrapolateRight: "clamp" });
    return { opacity: progress, translateY, blur };
  });

  const subtextDelay = lines.length * 18 + 20; // starter etter siste linje + litt pause
  const subtextAnim = spring({ frame: frame - subtextDelay, fps, config: { damping: 200, mass: 1.2 } });
  const subtextY = interpolate(subtextAnim, [0, 1], [15, 0]);
  const subtextBlur = interpolate(subtextAnim, [0, 0.7, 1], [6, 1, 0], { extrapolateRight: "clamp" });

  const arrowAnim = spring({ frame: frame - timing.arrow, fps, config });
  const arrowX = interpolate(arrowAnim, [0, 1], [-20, 0]);

  const gradPos = interpolate(frame, [0, 360], [0, 200], { extrapolateRight: "clamp" });

  // Title exit animation (slides up and fades out)
  const titleExitProgress = titleExitFrame
    ? spring({ frame: frame - titleExitFrame, fps, config })
    : 0;
  const titleExitY = titleExitFrame ? interpolate(titleExitProgress, [0, 1], [0, -300]) : 0;
  const titleExitOpacity = titleExitFrame ? interpolate(titleExitProgress, [0, 1], [1, 0]) : 1;

  const mockupDelay = visualDelay != null ? visualDelay : timing.visual;
  const accent = theme.accent || gradient.colors?.[0] || "#6366F1";

  return (
    <BaseLayout
      theme={themeName}
      format={format}
      leafId={leafId}
    >
      {/* Tekstlinjer */}
      <div
        style={{
          position: "absolute",
          ...(centerText
            ? { top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center" }
            : { top: textTop }),
          left: spacing.margin,
          right: spacing.margin,
          textAlign: "center",
          color: theme.text,
          ...(titleExitFrame ? { transform: `translateY(${titleExitY}px)`, opacity: titleExitOpacity } : {}),
        }}
      >
        {lines.map((line, i) => {
          const anim = lineAnims[i];
          const fontSize = line.fontSize || 62;
          const isGradient = line.style === "gradient";
          const isMixed = line.style === "mixed";
          const cycle = cycleData[i];

          // Render morph-core med statisk prefix/suffix
          const renderCycleText = (styleProps) => {
            const coreText = cycle.currentCore || "";
            const coreContent = cycle.coreChars ? (
              <span style={{ display: "inline-flex" }}>
                {cycle.coreChars.map((ch, ci) => (
                  <span
                    key={ci}
                    style={{
                      display: "inline-block",
                      opacity: ch.settled ? 1 : 0.5,
                    }}
                  >
                    {ch.char}
                  </span>
                ))}
              </span>
            ) : coreText;

            return (
              <span style={styleProps}>
                {cycle.prefix}{coreContent}{cycle.suffix}
              </span>
            );
          };

          return (
            <div
              key={i}
              style={{
                fontSize,
                fontWeight: line.fontWeight || 500,
                lineHeight: 1.3,
                marginTop: i > 0 ? 2 : 0,
                opacity: anim.opacity,
                transform: `translateY(${anim.translateY}px)`,
                filter: `blur(${anim.blur}px)`,
              }}
            >
              {cycle ? (
                renderCycleText(isGradient ? {
                  background: line.cycleGradients
                    ? line.cycleGradients[cycle.currentIndex] || gradient.css
                    : gradient.css,
                  backgroundSize: "200% 100%",
                  backgroundPosition: `${gradPos}% 0%`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: line.fontSize || fontSize,
                  fontWeight: line.fontWeight || 600,
                } : {})
              ) : isGradient ? (
                <span
                  style={{
                    background: gradient.css,
                    backgroundSize: "200% 100%",
                    backgroundPosition: `${gradPos}% 0%`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: line.fontSize || fontSize,
                    fontWeight: line.fontWeight || 600,
                  }}
                >
                  {line.text}
                </span>
              ) : isMixed && line.gradientWord ? (
                <>
                  <span
                    style={{
                      background: gradient.css,
                      backgroundSize: "200% 100%",
                      backgroundPosition: `${gradPos}% 0%`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 600,
                    }}
                  >
                    {line.gradientWord}
                  </span>
                  {" "}{line.text.replace(line.gradientWord, "").trim()}
                </>
              ) : (
                line.text
              )}
            </div>
          );
        })}

        {/* Undertekst */}
        {subtext && (
          <div
            style={{
              marginTop: 32,
              opacity: subtextAnim,
              transform: `translateY(${subtextY}px)`,
              filter: `blur(${subtextBlur}px)`,
            }}
          >
            <span
              style={{
                fontSize: 46,
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 500,
                lineHeight: 1.6,
                color: theme.text,
                background: `${accent}12`,
                padding: "10px 28px",
                borderRadius: 16,
              }}
            >
              {subtext}
            </span>
          </div>
        )}

        {/* Nummererte steg */}
        {steps && steps.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginTop: 30,
              alignItems: "center",
              opacity: interpolate(subtextAnim, [0, 1], [0, 1]),
              transform: `translateY(${subtextY}px)`,
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  background: "#fff",
                  borderRadius: 14,
                  padding: "20px 32px",
                  boxShadow: "0 4px 20px rgba(27,42,74,0.06)",
                  width: 640,
                }}
              >
                <div
                  style={{
                    minWidth: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: gradient.css,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{
                    fontSize: 32,
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 400,
                    color: theme.text,
                  }}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Visuell effekt */}
      {visual?.type === "browser" && (
        <BrowserMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "utkast" && (
        <UtkastFormMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
          isPortrait={isPortrait}
        />
      )}
      {visual?.type === "analytics" && (
        <AnalyticsDashboardMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "google" && (
        <GoogleSearchMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "gratisUtkast" && (
        <GratisUtkastMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "crawlFlow" && (
        <CrawlFlowDiagram
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "searchConsole" && (
        <SearchConsoleMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "factorGrid" && (
        <FactorGridVisual
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "seoReport" && (
        <SeoReportMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "searchVolume" && (
        <SearchVolumeVisual
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "websiteCompare" && (
        <WebsiteCompareMockup
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}
      {visual?.type === "glassShowcase" && (
        <GlassShowcaseVisual
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
          image={visual.image}
        />
      )}
      {visual?.type === "counterContrast" && (
        <CounterContrastVisual
          frame={frame}
          fps={fps}
          config={config}
          accent={accent}
          delay={mockupDelay}
        />
      )}

      {/* Pil */}
      <div
        style={{
          position: "absolute",
          bottom: hasVisual ? 30 : 100,
          left: "50%",
          transform: `translateX(-50%) translateX(${arrowX}px)${titleExitFrame ? ` translateY(${titleExitY}px)` : ""}`,
          opacity: titleExitFrame ? arrowAnim * titleExitOpacity : arrowAnim,
        }}
      >
        <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
          <path
            d="M4 14h36M30 4l10 10-10 10"
            stroke={theme.arrow}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </BaseLayout>
  );
};
