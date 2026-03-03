import React from "react";

export const ChatIllustrasjon = () => {
  return (
    <div style={{
      width: 1080,
      height: 1080,
      background: "#ffffff",
      fontFamily: "'General Sans', -apple-system, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Chat-panel — stikker opp fra bunnen */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 920,
        height: 980,
        background: "#f7f7f5",
        borderRadius: "36px 36px 0 0",
        boxShadow: "0 -8px 60px rgba(0,0,0,0.07), 0 -2px 8px rgba(0,0,0,0.03)",
        border: "2px solid rgba(0,0,0,0.1)",
        borderBottom: "none",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Header */}
        <div style={{
          padding: "40px 48px 32px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
          {/* Venstre ikon */}
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            <path d="M8 7h8M8 11h5"/>
          </svg>

          {/* Tittel */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 42, fontWeight: 500, color: "#1a1a1a" }}>Mediegruppen</div>
          </div>

          {/* Høyre ikon */}
          <div style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            border: "2px solid #1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="7" cy="12" r="1.5" fill="#1a1a1a"/>
              <circle cx="12" cy="12" r="1.5" fill="#1a1a1a"/>
              <circle cx="17" cy="12" r="1.5" fill="#1a1a1a"/>
            </svg>
          </div>
        </div>

        {/* Logo + velkomst */}
        <div style={{ padding: "10px 48px 24px", textAlign: "center" }}>
          <div style={{
            width: 100,
            height: 100,
            borderRadius: 28,
            background: "#1a1a1a",
            margin: "0 auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: 48, color: "#fff", fontFamily: "'Panchang', sans-serif", fontWeight: 500 }}>M</span>
          </div>
          <div style={{ fontSize: 52, color: "#bbb", fontWeight: 400, lineHeight: 1.2, fontFamily: "'IBM Plex Serif', serif" }}>
            Hei, Thomas.
          </div>
          <div style={{ fontSize: 52, color: "#1a1a1a", fontWeight: 500, lineHeight: 1.2, marginTop: 8 }}>
            Hvordan kan vi hjelpe?
          </div>
        </div>

        {/* Bruker-melding */}
        <div style={{ padding: "14px 48px 16px", display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            background: "#1a1a1a",
            color: "#fff",
            fontSize: 32,
            fontWeight: 400,
            padding: "22px 36px",
            borderRadius: 28,
            lineHeight: 1.4,
            maxWidth: "88%",
            textAlign: "left",
          }}>
            Hei, kunne du hjulpet oss med å legge inn et innlegg på nettsiden våres?
          </div>
        </div>

        {/* Svar-kort */}
        <div style={{
          margin: "14px 36px 0",
          padding: "28px 32px",
          borderRadius: 24,
          background: "#edece8",
        }}>
          <div style={{ fontSize: 32, color: "#1a1a1a", lineHeight: 1.5 }}>
            Hei! Klart det, send over så ordner jeg det med en gang. Trenger du noe annet på siden også?
          </div>
        </div>

        {/* Bunn-gradient */}
        <div style={{ flex: 1 }} />
        <div style={{
          height: 220,
          background: "linear-gradient(to top, rgba(232,140,50,0.55) 0%, rgba(240,170,60,0.4) 30%, rgba(245,195,70,0.2) 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 80%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 80%, transparent 100%)",
        }} />

      </div>
    </div>
  );
};
