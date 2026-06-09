import React from "react";
import { projects } from "../data/constants";
import { Eyebrow, ArrowGlyph } from "./Decor";

/* Mosaic span pattern, indexed in step with `projects`. Every tile is two rows
   tall (so the portrait key art is never squashed) and the row alternates a big
   2-wide feature with two tall portrait tiles. Spans stay ≤ 2 so the same
   pattern tiles cleanly — and gap-free — at both 2 columns (mobile) and 4
   columns (desktop). */
const SPANS = [
  "col-span-2 row-span-2", // big feature (top-left)
  "col-span-1 row-span-2", // tall
  "col-span-1 row-span-2", // tall
  "col-span-1 row-span-2", // tall (bottom-left)
  "col-span-1 row-span-2", // tall (bottom-centre)
  "col-span-2 row-span-2", // big feature (bottom-right)
];

const ContentLibrary = () => {
  return (
    <section
      id="work"
      className="relative bg-paper text-ink py-20 md:py-28 overflow-hidden"
    >
      {/* Faint dotted texture */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-12 md:mb-16">
          <div className="flex flex-col items-center">
            <div data-reveal="up" className="mb-6">
              <Eyebrow>Content Library</Eyebrow>
            </div>
            <h2
              data-split
              className="headline-vibrant font-display capitalize text-[clamp(1.9rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.04em]"
            >
              Award-winning stories.
            </h2>
          </div>
          <p
            data-reveal="up"
            data-reveal-delay="0.1"
            className="font-script-desc text-muted max-w-sm leading-relaxed"
          >
            A curated catalog of original IPs, co-productions, and series —
            crafted frame by frame at Monal.
          </p>
        </div>

        {/* Asymmetric image mosaic */}
        <div
          data-reveal-group="zoom"
          className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 auto-rows-[150px] md:auto-rows-[175px] lg:auto-rows-[200px] gap-3 md:gap-4"
        >
          {projects.map((p, i) => {
            const span = SPANS[i % SPANS.length];
            return (
              <article
                key={p.title}
                data-tilt="4"
                className={`group relative overflow-hidden rounded-[22px] ring-1 ring-line bg-mist ${span}`}
              >
                {/* Key art */}
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                />

                {/* Hover scrim */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Accent ring on hover */}
                <div className="absolute inset-0 rounded-[22px] ring-0 ring-accent/0 group-hover:ring-2 group-hover:ring-accent/70 transition-all duration-500 pointer-events-none" />

                {/* Title + arrow (slides up from bottom) */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display capitalize text-white leading-[0.95] tracking-tight text-xl md:text-2xl drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
                    {p.title}
                  </h3>
                  <span className="shrink-0 w-9 h-9 grid place-items-center rounded-full bg-accent text-ink">
                    <ArrowGlyph className="w-4 h-4" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
