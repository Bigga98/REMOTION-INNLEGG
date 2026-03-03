import React from "react";
import { staticFile } from "remotion";

const W = 760;
const H = 480;

// Varm amber→rødoransje + grønn for MG — 3 shades per farge (lys/mid/mørk)
const platforms = [
  { name: "WordPress", min: 30, max: 60, shades: ["#FBDFA8", "#F5C97A", "#D4A550"], logo: "logo-wordpress.png" },
  { name: "Squarespace", min: 55, max: 75, shades: ["#F5C87A", "#EBA84A", "#C48A30"], logo: "logo-squarespace.png" },
  { name: "Shopify", min: 60, max: 85, shades: ["#F0AB58", "#E08A2E", "#B86E1E"], logo: "logo-shopify.png" },
  { name: "Wix", min: 70, max: 85, shades: ["#E88D48", "#D66820", "#AE5018"], logo: "logo-wix.png" },
  { name: "Webflow", min: 80, max: 95, shades: ["#E06838", "#C84418", "#A03010"], logo: "logo-webflow.png" },
  { name: "Mediegruppen", min: 95, max: 100, shades: ["#48B880", "#1F7A52", "#155A3A"], logo: null },
];

const padLeft = 220;
const padRight = 50;
const padTop = 65;
const padBottom = 40;
const barH = 24;
const rowH = (H - padTop - padBottom) / platforms.length;
const chartW = W - padLeft - padRight;
const segGap = 5;
const cuts = [25, 50, 75];
const r = 6;

const toX = (v) => padLeft + (v / 100) * chartW;

export const GAStackedChart = () => {
  return (
    <div style={{
      width: W,
      height: H,
      background: "#ffffff",
      fontFamily: "'General Sans', -apple-system, sans-serif",
      position: "relative",
    }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
      >
        {/* Vertikale grid-linjer */}
        {[0, 25, 50, 75, 100].map(v => {
          const x = toX(v);
          return (
            <g key={v}>
              <line
                x1={x} x2={x}
                y1={padTop - 10} y2={H - padBottom + 10}
                stroke="#eee" strokeWidth={0.8}
              />
              <text
                x={x} y={H - padBottom + 28}
                textAnchor="middle"
                fill="#bbb" fontSize={13}
                fontFamily="'Satoshi', 'General Sans', sans-serif"
                fontWeight={400}
              >
                {v}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {platforms.map((p, i) => {
          const cy = padTop + i * rowH + rowH / 2;
          const isMG = p.name === "Mediegruppen";

          // Split bar into segments at 25, 50, 75
          const breakpoints = [0, ...cuts.filter(c => c < p.max), p.max];
          const segments = [];
          for (let s = 0; s < breakpoints.length - 1; s++) {
            segments.push({ from: breakpoints[s], to: breakpoints[s + 1] });
          }

          return (
            <g key={p.name}>
              {/* Logo + plattformnavn */}
              {p.logo && (
                <image
                  href={staticFile(p.logo)}
                  x={padLeft - 127}
                  y={cy - 58}
                  width={117}
                  height={117}
                  preserveAspectRatio="xMidYMid meet"
                />
              )}
              {!p.logo && (
                <text
                  x={padLeft - 16}
                  y={cy + 1}
                  textAnchor="end"
                  dominantBaseline="central"
                  fill="#1a1a1a"
                  fontSize={16}
                  fontWeight={600}
                  fontFamily="'Panchang', sans-serif"
                >
                  {p.name}
                </text>
              )}

              {/* Fargede segmenter — ulik shade per segment */}
              {segments.map((seg, si) => {
                const sx = toX(seg.from) + (si > 0 ? segGap / 2 : 0);
                const ex = toX(seg.to) - (si < segments.length - 1 ? segGap / 2 : 0);
                const shade = p.shades[Math.min(si, p.shades.length - 1)];
                return (
                  <rect key={si}
                    x={sx} y={cy - barH / 2}
                    width={ex - sx} height={barH}
                    rx={r} fill={shade}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
