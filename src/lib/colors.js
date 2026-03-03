// ============================================
// MEDIEGRUPPEN — Fargepaletter & Temaer
// ============================================

// --- Komplette temaer ---
export const themes = {
  dark: {
    bg: "#0f1117",
    bgCard: "#181b23",
    bgCardBorder: "#2a2d38",
    text: "#e4e6ec",
    textMuted: "#8b8fa3",
    accent: "#657dff",
    accentGradient: "linear-gradient(135deg, #657dff, #8b9dff)",
    leaf: "#1B2A4A",
    arrow: "rgba(255,255,255,0.4)",
  },
  light: {
    bg: "#f5f6f8",
    text: "#000000",
    textSecondary: "#5c6070",
    textMuted: "#9ea2b3",
    accent: "#4a62d6",
    green: "#1a7a45",
    red: "#e03e3e",
    leaf: "#1B2A4A",
    arrow: "rgba(0,0,0,0.4)",
  },
  gray: {
    bg: "linear-gradient(160deg, #f0eeee 0%, #e8e6e6 40%, #ddd9d9 100%)",
    text: "#1B2A4A",
    leaf: "#1B2A4A",
    arrow: "rgba(26,26,46,0.4)",
  },
  gray2: {
    bg: "linear-gradient(160deg, #f0eeee 0%, #e8e6e6 40%, #ddd9d9 100%)",
    text: "#1A1A1A",
    leaf: "#1A1A1A",
    arrow: "rgba(26,26,26,0.4)",
  },
  boldPurple: {
    bg: "#eeeff2",
    text: "#171921",
    textMuted: "#6b6d75",
    accent: "#5f1afd",
    accentDark: "#3d2d6e",
    accentGradient: "linear-gradient(160deg, #5f1afd 0%, #3d2d6e 100%)",
    cta: "#d7f851",
    pink: "#f9edf9",
    leaf: "#171921",
  },
  sortKremGronn: {
    bg: "#fbf9f3",
    text: "#111111",
    textMuted: "#555555",
    accent: "#38635f",
    darkGreen: "#1b2623",
    sand: "#f0e6d1",
    cream: "#fbf9f3",
    boxDark: "#111111",
    boxLight: "#fbf9f3",
    leaf: "#111111",
    arrow: "rgba(17,17,17,0.4)",
  },
  sortLyseblaa: {
    bg: "#f6f6f6",
    text: "#2d2d2d",
    textMuted: "#6b6b6b",
    icon: "#f6f6f6",
    boxDark: "#2d2d2d",
    boxLight: "#dfebfe",
    accent: "#dfebfe",
    accentDark: "#2d2d2d",
    leaf: "#2d2d2d",
    arrow: "rgba(45,45,45,0.4)",
  },
  hvitLilla: {
    bg: "#fdfdfd",
    bgLayer: "#f5f5f5",
    bgDeep: "#f0f0f0",
    border: "#d9d9d9",
    text: "#1c1c1c",
    textBody: "#2e2e2e",
    textMuted: "#555555",
    accent: "#6366F1",
    accentDark: "#4F46E5",
    accentLight: "#818CF8",
    leaf: "#6366F1",
    arrow: "rgba(99,102,241,0.5)",
  },
  mgBrand: {
    bg: "#071c20",
    text: "#ffffff",
    textMuted: "#cccafb",
    accent: "#cccafb",
    accentGradient: "linear-gradient(135deg, #cccafb, #ffffff)",
    card: "#ffffff",
    leaf: "#cccafb",
    arrow: "rgba(204,202,251,0.4)",
  },
};

// --- Gradienter for "Google"-tekst ---
export const googleGradients = {
  coral: {
    colors: ["#D4806B", "#C4607A", "#D4806B", "#B87D6A", "#D4806B"],
    css: "linear-gradient(90deg, #D4806B, #C4607A, #D4806B, #B87D6A, #D4806B)",
  },
  teal: {
    colors: ["#6B9B9E", "#5B8BC0", "#6B9B9E", "#7BAFB2", "#6B9B9E"],
    css: "linear-gradient(90deg, #6B9B9E, #5B8BC0, #6B9B9E, #7BAFB2, #6B9B9E)",
  },
  red: {
    colors: ["#ef4444", "#dc2626", "#ef4444"],
    css: "linear-gradient(90deg, #ef4444, #dc2626, #ef4444)",
  },
  blue: {
    colors: ["#657dff", "#8b9dff", "#657dff"],
    css: "linear-gradient(90deg, #657dff, #8b9dff, #657dff)",
  },
  bluePurple: {
    colors: ["#5B6BF5", "#8B5CF6", "#6366F1", "#7C3AED", "#5B6BF5"],
    css: "linear-gradient(90deg, #5B6BF5, #8B5CF6, #6366F1, #7C3AED, #5B6BF5)",
  },
  roseRed: {
    colors: ["#fb526f", "#e8405c", "#ff6b84", "#fb526f"],
    css: "linear-gradient(90deg, #fb526f, #e8405c, #ff6b84, #fb526f)",
  },
};

// --- Glassmorphism-farger ---
export const glass = {
  blue: {
    gradientStops: [
      "rgba(80,120,200,0.35)",
      "rgba(255,255,255,0.5)",
      "rgba(40,70,160,0.2)",
      "rgba(100,150,220,0.3)",
    ],
    gradientStopsAlt: [
      "rgba(40,70,160,0.2)",
      "rgba(255,255,255,0.5)",
      "rgba(80,120,200,0.35)",
      "rgba(40,70,160,0.15)",
    ],
    border: "rgba(80,120,200,0.3)",
    shadow: "0 12px 40px rgba(80,120,200,0.18), 0 4px 12px rgba(40,70,160,0.1)",
  },
};

// --- Statusfarger (A/B-test, metrics) ---
export const status = {
  red: "#ef4444",
  redGlow: "rgba(239,68,68,0.25)",
  green: "#22c55e",
  greenGlow: "rgba(34,197,94,0.25)",
  yellow: "#facc15",
  dotRed: "#f87171",
  dotGreen: "#4ade80",
};
