// ============================================
// MEDIEGRUPPEN — Animasjoner & Spring-configs
// ============================================

import { spring, interpolate } from "remotion";

// --- Spring-konfigurasjoner ---
export const springs = {
  smooth: { damping: 200 },
  bouncy: { damping: 12, mass: 0.6 },
};

// --- Timing-presets (frame-offsets) ---
export const timings = {
  // 30fps — brukes av GoogleSynlighet, GoogleSynlighet2, GoogleSynlighetLight
  standard: {
    fps: 30,
    duration: 120,
    line1: 0,
    line2: 6,
    arrow: 14,
    img1: 18,
    img2: 24,
    logo: 28,
    // Blur-clearing ranges for linje 2
    blur1: { start: 6, end: 16 },
    blur2: { start: 8, end: 18 },
    blur3: { start: 10, end: 22 },
  },
  // 60fps — brukes av GoogleSynlighetGray, Gray2
  smooth: {
    fps: 60,
    duration: 240,
    line1: 0,
    line2: 16,
    arrow: 38,
    img1: 50,
    img2: 64,
    // Blur-clearing ranges for linje 2
    blur1: { start: 16, end: 38 },
    blur2: { start: 22, end: 42 },
    blur3: { start: 28, end: 50 },
  },
};

// --- Focus pull preset (brukes på bilder i Gray-varianter) ---
export const focusPull = {
  blur: { inputRange: [0, 0.7, 1], outputRange: [8, 2, 0] },
  brightness: { inputRange: [0, 0.6, 1], outputRange: [1.3, 1.08, 1] },
  scale: { inputRange: [0, 1], outputRange: [1.04, 1] },
};

// --- Gradient blur (progressiv tekst-avdekking) ---
export const blurPresets = {
  // Standard 3-trinns blur: venstre klarner først, høyre sist
  line2Blur: {
    initial: [4, 6, 14],
    threshold: 0.1,
  },
};

// --- Hjelpefunksjoner ---

/**
 * Lag en slide-in animasjon (vertikal).
 * Returnerer { opacity, translateY } for bruk i style.
 */
export function makeSlideIn(frame, fps, delay = 0, config = springs.smooth, distance = 30) {
  const progress = spring({
    frame: frame - delay,
    fps,
    config,
  });
  const translateY = interpolate(progress, [0, 1], [distance, 0]);
  return { opacity: progress, translateY };
}

/**
 * Lag en slide-in animasjon (horisontal).
 * Returnerer { opacity, translateX } for bruk i style.
 */
export function makeSlideX(frame, fps, delay = 0, config = springs.smooth, distance = -20) {
  const progress = spring({
    frame: frame - delay,
    fps,
    config,
  });
  const translateX = interpolate(progress, [0, 1], [distance, 0]);
  return { opacity: progress, translateX };
}

/**
 * Beregn blur-verdier for progressiv tekst-avdekking.
 * Returnerer [blur1, blur2, blur3] basert på frame og timing-preset.
 */
export function calcTextBlurs(frame, timing) {
  const { blur1, blur2, blur3 } = timing;
  const initial = blurPresets.line2Blur.initial;

  return [
    interpolate(frame, [blur1.start, blur1.end], [initial[0], 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    interpolate(frame, [blur2.start, blur2.end], [initial[1], 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    interpolate(frame, [blur3.start, blur3.end], [initial[2], 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  ];
}

/**
 * Beregn focus pull effekt for et bilde.
 * Tar inn en spring-verdi (0-1) og returnerer { blur, brightness, scale }.
 */
export function calcFocusPull(springValue) {
  return {
    blur: interpolate(
      springValue,
      focusPull.blur.inputRange,
      focusPull.blur.outputRange
    ),
    brightness: interpolate(
      springValue,
      focusPull.brightness.inputRange,
      focusPull.brightness.outputRange
    ),
    scale: interpolate(
      springValue,
      focusPull.scale.inputRange,
      focusPull.scale.outputRange
    ),
  };
}

/**
 * Lag en animert gradient-posisjon for tekst (f.eks. "Google"-ordet).
 * Returnerer en prosent-verdi for backgroundPosition.
 */
export function calcGradientPosition(frame, duration = 240, range = [0, 200]) {
  return interpolate(frame, [0, duration], range);
}

/**
 * Lag animerte gradient-vinkler for glassmorphism.
 * Returnerer { angle1, angle2 }.
 */
export function calcGlassAngles(frame, duration = 240) {
  return {
    angle1: interpolate(frame, [0, duration], [120, 280]),
    angle2: interpolate(frame, [0, duration], [200, 360]),
  };
}
