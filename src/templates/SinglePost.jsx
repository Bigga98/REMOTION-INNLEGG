// ============================================
// SINGLE POST — Enkeltbilde-innlegg
// ============================================
// Komplett innlegg i én slide. Tittel + innhold + valgfri CTA.

import React from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { CenteredLayout } from "../layouts/CenteredLayout";
import { themes, googleGradients } from "../lib/colors";
import { spacing, zIndex } from "../lib/layout";
import { fontFamily } from "../lib/fonts";
import { defaults } from "../config/defaults";

/**
 * @param {Object} props
 * @param {string} props.title - Overskrift
 * @param {string} [props.titleStyle] - "normal" | "gradient"
 * @param {string|string[]} [props.body] - Brødtekst
 * @param {string} [props.cta] - CTA-knapp tekst
 * @param {string} [props.ctaSubtext] - Tekst under CTA
 */
export const SinglePost = ({
  title,
  titleStyle = "gradient",
  subtitle,
  body,
  cta,
  ctaSubtext,
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  format = defaults.format,
  leafId = "leafSingle",
}) => {
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;
  const bodyArray = body ? (Array.isArray(body) ? body : [body]) : [];

  return (
    <BaseLayout theme={themeName} format={format} leafId={leafId}>
      <CenteredLayout
        theme={themeName}
        gradient={gradientName}
        title={title}
        titleStyle={titleStyle}
        subtitle={subtitle}
      >
        {/* Brødtekst */}
        {bodyArray.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: subtitle ? 420 : 380,
              left: spacing.margin + 20,
              right: spacing.margin + 20,
              textAlign: "center",
            }}
          >
            {bodyArray.map((p, i) => (
              <div
                key={i}
                style={{
                  fontSize: 28,
                  fontFamily: fontFamily.body,
                  color: theme.text,
                  opacity: 0.65,
                  lineHeight: 1.6,
                  marginTop: i > 0 ? 16 : 0,
                }}
              >
                {p}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {cta && (
          <div
            style={{
              position: "absolute",
              bottom: 120,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: zIndex.frontImage,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: gradient.css,
                borderRadius: 14,
                padding: "18px 48px",
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontFamily: fontFamily.body,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {cta}
              </span>
            </div>
            {ctaSubtext && (
              <div
                style={{
                  fontSize: 16,
                  fontFamily: fontFamily.body,
                  color: theme.text,
                  opacity: 0.45,
                  marginTop: 12,
                }}
              >
                {ctaSubtext}
              </div>
            )}
          </div>
        )}
      </CenteredLayout>
    </BaseLayout>
  );
};
