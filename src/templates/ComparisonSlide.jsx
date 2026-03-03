// ============================================
// COMPARISON SLIDE — Før/etter sammenligning
// ============================================
// Statisk slide med to glassmorphism-kort (dårlig vs. bra).

import React from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { SplitLayout } from "../layouts/SplitLayout";
import { fontFamily } from "../lib/fonts";
import { defaults } from "../config/defaults";

/**
 * @param {Object} props
 * @param {string} [props.title] - Overskrift
 * @param {{heading: string, body: string, tags?: string[]}} props.left - Venstre kort (dårlig)
 * @param {{heading: string, body: string, cta?: string}} props.right - Høyre kort (bra)
 * @param {string} [props.leftLabel] - Label for venstre ("Dårlig")
 * @param {string} [props.rightLabel] - Label for høyre ("Bra")
 */
export const ComparisonSlide = ({
  title,
  left = {},
  right = {},
  leftLabel = "Dårlig",
  rightLabel = "Bra",
  leftColor = "#B56B4A",
  rightColor = "#5BA07E",
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  format = defaults.format,
  leafId = "leafComp",
}) => {
  return (
    <BaseLayout theme={themeName} format={format} leafId={leafId}>
      <SplitLayout
        theme={themeName}
        gradient={gradientName}
        title={title}
        leftLabel={leftLabel}
        rightLabel={rightLabel}
        leftColor={leftColor}
        rightColor={rightColor}
        leftContent={
          <div style={{ background: "rgba(27,42,74,0.03)", borderRadius: 8, padding: 20 }}>
            <div style={{ fontSize: 16, fontFamily: fontFamily.body, fontWeight: 600, color: "#1B2A4A", lineHeight: 1.4 }}>
              {left.heading}
            </div>
            <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#1B2A4A", opacity: 0.5, lineHeight: 1.6, marginTop: 8 }}>
              {left.body}
            </div>
            {left.tags && (
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                {left.tags.map((tag) => (
                  <div key={tag} style={{ fontSize: 10, fontFamily: fontFamily.body, background: "rgba(27,42,74,0.06)", padding: "4px 10px", borderRadius: 6, color: "#1B2A4A", opacity: 0.4 }}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        }
        rightContent={
          <div style={{ background: `rgba(91,160,126,0.04)`, borderRadius: 8, padding: 20 }}>
            <div style={{ fontSize: 18, fontFamily: fontFamily.body, fontWeight: 700, color: "#1B2A4A", lineHeight: 1.35 }}>
              {right.heading}
            </div>
            <div style={{ fontSize: 13, fontFamily: fontFamily.body, color: "#1B2A4A", opacity: 0.55, lineHeight: 1.6, marginTop: 8 }}>
              {right.body}
            </div>
            {right.cta && (
              <div style={{ marginTop: 14, display: "inline-block", background: rightColor, borderRadius: 8, padding: "8px 20px", fontSize: 13, fontFamily: fontFamily.body, fontWeight: 600, color: "#fff" }}>
                {right.cta}
              </div>
            )}
          </div>
        }
      />
    </BaseLayout>
  );
};
