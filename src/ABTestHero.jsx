import React, { useMemo } from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

/* ─── colour tokens ─── */
const BG = "#0f1117";
const CARD_BG = "#181b23";
const CARD_BORDER = "#2a2d38";
const TEXT = "#e4e6ec";
const TEXT_MUTED = "#8b8fa3";
const RED = "#ef4444";
const RED_GLOW = "rgba(239,68,68,.25)";
const GREEN = "#22c55e";
const GREEN_GLOW = "rgba(34,197,94,.25)";
const ACCENT = "#657dff";
const DOT_A = "#f87171";
const DOT_B = "#4ade80";

/* ─── small landing-page card ─── */
function MiniPage({ label, color, glow, rate, frame, fps, side }) {
  const enter = spring({ frame, fps, from: 0, to: 1, durationInFrames: 30 });
  const translateY = interpolate(enter, [0, 1], [40, 0]);
  const opacity = enter;

  return (
    <div
      style={{
        width: 440,
        background: CARD_BG,
        borderRadius: 16,
        border: `1px solid ${CARD_BORDER}`,
        padding: 28,
        opacity,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        boxShadow: `0 8px 32px rgba(0,0,0,.35)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* header bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ef4444",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#facc15",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />
        <div
          style={{
            flex: 1,
            height: 22,
            background: "#22252f",
            borderRadius: 6,
            marginLeft: 12,
          }}
        />
      </div>

      {/* "hero" area */}
      <div
        style={{
          background: "#22252f",
          borderRadius: 10,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              height: 10,
              borderRadius: 4,
              background: "#3a3e4c",
              width: "90%",
            }}
          />
          <div
            style={{
              height: 10,
              borderRadius: 4,
              background: "#3a3e4c",
              width: "60%",
            }}
          />
        </div>
      </div>

      {/* content lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            height: 8,
            borderRadius: 4,
            background: "#2a2d38",
            width: "100%",
          }}
        />
        <div
          style={{
            height: 8,
            borderRadius: 4,
            background: "#2a2d38",
            width: "85%",
          }}
        />
        <div
          style={{
            height: 8,
            borderRadius: 4,
            background: "#2a2d38",
            width: "70%",
          }}
        />
      </div>

      {/* CTA button */}
      <div
        style={{
          alignSelf: "center",
          marginTop: 4,
          padding: "12px 40px",
          borderRadius: 8,
          background: color,
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          boxShadow: `0 0 20px ${glow}`,
          letterSpacing: ".02em",
        }}
      >
        {side === "a" ? "Send inn" : "Kom i gang"}
      </div>

      {/* version badge */}
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 18,
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 700,
          color: TEXT_MUTED,
          letterSpacing: ".08em",
        }}
      >
        {label}
      </div>

      {/* conversion counter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: 6,
          marginTop: 4,
        }}
      >
        <span
          style={{
            fontFamily: "Inter, monospace",
            fontSize: 32,
            fontWeight: 700,
            color,
            textShadow: `0 0 16px ${glow}`,
          }}
        >
          {rate}%
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: TEXT_MUTED,
          }}
        >
          konvertering
        </span>
      </div>
    </div>
  );
}

/* ─── single dot ─── */
function Dot({ startFrame, x, targetY, converts, color, frame }) {
  const age = frame - startFrame;
  if (age < 0) return null;

  const fallDuration = 50;
  const progress = Math.min(age / fallDuration, 1);
  const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

  const y = interpolate(easedProgress, [0, 1], [-20, targetY]);
  const opacity = progress >= 1 ? Math.max(0, 1 - (age - fallDuration) / 15) : 0.9;

  if (opacity <= 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: converts ? 8 : 6,
        height: converts ? 8 : 6,
        borderRadius: "50%",
        background: converts ? color : TEXT_MUTED,
        opacity,
        boxShadow: converts ? `0 0 10px ${color}` : "none",
      }}
    />
  );
}

/* ─── main composition ─── */
export const ABTestHero = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  /* — generate dots seeded per-side — */
  const dots = useMemo(() => {
    const result = [];
    const rng = (seed) => {
      let s = seed;
      return () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };
    };

    // Side A dots — 2.4 % conversion
    const rA = rng(42);
    for (let i = 0; i < 60; i++) {
      const converts = rA() < 0.024;
      result.push({
        side: "a",
        startFrame: 30 + i * 4,
        x: 60 + rA() * 320,
        targetY: 300 + rA() * 60,
        converts,
      });
    }

    // Side B dots — 7.8 % conversion
    const rB = rng(99);
    for (let i = 0; i < 60; i++) {
      const converts = rB() < 0.28;
      result.push({
        side: "b",
        startFrame: 30 + i * 4,
        x: 660 + rB() * 320,
        targetY: 300 + rB() * 60,
        converts,
      });
    }
    return result;
  }, []);

  /* — count conversions for rate display — */
  const countA = dots.filter(
    (d) => d.side === "a" && d.converts && frame >= d.startFrame + 50
  ).length;
  const countTotalA = dots.filter(
    (d) => d.side === "a" && frame >= d.startFrame + 50
  ).length;
  const rateA =
    countTotalA > 0 ? ((countA / countTotalA) * 100).toFixed(1) : "0.0";

  const countB = dots.filter(
    (d) => d.side === "b" && d.converts && frame >= d.startFrame + 50
  ).length;
  const countTotalB = dots.filter(
    (d) => d.side === "b" && frame >= d.startFrame + 50
  ).length;
  const rateB =
    countTotalB > 0 ? ((countB / countTotalB) * 100).toFixed(1) : "0.0";

  /* — title animation — */
  const titleSpring = spring({ frame, fps, from: 0, to: 1, durationInFrames: 25 });
  const titleY = interpolate(titleSpring, [0, 1], [-30, 0]);
  const titleOp = titleSpring;

  /* — winner badge — */
  const showWinner = frame > 260;
  const winnerSpring = spring({
    frame: frame - 260,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 20,
    config: { damping: 12, mass: 0.6 },
  });

  return (
    <div
      style={{
        width: 1200,
        height: 675,
        background: BG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${CARD_BORDER}44 1px, transparent 1px),
            linear-gradient(90deg, ${CARD_BORDER}44 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
        }}
      />

      {/* title */}
      <div
        style={{
          marginTop: 36,
          textAlign: "center",
          opacity: titleOp,
          transform: `translateY(${titleY}px)`,
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: ACCENT,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          A/B Testing
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: TEXT,
            lineHeight: 1.2,
          }}
        >
          Hvilken versjon konverterer best?
        </div>
      </div>

      {/* cards row */}
      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 28,
          zIndex: 2,
          position: "relative",
        }}
      >
        <MiniPage
          label="VERSJON A"
          color={RED}
          glow={RED_GLOW}
          rate={rateA}
          frame={frame}
          fps={fps}
          side="a"
        />
        <MiniPage
          label="VERSJON B"
          color={GREEN}
          glow={GREEN_GLOW}
          rate={rateB}
          frame={frame}
          fps={fps}
          side="b"
        />
      </div>

      {/* dots layer */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        {dots.map((d, i) => (
          <Dot
            key={i}
            startFrame={d.startFrame}
            x={d.x}
            targetY={d.targetY}
            converts={d.converts}
            color={d.side === "a" ? DOT_A : DOT_B}
            frame={frame}
          />
        ))}
      </div>

      {/* winner badge */}
      {showWinner && (
        <div
          style={{
            position: "absolute",
            bottom: 30,
            zIndex: 3,
            opacity: winnerSpring,
            transform: `scale(${interpolate(winnerSpring, [0, 1], [0.6, 1])})`,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(34,197,94,.12)",
            border: `1px solid ${GREEN}55`,
            borderRadius: 50,
            padding: "10px 28px",
          }}
        >
          <span style={{ fontSize: 20 }}>&#9654;</span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: GREEN,
              letterSpacing: ".02em",
            }}
          >
            Versjon B vinner
          </span>
          <span
            style={{
              fontFamily: "Inter, monospace",
              fontSize: 14,
              fontWeight: 600,
              color: TEXT_MUTED,
              marginLeft: 4,
            }}
          >
            +{(parseFloat(rateB) - parseFloat(rateA)).toFixed(1)}pp
          </span>
        </div>
      )}

      {/* divider line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 90,
          bottom: 0,
          width: 1,
          background: `linear-gradient(to bottom, transparent, ${CARD_BORDER}, transparent)`,
          zIndex: 0,
        }}
      />

      {/* VS badge */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 98,
          transform: "translateX(-50%)",
          background: "#22252f",
          border: `1px solid ${CARD_BORDER}`,
          borderRadius: 20,
          padding: "4px 14px",
          fontSize: 12,
          fontWeight: 700,
          color: TEXT_MUTED,
          letterSpacing: ".1em",
          zIndex: 3,
        }}
      >
        VS
      </div>
    </div>
  );
};
