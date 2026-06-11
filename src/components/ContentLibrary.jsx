import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/constants";
import { Panel } from "./Panel";
import { Eyebrow, ArrowGlyph } from "./Decor";

const SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-2 row-span-2",
];

const TILE_COLORS = ["#5b46e8", "#ec4899", "#fb7a3c", "#22c55e", "#3b82f6", "#facc15"];

const ContentLibrary = () => {
  return (
    <Panel id="work" bg="bg-mist">
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-28 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-12 md:mb-16">
          <div data-reveal="up">
            <Eyebrow dot="bg-accent">Content Library</Eyebrow>
          </div>
          <h2
            data-reveal="up"
            data-reveal-delay="0.08"
            className="font-display capitalize text-ink text-[clamp(2rem,6.5vw,5rem)] leading-[0.96] max-w-3xl"
          >
            Award-winning <span className="headline-vibrant">stories.</span>
          </h2>
        </div>

        {/* Mosaic */}
        <div
          data-reveal-group="zoom"
          className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 auto-rows-[120px] md:auto-rows-[150px] gap-3 md:gap-4"
        >
          {projects.map((p, i) => {
            const color = TILE_COLORS[i % TILE_COLORS.length];
            return (
              <Link
                to="/work"
                key={p.title}
                data-tilt="4"
                className={`group relative overflow-hidden rounded-[22px] bg-cloud ${SPANS[i % SPANS.length]}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className="absolute inset-0 rounded-[22px] ring-0 group-hover:ring-[3px] transition-all duration-500 pointer-events-none"
                  style={{ "--tw-ring-color": color }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-white leading-[0.95] text-xl md:text-2xl drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
                    {p.title}
                  </h3>
                  <span
                    className="shrink-0 w-9 h-9 grid place-items-center rounded-full text-white"
                    style={{ background: color }}
                  >
                    <ArrowGlyph className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Panel>
  );
};

export default ContentLibrary;
