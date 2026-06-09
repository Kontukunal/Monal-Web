import React from "react";
import { brands } from "../data/constants";
import { Eyebrow, Asterisk } from "./Decor";

/* Per-card soft gradient + accent colour, indexed in step with `brands`.
   Each card gets its own tint and a unique decorative shape behind the logo. */
const CARDS = [
  { bg: "linear-gradient(135deg,#eaf1ff 0%,#f7faff 100%)", accent: "#3b6dff" },
  { bg: "linear-gradient(135deg,#e8faf1 0%,#f5fffb 100%)", accent: "#10b981" },
  { bg: "linear-gradient(135deg,#fff2e3 0%,#fffaf2 100%)", accent: "#f59e0b" },
];

/* A different arrangement of shapes behind each logo so no two cards repeat. */
const BrandDecor = ({ index, accent }) => {
  if (index % 3 === 0)
    return (
      <>
        {/* organic blob + ring */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 opacity-25 transition-transform duration-700 group-hover:scale-110"
          style={{
            background: accent,
            borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%",
          }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-15"
          style={{ background: accent }}
        />
      </>
    );
  if (index % 3 === 1)
    return (
      <>
        {/* spinning asterisk + tilted rounded square */}
        <div
          className="absolute -top-12 -left-12 w-44 opacity-20"
          style={{ color: accent }}
        >
          <Asterisk spin className="w-full" />
        </div>
        <div
          className="absolute -bottom-10 -right-10 w-32 h-32 rotate-12 rounded-[34px] opacity-15 transition-transform duration-700 group-hover:rotate-45"
          style={{ background: accent }}
        />
      </>
    );
  return (
    <>
      {/* concentric rings + dot grid */}
      <div
        className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-25"
        style={{
          background: `radial-gradient(circle, transparent 40%, ${accent} 41%, ${accent} 46%, transparent 47%, transparent 64%, ${accent} 65%, ${accent} 70%, transparent 71%)`,
        }}
      />
      <div className="absolute top-6 left-6 grid grid-cols-3 gap-1.5 opacity-25">
        {Array.from({ length: 9 }).map((_, k) => (
          <span
            key={k}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accent }}
          />
        ))}
      </div>
    </>
  );
};

const Partners = () => {
  return (
    <section
      id="partners"
      className="relative bg-paper py-20 md:py-28 overflow-hidden border-b border-line"
    >
      {/* Header */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6 mb-14 md:mb-20">
        <div className="flex flex-col items-center">
          <div data-reveal="up" className="mb-6">
            <Eyebrow>Our Partners</Eyebrow>
          </div>
          <h2
            data-split
            className="headline-vibrant font-display capitalize text-[clamp(1.9rem,6vw,5.5rem)] leading-[0.88] tracking-[-0.04em]"
          >
            Trusted globally.
          </h2>
        </div>
        <p
          data-reveal="up"
          data-reveal-delay="0.1"
          className="font-script-desc text-muted max-w-xs leading-relaxed"
        >
          Studios, networks, and brands that bring their stories to our desks.
        </p>
      </div>

      {/* Partner cards */}
      <div
        data-reveal-group="up"
        className="max-w-[1100px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {brands.map((b, i) => {
          const card = CARDS[i % CARDS.length];
          return (
            <div
              key={b.name}
              data-tilt="5"
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-line min-h-[270px] md:min-h-[300px] p-7 md:p-8"
              style={{ background: card.bg }}
            >
              <BrandDecor index={i} accent={card.accent} />

              {/* Faint dotted texture */}
              <div className="absolute inset-0 bg-dots opacity-[0.12] pointer-events-none" />

              {/* Logo, in real colour, with a soft glow for legibility */}
              <div className="relative flex-1 grid place-items-center py-6">
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-32 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)",
                  }}
                />
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  className={`relative max-h-16 md:max-h-20 w-auto max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-110 ${
                    b.name === "Adruto" ? "scale-150" : ""
                  }`}
                  style={{ filter: "brightness(0)" }}
                />
              </div>

              {/* Footer */}
              <div className="relative mt-2 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="font-display capitalize text-base md:text-lg text-ink">
                  {b.name}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  <Asterisk spin className="w-3 h-3 text-accent" />
                  Partner
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
