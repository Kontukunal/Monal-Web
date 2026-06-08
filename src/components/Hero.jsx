import React from "react";
import { Asterisk, Eyebrow, Pill, ArrowGlyph, Marquee } from "./Decor";

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

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-paper flex flex-col overflow-hidden"
    >
      {/* Faint dotted texture */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      {/* Floating decorative graphics */}
      <Asterisk
        className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-40 md:w-72 text-accent hidden sm:block"
        spin
      />
      <Asterisk className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 w-36 md:w-64 text-ink/15 hidden sm:block animate-spin-rev" />

      {/* Main content */}
      <div className="flex-1 flex items-center pt-32 pb-16">
        <div
          data-hero="content"
          className="max-w-[1500px] w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center"
        >
          <div data-reveal="up" className="mb-8">
            <Eyebrow>Animation Studio · Est. 2015 · Haldwani</Eyebrow>
          </div>

          <h1
            data-split
            className="headline-vibrant font-display capitalize tracking-[-0.04em] leading-[0.86] text-[clamp(2.2rem,10.5vw,11rem)]"
          >
            Bringing vision
            <br />
            to life.
          </h1>

          <div className="mt-12 flex flex-col items-center gap-10">
            <p
              data-reveal="up"
              data-reveal-delay="0.15"
              className="text-muted text-lg md:text-xl leading-relaxed max-w-xl"
            >
              A premium animation studio crafting cinematic stories, original
              IPs, and next-gen visual experiences for global audiences.
            </p>

            <div
              data-reveal="up"
              data-reveal-delay="0.25"
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Pill as="a" href="#work">
                Explore our work
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
          </div>
        </div>
      </div>

      {/* Bottom marquee band */}
      <div
        data-hero="marquee"
        className="relative border-t border-b border-line bg-paper py-4 md:py-5"
      >
        <Marquee speed={40}>
          {reel.map((w, i) => (
            <span key={i} className="flex items-center">
              <span
                className={`font-body uppercase leading-none px-6 md:px-8 text-[18px] md:text-[22px] font-semibold tracking-[0.16em] ${
                  i % 2 ? "text-ink/55" : "text-ink"
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
