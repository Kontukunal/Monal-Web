import React, { useRef, useEffect, useState } from "react";
import { timeline } from "../data/constants";
import { prefersReducedMotion } from "../hooks/useUiAnimations";
import { Eyebrow, Arrow, Asterisk, Pill, ArrowGlyph } from "./Decor";

const About = () => {
  const sectionRef = useRef(null);
  const arrowRef = useRef(null);
  const [openTimeline, setOpenTimeline] = useState(null);

  /* Arrow points toward the cursor as it moves across the section. */
  useEffect(() => {
    const section = sectionRef.current;
    const arrow = arrowRef.current;
    if (!section || !arrow || prefersReducedMotion()) return;

    const handleMove = (e) => {
      const rect = arrow.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle =
        (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI;
      /* The arrow art natively points up-right (-45°), so offset by +45°. */
      arrow.style.transform = `rotate(${angle + 45}deg)`;
    };

    section.addEventListener("pointermove", handleMove);
    return () => section.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-mist py-24 md:py-36 overflow-hidden border-t border-line"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div data-reveal="up" className="mb-6">
            <Eyebrow>Our Studio</Eyebrow>
          </div>
          <h2
            data-split
            className="headline-vibrant font-display capitalize text-[clamp(2rem,8vw,8rem)] leading-[0.85] tracking-[-0.04em]"
          >
            Why Monal <br className="hidden md:block" />
            stands out.
          </h2>
        </div>

        {/* Row 1 €” "what defines us" style */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 mb-28 md:mb-40">
          {/* Left €” arrow + stat */}
          <div className="relative">
            <div className="absolute inset-0 bg-lattice opacity-60 pointer-events-none" />
            <div data-reveal="left" className="relative flex flex-row md:flex-col items-center md:items-stretch justify-between gap-6 md:gap-10">
              <span
                ref={arrowRef}
                className="inline-block w-24 md:w-52 shrink-0 origin-center transition-transform duration-300 ease-out will-change-transform"
              >
                <Arrow className="w-full text-ink" />
              </span>

              <div className="text-right md:text-left md:border-t md:border-ink/15 md:pt-8">
                <div
                  data-counter="10"
                  data-counter-suffix="+"
                  className="font-display text-[clamp(4rem,9vw,8rem)] leading-none text-ink"
                >
                  10+
                </div>
                <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-muted">
                  Years of cinematic craft
                </div>
              </div>
            </div>
          </div>

          {/* Right €” story + timeline */}
          <div data-reveal="right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink mb-5 flex lg:inline-flex w-full lg:w-auto justify-center lg:justify-start items-center gap-2">
              <Asterisk className="w-3.5 h-3.5 text-accent" spin />
              Our Story
            </p>
            <h3 className="font-display capitalize text-[clamp(2rem,4vw,4rem)] leading-[0.95] tracking-[-0.03em] mb-7 text-center lg:text-left">
              The minds behind the{" "}
              <span className="headline-vibrant">magic.</span>
            </h3>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Monal Digital is a premier animation studio dedicated to pushing
              the boundaries of visual storytelling €” from humble beginnings to
              global recognition, fueled by one singular passion: bringing
              extraordinary visions to life.
            </p>

            {/* Timeline */}
            <div data-reveal-group="up" className="mb-10">
              {timeline.map((item, i) => {
                const open = openTimeline === i;
                return (
                  <div
                    key={i}
                    className={`border-t border-line last:border-b transition-colors ${
                      open ? "bg-paper" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenTimeline(open ? null : i)}
                      aria-expanded={open}
                      className={`group w-full flex gap-6 md:gap-10 items-center py-5 px-4 md:px-6 text-left transition-colors ${
                        open ? "" : "hover:bg-paper"
                      }`}
                    >
                      <div
                        className={`font-display text-3xl md:text-4xl transition-colors w-20 shrink-0 ${
                          open ? "text-accent" : "text-ink/25 group-hover:text-accent"
                        }`}
                      >
                        {item.year}
                      </div>
                      <p
                        className={`transition-colors leading-snug font-medium ${
                          open ? "text-ink" : "text-ink/75 group-hover:text-ink"
                        }`}
                      >
                        {item.event}
                      </p>
                      <span
                        className={`ml-auto grid place-items-center w-8 h-8 rounded-full shrink-0 transition-all duration-300 ${
                          open
                            ? "bg-accent text-ink rotate-90"
                            : "text-ink/30 group-hover:text-accent group-hover:translate-x-1"
                        }`}
                      >
                        <ArrowGlyph className="w-4 h-4" />
                      </span>
                    </button>
                    {item.desc && (
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="group/card flex flex-col sm:flex-row gap-5 md:gap-7 px-4 md:px-6 pt-1 pb-7">
                            <div className="relative w-full sm:w-2/5 md:w-64 shrink-0 overflow-hidden rounded-2xl h-44 sm:h-40 md:h-44 ring-1 ring-ink/10">
                              <img
                                src={item.img}
                                alt={item.event}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                              />
                            </div>
                            <div className="flex flex-col justify-center border-l-2 border-accent pl-5">
                              <p className="text-ink/70 text-[15px] leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Pill as="a" href="#team">
                Dive into our culture
              </Pill>
            </div>
          </div>
        </div>

        {/* Row 2 €” talent + phone mockup */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-reveal="left" className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-7">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0c0c0c"
                strokeWidth="2"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-display capitalize text-[clamp(2rem,4vw,4rem)] leading-[0.95] tracking-[-0.03em] mb-5">
              A powerhouse of <br />
              <span className="headline-vibrant">creative talent.</span>
            </h3>
            <p className="text-muted text-lg leading-relaxed max-w-md">
              100+ artists, directors, and engineers redefining how stories are
              made €” from concept boards to final pixels.
            </p>
          </div>

          {/* Phone mockup */}
          <div
            data-reveal="right"
            className="relative h-[540px] flex items-center justify-center"
          >
            <Asterisk
              className="absolute top-6 right-[14%] w-16 text-accent hidden md:block"
              spin
            />

            <div className="relative w-[268px] h-[528px] rounded-[44px] bg-ink border-[7px] border-ink shadow-[0_40px_90px_-30px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
              <img
                src="https://www.originalfilmart.com/cdn/shop/products/Monster_s_University_2013_original_film_art_a_600x.jpg?v=1580009585"
                alt="Studio art"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card 1 */}
            <div className="absolute top-8 left-2 md:left-0 md:top-12 w-48 md:w-56 rotate-[-5deg] animate-float">
              <div className="bg-paper border border-line rounded-2xl p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-ink font-bold">
                    M
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      Monal Studio
                    </div>
                    <div className="text-[10px] text-muted">
                      Animation · 1.2M fans
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted leading-snug">
                  Welcome to the world of cinematic storytelling €” our craft,
                  your screens.
                </p>
              </div>
            </div>

            {/* Floating card 2 */}
            <div
              className="absolute bottom-16 right-2 md:right-0 md:bottom-20 w-52 md:w-60 rotate-[5deg] animate-float"
              style={{ animationDelay: "1.4s" }}
            >
              <div className="bg-ink text-paper rounded-2xl p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-ink font-bold">
                    G
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Galaxy Warriors</div>
                    <div className="text-[10px] text-white/50">
                      3D Series · 800K
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/65 leading-snug">
                  Our flagship original. A space saga animated frame-by-frame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
