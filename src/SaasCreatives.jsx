import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { fontFamily } from "./lib/fonts";

export const SaasCreatives = () => {
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1080,
          transform: "scale(2)",
          transformOrigin: "top left",
          fontFamily: fontFamily.headline,
          overflow: "hidden",
        }}
      >
        {/* Bakgrunn — lys grå */}
        <div style={{ position: "absolute", inset: 0, background: "#eeeff2" }} />

        {/* Dekorative elementer øverst */}
        {/* Lilla stjerne */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          style={{ position: "absolute", top: 25, left: 80, opacity: 0.9 }}
        >
          <path
            d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8L8 14 2 9.2h7.6z"
            fill="#5f1afd"
          />
        </svg>
        {/* Liten lilla stjerne */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ position: "absolute", top: 60, left: 160, opacity: 0.6 }}
        >
          <path
            d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8L8 14 2 9.2h7.6z"
            fill="#5f1afd"
          />
        </svg>
        {/* Dekorativ bue */}
        <svg
          width="140"
          height="80"
          viewBox="0 0 140 80"
          style={{ position: "absolute", top: 10, right: 120, opacity: 0.7 }}
        >
          <path
            d="M10 70 Q70 -10 130 70"
            stroke="#5f1afd"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="130" cy="70" r="6" fill="#5f1afd" />
          <circle cx="10" cy="70" r="6" fill="#5f1afd" />
        </svg>
        {/* Rosa dekorativ prikk */}
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 60,
            width: 40,
            height: 40,
            background: "#f9edf9",
            borderRadius: "50%",
            opacity: 0.8,
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <img
            src={staticFile("logo.png")}
            style={{ width: 22, height: 22 }}
          />
          <span
            style={{
              fontFamily: fontFamily.logo,
              fontSize: 13,
              color: "#171921",
              letterSpacing: "0.5px",
            }}
          >
            mediegruppen
          </span>
        </div>

        {/* Hovedtittel — nøyaktig linjeskift */}
        <div
          style={{
            position: "absolute",
            top: 155,
            left: 60,
            right: 60,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#171921",
              letterSpacing: "-0.5px",
            }}
          >
            SaaS companies{" "}
            <span style={{ color: "#5f1afd" }}>waste</span>
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#5f1afd",
              letterSpacing: "-0.5px",
            }}
          >
            up to 40% of ad budget
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#171921",
              letterSpacing: "-0.5px",
            }}
          >
            on weak creatives
          </div>
        </div>

        {/* Kulepunkter */}
        <div
          style={{
            position: "absolute",
            top: 380,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            fontFamily: fontFamily.body,
            fontSize: 14,
            color: "#6b6d75",
          }}
        >
          <span>✕ Not targeting</span>
          <span>✕ Not testing</span>
          <span>✕ Not converting</span>
        </div>

        {/* Lilla seksjon */}
        <div
          style={{
            position: "absolute",
            top: 480,
            left: 0,
            right: 0,
            height: 220,
            background: "linear-gradient(160deg, #5f1afd 0%, #3d2d6e 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              lineHeight: 1.25,
              padding: "0 80px",
            }}
          >
            We break down how to fix this
            <br />
            step by step in our free webinar
          </div>
          <div
            style={{
              background: "#d7f851",
              color: "#171921",
              fontFamily: fontFamily.body,
              fontSize: 14,
              fontWeight: 600,
              padding: "10px 28px",
              borderRadius: 30,
              letterSpacing: "0.3px",
            }}
          >
            Save your spot!
          </div>
        </div>

        {/* Grå placeholder-bokser (erstatter nettside-mockups) */}
        <div
          style={{
            position: "absolute",
            top: 720,
            left: 30,
            right: 30,
            bottom: 30,
            display: "flex",
            gap: 12,
          }}
        >
          <div
            style={{
              flex: 1,
              background: "rgba(0,0,0,0.06)",
              borderRadius: 10,
              border: "2px dashed rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div
            style={{
              flex: 1,
              background: "rgba(0,0,0,0.06)",
              borderRadius: 10,
              border: "2px dashed rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div
            style={{
              flex: 1,
              background: "rgba(0,0,0,0.06)",
              borderRadius: 10,
              border: "2px dashed rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        </div>

        {/* Blad-dekorasjon */}
        <svg
          width="1800"
          height="1800"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            bottom: -900,
            right: -900,
            opacity: 0.06,
            transform: "rotate(-30deg)",
            pointerEvents: "none",
          }}
        >
          <defs>
            <radialGradient id="leafSaas" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#171921" stopOpacity="0" />
              <stop offset="70%" stopColor="#171921" stopOpacity="0" />
              <stop offset="100%" stopColor="#171921" stopOpacity="1" />
            </radialGradient>
          </defs>
          <path
            d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            fill="url(#leafSaas)"
          />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
