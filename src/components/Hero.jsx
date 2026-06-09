import React from "react";
import { Asterisk, Pill, ArrowGlyph, Marquee } from "./Decor";
import { VerticalLoop } from "./VerticalLoop";
import { projects } from "../data/constants";

const reelItems = [
  "2D Animation",
  "3D / CGI",
  "VFX",
  "Motion Design",
  "IP Development",
];
/* Repeat enough times that a single marquee copy always exceeds viewport width,
   so the loop never reveals empty space at the reset point. */
const reel = Array.from({ length: 4 }, () => reelItems).flat();

/* Split the project showcase across the two halves so each side rotates
   through a distinct set of stills rather than mirroring the other. */
const leftSlides = projects.filter((_, i) => i % 2 === 0);
const rightSlides = projects.filter((_, i) => i % 2 === 1);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-ink text-paper flex flex-col overflow-hidden"
    >
      {/* Full-bleed image split — fills the entire hero */}
      <div className="absolute inset-0">
        {/* Mobile / small screens: a single full-bleed conveyor */}
        <div className="md:hidden absolute inset-0">
          <VerticalLoop slides={projects} direction="up" />
        </div>

        {/* md+ : left half slides up · right half slides down */}
        <div className="hidden md:flex absolute inset-0">
          <div className="w-1/2 h-full">
            <VerticalLoop slides={leftSlides} direction="up" />
          </div>
          <div className="w-1/2 h-full">
            <VerticalLoop slides={rightSlides} direction="down" />
          </div>
        </div>
      </div>

      {/* Legibility scrim — darkens the imagery so the copy stays readable */}
      <div className="absolute inset-0 bg-linear-to-b from-ink/55 via-ink/45 to-ink/75 pointer-events-none" />
      <div className="absolute inset-0 bg-ink/25 pointer-events-none" />

      {/* Hairline divider down the seam between the two panels */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-paper/20 z-10 pointer-events-none" />

      {/* Floating decorative graphics */}
      <Asterisk
        className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-40 md:w-72 text-accent/80 hidden sm:block z-10"
        spin
      />
      <Asterisk className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 w-36 md:w-64 text-paper/15 hidden sm:block animate-spin-rev z-10" />

      {/* Centred copy, overlaid on the split */}
      <div className="relative z-20 flex-1 flex items-center pt-32 pb-16">
        <div
          data-hero="content"
          className="max-w-275 w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center"
        >
          <h1
            data-split
            className="text-paper font-display capitalize tracking-[-0.04em] leading-[0.86]
                       text-[clamp(2.6rem,9vw,9rem)] drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          >
            Bringing vision
            <br />
            to life.
          </h1>

          <p
            data-reveal="up"
            data-reveal-delay="0.15"
            className="font-script-desc mt-9 text-paper/85 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            A premium animation studio crafting cinematic stories, original
            IPs, and next-gen visual experiences for global audiences.
          </p>

          <div
            data-reveal="up"
            data-reveal-delay="0.25"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Pill as="a" href="#work">
              Explore our work
            </Pill>
            <a
              href="#showreel"
              data-magnetic="0.25"
              className="group inline-flex items-center gap-3 rounded-full border border-paper/30 pl-6 pr-1.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper hover:border-paper/60 transition-colors"
            >
              Watch showreel
              <span className="w-10 h-10 grid place-items-center rounded-full border border-paper/30 group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowGlyph className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee band */}
      <div
        data-hero="marquee"
        className="relative z-20 border-t border-b border-paper/15 bg-ink/85 backdrop-blur-sm py-4 md:py-5"
      >
        <Marquee speed={40}>
          {reel.map((w, i) => (
            <span key={i} className="flex items-center">
              <span
                className={`font-body uppercase leading-none px-6 md:px-8 text-[18px] md:text-[22px] font-semibold tracking-[0.16em] ${
                  i % 2 ? "text-paper/55" : "text-paper"
                }`}
              >
                {w}
              </span>
              <Asterisk className="w-4 md:w-5 text-accent shrink-0" spin />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
