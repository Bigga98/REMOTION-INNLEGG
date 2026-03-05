// ============================================
// IPHONE TANNLEGE — Kodet iPhone-mockup for Instagram
// ============================================
// Premium tannklinikk-app "Blanc". Lyst tema — skiller seg fra Solbord/Villmark.
// Format: 1080×1080 (Instagram square)

import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadDMSans } from "@remotion/google-fonts/DMSans";
import { loadFont as loadRaleway } from "@remotion/google-fonts/Raleway";

const { fontFamily: cormorant } = loadFont();
const { fontFamily: dmSans } = loadDMSans();
const { fontFamily: raleway } = loadRaleway();

export const IphoneTannlege = ({ imageSrc = "tannlege.png" }) => {
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
          radial-gradient(ellipse at 50% 0%, rgba(230,242,250,0.9) 0%, transparent 60%),
          radial-gradient(ellipse at 90% 110%, rgba(190,215,235,0.5) 0%, transparent 50%),
          linear-gradient(160deg, #d8e8f2 0%, #cde1ee 50%, #c4daea 100%)
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
        fontSize: 480,
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: -18,
        whiteSpace: "nowrap",
        background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.22) 55%, rgba(255,255,255,0) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        userSelect: "none",
        zIndex: 0,
      }}>Blanc</div>

      {/* Phone scene */}
      <div style={{
        position: "relative", zIndex: 1,
        padding: `0 ${Math.round(6 * SCALE)}px`,
        filter: `drop-shadow(0 ${Math.round(20 * SCALE)}px ${Math.round(60 * SCALE)}px rgba(0,0,0,0.18)) drop-shadow(0 ${Math.round(50 * SCALE)}px ${Math.round(120 * SCALE)}px rgba(0,0,0,0.12))`,
      }}>
        {/* Side buttons */}
        {[
          { top: Math.round(112 * SCALE), h: Math.round(30 * SCALE) },
          { top: Math.round(168 * SCALE), h: Math.round(62 * SCALE) },
          { top: Math.round(246 * SCALE), h: Math.round(62 * SCALE) },
        ].map((btn, i) => (
          <div key={i} style={{
            position: "absolute", left: 0, top: btn.top,
            width: Math.round(5 * SCALE), height: btn.h,
            borderRadius: `${Math.round(3 * SCALE)}px 0 0 ${Math.round(3 * SCALE)}px`,
            background: "linear-gradient(to bottom, #252525, #2e2e2e 30%, #1a1a1a 50%, #2e2e2e 70%, #252525)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
          }} />
        ))}

        {/* Power button */}
        <div style={{
          position: "absolute", right: 0, top: Math.round(196 * SCALE),
          width: Math.round(5 * SCALE), height: Math.round(82 * SCALE),
          borderRadius: `0 ${Math.round(3 * SCALE)}px ${Math.round(3 * SCALE)}px 0`,
          background: "linear-gradient(to bottom, #252525, #2e2e2e 30%, #1a1a1a 50%, #2e2e2e 70%, #252525)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
        }} />

        {/* Phone body */}
        <div style={{
          position: "relative", width: PW, height: PH, borderRadius: FRAME_R,
          background: "linear-gradient(96deg, #202020 0%, #303030 6%, #1a1a1a 14%, #262626 30%, #1e1e1e 50%, #262626 70%, #1a1a1a 86%, #303030 94%, #202020 100%)",
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.13), inset 0 1px 0 rgba(255,255,255,0.09), inset 0 -1px 0 rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.6)`,
        }}>
          {/* Dynamic Island */}
          <div style={{
            position: "absolute", top: Math.round(12 * SCALE), left: "50%",
            transform: "translateX(-50%)",
            width: Math.round(126 * SCALE), height: Math.round(36 * SCALE),
            background: "#000", borderRadius: Math.round(20 * SCALE), zIndex: 50,
          }} />

          {/* Screen — lyst tema */}
          <div style={{
            position: "absolute", inset: BEZEL, borderRadius: SCREEN_R,
            background: "linear-gradient(to bottom, #f6f9fc 0%, #e2eef6 45%, #c4daea 100%)",
            overflow: "hidden", display: "flex", flexDirection: "column",
          }}>
            {/* Glass reflection */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(148deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 35%, transparent 60%)",
              borderRadius: SCREEN_R, pointerEvents: "none", zIndex: 99,
            }} />

            {/* Status bar — mørke ikoner på lys bakgrunn */}
            <div style={{
              position: "relative", zIndex: 10, display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: `${Math.round(16 * SCALE)}px ${Math.round(18 * SCALE)}px 0`,
              flexShrink: 0,
            }}>
              <span style={{ fontSize: Math.round(15 * SCALE), fontWeight: 600, color: "#1c2b3a", letterSpacing: -0.3, fontFamily: "-apple-system, sans-serif" }}>9:41</span>
              <div style={{ width: Math.round(136 * SCALE) }} />
              <div style={{ display: "flex", alignItems: "center", gap: Math.round(6 * SCALE) }}>
                <svg width={Math.round(17 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 17 12" fill="#1c2b3a">
                  <rect x="0" y="8" width="3" height="4" rx="1" opacity="0.35"/>
                  <rect x="4.5" y="5.5" width="3" height="6.5" rx="1" opacity="0.6"/>
                  <rect x="9" y="3" width="3" height="9" rx="1" opacity="0.8"/>
                  <rect x="13.5" y="0" width="3" height="12" rx="1"/>
                </svg>
                <svg width={Math.round(16 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 16 12" fill="none">
                  <circle cx="8" cy="10.5" r="1.5" fill="#1c2b3a"/>
                  <path d="M4.1 7.3A5.5 5.5 0 0 1 11.9 7.3" stroke="#1c2b3a" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M1.3 4.5A9.3 9.3 0 0 1 14.7 4.5" stroke="#1c2b3a" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <svg width={Math.round(26 * SCALE)} height={Math.round(13 * SCALE)} viewBox="0 0 26 13" fill="none">
                  <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="#1c2b3a" strokeOpacity="0.35"/>
                  <rect x="2" y="2" width="18" height="9" rx="2" fill="#1c2b3a"/>
                  <path d="M24 4.5v4a2 2 0 0 0 0-4z" fill="#1c2b3a" fillOpacity="0.4"/>
                </svg>
              </div>
            </div>

            {/* App content */}
            <div style={{
              flex: 1, display: "flex", flexDirection: "column",
              padding: `${Math.round(62 * SCALE)}px ${Math.round(20 * SCALE)}px ${Math.round(26 * SCALE)}px`,
              overflow: "hidden", minHeight: 0,
            }}>
              {/* Brand */}
              <div style={{
                fontFamily: cormorant, fontSize: Math.round(88 * SCALE), fontWeight: 900,
                color: "#1c2b3a", lineHeight: 0.88, letterSpacing: Math.round(-3 * SCALE), flexShrink: 0,
              }}>Blanc</div>

              {/* Tagline */}
              <div style={{
                fontFamily: cormorant, fontSize: Math.round(25 * SCALE), fontWeight: 300,
                color: "rgba(28,43,58,0.58)", lineHeight: 1.35,
                marginTop: Math.round(6 * SCALE), letterSpacing: -0.2, flexShrink: 0,
              }}>Smil med selvtillit</div>

              {/* Body */}
              <div style={{
                fontFamily: dmSans, fontSize: Math.round(12.5 * SCALE), fontWeight: 400,
                color: "rgba(28,43,58,0.42)", lineHeight: 1.7,
                marginTop: Math.round(4 * SCALE), letterSpacing: 0.1, flexShrink: 0,
              }}>
                Moderne tannbehandling i trygge hender.<br />
                For deg som vil stole på smilet sitt.
              </div>

              {/* Social proof */}
              <div style={{
                display: "flex", alignItems: "center", gap: Math.round(8 * SCALE),
                marginTop: Math.round(5 * SCALE), flexShrink: 0,
              }}>
                {/* Avatars */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  {["#b8cdd8", "#a8c0cc", "#98b4c2"].map((bg, i) => (
                    <div key={i} style={{
                      width: Math.round(22 * SCALE), height: Math.round(22 * SCALE),
                      borderRadius: "50%", background: bg,
                      border: `${Math.round(1.5 * SCALE)}px solid #f6f9fc`,
                      marginLeft: i === 0 ? 0 : Math.round(-7 * SCALE),
                      overflow: "hidden",
                    }}>
                      <Img
                        src={staticFile(`bilder/${imageSrc}`)}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                      />
                    </div>
                  ))}
                </div>
                {/* Stars + count */}
                <div style={{ display: "flex", alignItems: "center", gap: Math.round(5 * SCALE) }}>
                  <div style={{ display: "flex", gap: Math.round(2 * SCALE) }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width={Math.round(10 * SCALE)} height={Math.round(10 * SCALE)} viewBox="0 0 10 10" fill="#c9a040">
                        <path d="M5 1l1.12 2.27L8.5 3.64l-1.75 1.7.41 2.41L5 6.5 2.84 7.75l.41-2.41L1.5 3.64l2.38-.37z"/>
                      </svg>
                    ))}
                  </div>
                  <span style={{
                    fontFamily: dmSans, fontSize: Math.round(11.5 * SCALE), fontWeight: 600,
                    color: "#1c2b3a", letterSpacing: 0,
                  }}>4.9</span>
                  <span style={{
                    fontFamily: dmSans, fontSize: Math.round(11 * SCALE), fontWeight: 400,
                    color: "rgba(28,43,58,0.4)",
                  }}>· 340 pasienter</span>
                </div>
              </div>

              {/* CTA-rad */}
              <div style={{
                display: "flex", alignItems: "center", gap: Math.round(8 * SCALE),
                marginTop: Math.round(7 * SCALE), flexShrink: 0,
              }}>
                {/* Primær — fylt mørk pill */}
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "#1c2b3a", borderRadius: 999,
                  padding: `${Math.round(7 * SCALE)}px ${Math.round(7 * SCALE)}px ${Math.round(7 * SCALE)}px ${Math.round(18 * SCALE)}px`,
                  gap: Math.round(10 * SCALE), flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: raleway, fontSize: Math.round(13 * SCALE), fontWeight: 600,
                    color: "#f6f9fc", letterSpacing: 0.4,
                  }}>Bestill time</span>
                  <div style={{
                    width: Math.round(28 * SCALE), height: Math.round(28 * SCALE),
                    borderRadius: "50%", background: "#f6f9fc",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width={Math.round(13 * SCALE)} height={Math.round(13 * SCALE)} viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="#1c2b3a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Sekundær — border pill */}
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "transparent",
                  border: `${Math.round(2 * SCALE)}px solid rgba(28,43,58,0.55)`,
                  borderRadius: 999,
                  padding: `${Math.round(13 * SCALE)}px ${Math.round(18 * SCALE)}px`,
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: raleway, fontSize: Math.round(13 * SCALE), fontWeight: 500,
                    color: "rgba(28,43,58,0.7)", letterSpacing: 0.3,
                  }}>Se behandlinger</span>
                </div>
              </div>

              {/* Image card */}
              <div style={{
                flex: 1, marginTop: Math.round(20 * SCALE),
                borderRadius: Math.round(26 * SCALE), overflow: "hidden",
                minHeight: 0, position: "relative", background: "#c4daea",
              }}>
                <Img
                  src={staticFile(`bilder/${imageSrc}`)}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
