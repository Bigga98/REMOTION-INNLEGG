// ============================================
// IPHONE PELS — Kodet iPhone-mockup for Instagram
// ============================================
// Hundesalong / grooming-app «Pels»
// Varm terrakotta-palett, mørkt tema
// Format: 1080×1080 (Instagram square)

import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadJost } from "@remotion/google-fonts/Jost";
import { loadFont as loadRaleway } from "@remotion/google-fonts/Raleway";
import { loadFont as loadGrotesk } from "@remotion/google-fonts/FamiljenGrotesk";

const { fontFamily: cormorant } = loadFont();
const { fontFamily: jost } = loadJost();
const { fontFamily: raleway } = loadRaleway();
const { fontFamily: grotesk } = loadGrotesk();

export const IphonePels = ({ imageSrc = "pels-hund.png" }) => {
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
          radial-gradient(ellipse at 50% 0%, rgba(200,185,165,0.55) 0%, transparent 58%),
          radial-gradient(ellipse at 95% 100%, rgba(170,158,138,0.35) 0%, transparent 50%),
          linear-gradient(160deg, #BEB8AE 0%, #B0AA9E 50%, #A49E92 100%)
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
        fontSize: 580,
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: -22,
        whiteSpace: "nowrap",
        background: "linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.16) 55%, rgba(255,255,255,0) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        userSelect: "none",
        zIndex: 0,
      }}>Pels</div>

      {/* ── Phone scene ── */}
      <div style={{
        position: "relative",
        zIndex: 1,
        padding: `0 ${Math.round(6 * SCALE)}px`,
        filter: `drop-shadow(0 ${Math.round(30 * SCALE)}px ${Math.round(70 * SCALE)}px rgba(0,0,0,0.42)) drop-shadow(0 ${Math.round(60 * SCALE)}px ${Math.round(130 * SCALE)}px rgba(0,0,0,0.22))`,
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

          {/* Screen */}
          <div style={{
            position: "absolute", inset: BEZEL, borderRadius: SCREEN_R,
            background: `linear-gradient(to bottom, #3d2210 0%, #2a1608 40%, #1a0e06 100%)`,
            overflow: "hidden", display: "flex", flexDirection: "column",
          }}>
            {/* Glass reflection */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(148deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 35%, transparent 60%)",
              borderRadius: SCREEN_R, pointerEvents: "none", zIndex: 99,
            }} />

            {/* Status bar */}
            <div style={{
              position: "relative", zIndex: 10,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: `${Math.round(16 * SCALE)}px ${Math.round(18 * SCALE)}px 0`,
              flexShrink: 0,
            }}>
              <span style={{ fontSize: Math.round(15 * SCALE), fontWeight: 600, color: "#fff", letterSpacing: -0.3, fontFamily: "-apple-system, sans-serif" }}>9:41</span>
              <div style={{ width: Math.round(136 * SCALE) }} />
              <div style={{ display: "flex", alignItems: "center", gap: Math.round(6 * SCALE) }}>
                <svg width={Math.round(17 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 17 12" fill="white">
                  <rect x="0" y="8" width="3" height="4" rx="1" opacity="0.35"/>
                  <rect x="4.5" y="5.5" width="3" height="6.5" rx="1" opacity="0.6"/>
                  <rect x="9" y="3" width="3" height="9" rx="1" opacity="0.8"/>
                  <rect x="13.5" y="0" width="3" height="12" rx="1"/>
                </svg>
                <svg width={Math.round(16 * SCALE)} height={Math.round(12 * SCALE)} viewBox="0 0 16 12" fill="none">
                  <circle cx="8" cy="10.5" r="1.5" fill="white"/>
                  <path d="M4.1 7.3A5.5 5.5 0 0 1 11.9 7.3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M1.3 4.5A9.3 9.3 0 0 1 14.7 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                <svg width={Math.round(26 * SCALE)} height={Math.round(13 * SCALE)} viewBox="0 0 26 13" fill="none">
                  <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="white" strokeOpacity="0.35"/>
                  <rect x="2" y="2" width="18" height="9" rx="2" fill="white"/>
                  <path d="M24 4.5v4a2 2 0 0 0 0-4z" fill="white" fillOpacity="0.4"/>
                </svg>
              </div>
            </div>

            {/* App content */}
            <div style={{
              flex: 1, display: "flex", flexDirection: "column",
              padding: `${Math.round(16 * SCALE)}px ${Math.round(12 * SCALE)}px ${Math.round(26 * SCALE)}px`,
              overflow: "hidden", minHeight: 0,
            }}>

              {/* Brand */}
              <div style={{
                fontFamily: cormorant, fontSize: Math.round(88 * SCALE), fontWeight: 900,
                color: "#F5E8D0", lineHeight: 0.88,
                letterSpacing: Math.round(-3 * SCALE), flexShrink: 0,
              }}>Pels</div>

              {/* Tagline */}
              <div style={{
                fontFamily: cormorant, fontSize: Math.round(25 * SCALE), fontWeight: 300,
                color: "rgba(245,232,208,0.60)", lineHeight: 1.35,
                marginTop: Math.round(20 * SCALE), letterSpacing: -0.2, flexShrink: 0,
              }}>
                Stell og kjærlighet—for din beste venn
              </div>

              {/* Body */}
              <div style={{
                fontFamily: jost, fontSize: Math.round(12.5 * SCALE), fontWeight: 300,
                color: "rgba(245,232,208,0.38)", lineHeight: 1.7,
                marginTop: Math.round(16 * SCALE), letterSpacing: 0.15, flexShrink: 0,
              }}>
                Profesjonell hundestell rett rundt hjørnet.<br />
                Bestill time på under ett minutt.
              </div>

              {/* Social proof */}
              <div style={{
                display: "flex", alignItems: "center", gap: Math.round(8 * SCALE),
                marginTop: Math.round(12 * SCALE), flexShrink: 0,
              }}>
                {/* Avatars */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  {["#6b3d20", "#7d4a28", "#8e5530"].map((bg, i) => (
                    <div key={i} style={{
                      width: Math.round(22 * SCALE), height: Math.round(22 * SCALE),
                      borderRadius: "50%", background: bg,
                      border: `${Math.round(1.5 * SCALE)}px solid #1a0e06`,
                      marginLeft: i === 0 ? 0 : Math.round(-7 * SCALE),
                    }} />
                  ))}
                </div>
                {/* Stjerner + antall */}
                <div style={{ display: "flex", alignItems: "center", gap: Math.round(5 * SCALE) }}>
                  <div style={{ display: "flex", gap: Math.round(2 * SCALE) }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width={Math.round(10 * SCALE)} height={Math.round(10 * SCALE)} viewBox="0 0 10 10" fill="#c9a040">
                        <path d="M5 1l1.12 2.27L8.5 3.64l-1.75 1.7.41 2.41L5 6.5 2.84 7.75l.41-2.41L1.5 3.64l2.38-.37z"/>
                      </svg>
                    ))}
                  </div>
                  <span style={{
                    fontFamily: jost, fontSize: Math.round(11.5 * SCALE), fontWeight: 600,
                    color: "#F5E8D0",
                  }}>4.9</span>
                  <span style={{
                    fontFamily: jost, fontSize: Math.round(11 * SCALE), fontWeight: 400,
                    color: "rgba(245,232,208,0.40)",
                  }}>· 180 kunder</span>
                </div>
              </div>

              {/* CTA-rad */}
              <div style={{
                display: "flex", alignItems: "center", gap: Math.round(8 * SCALE),
                marginTop: Math.round(10 * SCALE), flexShrink: 0,
              }}>
                {/* Primær */}
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "rgba(26,14,6,0.90)",
                  border: "1px solid rgba(245,232,208,0.14)",
                  borderRadius: 999,
                  padding: `${Math.round(7 * SCALE)}px ${Math.round(7 * SCALE)}px ${Math.round(7 * SCALE)}px ${Math.round(18 * SCALE)}px`,
                  gap: Math.round(12 * SCALE), flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: raleway, fontSize: Math.round(13 * SCALE), fontWeight: 600,
                    color: "#F5E8D0", letterSpacing: 0.4,
                  }}>Book time</span>
                  <div style={{
                    width: Math.round(28 * SCALE), height: Math.round(28 * SCALE),
                    borderRadius: "50%", background: "#F5E8D0",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width={Math.round(13 * SCALE)} height={Math.round(13 * SCALE)} viewBox="0 0 13 13" fill="none">
                      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="#1a0e06" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Sekundær */}
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "transparent",
                  border: `${Math.round(2 * SCALE)}px solid rgba(245,232,208,0.42)`,
                  borderRadius: 999,
                  padding: `${Math.round(13 * SCALE)}px ${Math.round(16 * SCALE)}px`,
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: raleway, fontSize: Math.round(13 * SCALE), fontWeight: 500,
                    color: "rgba(245,232,208,0.62)", letterSpacing: 0.3,
                  }}>Se tjenester</span>
                </div>
              </div>

              {/* Bildekarusell */}
              {(() => {
                const CW  = Math.round(210 * SCALE);
                const CH  = Math.round(240 * SCALE);
                const GAP = Math.round(9 * SCALE);
                const SW  = Math.round(371 * SCALE);
                const CX  = Math.round((SW - CW) / 2);

                return (
                  <div style={{
                    marginTop: Math.round(14 * SCALE),
                    marginLeft: -Math.round(20 * SCALE),
                    marginRight: -Math.round(20 * SCALE),
                    height: CH,
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    {[
                      "pels-hund-2.png",
                      "pels-hund-1.png",
                      "pels-hund-3.png",
                    ].map((src, i) => (
                      <div key={i} style={{
                        position: "absolute",
                        left: CX + (i - 1) * (CW + GAP),
                        top: 0,
                        width: CW,
                        height: CH,
                        borderRadius: Math.round(20 * SCALE),
                        overflow: "hidden",
                        boxShadow: i === 1
                          ? "0 8px 28px rgba(0,0,0,0.55)"
                          : "0 4px 14px rgba(0,0,0,0.3)",
                        opacity: i === 1 ? 1 : 0.72,
                        background: "#1e0e04",
                      }}>
                        <Img
                          src={staticFile(`bilder/${src}`)}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                );
              })()}

              {/* Behandlingsrader */}
              {[
                {
                  title: "Vask & tørk", sub: "Fra 30 min",
                  icon: (s) => (
                    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#F5E8D0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2c0 0-6 6-6 10a6 6 0 0 0 12 0c0-4-6-10-6-10z"/>
                      <path d="M9 16c.5 1 1.5 2 3 2"/>
                    </svg>
                  ),
                },
                {
                  title: "Full klipping", sub: "Fra 60 min",
                  icon: (s) => (
                    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#F5E8D0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="3"/>
                      <circle cx="6" cy="18" r="3"/>
                      <path d="M20 4L8.12 15.88"/>
                      <path d="M14.47 14.48L20 20"/>
                      <path d="M8.12 8.12L12 12"/>
                    </svg>
                  ),
                },
                {
                  title: "Spa-pakke", sub: "Fra 90 min",
                  icon: (s) => (
                    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#F5E8D0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22V12"/>
                      <path d="M12 12C12 12 8 10 8 6a4 4 0 0 1 8 0c0 4-4 6-4 6z"/>
                      <path d="M12 12c0 0-4 1-6 4"/>
                      <path d="M12 12c0 0 4 1 6 4"/>
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center",
                  gap: Math.round(14 * SCALE),
                  marginTop: Math.round(14 * SCALE),
                  height: Math.round(58 * SCALE),
                  borderRadius: Math.round(14 * SCALE),
                  background: "rgba(245,232,208,0.055)",
                  border: "1px solid rgba(245,232,208,0.08)",
                  padding: `0 ${Math.round(16 * SCALE)}px`,
                  flexShrink: 0,
                  overflow: "hidden",
                }}>
                  {/* Ikon */}
                  <div style={{
                    width: Math.round(36 * SCALE),
                    height: Math.round(36 * SCALE),
                    borderRadius: Math.round(9 * SCALE),
                    background: "rgba(245,232,208,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon(Math.round(18 * SCALE))}
                  </div>
                  {/* Tekst */}
                  <div>
                    <div style={{
                      fontFamily: grotesk,
                      fontSize: Math.round(16 * SCALE),
                      fontWeight: 300,
                      color: "#F5E8D0",
                      lineHeight: 1,
                      letterSpacing: -0.2,
                    }}>{item.title}</div>
                    <div style={{
                      fontFamily: jost,
                      fontSize: Math.round(10.5 * SCALE),
                      fontWeight: 300,
                      color: "rgba(245,232,208,0.38)",
                      marginTop: Math.round(3 * SCALE),
                      letterSpacing: 0.2,
                    }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
