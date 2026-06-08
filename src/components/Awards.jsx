import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "../hooks/useUiAnimations";
import { awards } from "../data/constants";
import { Eyebrow, ArrowGlyph } from "./Decor";

const Awards = () => {
  const [year, setYear] = useState("2024");
  const gridRef = useRef(null);

  /* Re-staggers the award cards whenever the year changes. */
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-award]", {
        y: 34,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.09,
      });
    },
    { dependencies: [year], scope: gridRef }
  );

  return (
    <section
      id="awards"
      className="relative bg-ink text-paper py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots-light opacity-20 pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
          <div>
            <div data-reveal="up" className="mb-6">
              <Eyebrow tone="light">Recognition</Eyebrow>
            </div>
            <h2
              data-split
              className="font-display capitalize text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.86] tracking-[-0.04em]"
            >
              Honors &amp; <span className="text-accent">accolades.</span>
            </h2>
          </div>

          {/* Year toggle */}
          <div
            data-reveal="up"
            data-reveal-delay="0.15"
            className="inline-flex p-1 bg-white/8 border border-white/15 rounded-full self-start md:self-end"
          >
            {["2024", "2023", "2022"].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-6 py-2.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.16em] transition-all ${
                  year === y
                    ? "bg-accent text-ink"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Award grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-4 md:gap-5">
          {awards[year].map((a, i) => (
            <div
              key={i}
              data-award
              className="group relative p-8 md:p-10 rounded-[18px] border border-white/12 hover:border-accent transition-colors overflow-hidden"
            >
              <div className="relative flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl border border-white/15 flex items-center justify-center text-4xl group-hover:bg-accent transition-colors shrink-0">
                  {a.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display capitalize text-2xl md:text-3xl leading-tight tracking-tight mb-2">
                    {a.name}
                  </h4>
                  <p className="text-white/45 text-[11px] font-semibold uppercase tracking-[0.22em]">
                    {a.category}
                  </p>
                </div>
                <ArrowGlyph className="w-5 h-5 text-white/25 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
