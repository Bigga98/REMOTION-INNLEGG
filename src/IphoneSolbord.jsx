// ============================================
// IPHONE SOLBORD — Kodet iPhone-mockup for Instagram
// ============================================
// Gjenskaper hero-capsules-restaurant designet direkte i Remotion.
// Ingen screenshot — alt er React/CSS.

import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadJost } from "@remotion/google-fonts/Jost";

const { fontFamily: cormorant } = loadFont();
const { fontFamily: jost } = loadJost();

export const IphoneSolbord = ({ imageSrc = "iphone-solbord-mat.png" }) => {
  // Canvas: 1080×1080 (Instagram square)
  // Phone: 393×852 skalert til å passe
  const SCALE = 0.95;
  const PW = Math.round(393 * SCALE);
  const PH = Math.round(852 * SCALE);

  // Bezel proportions
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
      {/* ── Bakgrunnstekst: "Solbord" bak telefonen ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: cormorant,
          fontSize: 420,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -16,
          whiteSpace: "nowrap",
          background: "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.18) 55%, rgba(255,255,255,0) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          userSelect: "none",
          zIndex: 0,
          marginTop: 20,
        }}
      >
        Solbord
      </div>

      {/* ── Phone scene ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: `0 ${Math.round(6 * SCALE)}px`,
          filter: `drop-shadow(0 ${Math.round(20 * SCALE)}px ${Math.round(60 * SCALE)}px rgba(0,0,0,0.28)) drop-shadow(0 ${Math.round(50 * SCALE)}px ${Math.round(120 * SCALE)}px rgba(0,0,0,0.18))`,
        }}
      >
        {/* ── Side buttons ── */}
        {[
          // Silent switch
          { side: "left", top: Math.round(112 * SCALE), h: Math.round(30 * SCALE) },
          // Vol up
          { side: "left", top: Math.round(168 * SCALE), h: Math.round(62 * SCALE) },
          // Vol down
          { side: "left", top: Math.round(246 * SCALE), h: Math.round(62 * SCALE) },
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
          {/* ── Dynamic Island ── */}
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
              background: `linear-gradient(to bottom, #1B1A16 0%, #1B1A16 80%, #2a2823 100%)`,
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
                background:
                  "linear-gradient(148deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.01) 35%, transparent 60%)",
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
              <span
                style={{
                  fontSize: Math.round(15 * SCALE),
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: -0.3,
                  fontFamily: "-apple-system, sans-serif",
                }}
              >
                9:41
              </span>
              {/* Spacer for dynamic island */}
              <div style={{ width: Math.round(136 * SCALE) }} />
              {/* Icons */}
              <div style={{ display: "flex", alignItems: "center", gap: Math.round(6 * SCALE) }}>
                {/* Signal */}
                <svg width={Math.round(17 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 17 12" fill="white">
                  <rect x="0"    y="8"   width="3" height="4"   rx="1" opacity="0.35"/>
                  <rect x="4.5"  y="5.5" width="3" height="6.5" rx="1" opacity="0.6"/>
                  <rect x="9"    y="3"   width="3" height="9"   rx="1" opacity="0.8"/>
                  <rect x="13.5" y="0"   width="3" height="12"  rx="1"/>
                </svg>
                {/* WiFi */}
                <svg width={Math.round(16 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 16 12" fill="none">
                  <circle cx="8" cy="10.5" r="1.5" fill="white"/>
                  <path d="M4.1 7.3A5.5 5.5 0 0 1 11.9 7.3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M1.3 4.5A9.3 9.3 0 0 1 14.7 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                {/* Battery */}
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
                  color: "#F0EAE0",
                  lineHeight: 0.88,
                  letterSpacing: Math.round(-3 * SCALE),
                  flexShrink: 0,
                }}
              >
                Solbord
              </div>

              {/* Tagline */}
              <div
                style={{
                  fontFamily: cormorant,
                  fontSize: Math.round(25 * SCALE),
                  fontWeight: 300,
                  color: "rgba(240,234,224,0.62)",
                  lineHeight: 1.35,
                  marginTop: Math.round(20 * SCALE),
                  letterSpacing: -0.2,
                  flexShrink: 0,
                }}
              >
                Nærmere naturen—
                <br />
                nærmere deg selv
              </div>

              {/* Body */}
              <div
                style={{
                  fontFamily: jost,
                  fontSize: Math.round(12.5 * SCALE),
                  fontWeight: 300,
                  color: "rgba(240,234,224,0.4)",
                  lineHeight: 1.7,
                  marginTop: Math.round(22 * SCALE),
                  letterSpacing: 0.15,
                  flexShrink: 0,
                }}
              >
                Opplev det nordiske kjøkkenet i sin reneste form,
                <br />
                tilberedt med råvarer fra fjord og fjell.
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
                  background: "#0D0906",
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
