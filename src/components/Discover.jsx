import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow, Asterisk, ArrowGlyph } from "./Decor";

const tiles = [
  {
    label: "Work",
    title: "Projects",
    sub: "Original IPs, series & films",
    cta: "Explore",
    href: "/work",
  },
  {
    label: "Inside",
    title: "Studio",
    sub: "Our craft, culture & process",
    cta: "Learn more",
    href: "/#about",
  },
  {
    label: "Meet",
    title: "Team",
    sub: "The artists behind the work",
    cta: "Meet them",
    href: "/#team",
  },
];

const Discover = () => {
  return (
    <section className="relative bg-paper border-t border-line overflow-hidden">
      {/* Header */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <div data-reveal="up" className="mb-6 flex justify-center">
          <Eyebrow>Discover</Eyebrow>
        </div>
        <h2
          data-split
          className="headline-vibrant font-display capitalize text-[clamp(1.9rem,7.5vw,7rem)] leading-[0.86] tracking-[-0.04em]"
        >
          Step inside the studio.
        </h2>
        <p
          data-reveal="up"
          data-reveal-delay="0.1"
          className="text-muted mt-6 max-w-md mx-auto leading-relaxed"
        >
          Three doors. Pick yours â€” and meet the worlds we build behind each.
        </p>
      </div>

      {/* Tiles */}
      <div
        data-reveal-group="up"
        className="grid grid-cols-1 md:grid-cols-3 border-t border-line"
      >
        {tiles.map((t, i) => (
          <Link
            key={i}
            to={t.href}
            className="group relative flex flex-col items-center justify-center px-6 md:px-10 py-14 md:py-20 min-h-[400px] md:min-h-[680px] border-b md:border-b-0 md:border-r border-line last:border-r-0 hover:bg-accent transition-colors duration-300"
          >
            {/* Top row â€” index + asterisk (absolute so content can truly center) */}
            <div className="absolute top-8 left-8 right-8 md:top-10 md:left-10 md:right-10 flex items-start justify-between">
              <span className="font-display text-2xl text-ink/30 group-hover:text-ink/60 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Asterisk
                spin
                className="w-14 md:w-20 text-accent group-hover:text-white transition-colors duration-300"
              />
            </div>

            {/* Centered content */}
            <div className="flex flex-col items-center text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted group-hover:text-ink/70 transition-colors">
                {t.label}
              </span>
              <h3 className="font-display capitalize text-5xl md:text-7xl tracking-tight my-3">
                {t.title}
              </h3>
              <p className="text-muted group-hover:text-ink/80 transition-colors mb-8">
                {t.sub}
              </p>
              <span className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink">
                {t.cta}
                <span className="w-9 h-9 rounded-full bg-ink text-paper grid place-items-center group-hover:bg-paper group-hover:text-ink transition-colors">
                  <ArrowGlyph className="w-4 h-4" />
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Discover;
