// ============================================
// MEDIEGRUPPEN — Sentralisert font-loading
// ============================================

import { staticFile } from "remotion";
import { loadFont } from "@remotion/fonts";

// --- Font-loading ---
// Kall disse én gang per komponent (eller globalt) for å registrere fontene.

export const clashDisplay = loadFont({
  family: "Clash Display",
  url: staticFile("ClashDisplay-Medium.woff2"),
  weight: "500",
});

export const panchang = loadFont({
  family: "Panchang",
  url: staticFile("Panchang-SemiBold.woff2"),
  weight: "600",
});

export const satoshiLight = loadFont({
  family: "Satoshi",
  url: staticFile("Satoshi-Light.woff2"),
  weight: "300",
});

export const satoshiRegular = loadFont({
  family: "Satoshi",
  url: staticFile("Satoshi-Regular.woff2"),
  weight: "400",
});

// --- Font-stacks ---

export const fontFamily = {
  headline: "'Clash Display', sans-serif",
  body: "'Inter', sans-serif",
  logo: "'Panchang', sans-serif",
  subtitle: "'Satoshi', sans-serif",
  mono: "'Inter', monospace",
};
