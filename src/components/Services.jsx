import React from "react";
import { Link } from "react-router-dom";
import { services, brands } from "../data/constants";
import { Panel } from "./Panel";
import { Eyebrow, ArrowGlyph, Asterisk } from "./Decor";

/* Per-card colour + a short outer heading, in step with the service keys. */
const CARDS = [
  { color: "#fb7a3c", heading: "Where every great frame begins." },
  { color: "#ec4899", heading: "Where the blueprint comes alive." },
  { color: "#5b46e8", heading: "The final, screen-ready polish." },
];

/* A distinct creative "plate" behind each brand logo — gradient, glow tint,
   and an accent for the decorative corner mark. Cycled across the brand list. */
const BRAND_PLATES = [
  {
    gradient: "linear-gradient(135deg,#5b46e8 0%,#7c5cff 100%)",
    glow: "rgba(124,92,255,0.45)",
    accent: "text-sun/70",
  },
  {
    gradient: "linear-gradient(135deg,#ec4899 0%,#f9669f 100%)",
    glow: "rgba(236,72,153,0.45)",
    accent: "text-white/70",
  },
  {
    gradient: "linear-gradient(135deg,#fb7a3c 0%,#ffac4d 100%)",
    glow: "rgba(251,122,60,0.45)",
    accent: "text-violet/80",
  },
];

const Services = () => {
  const keys = Object.keys(services);

  return (
    <Panel id="services" bg="bg-ink">
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-28 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
          <div data-reveal="up">
            <Eyebrow tone="dark" dot="bg-sun">
              Services
            </Eyebrow>
          </div>
          <h2
            data-reveal="up"
            data-reveal-delay="0.08"
            className="font-display capitalize text-white text-[clamp(2rem,7vw,5.5rem)] leading-[0.94] max-w-3xl"
          >
            What we <span className="text-violet">create.</span>
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="0.14"
            className="text-white/60 max-w-md leading-relaxed"
          >
            From the first sketch to the final cut — three studios of craft,
            working as one pipeline.
          </p>
        </div>

        {/* Three staggered number cards */}
        <div
          data-reveal-group="up"
          className="grid items-start gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {keys.map((k, i) => {
            const s = services[k];
            const card = CARDS[i % CARDS.length];
            const num = String(i + 1).padStart(2, "0");
            return (
              <Link
                key={k}
                to={`/services/${s.slug}`}
                data-tilt="4"
                className={`group block rounded-[30px] bg-paper p-5 transition-all duration-500 hover:-translate-y-2 ${
                  i === 1 ? "lg:-mt-10" : ""
                }`}
              >
                <p className="px-2 pt-3 pb-6 text-center font-display text-2xl md:text-3xl leading-tight text-ink">
                  {s.eyebrow}
                </p>

                {/* Colour block — image sits inset so the colour reads as a
                    border, with the number laid over the image in white. */}
                <div
                  className="relative overflow-hidden rounded-[24px] h-70 md:h-80 p-3 flex"
                  style={{ background: card.color }}
                >
                  <div className="relative flex-1 rounded-[18px] overflow-hidden transform-gpu">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-black/15" />

                    <div className="relative h-full p-5 flex flex-col justify-between text-white">
                      <span className="text-sm md:text-base font-medium leading-snug max-w-[85%] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                        {card.heading}
                      </span>

                      <div className="flex items-end justify-between">
                        <span className="font-display leading-none text-[clamp(4rem,9vw,7rem)] drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
                          {num}
                        </span>
                        <span className="shrink-0 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center transition-all duration-300 group-hover:bg-white group-hover:text-ink">
                          <ArrowGlyph className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ---- Trusted by: creative brand plates ---- */}
        <div className="mt-24 md:mt-32">
          <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
            <div data-reveal="up">
              <Eyebrow tone="dark" dot="bg-accent">
                Our Partners
              </Eyebrow>
            </div>
            <h3
              data-reveal="up"
              data-reveal-delay="0.08"
              className="font-display capitalize text-white text-[clamp(1.6rem,4.5vw,3rem)] leading-[1.02] max-w-2xl"
            >
              Trusted by studios &amp; networks{" "}
              <span className="text-violet">worldwide.</span>
            </h3>
          </div>

          <div
            data-reveal-group="up"
            className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {brands.map((b, i) => {
              const plate = BRAND_PLATES[i % BRAND_PLATES.length];
              return (
                <div
                  key={b.name}
                  data-tilt="4"
                  className={`group relative overflow-hidden rounded-[28px] p-8 md:p-9 min-h-52 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 ${
                    i === 1 ? "lg:-mt-8" : ""
                  }`}
                  style={{
                    background: plate.gradient,
                    boxShadow: `0 26px 60px -28px ${plate.glow}`,
                  }}
                >
                  {/* Decorative creative layers */}
                  <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/15 blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-black/15 blur-2xl pointer-events-none" />
                  <span className="absolute top-5 left-6 w-2.5 h-2.5 rounded-full bg-white/40" />
                  <Asterisk
                    className={`absolute bottom-5 right-6 w-7 ${plate.accent} transition-transform duration-700 group-hover:rotate-90`}
                  />

                  {/* Logo */}
                  <img
                    src={b.logo}
                    alt={b.name}
                    loading="lazy"
                    className={`relative max-h-14 md:max-h-16 max-w-[70%] w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${
                      b.name === "Adruto" ? "scale-150 group-hover:scale-[1.6]" : ""
                    }`}
                    style={
                      b.name === "The Boldeye"
                        ? { filter: "brightness(0) invert(1)" }
                        : undefined
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Services;
