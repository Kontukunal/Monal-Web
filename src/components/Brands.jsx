import React from "react";
import { brands } from "../data/constants";
import { Eyebrow, Marquee } from "./Decor";

/* Brand-pink plate behind every logo. */
const PLATE = "linear-gradient(135deg,#ec4899 0%,#f9669f 100%)";

const Brands = () => {
  /* Repeat the (short) brand list so a single marquee copy always overflows
     the viewport — this is what keeps the loop seamless instead of jumping. */
  const loopBrands = Array.from({ length: 6 }, () => brands).flat();

  return (
    <section
      id="brands"
      className="relative bg-mist py-20 md:py-28 overflow-hidden border-y border-line"
    >
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
          className="font-script-desc text-muted max-w-xs leading-relaxed"
        >
          Studios, networks, and brands that bring their stories to our desks.
        </p>
      </div>

      {/* Logo marquee — all logos rendered solid black */}
      <div data-reveal="fade" className="relative">
        <Marquee speed={70}>
          {loopBrands.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-14 md:gap-24 pr-14 md:pr-24"
            >
              <div
                className="h-20 md:h-28 w-48 md:w-64 flex items-center justify-center shrink-0 rounded-2xl border border-accent/30 shadow-[0_14px_34px_-14px_rgba(236,72,153,0.5)] px-8 hover:shadow-[0_18px_44px_-14px_rgba(236,72,153,0.65)] hover:-translate-y-1 transition-all duration-300"
                style={{ background: PLATE }}
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  className={`max-h-12 md:max-h-16 max-w-full w-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-300 ${
                    b.name === "Adruto" ? "scale-150" : ""
                  }`}
                  style={
                    b.name === "The Boldeye"
                      ? { filter: "brightness(0) invert(1)" }
                      : undefined
                  }
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
