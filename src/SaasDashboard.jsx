import React from "react";

const c = {
  bg: "#0f1117",
  surface: "#181a24",
  surfaceHover: "#1e2130",
  border: "#2a2d3a",
  blue: "#4a7cdd",
  blueLight: "#6b9bef",
  blueMuted: "rgba(74,124,221,0.15)",
  red: "#dd4a5c",
  redLight: "#ef6b7b",
  redMuted: "rgba(221,74,92,0.15)",
  green: "#34d399",
  greenMuted: "rgba(52,211,153,0.12)",
  text: "#e8e9ed",
  textMuted: "#7a7e8f",
  textDim: "#4e5264",
};

export const SaasDashboard = () => {
  const w = 680;
  const h = 480;

  // Line chart data
  const points1 = [40,38,52,48,65,58,72,68,85,78,92,88,105,98,110,115,108,120,125,118,130,128,135,140];
  const points2 = [25,28,22,30,28,35,32,38,35,42,38,45,42,48,44,50,46,52,48,55,50,54,52,56];
  const chartW = 400;
  const chartH = 140;
  const maxVal = 150;

  function toPath(pts) {
    return pts.map((v, i) => {
      const x = (i / (pts.length - 1)) * chartW;
      const y = chartH - (v / maxVal) * chartH;
      return `${x},${y}`;
    }).join(" ");
  }

  function toArea(pts) {
    const line = pts.map((v, i) => {
      const x = (i / (pts.length - 1)) * chartW;
      const y = chartH - (v / maxVal) * chartH;
      return `${x},${y}`;
    });
    return `0,${chartH} ${line.join(" ")} ${chartW},${chartH}`;
  }

  const stats = [
    { label: "Besøkende", value: "3 842", change: "+12.4%", up: true },
    { label: "Sidevisninger", value: "12 651", change: "+8.2%", up: true },
    { label: "Fluktrate", value: "24.3%", change: "-3.1%", up: true },
    { label: "Gj. tid", value: "2m 48s", change: "-0.8%", up: false },
  ];

  const pages = [
    { path: "/", views: "4 210", bar: 85 },
    { path: "/tjenester", views: "2 847", bar: 58 },
    { path: "/om-oss", views: "1 953", bar: 40 },
    { path: "/kontakt", views: "1 428", bar: 29 },
    { path: "/prosjekter", views: "1 102", bar: 22 },
  ];

  return (
    <div style={{
      width: w, height: h,
      transform: "scale(2)",
      transformOrigin: "top left",
      background: c.bg,
      fontFamily: "'General Sans', -apple-system, sans-serif",
      padding: "24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      overflow: "hidden",
    }}>

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: c.blue }} />
          <span style={{ fontSize: 15, fontWeight: 600, color: c.text, letterSpacing: "-0.02em" }}>Analytics</span>
          <span style={{ fontSize: 12, color: c.textMuted, marginLeft: 4 }}>Siste 30 dager</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["1D", "7D", "30D", "90D"].map((t, i) => (
            <div key={i} style={{
              padding: "5px 10px",
              borderRadius: 4,
              fontSize: 11,
              fontWeight: 500,
              background: i === 2 ? c.blue : "transparent",
              color: i === 2 ? "#fff" : c.textMuted,
              cursor: "pointer",
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 10 }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            flex: 1,
            background: c.surface,
            border: `1px solid ${c.border}`,
            borderRadius: 6,
            padding: "14px 14px 12px",
          }}>
            <div style={{ fontSize: 11, color: c.textMuted, marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: c.text, letterSpacing: "-0.03em", marginBottom: 4 }}>{s.value}</div>
            <div style={{
              fontSize: 11,
              fontWeight: 500,
              color: s.up ? c.green : c.red,
            }}>{s.change}</div>
          </div>
        ))}
      </div>

      {/* Main content: chart + sidebar */}
      <div style={{ display: "flex", gap: 12, flex: 1, minHeight: 0 }}>

        {/* Chart */}
        <div style={{
          flex: 1.6,
          background: c.surface,
          border: `1px solid ${c.border}`,
          borderRadius: 6,
          padding: "16px 18px 12px",
          display: "flex",
          flexDirection: "column",
        }}>
          {/* Chart header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: c.textMuted }}>
                <div style={{ width: 10, height: 3, borderRadius: 1, background: c.blue }} />Besøkende
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: c.textMuted }}>
                <div style={{ width: 10, height: 3, borderRadius: 1, background: c.red }} />Konverteringer
              </div>
            </div>
          </div>

          {/* Chart SVG */}
          <div style={{ flex: 1, position: "relative" }}>
            <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`} style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3].map(i => (
                <line key={i} x1={0} x2={chartW} y1={i * (chartH / 3)} y2={i * (chartH / 3)} stroke={c.border} strokeWidth="0.5" />
              ))}

              {/* Blue area */}
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c.blue} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={c.blue} stopOpacity="0" />
                </linearGradient>
                <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c.red} stopOpacity="0.15" />
                  <stop offset="100%" stopColor={c.red} stopOpacity="0" />
                </linearGradient>
              </defs>

              <polygon points={toArea(points1)} fill="url(#blueGrad)" />
              <polyline points={toPath(points1)} fill="none" stroke={c.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <polygon points={toArea(points2)} fill="url(#redGrad)" />
              <polyline points={toPath(points2)} fill="none" stroke={c.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Hover indicator */}
              <line x1={chartW * 0.75} x2={chartW * 0.75} y1={0} y2={chartH} stroke={c.textDim} strokeWidth="1" strokeDasharray="3,3" />
              <circle cx={chartW * 0.75} cy={chartH - (118 / maxVal) * chartH} r="4" fill={c.bg} stroke={c.blue} strokeWidth="2" />
              <circle cx={chartW * 0.75} cy={chartH - (48 / maxVal) * chartH} r="4" fill={c.bg} stroke={c.red} strokeWidth="2" />
            </svg>

            {/* Y axis labels */}
            <div style={{ position: "absolute", top: 0, right: -2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {["150", "100", "50", "0"].map((v, i) => (
                <span key={i} style={{ fontSize: 9, color: c.textDim }}>{v}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Top pages sidebar */}
        <div style={{
          flex: 1,
          background: c.surface,
          border: `1px solid ${c.border}`,
          borderRadius: 6,
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: c.text, marginBottom: 14 }}>Mest besøkte sider</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            {pages.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: c.textMuted, width: 80, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.path}</span>
                <div style={{ flex: 1, height: 4, background: c.border, borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: `${p.bar}%`, height: "100%", background: i === 0 ? c.blue : c.blueLight, borderRadius: 2, opacity: 1 - i * 0.15 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 500, color: c.text, width: 38, textAlign: "right" }}>{p.views}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
