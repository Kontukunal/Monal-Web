import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "../hooks/useUiAnimations";
import { services } from "../data/constants";
import { Eyebrow, ArrowGlyph } from "./Decor";

const Services = () => {
  const keys = Object.keys(services);
  const [active, setActive] = useState(keys[0]);
  const sliderRef = useRef(null);

  /* Re-staggers the expanded panel content whenever it changes. */
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-svc-line]", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { dependencies: [active], scope: sliderRef }
  );

  const Features = ({ list, tone }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 max-w-md">
      {list.map((f, i) => (
        <div
          key={i}
          className={`flex items-center gap-2.5 text-sm font-medium ${tone}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
          {f}
        </div>
      ))}
    </div>
  );

  return (
    <section id="services" className="relative bg-paper py-24 md:py-36">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-8 mb-12 md:mb-16">
          <div className="flex flex-col items-center">
            <div data-reveal="up" className="mb-6">
              <Eyebrow>Capabilities</Eyebrow>
            </div>
            <h2
              data-split
              className="headline-vibrant font-display capitalize text-[clamp(1.9rem,7.5vw,7rem)] leading-[0.86] tracking-[-0.04em]"
            >
              What we create.
            </h2>
          </div>
          <p
            data-reveal="up"
            data-reveal-delay="0.1"
            className="font-script-desc text-muted max-w-sm leading-relaxed"
          >
            From the first sketch to the final cut, we craft every frame with
            intention and turn bold ideas into stories worth watching.
          </p>
        </div>

        {/* Desktop expanding slider */}
        <div
          ref={sliderRef}
          data-reveal="up"
          className="hidden md:flex gap-2.5 h-[74vh]"
        >
          {keys.map((k, i) => {
            const s = services[k];
            const isActive = active === k;
            return (
              <Link
                key={k}
                to={`/services/${s.slug}`}
                onMouseEnter={() => setActive(k)}
                style={{ flexBasis: 0 }}
                className={`group relative block overflow-hidden rounded-[18px] cursor-pointer min-w-[84px] transition-[flex-grow] duration-700 ease-[cubic-bezier(.65,0,.2,1)] ${
                  isActive ? "grow-[3.6]" : "grow"
                }`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isActive ? "scale-100" : "scale-110 grayscale"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-accent/90" : "bg-ink/75"
                  }`}
                />

                {/* Index */}
                <span
                  className={`absolute top-6 left-6 text-[12px] font-bold uppercase tracking-[0.2em] ${
                    isActive ? "text-ink/55" : "text-white/55"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Collapsed vertical title */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display capitalize text-3xl tracking-tight text-white [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                      {s.title}
                    </span>
                  </div>
                )}

                {/* Expanded content */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-ink">
                    <div className="flex items-end justify-between gap-6">
                      <div className="max-w-xl">
                        <h3
                          data-svc-line
                          className="font-display capitalize text-[clamp(2rem,3.4vw,3.8rem)] leading-[0.92] tracking-[-0.03em] mb-5"
                        >
                          {s.title}
                        </h3>
                        <p
                          data-svc-line
                          className="font-script-desc text-ink/75 text-base lg:text-lg leading-relaxed mb-7 max-w-md"
                        >
                          {s.desc}
                        </p>
                        <div data-svc-line>
                          <Features list={s.features} tone="text-ink/85" />
                        </div>
                      </div>
                      <span
                        data-svc-line
                        data-magnetic="0.3"
                        className="shrink-0 w-16 h-16 rounded-full bg-ink text-paper grid place-items-center group-hover:bg-paper group-hover:text-ink transition-colors"
                        aria-hidden="true"
                      >
                        <ArrowGlyph className="w-6 h-6" />
                      </span>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile stacked cards */}
        <div data-reveal-group="up" className="md:hidden space-y-5">
          {keys.map((k, i) => {
            const s = services[k];
            return (
              <Link
                key={k}
                to={`/services/${s.slug}`}
                className="relative overflow-hidden rounded-[18px] min-h-[440px] flex flex-col justify-end p-7"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/82" />
                <div className="relative text-paper">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")} — Capability
                  </span>
                  <h3 className="font-display capitalize text-4xl tracking-tight mt-3 mb-4">
                    {s.title}
                  </h3>
                  <p className="font-script-desc text-white/70 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <Features list={s.features} tone="text-white/80" />
                  <span className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-accent text-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em]">
                    Explore services
                    <ArrowGlyph className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
