// ============================================
// PRESETS — Video & animasjonsinnstillinger
// ============================================

// --- Video-presets ---
export const videoPresets = {
  standard: { fps: 60, durationInFrames: 240 },  // 4 sekunder
  short:    { fps: 60, durationInFrames: 120 },  // 2 sekunder
  long:     { fps: 60, durationInFrames: 360 },  // 6 sekunder
  extended: { fps: 60, durationInFrames: 480 },  // 8 sekunder
};

export const defaultVideoPreset = "standard";

// --- Spring-configs ---
export const springConfigs = {
  smooth: { damping: 200 },
  bouncy: { damping: 12, mass: 0.6 },
  gentle: { damping: 200, mass: 0.8 },
};

// --- Animasjonspresets ---
// Hver preset definerer type, delay (i frames), og parametre.
// Templates bruker disse direkte — ingen gjetting.
export const animationPresets = {
  fadeIn: {
    type: "fadeIn",
    spring: "smooth",
    distance: 0,
  },
  slideUp: {
    type: "slideUp",
    spring: "smooth",
    distance: 30,
  },
  slideLeft: {
    type: "slideLeft",
    spring: "smooth",
    distance: -20,
  },
  bounceUp: {
    type: "slideUp",
    spring: "bouncy",
    distance: 40,
  },
};

// --- Timing-presets for karusell hooks ---
// Frame-offsets for sekvensielle animasjoner ved 60fps.
export const hookTimings = {
  standard: {
    line1: 0,
    line2: 14,
    line3: 60,
    subtext: 80,
    visual: 100,
    arrow: 120,
  },
  fast: {
    line1: 0,
    line2: 10,
    line3: 40,
    subtext: 55,
    visual: 70,
    arrow: 85,
  },
  slow: {
    line1: 0,
    line2: 20,
    line3: 80,
    subtext: 100,
    visual: 120,
    arrow: 140,
  },
};

export const defaultHookTiming = "standard";
