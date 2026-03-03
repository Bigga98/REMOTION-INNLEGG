// ============================================
// CONTENT RENDERER — JSON → Template
// ============================================
// Tar content-data + slideIndex, velger riktig template, sender props.
// Brukes som component i Composition/Still registrert av Root.jsx.

import React from "react";
import { templateMap } from "./templates";

/**
 * @param {Object} props
 * @param {Object} props.content - Fullt content-objekt fra JSON
 * @param {number} props.slideIndex - Hvilken slide som skal rendres (0-basert)
 */
export const ContentRenderer = ({ content, slideIndex = 0 }) => {
  const slide = content.slides[slideIndex];

  if (!slide) {
    throw new Error(
      `Slide ${slideIndex} finnes ikke i "${content.id}" (har ${content.slides.length} slides)`
    );
  }

  const Template = templateMap[slide.template];

  if (!Template) {
    throw new Error(
      `Template "${slide.template}" ikke funnet. Tilgjengelige: ${Object.keys(templateMap).join(", ")}`
    );
  }

  // Merge: content-level theme/gradient → slide-level props
  return (
    <Template
      {...slide.props}
      theme={slide.props?.theme || content.theme}
      gradient={slide.props?.gradient || content.gradient}
      format={content.format}
    />
  );
};
