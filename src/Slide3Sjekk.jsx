import React from "react";
import {
  AbsoluteFill,
  staticFile,
  interpolate,
} from "remotion";
import { clashDisplay, panchang, fontFamily } from "./lib/fonts";
import { themes, googleGradients, glass } from "./lib/colors";
import {
  glassmorphism,
  frostedVignette,
  imageFilter,
  overlays,
  imageWrapper,
} from "./lib/styles";
import {
  spacing,
  logo,
  images,
  zIndex,
  imagePositions,
} from "./lib/layout";

// --- Intern komponent (statisk — ingen animasjoner) ---
const Slide3Sjekk = ({ theme, gradient, leafId }) => {
  // Statiske glass-vinkler (midtpunkter fra original animasjon)
  const angle1 = 200;
  const angle2 = 280;

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
        }}
      >
      {/* Bakgrunn */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: theme.bg,
        }}
      />

      {/* Hvit fade i bunnen */}
      <div style={overlays.whiteFade} />

      {/* Blad-dekorasjon */}
      <svg
        width="1800"
        height="1800"
        viewBox="0 0 24 24"
        style={{
          position: "absolute",
          bottom: -900,
          right: -900,
          opacity: 0.12,
          transform: "rotate(-30deg)",
          pointerEvents: "none",
          zIndex: zIndex.background,
        }}
      >
        <defs>
          <radialGradient id={leafId} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="70%" stopColor={theme.leaf} stopOpacity="0" />
            <stop offset="100%" stopColor={theme.leaf} stopOpacity="1" />
          </radialGradient>
        </defs>
        <path
          d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
          fill={`url(#${leafId})`}
          stroke={theme.leaf}
          strokeWidth="0.06"
        />
      </svg>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: logo.top,
          left: logo.left,
          zIndex: zIndex.ui,
          display: "flex",
          alignItems: "center",
          gap: spacing.gap,
        }}
      >
        <img
          src={staticFile("logo.png")}
          style={{
            width: logo.iconSize,
            height: logo.iconSize,
            objectFit: "contain",
          }}
        />
        <span
          style={{
            fontFamily: fontFamily.logo,
            fontSize: logo.fontSize,
            fontWeight: logo.fontWeight,
            letterSpacing: logo.letterSpacing,
            color: theme.text,
          }}
        >
          Mediegruppen
        </span>
      </div>

      {/* Tekst */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: spacing.margin,
          right: spacing.margin,
          textAlign: "center",
          color: theme.text,
        }}
      >
        {/* Spørsmål-blokk */}
        <div
          style={{
            fontSize: 46,
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          Er tittelen relevant?
          <br />
          Ser det ut som spam?
        </div>

        {/* Divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28, marginBottom: 28 }}>
          <div style={{ width: 120, height: 2, background: gradient.css, borderRadius: 1 }} />
        </div>

        {/* Hovedbudskap */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.25,
            marginTop: 36,
          }}
        >
          Du blir{" "}
          <span
            style={{
              background: gradient.css,
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            aldri
          </span>
          {" "}vist til noen.
        </div>

        {/* Punchline */}
        <div
          style={{
            opacity: 0.55,
            fontSize: 36,
            fontWeight: 500,
            lineHeight: 1.4,
            marginTop: 16,
          }}
        >
          Uansett hvor bra resten er.
        </div>
      </div>

      {/* Mockup 1 (bak) — Spam-tittel (dårlig eksempel) */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: `translateX(${imagePositions.back.translateX}) rotate(${imagePositions.back.rotate}deg)`,
          zIndex: zIndex.backImage,
          ...glassmorphism(angle1),
        }}
      >
        <div style={{ ...imageWrapper, width: 680, background: "#fff", padding: 28 }}>
          {/* Status-linje */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#D4806B" }} />
            <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#D4806B", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Flagget som spam
            </span>
          </div>
          {/* Tittel-felt */}
          <div style={{ background: "#FDF0EC", borderRadius: 10, padding: "14px 18px", border: "1px solid rgba(212,128,107,0.2)", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontFamily: fontFamily.body, color: "#9ca3af", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Title tag
            </div>
            <div style={{ fontSize: 16, fontFamily: fontFamily.body, color: "#202124", fontWeight: 600, lineHeight: 1.4 }}>
              BILLIGST BEST CRM GRATIS!! Kjøp Nå Tilbud 2026 Beste Pris Garanti!!!
            </div>
          </div>
          {/* Problemer */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Overdreven bruk av store bokstaver", "Spam-signaler (!!!, GRATIS)", "Ingen reell verdi for brukeren"].map((issue) => (
              <div key={issue} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontFamily: fontFamily.body, color: "#6b7280" }}>
                <span style={{ color: "#D4806B", fontSize: 14 }}>&times;</span>
                {issue}
              </div>
            ))}
          </div>
          <div style={frostedVignette} />
        </div>
      </div>

      {/* Mockup 2 (front) — God tittel (godt eksempel) */}
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: "50%",
          transform: `translateX(${imagePositions.front.translateX}) rotate(${imagePositions.front.rotate}deg)`,
          zIndex: zIndex.frontImage,
          ...glassmorphism(angle2, "alt"),
        }}
      >
        <div style={{ ...imageWrapper, width: 680, background: "#fff", padding: 28 }}>
          {/* Status-linje */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#5BA07E" }} />
            <span style={{ fontSize: 12, fontFamily: fontFamily.body, color: "#5BA07E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Relevant tittel
            </span>
          </div>
          {/* Tittel-felt */}
          <div style={{ background: "#EDF5F0", borderRadius: 10, padding: "14px 18px", border: "1px solid rgba(91,160,126,0.2)", marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontFamily: fontFamily.body, color: "#9ca3af", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Title tag
            </div>
            <div style={{ fontSize: 16, fontFamily: fontFamily.body, color: "#202124", fontWeight: 600, lineHeight: 1.4 }}>
              Beste CRM-system for små bedrifter (2026)
            </div>
          </div>
          {/* Godkjent-punkter */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Beskrivende og relevant", "Naturlig språk, ingen spam", "Gir verdi — brukeren vet hva de får"].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontFamily: fontFamily.body, color: "#6b7280" }}>
                <span style={{ color: "#5BA07E", fontSize: 14 }}>&check;</span>
                {point}
              </div>
            ))}
          </div>
          <div style={frostedVignette} />
        </div>
      </div>
      </div>
    </AbsoluteFill>
  );
};

// --- Eksporterte varianter ---
export const Slide3SjekkGray = () => (
  <Slide3Sjekk
    theme={themes.gray}
    gradient={googleGradients.coral}
    leafId="leafS3Gray"
  />
);

export const Slide3SjekkGray2 = () => (
  <Slide3Sjekk
    theme={themes.gray2}
    gradient={googleGradients.teal}
    leafId="leafS3Gray2"
  />
);
