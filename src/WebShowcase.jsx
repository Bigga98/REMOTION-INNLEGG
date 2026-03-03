import { useCurrentFrame, useVideoConfig, interpolate, Easing, Img, staticFile } from "remotion";

/*
  KAMERAPLAN — Showcase av 3 nettsider
  Bildene er 2880×6400 retina screenshots (1440×3200 @2x).
  Kameraet er et viewport (1920×1080) som panorerer over bildet.

  Koordinatene er i % av bildet (0,0 = top-left, 100,100 = bottom-right).
  Zoom 1 = bildet fyller bredden. Zoom 1.8 = zoomer inn 1.8x.

  Per side: ~5 sek (150 frames @ 30fps)
  Totalt: ~18 sek (540 frames) med transitions

  Easing: cubicBezier(0.4, 0, 0.1, 1) — sakte start, rask midt, sakte slutt
*/

const ease = Easing.bezier(0.4, 0, 0.1, 1);

// Keyframes per site: [frameOffset, x%, y%, zoom]
// x,y = where the camera CENTER is pointing (% of image)
const sites = [
  {
    src: staticFile("showcase-elvemark.png"),
    label: "Elvemark Arkitekter",
    bg: "#fbf9f3",
    keyframes: [
      // Oversikt hero
      [0,   50, 12, 1.0],
      // Hold et øyeblikk
      [25,  50, 12, 1.0],
      // Zoom inn på headline
      [60,  32, 10, 1.7],
      // Pan til hero-bilde + floating card
      [100, 62, 24, 1.5],
      // Zoom ut og pan ned til stats
      [135, 50, 52, 1.15],
      // Hold stats
      [150, 50, 52, 1.15],
    ],
  },
  {
    src: staticFile("showcase-findera.png"),
    label: "Findera",
    bg: "#ffffff",
    keyframes: [
      // Oversikt
      [0,   50, 10, 1.0],
      [20,  50, 10, 1.0],
      // Zoom inn på headline "Rett person, rett tidspunkt"
      [55,  30, 8, 1.8],
      // Pan til portrett + dashboard
      [90,  50, 25, 1.3],
      // Zoom inn på dashboard-kortet
      [115, 68, 27, 1.9],
      // Pan ned til features
      [145, 50, 62, 1.15],
      [150, 50, 62, 1.15],
    ],
  },
  {
    src: staticFile("showcase-laerdom.png"),
    label: "Lærdom",
    bg: "#ffffff",
    keyframes: [
      // Oversikt
      [0,   50, 10, 1.0],
      [20,  50, 10, 1.0],
      // Zoom inn på hero-tekst + form
      [55,  38, 12, 1.6],
      // Pan til hero-bilde
      [80,  72, 15, 1.5],
      // Pan ned til feature-kort
      [110, 50, 50, 1.2],
      // Zoom inn på stats-rad
      [140, 50, 68, 1.35],
      [150, 50, 68, 1.35],
    ],
  },
];

// Interpolate between keyframes for a given local frame
function getCameraAt(keyframes, localFrame) {
  // Clamp to range
  const f = Math.max(keyframes[0][0], Math.min(keyframes[keyframes.length - 1][0], localFrame));

  // Find surrounding keyframes
  let i = 0;
  while (i < keyframes.length - 1 && keyframes[i + 1][0] <= f) i++;

  if (i >= keyframes.length - 1) {
    const kf = keyframes[keyframes.length - 1];
    return { x: kf[1], y: kf[2], zoom: kf[3] };
  }

  const [f0, x0, y0, z0] = keyframes[i];
  const [f1, x1, y1, z1] = keyframes[i + 1];

  const rawT = f1 === f0 ? 1 : (f - f0) / (f1 - f0);
  const t = ease(rawT);

  return {
    x: x0 + (x1 - x0) * t,
    y: y0 + (y1 - y0) * t,
    zoom: z0 + (z1 - z0) * t,
  };
}

export const WebShowcase = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const perSite = 165; // ~5.5s per site (including overlap)
  const crossFade = 20; // frames for crossfade

  return (
    <div style={{
      width, height,
      background: "#0e0e0e",
      overflow: "hidden",
      position: "relative",
      fontFamily: "'General Sans', -apple-system, sans-serif",
    }}>

      {sites.map((site, i) => {
        const siteStart = i * (perSite - crossFade);
        const localFrame = frame - siteStart;

        // Skip if not in range
        if (localFrame < -crossFade || localFrame > perSite + crossFade) return null;

        // Fade in / out
        const fadeIn = interpolate(localFrame, [0, crossFade], [0, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        });
        const fadeOut = interpolate(localFrame, [perSite - crossFade, perSite], [1, 0], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
          easing: Easing.in(Easing.cubic),
        });
        const opacity = Math.min(fadeIn, fadeOut);

        // Scale entrance: slight zoom-in on entrance
        const entranceScale = interpolate(localFrame, [0, crossFade], [0.96, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        });

        // Camera position
        const cam = getCameraAt(site.keyframes, Math.max(0, Math.min(150, localFrame)));

        // Image is 2880px wide (retina 1440). We display it at a base width.
        // At zoom 1.0, the image width = browser mockup content width.
        // Camera x,y are percentages of the image.
        const imgScale = cam.zoom;
        const imgX = -(cam.x - 50) * imgScale * 0.8;
        const imgY = -(cam.y) * imgScale * 3.8;

        return (
          <div key={i} style={{
            position: "absolute",
            inset: 0,
            opacity,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${entranceScale})`,
          }}>
            {/* Browser chrome */}
            <div style={{
              width: width * 0.9,
              height: height * 0.93,
              background: site.bg,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* macOS title bar */}
              <div style={{
                height: 40,
                background: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                gap: 7,
                flexShrink: 0,
                borderBottom: "1px solid #ddd",
              }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
                <div style={{
                  flex: 1,
                  margin: "0 60px",
                  height: 26,
                  background: "#fff",
                  borderRadius: 6,
                  border: "1px solid #ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  color: "#999",
                  fontWeight: 400,
                }}>
                  {site.label.toLowerCase().replace(/\s+/g, "").replace(/æ/g,"ae").replace(/ø/g,"o").replace(/å/g,"a")}.no
                </div>
              </div>

              {/* Page content viewport */}
              <div style={{
                flex: 1,
                overflow: "hidden",
                position: "relative",
              }}>
                <Img
                  src={site.src}
                  style={{
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transformOrigin: `${cam.x}% 0%`,
                    transform: `scale(${imgScale}) translate(${imgX / imgScale}%, ${imgY / imgScale}%)`,
                  }}
                />
              </div>
            </div>

            {/* Site label badge */}
            <div style={{
              position: "absolute",
              bottom: 26,
              left: "50%",
              transform: `translateX(-50%) translateY(${interpolate(localFrame,
                [crossFade * 0.5, crossFade * 1.5],
                [12, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              )}px)`,
              opacity: interpolate(localFrame,
                [crossFade * 0.5, crossFade * 1.5, perSite - crossFade * 1.5, perSite - crossFade * 0.5],
                [0, 1, 1, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              ),
            }}>
              <span style={{
                fontSize: 18,
                fontWeight: 500,
                color: "#fff",
                letterSpacing: "-0.01em",
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(10px)",
                padding: "7px 22px",
                borderRadius: 100,
                whiteSpace: "nowrap",
              }}>
                {site.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Mediegruppen watermark */}
      <div style={{
        position: "absolute",
        top: 16,
        right: 24,
        fontSize: 13,
        fontWeight: 600,
        color: "rgba(255,255,255,0.35)",
        letterSpacing: "-0.02em",
        zIndex: 10,
      }}>
        Mediegruppen
      </div>
    </div>
  );
};
