// ============================================
// MEDIEGRUPPEN — Layout-konstanter
// ============================================

// --- Spacing ---
export const spacing = {
  margin: 50,         // Standard sidemargin
  gap: 10,            // Logo icon-tekst gap
  textTop: 260,       // Topp-posisjon for hovedtekst
  lineHeight: 1.35,
  letterSpacing: "0.02em",
};

// --- Logo-plassering ---
export const logo = {
  top: 40,
  left: 50,
  iconSize: 28,
  fontSize: 22,
  fontWeight: 600,
  letterSpacing: "-0.5px",
};

// --- Bilder ---
export const images = {
  width: 580,
  padding: 10,
  borderRadius: 12,
  containerRadius: 18,
};

// --- Z-index lag ---
export const zIndex = {
  background: 0,
  backImage: 1,
  frontImage: 2,
  ui: 3,
};

// --- Composition-dimensjoner ---
export const compositions = {
  instagram: { width: 1080, height: 1080 },
  wide: { width: 1800, height: 600 },
  hero: { width: 1200, height: 675 },
};

// --- Bilde-transformasjoner (tilt + posisjon) ---
export const imagePositions = {
  /** Bakre bilde — litt til venstre, vippet venstre */
  back: {
    bottom: -140,
    translateX: "-65%",
    rotate: -5,
  },
  /** Fremre bilde — litt til høyre, vippet høyre, overlappende */
  front: {
    bottom: -100,
    translateX: "-30%",
    rotate: 5,
  },
};

// --- Headline-tekst standard ---
export const headline = {
  fontSize: 64,
  fontWeight: 500,
};

// --- Arrow SVG standard ---
export const arrow = {
  width: 48,
  height: 28,
  strokeWidth: 3,
  marginTop: 20,
};
