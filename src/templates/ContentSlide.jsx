// ============================================
// CONTENT SLIDE — Tittel + brødtekst
// ============================================
// Statisk slide for karuseller. Viser tittel og innhold.

import React from "react";
import { staticFile } from "remotion";
import { BaseLayout } from "../layouts/BaseLayout";
import { CenteredLayout } from "../layouts/CenteredLayout";
import { themes, googleGradients } from "../lib/colors";
import { spacing } from "../lib/layout";
import { fontFamily } from "../lib/fonts";
import { defaults } from "../config/defaults";

const SocialProofVisual = ({ accentColor }) => (
  <div
    style={{
      position: "absolute",
      bottom: 60,
      left: 60,
      right: 60,
      background: "#fff",
      borderRadius: 20,
      boxShadow: "0 8px 40px rgba(27,42,74,0.10)",
      padding: "28px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}
  >
    {/* Hotel header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: 22, fontWeight: 600, color: "#1B2A4A", fontFamily: "Inter, sans-serif" }}>
          Hotel Grand Oslo
        </div>
        <div style={{ fontSize: 16, color: "#888", marginTop: 4, fontFamily: "Inter, sans-serif" }}>
          Sentrum · Frokost inkludert
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: 13, color: "#888", fontFamily: "Inter, sans-serif", textDecoration: "line-through" }}>kr 1 890</div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#1B2A4A", fontFamily: "Inter, sans-serif" }}>kr 1 249</div>
        <div style={{ fontSize: 13, color: "#888", fontFamily: "Inter, sans-serif" }}>per natt</div>
      </div>
    </div>

    {/* Divider */}
    <div style={{ height: 1, background: "#f0eeee" }} />

    {/* Social proof badges */}
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "#FFF4F2", borderRadius: 10, padding: "10px 14px",
        border: "1px solid #FFD4C8",
      }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: "#C4400A", fontFamily: "Inter, sans-serif" }}>
          Bare 1 rom igjen til denne prisen!
        </span>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "#F2F6FF", borderRadius: 10, padding: "10px 14px",
        border: "1px solid #C8D8FF",
      }}>
        <span style={{ fontSize: 18, color: "#2A4AB0", fontFamily: "Inter, sans-serif" }}>
          5 andre ser på dette rommet akkurat nå
        </span>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "#F2FBF6", borderRadius: 10, padding: "10px 14px",
        border: "1px solid #B8E8CC",
      }}>
        <span style={{ fontSize: 18, color: "#1A7A45", fontFamily: "Inter, sans-serif" }}>
          Sist booket for 2 timer siden
        </span>
      </div>
    </div>

    {/* CTA button */}
    <div style={{
      background: accentColor,
      borderRadius: 12,
      padding: "16px",
      textAlign: "center",
      fontSize: 20,
      fontWeight: 700,
      color: "#fff",
      fontFamily: "Inter, sans-serif",
      letterSpacing: "0.01em",
    }}>
      Book nå — Gratis avbestilling
    </div>
  </div>
);

/**
 * @param {Object} props
 * @param {string} props.title - Overskrift
 * @param {string} [props.titleStyle] - "normal" | "gradient"
 * @param {string} [props.subtitle] - Undertekst under tittel
 * @param {string|string[]} [props.body] - Brødtekst (streng eller array av avsnitt)
 * @param {Array<{label: string, text: string}>} [props.items] - Liste-punkter med bold label
 * @param {string} [props.footnote] - Liten tekst nederst
 * @param {string} [props.image] - Bilde-filnavn fra public/ (vises i browser-ramme)
 * @param {Object} [props.visual] - Inline illustrasjon: { type: "socialProof" }
 */
export const ContentSlide = ({
  title,
  titleStyle = "gradient",
  subtitle,
  body,
  items,
  footnote,
  image,
  topOffset,
  titleSize,
  visual,
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  format = defaults.format,
  leafId = "leafContent",
}) => {
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;
  const accentColor = gradient.colors?.[0] || theme.accent || "#6366F1";
  const bodyArray = body ? (Array.isArray(body) ? body : [body]) : [];
  const hasItems = items && items.length > 0;

  return (
    <BaseLayout theme={themeName} format={format} leafId={leafId}>
      <CenteredLayout
        theme={themeName}
        gradient={gradientName}
        title={title}
        titleStyle={titleStyle}
        subtitle={subtitle}
        topOffset={topOffset}
        titleSize={titleSize}
      >
        {/* Brødtekst (sentrert, som før) */}
        {bodyArray.length > 0 && !hasItems && (
          <div
            style={{
              position: "absolute",
              top: subtitle ? 420 : 380,
              left: spacing.margin + 20,
              right: spacing.margin + 20,
              textAlign: "center",
              color: theme.text,
            }}
          >
            {bodyArray.map((paragraph, i) => (
              <div
                key={i}
                style={{
                  fontSize: 32,
                  fontFamily: fontFamily.subtitle,
                  fontWeight: 300,
                  lineHeight: 1.6,
                  marginTop: i > 0 ? 24 : 0,
                  opacity: 0.8,
                }}
              >
                {paragraph}
              </div>
            ))}
          </div>
        )}

        {/* Liste-punkter (venstrejustert med bold label) */}
        {hasItems && (
          <div
            style={{
              position: "absolute",
              top: subtitle ? 420 : 380,
              left: spacing.margin + 10,
              right: spacing.margin + 10,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  background: `${theme.bgLayer || "rgba(255,255,255,0.5)"}`,
                  borderRadius: 14,
                  padding: "18px 22px",
                  border: `1px solid ${theme.border || "rgba(0,0,0,0.06)"}`,
                }}
              >
                {/* Nummer-sirkel */}
                <div
                  style={{
                    minWidth: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: `${accentColor}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 600,
                    color: accentColor,
                    fontFamily: fontFamily.body,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 26,
                      fontFamily: fontFamily.headline,
                      fontWeight: 500,
                      color: theme.text,
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontFamily: fontFamily.subtitle,
                      fontWeight: 300,
                      color: theme.textBody || theme.text,
                      lineHeight: 1.5,
                      opacity: 0.7,
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bilde i browser-ramme — strekker seg til bunnen */}
        {image && (
          <div
            style={{
              position: "absolute",
              top: subtitle ? 430 : 390,
              left: "50%",
              transform: "translateX(-50%)",
              width: 840,
              bottom: 0,
            }}
          >
            <div
              style={{
                borderRadius: "14px 14px 0 0",
                background: "#1a1a1a",
                padding: "5px 5px 0",
                boxShadow: "0 -4px 50px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Browser chrome */}
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
                src={staticFile(image)}
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
        )}

        {/* Inline visual */}
        {visual?.type === "socialProof" && (
          <SocialProofVisual accentColor={accentColor} />
        )}

        {/* Fotnote */}
        {footnote && (
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: spacing.margin,
              right: spacing.margin,
              textAlign: "center",
              fontSize: 24,
              fontWeight: 600,
              color: theme.text,
              opacity: 0.6,
            }}
          >
            {footnote}
          </div>
        )}
      </CenteredLayout>
    </BaseLayout>
  );
};
