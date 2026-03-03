// ============================================
// WIREFRAME SLIDE — Browser-mockup med wireframe
// ============================================
// Viser en nettside-wireframe i en browser-ramme.
// Seksjonene er konfigurerbare via JSON props.

import React from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { CenteredLayout } from "../layouts/CenteredLayout";
import { themes, googleGradients } from "../lib/colors";
import { fontFamily } from "../lib/fonts";
import { spacing, zIndex } from "../lib/layout";
import { defaults } from "../config/defaults";

// --- Wireframe-seksjoner ---

const WireNav = ({ accent, labels = ["Hjem", "Tjenester", "Om oss"], ctaLabel = "Kontakt" }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
    <div style={{ width: 80, height: 10, borderRadius: 5, background: "#dee2e6" }} />
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {labels.map((label) => (
        <span key={label} style={{ fontSize: 7, fontFamily: fontFamily.body, color: "#adb5bd" }}>{label}</span>
      ))}
      <div style={{ height: 20, borderRadius: 6, background: accent, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12px" }}>
        <span style={{ fontSize: 7, fontFamily: fontFamily.body, color: "#fff", fontWeight: 600 }}>{ctaLabel}</span>
      </div>
    </div>
  </div>
);

const WireHero = ({ accent, title, subtitle, hasImage = true, ctaLabel }) => (
  <div style={{ display: "flex", gap: 20, marginBottom: 16 }}>
    <div style={{ flex: 1, paddingTop: 10 }}>
      {title ? (
        <div style={{ fontSize: 11, fontFamily: fontFamily.body, fontWeight: 700, color: "#495057", lineHeight: 1.4, marginBottom: 10 }}>{title}</div>
      ) : (
        <>
          <div style={{ width: "90%", height: 12, borderRadius: 6, background: "#ced4da", marginBottom: 8 }} />
          <div style={{ width: "65%", height: 12, borderRadius: 6, background: "#ced4da", marginBottom: 14 }} />
        </>
      )}
      {subtitle ? (
        <div style={{ fontSize: 7, fontFamily: fontFamily.body, color: "#868e96", lineHeight: 1.6, marginBottom: 14 }}>{subtitle}</div>
      ) : (
        <>
          <div style={{ width: "100%", height: 6, borderRadius: 3, background: "#e9ecef", marginBottom: 5 }} />
          <div style={{ width: "85%", height: 6, borderRadius: 3, background: "#e9ecef", marginBottom: 5 }} />
          <div style={{ width: "92%", height: 6, borderRadius: 3, background: "#e9ecef", marginBottom: 14 }} />
        </>
      )}
      {ctaLabel && (
        <div style={{ width: 90, height: 24, borderRadius: 7, background: accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8, fontFamily: fontFamily.body, color: "#fff", fontWeight: 600 }}>{ctaLabel}</span>
        </div>
      )}
      {!ctaLabel && (
        <div style={{ width: 90, height: 24, borderRadius: 7, background: accent }}>
          <div style={{ width: 45, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.6)", margin: "9px auto 0" }} />
        </div>
      )}
    </div>
    {hasImage && (
      <div style={{ flex: 1, borderRadius: 8, background: "linear-gradient(135deg, #e9ecef, #dee2e6)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 140 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" opacity="0.3">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#6c757d" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="#6c757d" />
          <path d="M21 15l-5-5L5 21" stroke="#6c757d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )}
  </div>
);

const WireCards = ({ accent, count = 3, labels }) => (
  <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} style={{ flex: 1, borderRadius: 8, background: "#fff", border: "1px solid #e9ecef", padding: "10px 10px" }}>
        <div style={{ width: 20, height: 20, borderRadius: 6, background: i === 0 ? `${accent}22` : "#f1f3f5", marginBottom: 8 }} />
        {labels && labels[i] ? (
          <div style={{ fontSize: 7, fontFamily: fontFamily.body, fontWeight: 600, color: "#495057", marginBottom: 4 }}>{labels[i]}</div>
        ) : (
          <div style={{ width: "80%", height: 7, borderRadius: 3, background: "#dee2e6", marginBottom: 5 }} />
        )}
        <div style={{ width: "60%", height: 5, borderRadius: 3, background: "#e9ecef" }} />
      </div>
    ))}
  </div>
);

const WireText = ({ label }) => (
  <div style={{ marginBottom: 16, padding: "8px 0" }}>
    {label && (
      <div style={{ fontSize: 8, fontFamily: fontFamily.body, fontWeight: 700, color: "#495057", marginBottom: 8 }}>{label}</div>
    )}
    <div style={{ width: "100%", height: 6, borderRadius: 3, background: "#e9ecef", marginBottom: 5 }} />
    <div style={{ width: "95%", height: 6, borderRadius: 3, background: "#e9ecef", marginBottom: 5 }} />
    <div style={{ width: "88%", height: 6, borderRadius: 3, background: "#e9ecef", marginBottom: 5 }} />
    <div style={{ width: "72%", height: 6, borderRadius: 3, background: "#e9ecef" }} />
  </div>
);

const WireImage = ({ label }) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <div style={{ fontSize: 7, fontFamily: fontFamily.body, color: "#adb5bd", marginBottom: 6 }}>{label}</div>
    )}
    <div style={{ width: "100%", height: 100, borderRadius: 8, background: "linear-gradient(135deg, #e9ecef, #dee2e6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.25">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#6c757d" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="#6c757d" />
        <path d="M21 15l-5-5L5 21" stroke="#6c757d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

const WireCTA = ({ accent, label }) => (
  <div style={{ marginBottom: 16, padding: 16, borderRadius: 8, background: `${accent}08`, textAlign: "center" }}>
    {label ? (
      <div style={{ fontSize: 9, fontFamily: fontFamily.body, fontWeight: 700, color: "#495057", marginBottom: 10 }}>{label}</div>
    ) : (
      <div style={{ width: 160, height: 8, borderRadius: 4, background: "#dee2e6", margin: "0 auto 10px" }} />
    )}
    <div style={{ display: "inline-block", height: 22, borderRadius: 6, background: accent, padding: "0 20px", lineHeight: "22px" }}>
      <span style={{ fontSize: 8, fontFamily: fontFamily.body, color: "#fff", fontWeight: 600 }}>CTA</span>
    </div>
  </div>
);

const WireFooter = () => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #e9ecef", paddingTop: 10 }}>
    <div style={{ width: 60, height: 6, borderRadius: 3, background: "#e9ecef" }} />
    <div style={{ display: "flex", gap: 8 }}>
      <div style={{ width: 30, height: 5, borderRadius: 3, background: "#e9ecef" }} />
      <div style={{ width: 30, height: 5, borderRadius: 3, background: "#e9ecef" }} />
      <div style={{ width: 30, height: 5, borderRadius: 3, background: "#e9ecef" }} />
    </div>
  </div>
);

// --- Seksjon-map ---
const sectionRenderers = { nav: WireNav, hero: WireHero, cards: WireCards, text: WireText, image: WireImage, cta: WireCTA, footer: WireFooter };

/**
 * @param {Object} props
 * @param {string} [props.title] - Overskrift over mockupen
 * @param {string} [props.titleStyle] - "normal" | "gradient"
 * @param {string} [props.url] - URL i adressefeltet
 * @param {Array} props.sections - Wireframe-seksjoner
 *   Streng: "nav" | "hero" | "cards" | "text" | "image" | "cta" | "footer"
 *   Objekt: { type: "hero", title: "Velkommen", hasImage: true, ctaLabel: "Bestill" }
 * @param {string} [props.footnote] - Tekst under mockupen
 */
export const WireframeSlide = ({
  title,
  titleStyle = "gradient",
  url = "dinbedrift.no",
  sections = ["nav", "hero", "cards"],
  footnote,
  theme: themeName = defaults.theme,
  gradient: gradientName = defaults.gradient,
  format = defaults.format,
  leafId = "leafWire",
}) => {
  const theme = themes[themeName] || themes.gray;
  const gradient = googleGradients[gradientName] || googleGradients.coral;
  const accent = gradient.colors[0];

  return (
    <BaseLayout theme={themeName} format={format} leafId={leafId}>
      {/* Tittel */}
      {title && (
        <div style={{ position: "absolute", top: 130, left: spacing.margin, right: spacing.margin, textAlign: "center", color: theme.text }}>
          <div style={{ fontSize: 46, fontWeight: 500, lineHeight: 1.3 }}>
            {titleStyle === "gradient" ? (
              <span style={{ background: gradient.css, backgroundSize: "200% 100%", backgroundPosition: "100% 0%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {title}
              </span>
            ) : title}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
            <div style={{ width: 100, height: 2, background: gradient.css, borderRadius: 1 }} />
          </div>
        </div>
      )}

      {/* Browser mockup */}
      <div
        style={{
          position: "absolute",
          bottom: footnote ? 100 : 60,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: zIndex.frontImage,
        }}
      >
        <div
          style={{
            width: 860,
            borderRadius: 14,
            background: "#fff",
            boxShadow: "0 12px 48px rgba(27,42,74,0.10), 0 2px 8px rgba(27,42,74,0.05)",
            overflow: "hidden",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              height: 30,
              background: "#f8f9fa",
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: 6,
              borderBottom: "1px solid #e9ecef",
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
            <div
              style={{
                marginLeft: 12,
                flex: 1,
                height: 16,
                borderRadius: 4,
                background: "#e9ecef",
                display: "flex",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" style={{ marginRight: 5 }}>
                <rect x="3" y="11" width="18" height="2" rx="1" fill="#adb5bd" />
                <rect x="3" y="11" width="8" height="2" rx="1" fill={accent} />
              </svg>
              <span style={{ fontSize: 7, fontFamily: fontFamily.body, color: "#adb5bd" }}>
                {url}
              </span>
            </div>
          </div>

          {/* Wireframe innhold */}
          <div style={{ padding: 18, background: "#fafbfc" }}>
            {sections.map((section, i) => {
              const isObj = typeof section === "object";
              const type = isObj ? section.type : section;
              const Renderer = sectionRenderers[type];
              if (!Renderer) return null;
              const sectionProps = isObj ? { ...section, accent } : { accent };
              return <Renderer key={`${type}-${i}`} {...sectionProps} />;
            })}
          </div>
        </div>
      </div>

      {/* Fotnote */}
      {footnote && (
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: spacing.margin,
            right: spacing.margin,
            textAlign: "center",
            fontSize: 22,
            fontFamily: fontFamily.body,
            color: theme.text,
            opacity: 0.5,
          }}
        >
          {footnote}
        </div>
      )}
    </BaseLayout>
  );
};
