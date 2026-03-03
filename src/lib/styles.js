// ============================================
// MEDIEGRUPPEN — Gjenbrukbare stilmønstre
// ============================================

import { glass } from "./colors";

// --- Glassmorphism ---

/**
 * Lag glassmorphism-stil for en bilderamme.
 * @param {number} gradAngle — Animert vinkel i grader
 * @param {"primary"|"alt"} variant — Hvilken gradient-variant
 */
export function glassmorphism(gradAngle, variant = "primary") {
  const stops =
    variant === "alt" ? glass.blue.gradientStopsAlt : glass.blue.gradientStops;

  return {
    padding: 10,
    borderRadius: 18,
    background: `linear-gradient(${gradAngle}deg, ${stops[0]} 0%, ${stops[1]} 40%, ${stops[2]} 70%, ${stops[3]} 100%)`,
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${glass.blue.border}`,
    boxShadow: glass.blue.shadow,
  };
}

// --- Vignette/Overlay ---

/** Frosted edge vignette — legges oppå bilder */
export const frostedVignette = {
  position: "absolute",
  inset: 0,
  borderRadius: 12,
  background:
    "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 50%, rgba(255,255,255,0.25) 100%)",
  pointerEvents: "none",
};

// --- Image filter ---

/**
 * CSS filter + transform for focus pull effekt.
 * @param {number} blur — blur i px
 * @param {number} brightness — brightness-multiplikator
 * @param {number} scale — scale-verdi
 */
export function imageFilter(blur, brightness, scale) {
  return {
    filter: `blur(${blur}px) brightness(${brightness})`,
    transform: `scale(${scale})`,
  };
}

// --- Shadows ---

export const shadows = {
  dark: "0 12px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)",
  light: "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)",
  glass: glass.blue.shadow,
  card: "0 8px 32px rgba(0,0,0,0.35)",
};

// --- Overlays ---

export const overlays = {
  /** Hvit fade-gradient i bunnen (35% høyde) */
  whiteFade: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "35%",
    background:
      "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 100%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  /** Subtle grid-mønster (60x60px) */
  grid: {
    position: "absolute",
    inset: 0,
    opacity: 0.4,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    pointerEvents: "none",
  },

  /** Dot-mønster bakgrunn */
  dotPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(#e0e2e8 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    opacity: 0.5,
    pointerEvents: "none",
  },
};

// --- Gradient text ---

/**
 * Style for gradient-tekst med animert posisjon.
 * @param {string} gradientCss — CSS gradient-streng (fra googleGradients)
 * @param {number} position — Animert posisjon i prosent
 */
export function gradientText(gradientCss, position = 0) {
  return {
    background: gradientCss,
    backgroundSize: "200% 100%",
    backgroundPosition: `${position}% 0%`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };
}

// --- Bilde-wrapper med overflow hidden ---

export const imageWrapper = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 12,
};
