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
import { themes } from "./lib/colors";

const t = themes.boldPurple;

export const BoldAccentTemplate = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Animasjoner ---
  const titleIn = spring({ frame, fps, config: { damping: 200 } });
  const titleY = interpolate(titleIn, [0, 1], [25, 0]);

  const bulletsIn = spring({ frame: frame - 20, fps, config: { damping: 200 } });
  const bulletsY = interpolate(bulletsIn, [0, 1], [20, 0]);

  const ctaSectionIn = spring({ frame: frame - 35, fps, config: { damping: 200 } });
  const ctaY = interpolate(ctaSectionIn, [0, 1], [30, 0]);

  const cardsIn = spring({ frame: frame - 50, fps, config: { damping: 200 } });
  const cardsY = interpolate(cardsIn, [0, 1], [25, 0]);

  // Dekorative elementer — subtle pulsing
  const starScale = interpolate(frame, [0, 120, 240], [1, 1.15, 1]);

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          transform: "scale(2)",
          transformOrigin: "top left",
          fontFamily: fontFamily.headline,
          overflow: "hidden",
        }}
      >
        {/* Bakgrunn */}
        <div style={{ position: "absolute", inset: 0, background: t.bg }} />

        {/* ===== DEKORATIVE ELEMENTER ===== */}
        {/* Stor stjerne — øvre venstre */}
        <svg
          width="55"
          height="55"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            top: 18,
            left: 70,
            opacity: 0.9,
            transform: `scale(${starScale})`,
          }}
        >
          <path
            d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8L8 14 2 9.2h7.6z"
            fill={t.accent}
          />
        </svg>
        {/* Liten stjerne */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          style={{ position: "absolute", top: 55, left: 150, opacity: 0.5 }}
        >
          <path
            d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8L8 14 2 9.2h7.6z"
            fill={t.accent}
          />
        </svg>
        {/* Dekorativ bue med prikker */}
        <svg
          width="130"
          height="70"
          viewBox="0 0 130 70"
          style={{ position: "absolute", top: 8, right: 110, opacity: 0.65 }}
        >
          <path
            d="M8 60 Q65 -10 122 60"
            stroke={t.accent}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="122" cy="60" r="5" fill={t.accent} />
          <circle cx="8" cy="60" r="5" fill={t.accent} />
        </svg>
        {/* Rosa prikk */}
        <div
          style={{
            position: "absolute",
            top: 25,
            right: 55,
            width: 35,
            height: 35,
            background: t.pink,
            borderRadius: "50%",
            opacity: 0.8,
          }}
        />
        {/* Neon-grønn mini-prikk */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 38,
            width: 10,
            height: 10,
            background: t.cta,
            borderRadius: "50%",
            opacity: 0.6,
          }}
        />

        {/* ===== LOGO ===== */}
        <div
          style={{
            position: "absolute",
            top: 90,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <img
            src={staticFile("logo.png")}
            style={{ width: 20, height: 20 }}
          />
          <span
            style={{
              fontFamily: fontFamily.logo,
              fontSize: 12,
              color: t.text,
              letterSpacing: "0.5px",
            }}
          >
            mediegruppen
          </span>
        </div>

        {/* ===== HOVEDTITTEL ===== */}
        <div
          style={{
            position: "absolute",
            top: 130,
            left: 50,
            right: 50,
            textAlign: "center",
            opacity: titleIn,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.12,
              color: t.text,
              letterSpacing: "-0.5px",
            }}
          >
            Nettsiden din{" "}
            <span style={{ color: t.accent }}>koster</span>
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.12,
              color: t.accent,
              letterSpacing: "-0.5px",
            }}
          >
            deg opptil 40% av
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.12,
              color: t.text,
              letterSpacing: "-0.5px",
            }}
          >
            kundene dine
          </div>
        </div>

        {/* ===== KULEPUNKTER ===== */}
        <div
          style={{
            position: "absolute",
            top: 340,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            fontFamily: fontFamily.body,
            fontSize: 13,
            color: t.textMuted,
            opacity: bulletsIn,
            transform: `translateY(${bulletsY}px)`,
          }}
        >
          <span>✕ Treg lasting</span>
          <span>✕ Ikke mobiltilpasset</span>
          <span>✕ Utdatert design</span>
        </div>

        {/* ===== LILLA CTA-SEKSJON ===== */}
        <div
          style={{
            position: "absolute",
            top: 440,
            left: 0,
            right: 0,
            height: 200,
            background: t.accentGradient,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            opacity: ctaSectionIn,
            transform: `translateY(${ctaY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.3,
              padding: "0 70px",
            }}
          >
            Vi viser deg nøyaktig hva
            <br />
            som må fikses — helt gratis
          </div>
          <div
            style={{
              background: t.cta,
              color: t.text,
              fontFamily: fontFamily.body,
              fontSize: 13,
              fontWeight: 600,
              padding: "9px 26px",
              borderRadius: 30,
              letterSpacing: "0.3px",
            }}
          >
            Få gratis analyse →
          </div>
        </div>

        {/* ===== 3 KORT-GRID ===== */}
        <div
          style={{
            position: "absolute",
            top: 660,
            left: 28,
            right: 28,
            bottom: 28,
            display: "flex",
            gap: 10,
            opacity: cardsIn,
            transform: `translateY(${cardsY}px)`,
          }}
        >
          {/* Kort 1 — Stat */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: t.accent,
                lineHeight: 1,
              }}
            >
              3s
            </div>
            <div
              style={{
                fontFamily: fontFamily.body,
                fontSize: 9,
                color: t.textMuted,
                textAlign: "center",
                padding: "0 8px",
                lineHeight: 1.3,
              }}
            >
              Max lastetid
              <br />
              før kunden forsvinner
            </div>
          </div>

          {/* Kort 2 — Stat */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: t.accent,
                lineHeight: 1,
              }}
            >
              73%
            </div>
            <div
              style={{
                fontFamily: fontFamily.body,
                fontSize: 9,
                color: t.textMuted,
                textAlign: "center",
                padding: "0 8px",
                lineHeight: 1.3,
              }}
            >
              Googler lokale
              <br />
              tjenester på mobil
            </div>
          </div>

          {/* Kort 3 — Stat */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: t.accent,
                lineHeight: 1,
              }}
            >
              2x
            </div>
            <div
              style={{
                fontFamily: fontFamily.body,
                fontSize: 9,
                color: t.textMuted,
                textAlign: "center",
                padding: "0 8px",
                lineHeight: 1.3,
              }}
            >
              Flere henvendelser
              <br />
              med rask nettside
            </div>
          </div>
        </div>

        {/* ===== BLAD-DEKORASJON ===== */}
        <svg
          width="1800"
          height="1800"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            bottom: -900,
            right: -900,
            opacity: 0.05,
            transform: "rotate(-30deg)",
            pointerEvents: "none",
          }}
        >
          <defs>
            <radialGradient id="leafBoldAccent" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor={t.leaf} stopOpacity="0" />
              <stop offset="70%" stopColor={t.leaf} stopOpacity="0" />
              <stop offset="100%" stopColor={t.leaf} stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafBoldAccent)"
          />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
