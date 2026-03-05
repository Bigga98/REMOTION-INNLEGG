// ============================================
// IPHONE VILLMARK — Kodet iPhone-mockup for Instagram
// ============================================
// Utleie av mikrohytter / glamping i villmarken.

import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadJost } from "@remotion/google-fonts/Jost";
import { loadFont as loadRaleway } from "@remotion/google-fonts/Raleway";

const { fontFamily: cormorant } = loadFont();
const { fontFamily: jost } = loadJost();
const { fontFamily: raleway } = loadRaleway();

export const IphoneVillmark = ({ imageSrc = "villmark-hytte.png" }) => {
  const SCALE = 0.95;
  const PW = Math.round(393 * SCALE);
  const PH = Math.round(852 * SCALE);
  const BEZEL = Math.round(11 * SCALE);
  const FRAME_R = Math.round(54 * SCALE);
  const SCREEN_R = Math.round(44 * SCALE);

  return (
    <AbsoluteFill
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(210,195,170,0.6) 0%, transparent 60%),
          radial-gradient(ellipse at 100% 100%, rgba(180,165,140,0.3) 0%, transparent 50%),
          linear-gradient(160deg, #C8BBA8 0%, #BDB09C 50%, #B3A690 100%)
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bakgrunnstekst */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: cormorant,
        fontSize: 600,
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: -24,
        whiteSpace: "nowrap",
        background: "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.18) 55%, rgba(255,255,255,0) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        userSelect: "none",
        zIndex: 0,
      }}>Ly</div>

      {/* ── Phone scene ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: `0 ${Math.round(6 * SCALE)}px`,
          filter: `drop-shadow(0 ${Math.round(30 * SCALE)}px ${Math.round(70 * SCALE)}px rgba(0,0,0,0.45)) drop-shadow(0 ${Math.round(60 * SCALE)}px ${Math.round(140 * SCALE)}px rgba(0,0,0,0.25))`,
        }}
      >
        {/* ── Side buttons ── */}
        {[
          { top: Math.round(112 * SCALE), h: Math.round(30 * SCALE) },
          { top: Math.round(168 * SCALE), h: Math.round(62 * SCALE) },
          { top: Math.round(246 * SCALE), h: Math.round(62 * SCALE) },
        ].map((btn, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              top: btn.top,
              width: Math.round(5 * SCALE),
              height: btn.h,
              borderRadius: `${Math.round(3 * SCALE)}px 0 0 ${Math.round(3 * SCALE)}px`,
              background: "linear-gradient(to bottom, #252525, #2e2e2e 30%, #1a1a1a 50%, #2e2e2e 70%, #252525)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            }}
          />
        ))}

        {/* Power button */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: Math.round(196 * SCALE),
            width: Math.round(5 * SCALE),
            height: Math.round(82 * SCALE),
            borderRadius: `0 ${Math.round(3 * SCALE)}px ${Math.round(3 * SCALE)}px 0`,
            background: "linear-gradient(to bottom, #252525, #2e2e2e 30%, #1a1a1a 50%, #2e2e2e 70%, #252525)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
          }}
        />

        {/* ── Phone body ── */}
        <div
          style={{
            position: "relative",
            width: PW,
            height: PH,
            borderRadius: FRAME_R,
            background:
              "linear-gradient(96deg, #202020 0%, #303030 6%, #1a1a1a 14%, #262626 30%, #1e1e1e 50%, #262626 70%, #1a1a1a 86%, #303030 94%, #202020 100%)",
            boxShadow: `
              inset 0 0 0 1px rgba(255,255,255,0.13),
              inset 0 1px 0 rgba(255,255,255,0.09),
              inset 0 -1px 0 rgba(0,0,0,0.5),
              0 0 0 1px rgba(0,0,0,0.6)
            `,
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: Math.round(12 * SCALE),
              left: "50%",
              transform: "translateX(-50%)",
              width: Math.round(126 * SCALE),
              height: Math.round(36 * SCALE),
              background: "#000",
              borderRadius: Math.round(20 * SCALE),
              zIndex: 50,
            }}
          />

          {/* ── Screen ── */}
          <div
            style={{
              position: "absolute",
              inset: BEZEL,
              borderRadius: SCREEN_R,
              background: `linear-gradient(to bottom, #121710 0%, #121710 80%, #1a2018 100%)`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Glass reflection */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(148deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 35%, transparent 60%)",
                borderRadius: SCREEN_R,
                pointerEvents: "none",
                zIndex: 99,
              }}
            />

            {/* ── Status bar ── */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: `${Math.round(16 * SCALE)}px ${Math.round(18 * SCALE)}px 0`,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: Math.round(15 * SCALE), fontWeight: 600, color: "#fff", letterSpacing: -0.3, fontFamily: "-apple-system, sans-serif" }}>
                9:41
              </span>
              <div style={{ width: Math.round(136 * SCALE) }} />
              <div style={{ display: "flex", alignItems: "center", gap: Math.round(6 * SCALE) }}>
                <svg width={Math.round(17 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 17 12" fill="white">
                  <rect x="0"    y="8"   width="3" height="4"   rx="1" opacity="0.35"/>
                  <rect x="4.5"  y="5.5" width="3" height="6.5" rx="1" opacity="0.6"/>
                  <rect x="9"    y="3"   width="3" height="9"   rx="1" opacity="0.8"/>
                  <rect x="13.5" y="0"   width="3" height="12"  rx="1"/>
                </svg>
                <svg width={Math.round(16 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 16 12" fill="none">
                  <circle cx="8" cy="10.5" r="1.5" fill="white"/>
                  <path d="M4.1 7.3A5.5 5.5 0 0 1 11.9 7.3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M1.3 4.5A9.3 9.3 0 0 1 14.7 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <svg width={Math.round(26 * SCALE)} height={Math.round(13 * SCALE)} viewBox="0 0 26 13" fill="none">
                  <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="white" strokeOpacity="0.35"/>
                  <rect x="2"   y="2"   width="18" height="9"  rx="2" fill="white"/>
                  <path d="M24 4.5v4a2 2 0 0 0 0-4z" fill="white" fillOpacity="0.4"/>
                </svg>
              </div>
            </div>

            {/* ── App content ── */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: `${Math.round(16 * SCALE)}px ${Math.round(20 * SCALE)}px ${Math.round(26 * SCALE)}px`,
                overflow: "hidden",
                minHeight: 0,
              }}
            >
              {/* Brand name */}
              <div
                style={{
                  fontFamily: cormorant,
                  fontSize: Math.round(88 * SCALE),
                  fontWeight: 900,
                  color: "#EAF0E8",
                  lineHeight: 0.88,
                  letterSpacing: Math.round(-3 * SCALE),
                  flexShrink: 0,
                }}
              >
                Ly
              </div>

              {/* Tagline */}
              <div
                style={{
                  fontFamily: cormorant,
                  fontSize: Math.round(25 * SCALE),
                  fontWeight: 300,
                  color: "rgba(220,235,215,0.62)",
                  lineHeight: 1.35,
                  marginTop: Math.round(20 * SCALE),
                  letterSpacing: -0.2,
                  flexShrink: 0,
                }}
              >
                Finn din plass—i stillheten
              </div>

              {/* Body */}
              <div
                style={{
                  fontFamily: jost,
                  fontSize: Math.round(12.5 * SCALE),
                  fontWeight: 300,
                  color: "rgba(220,235,215,0.4)",
                  lineHeight: 1.7,
                  marginTop: Math.round(16 * SCALE),
                  letterSpacing: 0.15,
                  flexShrink: 0,
                }}
              >
                Lei en liten hytte langt fra alt.<br />
                Bare naturen, stillheten og deg.
              </div>

              {/* CTA-rad */}
              <div style={{
                display: "flex", alignItems: "center", gap: Math.round(8 * SCALE),
                marginTop: Math.round(14 * SCALE), flexShrink: 0,
              }}>
                {/* Primær */}
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "rgba(8,12,8,0.88)",
                  border: "1px solid rgba(220,235,215,0.12)",
                  borderRadius: 999,
                  padding: `${Math.round(7 * SCALE)}px ${Math.round(7 * SCALE)}px ${Math.round(7 * SCALE)}px ${Math.round(18 * SCALE)}px`,
                  gap: Math.round(12 * SCALE), flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: raleway, fontSize: Math.round(13 * SCALE), fontWeight: 600,
                    color: "#EAF0E8", letterSpacing: 0.4,
                  }}>Lei en hytte</span>
                  <div style={{
                    width: Math.round(28 * SCALE), height: Math.round(28 * SCALE),
                    borderRadius: "50%", background: "#EAF0E8",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width={Math.round(13 * SCALE)} height={Math.round(13 * SCALE)} viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="#080c08" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Sekundær — border pill */}
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "transparent",
                  border: `${Math.round(2 * SCALE)}px solid rgba(220,235,215,0.45)`,
                  borderRadius: 999,
                  padding: `${Math.round(13 * SCALE)}px ${Math.round(16 * SCALE)}px`,
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: raleway, fontSize: Math.round(13 * SCALE), fontWeight: 500,
                    color: "rgba(220,235,215,0.65)", letterSpacing: 0.3,
                  }}>Se hytteplasseringer</span>
                </div>
              </div>

              {/* Image card */}
              <div
                style={{
                  flex: 1,
                  marginTop: Math.round(20 * SCALE),
                  borderRadius: Math.round(26 * SCALE),
                  overflow: "hidden",
                  minHeight: 0,
                  position: "relative",
                  background: "#080f08",
                }}
              >
                <Img
                  src={staticFile(`bilder/${imageSrc}`)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
