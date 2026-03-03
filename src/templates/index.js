// ============================================
// TEMPLATE REGISTRY — Alle tilgjengelige templates
// ============================================
// ContentRenderer bruker dette for å velge riktig template.

export { HookSlide } from "./HookSlide";
export { ContentSlide } from "./ContentSlide";
export { ListSlide } from "./ListSlide";
export { ComparisonSlide } from "./ComparisonSlide";
export { CTASlide } from "./CTASlide";
export { SinglePost } from "./SinglePost";
export { WireframeSlide } from "./WireframeSlide";

// Template-map for dynamisk oppslag fra JSON
import { HookSlide } from "./HookSlide";
import { ContentSlide } from "./ContentSlide";
import { ListSlide } from "./ListSlide";
import { ComparisonSlide } from "./ComparisonSlide";
import { CTASlide } from "./CTASlide";
import { SinglePost } from "./SinglePost";
import { WireframeSlide } from "./WireframeSlide";

export const templateMap = {
  HookSlide,
  ContentSlide,
  ListSlide,
  ComparisonSlide,
  CTASlide,
  SinglePost,
  WireframeSlide,
};
