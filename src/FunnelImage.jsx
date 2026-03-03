import React from "react";

const ACCENT = "#657dff";
const GREEN = "#22c55e";
const RED = "#ef4444";
const TEXT = "#111";
const TEXT_MUTED = "#888";
const LIGHT_BG = "#f4f5f7";

function FunnelBar({ width, color, opacity = 1 }) {
  return (
    <div
      style={{
        height: 44,
        width,
        background: color,
        borderRadius: 8,
        opacity,
        transition: "width 0.3s",
      }}
    />
  );
}

function FunnelStage({ label, count, barWidth, color, opacity }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div
        style={{
          width: 110,
          textAlign: "right",
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 500,
          color: TEXT_MUTED,
          flexShrink: 0,
        }}
      >
        {label}
      </div>
      <FunnelBar width={barWidth} color={color} opacity={opacity} />
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 15,
          fontWeight: 700,
          color: TEXT,
          flexShrink: 0,
          minWidth: 60,
        }}
      >
        {count}
      </div>
    </div>
  );
}

function FunnelBlock({ title, titleColor, stages, badge, badgeColor, badgeBg }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #e8e9ed",
        padding: "32px 36px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        flex: 1,
        boxShadow: "0 2px 16px rgba(0,0,0,.04)",
        position: "relative",
      }}
    >
      {/* badge */}
      {badge && (
        <div
          style={{
            position: "absolute",
            top: -14,
            right: 28,
            background: badgeBg,
            color: badgeColor,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            padding: "5px 16px",
            borderRadius: 20,
            letterSpacing: ".03em",
          }}
        >
          {badge}
        </div>
      )}

      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 15,
          fontWeight: 700,
          color: titleColor,
          letterSpacing: ".02em",
          marginBottom: 4,
        }}
      >
        {title}
      </div>

      {stages.map((s, i) => (
        <FunnelStage key={i} {...s} />
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        flexShrink: 0,
        width: 80,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M12 20h16M22 14l6 6-6 6"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          fontWeight: 600,
          color: ACCENT,
          letterSpacing: ".06em",
          textTransform: "uppercase",
        }}
      >
        A/B test
      </div>
    </div>
  );
}

export const FunnelImage = () => {
  const unoptimized = [
    { label: "Besøkende", count: "10 000", barWidth: 380, color: "#d1d5e0", opacity: 1 },
    { label: "Klikk", count: "1 800", barWidth: 190, color: "#bfc4d1", opacity: 0.85 },
    { label: "Skjema åpnet", count: "600", barWidth: 90, color: "#aab0c1", opacity: 0.7 },
    { label: "Konvertert", count: "120", barWidth: 36, color: RED, opacity: 1 },
  ];

  const optimized = [
    { label: "Besøkende", count: "10 000", barWidth: 380, color: "#d1d5e0", opacity: 1 },
    { label: "Klikk", count: "3 400", barWidth: 280, color: "#a5d8bf", opacity: 0.85 },
    { label: "Skjema åpnet", count: "1 700", barWidth: 190, color: "#7cc9a0", opacity: 0.8 },
    { label: "Konvertert", count: "510", barWidth: 130, color: GREEN, opacity: 1 },
  ];

  return (
    <div
      style={{
        width: 1800,
        height: 600,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* subtle dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#e0e2e8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          zIndex: 1,
          width: "100%",
          maxWidth: 1600,
        }}
      >
        <FunnelBlock
          title="Uten optimalisering"
          titleColor={TEXT_MUTED}
          stages={unoptimized}
        />

        <Arrow />

        <FunnelBlock
          title="Etter A/B testing"
          titleColor={GREEN}
          stages={optimized}
          badge="+325% konvertering"
          badgeColor="#fff"
          badgeBg={GREEN}
        />
      </div>

      {/* bottom rate comparison */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          display: "flex",
          gap: 40,
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: TEXT_MUTED,
            }}
          >
            Konverteringsrate:
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: RED,
            }}
          >
            1.2%
          </span>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke={ACCENT}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: TEXT_MUTED,
            }}
          >
            Konverteringsrate:
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: GREEN,
            }}
          >
            5.1%
          </span>
        </div>
      </div>
    </div>
  );
};
