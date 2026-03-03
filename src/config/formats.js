// ============================================
// FORMATS — Output-dimensjoner for Instagram
// ============================================
// Inner div bruker halve verdier + scale(2) for skarp rendering.

export const formats = {
  post: {
    label: "Post (1:1)",
    width: 2160,
    height: 2160,
    inner: { width: 1080, height: 1080 },
  },
  portrait: {
    label: "Portrait (4:5)",
    width: 2160,
    height: 2700,
    inner: { width: 1080, height: 1350 },
  },
  story: {
    label: "Story / Reel (9:16)",
    width: 2160,
    height: 3840,
    inner: { width: 1080, height: 1920 },
  },
  landscape: {
    label: "Landscape (16:9)",
    width: 2160,
    height: 1216,
    inner: { width: 1080, height: 608 },
  },
};

// Standard-format for nye innlegg
export const defaultFormat = "post";
