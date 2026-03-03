// ============================================
// CTA SLIDE — Call to Action
// ============================================
// Statisk slide med CTA-kort, badge, og kommentar-ikon.

import React from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { CenteredLayout } from "../layouts/CenteredLayout";
import { themes, googleGradients } from "../lib/colors";
import { spacing, zIndex } from "../lib/layout";
import { fontFamily } from "../lib/fonts";
import { defaults } from "../config/defaults";

/**
 * @param {Object} props
 * @param {string} props.title - Overskrift (f.eks. "Er forsiden din tydelig nok?")
 * @param {string} props.titleAccent - Gradient-del av tittelen
 * @param {string} props.badge - Badge-tekst (f.eks. "FORSIDE")
 * @param {string} props.instruction - Instruksjonstekst over badge (f.eks. "Send oss lenken din:")
 * @param {string} props.description - Beskrivelse under badge
 */
export const CTASlide = ({
  title,
  titleAccent,
  badge,
  instruction = "Skriv i kommentarfeltet:",
  description,
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  format = defaults.format,
  leafId = "leafCTA",
}) => {
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;
  const accentColor = gradient.colors[0];

  return (
    <BaseLayout theme={themeName} format={format} leafId={leafId}>
      <CenteredLayout
        theme={themeName}
        gradient={gradientName}
        title={title}
        titleStyle="normal"
      >
        {/* Gradient-del av tittelen (rendres som en del av tittelen) */}

        {/* CTA-kort */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: zIndex.frontImage,
          }}
        >
          <div
            style={{
              width: 720,
              background: "#fff",
              borderRadius: 18,
              padding: "36px 44px",
              boxShadow: "0 8px 40px rgba(27,42,74,0.08), 0 2px 8px rgba(27,42,74,0.04)",
              textAlign: "center",
            }}
          >
            {/* Kommentar-ikon */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `${accentColor}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    stroke={accentColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Instruksjon */}
            <div
              style={{
                fontSize: 16,
                fontFamily: fontFamily.body,
                color: "#9ca3af",
                fontWeight: 500,
                marginBottom: 14,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {instruction}
            </div>

            {/* Badge */}
            {badge && (
              <div
                style={{
                  display: "inline-block",
                  background: gradient.css,
                  borderRadius: 12,
                  padding: "14px 40px",
                  marginBottom: 22,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontFamily: fontFamily.body,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.1em",
                  }}
                >
                  {badge}
                </span>
              </div>
            )}

            {/* Beskrivelse */}
            {description && (
              <div
                style={{
                  fontSize: 16,
                  fontFamily: fontFamily.body,
                  color: "#374151",
                  lineHeight: 1.6,
                  maxWidth: 500,
                  margin: "0 auto",
                }}
              >
                {description}
              </div>
            )}
          </div>
        </div>
      </CenteredLayout>
    </BaseLayout>
  );
};
