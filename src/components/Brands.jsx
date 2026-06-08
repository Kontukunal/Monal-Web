import React from "react";
import { brands } from "../data/constants";
import { Eyebrow, Asterisk, Marquee } from "./Decor";

const Brands = () => {
  /* Repeat the (short) brand list so a single marquee copy always overflows
     the viewport â€” this is what keeps the loop seamless instead of jumping. */
  const loopBrands = Array.from({ length: 6 }, () => brands).flat();

  return (
    <section id="brands" className="relative bg-mist py-20 md:py-28 overflow-hidden border-y border-line">
      {/* Header */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
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
          className="text-muted max-w-xs leading-relaxed"
        >
          Studios, networks, and brands that bring their stories to our desks.
        </p>
      </div>

      {/* Logo marquee */}
      <div data-reveal="fade" className="relative">
        <Marquee speed={70}>
          {loopBrands.map((b, i) => (
            <div key={i} className="flex items-center gap-14 md:gap-24 pr-14 md:pr-24">
              <div className="h-16 md:h-24 w-44 md:w-64 flex items-center justify-center shrink-0">
                <img
                  src={b.logo}
                  alt={b.name}
                  className={`max-h-full max-w-full w-auto object-contain opacity-45 hover:opacity-100 transition-opacity duration-300 ${
                    b.name === "Adruto" ? "scale-150" : ""
                  } ${
                    b.name === "The Boldeye"
                      ? "-translate-y-3"
                      : b.name === "Lunar-X"
                        ? "-translate-y-6"
                        : ""
                  }`}
                  style={{ filter: "brightness(0)" }}
                />
              </div>
              <Asterisk spin className="w-5 h-5 text-ink/20 shrink-0" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
