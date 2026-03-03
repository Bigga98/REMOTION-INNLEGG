import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const colors = {
  bg: "#f5f7fa",
  sidebar: "#ffffff",
  card: "#ffffff",
  accent: "#1a73e8",
  accentLight: "#e3f2fd",
  text: "#1a1a2e",
  textMuted: "#6b7280",
  textLight: "#9ca3af",
  border: "#e5e7eb",
  barBlue: "#1565c0",
  barPurple: "#7c3aed",
  barRed: "#e53935",
  chartBlue: "#1565c0",
  chartOrange: "#ff9800",
  chartGreen: "#4caf50",
};

/* ── Animation helper ── */
const FadeSlide = ({ children, delay = 0, direction = "up", distance = 20, style = {} }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 28, stiffness: 40, mass: 1.2 } });
  const dy = direction === "up" ? distance : direction === "down" ? -distance : 0;
  const dx = direction === "left" ? distance : direction === "right" ? -distance : 0;
  return (
    <div style={{
      opacity: progress,
      transform: `translate(${(1 - progress) * dx}px, ${(1 - progress) * dy}px)`,
      ...style,
    }}>
      {children}
    </div>
  );
};

/* ── Sidebar icons (SVG) ── */
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d={d} />
  </svg>
);

const icons = {
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
  plane: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  clip: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48",
  bank: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3",
  dollar: "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  chart: "M18 20V10M12 20V4M6 20v-6",
  file: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6",
  user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z",
  doc: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  briefcase: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
  building: "M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16",
};

const navItems = [
  { icon: icons.star, label: "Favoritter" },
  { icon: icons.home, label: "Hjem", active: true },
  { icon: icons.plane, label: "Reiser og utlegg" },
  { icon: icons.clip, label: "Bilag" },
  { icon: icons.bank, label: "Bank" },
  { icon: icons.dollar, label: "Finansielle tjenester" },
  { icon: icons.chart, label: "Regnskap" },
  { icon: icons.file, label: "Faktura" },
  { icon: icons.user, label: "Kunde" },
  { icon: icons.doc, label: "Dokument" },
  { icon: icons.briefcase, label: "Lønn" },
  { icon: icons.building, label: "Selskap" },
];

/* ── Sidebar ── */
const SidebarItem = ({ iconPath, label, active, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 28, stiffness: 40, mass: 1.2 } });
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 14, padding: "9px 18px",
      borderRadius: 4, opacity: progress,
      transform: `translateX(${(1 - progress) * -15}px)`,
      background: active ? colors.accentLight : "transparent",
      color: active ? colors.accent : colors.textMuted,
      fontSize: 15, fontWeight: active ? 600 : 400,
    }}>
      <Icon d={iconPath} size={18} />
      <span>{label}</span>
    </div>
  );
};

const Sidebar = () => (
  <div style={{
    width: 190, background: colors.sidebar, borderRight: `1px solid ${colors.border}`,
    padding: "20px 10px", display: "flex", flexDirection: "column", gap: 1,
    flexShrink: 0,
  }}>
    <FadeSlide delay={0} direction="down" distance={15}>
      <div style={{ fontSize: 18, fontWeight: 700, color: colors.text, padding: "0 18px", marginBottom: 20, letterSpacing: -0.5 }}>
        tripletex
      </div>
    </FadeSlide>
    {navItems.map((item, i) => (
      <SidebarItem key={item.label} iconPath={item.icon} label={item.label} active={item.active} delay={5 + i * 4} />
    ))}
  </div>
);

/* ── Donut Chart (animated) ── */
const DonutChart = ({ size = 130, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cx = size / 2, cy = size / 2, r = size * 0.34, stroke = size * 0.17;
  const segments = [
    { pct: 0.37, color: "#e53935" },
    { pct: 0.28, color: "#ff9800" },
    { pct: 0.20, color: "#4caf50" },
    { pct: 0.15, color: "#26a69a" },
  ];
  const circ = 2 * Math.PI * r;
  const drawProgress = spring({ frame: frame - delay, fps, config: { damping: 35, stiffness: 20, mass: 1.5 } });
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ flexShrink: 0 }}>
      {segments.map((s, i) => {
        const segLen = s.pct * circ * drawProgress;
        const dash = `${segLen} ${circ}`;
        const o = offset;
        offset += s.pct * circ * drawProgress;
        return (
          <circle key={i} cx={cx} cy={cy} r={r}
            fill="none" stroke={s.color} strokeWidth={stroke}
            strokeDasharray={dash} strokeDashoffset={-o}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        );
      })}
    </svg>
  );
};

/* ── Horizontal Bar (animated) ── */
const HBar = ({ segments, height = 14, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 30, stiffness: 25, mass: 1.3 } });
  return (
    <div style={{ display: "flex", borderRadius: height / 2, overflow: "hidden", height, width: `${progress * 100}%` }}>
      {segments.map((s, i) => (
        <div key={i} style={{ flex: s.pct, background: s.color }} />
      ))}
    </div>
  );
};

/* ── Line Chart (animated draw) ── */
const LineChart = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const drawProg = spring({ frame: frame - delay, fps, config: { damping: 35, stiffness: 18, mass: 1.5 } });

  const months = ["jan", "febr", "mars", "april", "mai", "juni", "juli", "aug", "sept", "okt", "nov", "des"];
  const w = 820, h = 220, padL = 70, padR = 20, padT = 10, padB = 30;
  const chartW = w - padL - padR, chartH = h - padT - padB;

  const inntekter =  [1.0, 1.1, 1.0, 0.9, 1.0, 1.1, 1.2, 1.3, 1.2, 1.1, 1.2, 1.3];
  const kostnader =  [-0.8, -1.2, -1.8, -0.9, -1.0, -1.0, -0.8, -1.1, -0.9, -0.8, -0.7, -0.6];
  const overskudd =  [0.2, 0.3, 0.5, 0.7, 0.9, 1.0, 1.2, 1.5, 1.8, 2.0, 2.2, 2.5];

  const yMin = -4, yMax = 3;
  const toX = (i) => padL + (i / (months.length - 1)) * chartW;
  const toY = (v) => padT + ((yMax - v) / (yMax - yMin)) * chartH;

  const makePath = (data) =>
    data.map((v, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(" ");

  const yTicks = [-4, -3, -2, -1, 0, 1, 2];
  const fmt = (v) => {
    if (v === 0) return "0";
    return `${v > 0 ? "" : "-"}${Math.abs(v)},000,000`;
  };

  // Approximate path length for strokeDashoffset animation
  const pathLen = 1200;

  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
      {yTicks.map(v => (
        <React.Fragment key={v}>
          <line x1={padL} x2={w - padR} y1={toY(v)} y2={toY(v)}
            stroke={v === 0 ? colors.textLight : colors.border} strokeWidth={v === 0 ? 1 : 0.5}
            opacity={drawProg} />
          <text x={padL - 8} y={toY(v) + 4} textAnchor="end"
            fontSize={10} fill={colors.textLight} opacity={drawProg}>{fmt(v)}</text>
        </React.Fragment>
      ))}
      <path d={makePath(inntekter)} fill="none" stroke={colors.chartBlue} strokeWidth={2}
        strokeDasharray={pathLen} strokeDashoffset={pathLen * (1 - drawProg)} />
      <path d={makePath(kostnader)} fill="none" stroke={colors.chartOrange} strokeWidth={2}
        strokeDasharray={pathLen} strokeDashoffset={pathLen * (1 - drawProg)} />
      <path d={makePath(overskudd)} fill="none" stroke={colors.chartGreen} strokeWidth={2} strokeDasharray={`6 3`}
        opacity={drawProg} />
      {months.map((m, i) => (
        <text key={m} x={toX(i)} y={h - 6} textAnchor="middle"
          fontSize={10} fill={colors.textLight} opacity={drawProg}>{m}</text>
      ))}
    </svg>
  );
};

/* ── Dot legend ── */
const Dot = ({ color }) => (
  <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 4, background: color, marginRight: 5, verticalAlign: "middle" }} />
);

/* ── Main Dashboard ── */
const TripletexDashboard = () => {
  return (
    <AbsoluteFill style={{ background: colors.bg, fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "24px 28px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Header */}
          <FadeSlide delay={10} direction="down" distance={15} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: colors.text, margin: 0 }}>Tripletex-tavla</h1>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, padding: "7px 16px",
              background: colors.card, borderRadius: 8, border: `1px solid ${colors.border}`,
              fontSize: 13, color: colors.textLight,
            }}>
              <Icon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" size={14} /> Sok
            </div>
          </FadeSlide>

          {/* Top row: 2 green cards + Frister */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 220px", gap: 14 }}>
            {[
              { label: "Bilagsmottak", val: "14", d: 25 },
              { label: "Ikke bokforte bilag", val: "1", d: 35 },
            ].map((c) => (
              <FadeSlide key={c.label} delay={c.d} direction="up" distance={25}>
                <div style={{
                  background: "#e8f5e9", borderRadius: 4, padding: "18px 22px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 90,
                }}>
                  <span style={{ fontSize: 13, color: colors.textMuted }}>{c.label}</span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <span style={{ fontSize: 32, fontWeight: 700, color: colors.text, lineHeight: 1 }}>{c.val}</span>
                    <span style={{ fontSize: 18, color: colors.textLight }}>→</span>
                  </div>
                </div>
              </FadeSlide>
            ))}
            <FadeSlide delay={45} direction="up" distance={15}>
              <div style={{
                background: colors.card, borderRadius: 4, padding: "18px 22px",
                border: `1px solid ${colors.border}`, display: "flex", flexDirection: "column", alignItems: "center",
              }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: colors.text, alignSelf: "flex-start", marginBottom: 8 }}>Frister</span>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", border: `3px solid ${colors.accent}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{ fontSize: 11, color: colors.textLight, textAlign: "center", margin: "6px 0 0", lineHeight: 1.4 }}>
                  Du har ingen frister de neste 10 dagene
                </p>
              </div>
            </FadeSlide>
          </div>

          {/* Middle row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 220px", gap: 14, flex: "0 0 auto" }}>
            {/* Fakturaoversikt */}
            <FadeSlide delay={60} direction="up" distance={20}>
              <div style={{
                background: colors.card, borderRadius: 4, padding: "18px 22px",
                border: `1px solid ${colors.border}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: colors.text }}>Fakturaoversikt</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 11, color: colors.accent, border: `1px solid ${colors.accent}`, borderRadius: 6, padding: "3px 10px", fontWeight: 500 }}>Ny faktura</span>
                    <span style={{ fontSize: 16, color: colors.textLight, fontWeight: 300 }}>+</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <DonutChart size={130} delay={70} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11 }}>
                    {[
                      { label: "Forfalte fakturaer (Over 30 dager)", val: "47 265,84" },
                      { label: "Forfalte fakturaer (1-30 dager)", val: "69 213,90" },
                      { label: "Ikke-forfalte fakturaer", val: "10 963,30" },
                    ].map((r) => (
                      <div key={r.label}>
                        <span style={{ color: colors.textMuted, lineHeight: 1.3, display: "block" }}>{r.label}</span>
                        <span style={{ fontWeight: 700, color: colors.text }}>{r.val}</span>
                      </div>
                    ))}
                    <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: 5, marginTop: 2 }}>
                      <span style={{ color: colors.textMuted }}>Utestaaende fakturaer</span>
                      <div style={{ fontWeight: 700, color: colors.text }}>127 443,04</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeSlide>

            {/* Lonn */}
            <FadeSlide delay={72} direction="up" distance={20}>
              <div style={{
                background: colors.card, borderRadius: 4, padding: "18px 22px",
                border: `1px solid ${colors.border}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: colors.text }}>Lonn</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 11, color: colors.accent, border: `1px solid ${colors.accent}`, borderRadius: 6, padding: "3px 10px", fontWeight: 500 }}>Ny lonnsutbetaling</span>
                    <span style={{ fontSize: 16, color: colors.textLight, fontWeight: 300 }}>+</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: colors.textMuted, marginBottom: 2 }}>Antall ansatte</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: colors.text, marginBottom: 12 }}>2</div>
                <div style={{ fontSize: 11, color: colors.textMuted, marginBottom: 3 }}>
                  Utbetalt denne maneden (01.12.2022 - 31.12.2022)
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: colors.text, marginBottom: 10, letterSpacing: -0.5 }}>
                  76 600,68 NOK
                </div>
                <HBar height={12} delay={85} segments={[
                  { pct: 0.645, color: colors.barBlue },
                  { pct: 0.118, color: colors.barPurple },
                  { pct: 0.237, color: colors.barRed },
                ]} />
                <div style={{ display: "flex", gap: 14, marginTop: 8, fontSize: 10, color: colors.textMuted, flexWrap: "wrap" }}>
                  <span><Dot color={colors.barBlue} />Lonn 64,5 %</span>
                  <span><Dot color={colors.barPurple} />Arbeidsgiveravgift 11,8 %</span>
                  <span><Dot color={colors.barRed} />Skatt 23,7 %</span>
                </div>
              </div>
            </FadeSlide>

            {/* Oppgaver */}
            <FadeSlide delay={84} direction="up" distance={20}>
              <div style={{
                background: colors.card, borderRadius: 4, padding: "18px 22px",
                border: `1px solid ${colors.border}`,
              }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: colors.text, display: "block", marginBottom: 16 }}>Oppgaver</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Icon d={icons.bank} size={20} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: colors.text }}>Bankavstemming</div>
                      <div style={{ fontSize: 11, color: colors.textLight }}>6 poster a avstemme</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Icon d={icons.plane} size={20} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: colors.text }}>Reiser og utlegg</div>
                      <div style={{ fontSize: 11, color: colors.textLight }}>1 reiser/utlegg til godkjenning</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeSlide>
          </div>

          {/* Bottom: Inntekter og kostnader */}
          <FadeSlide delay={100} direction="up" distance={20} style={{ flex: 1, minHeight: 0 }}>
            <div style={{
              background: colors.card, borderRadius: 4, padding: "18px 22px",
              border: `1px solid ${colors.border}`, height: "100%",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: colors.text }}>Inntekter og kostnader</span>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 11, color: colors.accent, border: `1px solid ${colors.accent}`, borderRadius: 6, padding: "3px 12px", fontWeight: 500 }}>Se detaljert rapport</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: colors.text }}>
                    <span style={{ fontWeight: 600 }}>2022</span>
                    <span style={{ color: colors.textLight, fontSize: 16 }}>&#8249; &#8250;</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 20, marginBottom: 4, fontSize: 11, color: colors.textMuted }}>
                <span><Dot color={colors.chartBlue} />Inntekter</span>
                <span><Dot color={colors.chartOrange} />Kostnader</span>
                <span><Dot color={colors.chartGreen} />Overskudd akkumulert</span>
              </div>
              <div style={{ flex: 1, minHeight: 0 }}>
                <LineChart delay={115} />
              </div>
            </div>
          </FadeSlide>

        </div>
      </div>
    </AbsoluteFill>
  );
};

export { TripletexDashboard };
