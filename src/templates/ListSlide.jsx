// ============================================
// LIST SLIDE — Nummerert liste
// ============================================
// Statisk slide med tittel og nummererte punkter.

import React from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { CenteredLayout } from "../layouts/CenteredLayout";
import { themes, googleGradients } from "../lib/colors";
import { spacing } from "../lib/layout";
import { fontFamily } from "../lib/fonts";
import { defaults } from "../config/defaults";

/**
 * @param {Object} props
 * @param {string} props.title - Overskrift
 * @param {Array<{title: string, desc?: string}>} props.items - Listepunkter
 * @param {string} [props.footnote] - Tekst nederst
 */
export const ListSlide = ({
  title,
  titleStyle = "gradient",
  subtitle,
  items = [],
  footnote,
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  format = defaults.format,
  leafId = "leafList",
}) => {
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;

  return (
    <BaseLayout theme={themeName} format={format} leafId={leafId}>
      <CenteredLayout
        theme={themeName}
        gradient={gradientName}
        title={title}
        titleStyle={titleStyle}
        subtitle={subtitle}
      >
        {/* Liste */}
        <div
          style={{
            position: "absolute",
            top: subtitle ? 430 : 380,
            left: spacing.margin,
            right: spacing.margin,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 880,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 24,
                background: "#fff",
                borderRadius: 16,
                padding: "24px 28px",
                boxShadow: "0 4px 20px rgba(27,42,74,0.06)",
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
                  fontFamily: fontFamily.body,
                }}
              >
                {i + 1}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: theme.text,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </div>
                {item.desc && (
                  <div
                    style={{
                      fontSize: 24,
                      fontFamily: fontFamily.subtitle,
                      fontWeight: 300,
                      color: theme.text,
                      opacity: 0.75,
                      lineHeight: 1.5,
                      marginTop: 4,
                    }}
                  >
                    {item.desc}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fotnote */}
        {footnote && (
          <div
            style={{
              position: "absolute",
              bottom: 180,
              left: spacing.margin,
              right: spacing.margin,
              textAlign: "center",
              fontSize: 34,
              fontWeight: 600,
              color: theme.accent || theme.text,
              opacity: 1,
            }}
          >
            {footnote}
          </div>
        )}
      </CenteredLayout>
    </BaseLayout>
  );
};
