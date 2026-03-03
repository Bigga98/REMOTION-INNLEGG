// ============================================
// TRIPLETEX — Support Chat Illustration
// ============================================
// Full-frame chat. Bakgrunn matcher support-seksjon (#f9fafb).

import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";

const blue = {
  50: "#eef1ff", 100: "#dfe5ff", 200: "#c5cdff", 300: "#a2abff",
  400: "#7c7dff", 500: "#5b55f8", 600: "#0532ff",
};
const teal = {
  50: "#f0f9fc", 200: "#b8e3f0", 400: "#59b3cc", 700: "#29637d",
};
const n = {
  50: "#f9fafb", 100: "#f1f3f5", 200: "#e5e7eb", 400: "#9ca3af",
  500: "#6b7280", 800: "#1f2937", 900: "#111827",
};

const ChatBubble = ({ msg, isUser, opacity, translateY }) => (
  <div style={{
    display: "flex", justifyContent: isUser ? "flex-end" : "flex-start",
    opacity, transform: `translateY(${translateY}px)`, marginBottom: 16,
  }}>
    {!isUser && (
      <div style={{
        width: 36, height: 36, borderRadius: "50%", marginRight: 12, flexShrink: 0,
        background: `linear-gradient(135deg, ${blue[600]}, ${blue[400]})`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l.146.146A3 3 0 0118.159 21H5.84a3 3 0 01-2.449-4.721l.146-.146z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )}
    <div style={{
      maxWidth: "72%", padding: "14px 20px", borderRadius: 18,
      background: isUser ? `linear-gradient(135deg, ${blue[600]}, ${blue[500]})` : "#fff",
      color: isUser ? "#fff" : n[800],
      fontSize: 15, lineHeight: 1.55, fontWeight: 400,
      border: isUser ? "none" : `1px solid ${n[200]}`,
      boxShadow: isUser ? `0 4px 16px ${blue[200]}` : `0 1px 4px rgba(0,0,0,0.03)`,
      borderBottomRightRadius: isUser ? 6 : 18,
      borderBottomLeftRadius: isUser ? 18 : 6,
    }}>
      {msg}
    </div>
  </div>
);

const messages = [
  { msg: "Hei! Hvordan registrerer jeg en faktura?", isUser: true, delay: 10 },
  { msg: "Hei! Du kan registrere en faktura under Faktura \u2192 Ny faktura. Fyll inn kundeinfo, linjer og beløp \u2014 så sender du den med ett klikk.", isUser: false, delay: 40 },
  { msg: "Kan jeg sette opp automatisk purring?", isUser: true, delay: 80 },
  { msg: "Absolutt! Gå til Innstillinger \u2192 Faktura \u2192 Purring. Der velger du antall dager og purregebyr. Systemet sender purringer automatisk.", isUser: false, delay: 110 },
];

export const TripletexSupportChat = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - 2, fps, config: { damping: 18, stiffness: 90 } });
  const op = interpolate(frame, [2, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const showTyping1 = frame >= 35 && frame < 40;
  const showTyping2 = frame >= 105 && frame < 110;

  return (
    <AbsoluteFill style={{
      background: n[50],
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: 40,
      opacity: op,
      transform: `scale(${interpolate(enter, [0, 1], [0.96, 1])})`,
    }}>
      <div style={{
        width: "100%", height: "100%",
        background: n[100],
        borderRadius: 24,
        boxShadow: `0 1px 0 0 ${n[200]}, 0 20px 80px ${blue[50]}, 0 4px 20px rgba(0,0,0,0.03)`,
        border: `1px solid ${n[200]}`,
        overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{
          height: 72, padding: "0 28px", flexShrink: 0,
          display: "flex", alignItems: "center", gap: 14,
          background: "#fff", borderBottom: `1px solid ${n[200]}`,
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12,
            background: blue[50], border: `1px solid ${blue[100]}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={blue[600]} strokeWidth={2}>
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: n[900] }}>Tripletex Support</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: teal[400] }} />
              <span style={{ fontSize: 12, color: n[400] }}>AI-assistent — alltid tilgjengelig</span>
            </div>
          </div>
          <div style={{ padding: "5px 14px", borderRadius: 10, background: teal[50], border: `1px solid ${teal[200]}` }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: teal[700] }}>Online</span>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, padding: 28, display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
          {messages.map((m, i) => {
            const p = spring({ frame: frame - m.delay, fps, config: { damping: 20, stiffness: 100 } });
            if (frame < m.delay) return null;
            return <ChatBubble key={i} msg={m.msg} isUser={m.isUser}
              opacity={interpolate(p, [0, 0.3], [0, 1], { extrapolateRight: "clamp" })}
              translateY={interpolate(p, [0, 1], [16, 0])} />;
          })}
          {(showTyping1 || showTyping2) && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                background: `linear-gradient(135deg, ${blue[600]}, ${blue[400]})`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l.146.146A3 3 0 0118.159 21H5.84a3 3 0 01-2.449-4.721l.146-.146z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ padding: "12px 20px", borderRadius: 18, borderBottomLeftRadius: 6, background: "#fff", border: `1px solid ${n[200]}`, display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: blue[300], opacity: 0.3 + 0.7 * Math.sin((frame * 0.15) + i * 1.2) }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{
          height: 64, padding: "0 20px", flexShrink: 0,
          display: "flex", alignItems: "center", gap: 12,
          background: "#fff", borderTop: `1px solid ${n[200]}`,
        }}>
          <div style={{
            flex: 1, height: 42, borderRadius: 12,
            background: n[50], border: `1px solid ${n[200]}`,
            display: "flex", alignItems: "center", paddingLeft: 16,
          }}>
            <span style={{ fontSize: 14, color: n[400] }}>Skriv en melding...</span>
          </div>
          <div style={{
            width: 42, height: 42, borderRadius: 12,
            background: `linear-gradient(135deg, ${blue[600]}, ${blue[500]})`,
            boxShadow: `0 4px 12px ${blue[200]}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5}>
              <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
