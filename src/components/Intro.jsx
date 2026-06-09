import React from "react";
import { projects } from "../data/constants";
import { Pill, ArrowGlyph } from "./Decor";
import { VerticalLoop } from "./VerticalLoop";

const Intro = () => {
  return (
    <section
      id="intro"
      className="relative bg-paper overflow-hidden border-b border-line"
    >
      {/* Faint dotted texture (behind the text) */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      {/* Right half — a single full-bleed moving image rail (centre → right) */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2">
        <VerticalLoop slides={projects} direction="up" />
        {/* Soft fade so the imagery melts into the paper at the seam */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-paper to-transparent pointer-events-none" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 pt-32 pb-20 md:pt-40 md:pb-32 md:min-h-[620px] flex items-center">
        {/* Left — text only */}
        <div className="w-full md:w-1/2 md:pr-12 flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="headline-vibrant font-display capitalize text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.88] tracking-[-0.04em]">
            Bringing vision
            <br />
            to life.
          </h2>

          <p className="font-script-desc text-muted text-lg md:text-xl leading-relaxed max-w-md mt-7">
            A premium animation studio crafting cinematic stories, original IPs,
            and next-gen visual experiences for global audiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Pill as="a" href="#work">
              See our work
            </Pill>
            <a
              href="#showreel"
              data-magnetic="0.25"
              className="group inline-flex items-center gap-3 rounded-full border border-line pl-6 pr-1.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink hover:border-ink/40 transition-colors"
            >
              Watch showreel
              <span className="w-10 h-10 grid place-items-center rounded-full border border-line group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowGlyph className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Mobile — moving rail below the text */}
          <div className="md:hidden mt-12 w-full h-[360px] rounded-[24px] overflow-hidden ring-1 ring-line shadow-[0_30px_70px_-35px_rgba(12,12,12,0.5)]">
            <VerticalLoop slides={projects} direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
