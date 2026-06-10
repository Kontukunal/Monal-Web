import React from "react";
import { Link } from "react-router-dom";
import { services, brands } from "../data/constants";
import { Panel } from "./Panel";
import { Eyebrow, ArrowGlyph, Asterisk } from "./Decor";

/* Per-card colour plate + the popped-out character's height, in step with the
   service keys. (GR sits a touch larger than the other two.) */
const CARDS = [
  { color: "#5b46e8", imgClass: "h-80 md:h-88" },
  { color: "#ec4899", imgClass: "h-72 md:h-80" },
  { color: "#fb7a3c", imgClass: "h-72 md:h-80" },
];

/* One service card: a paper tile with a compact colour plate at the bottom and
   the character popping out the top (half in / half out) for a 3D lift. */
const ServiceCard = ({ service, color, imgClass, num }) => (
  <Link
    to={`/services/${service.slug}`}
    data-tilt="4"
    className="group block rounded-[30px] bg-paper p-5 transition-all duration-500 hover:-translate-y-2"
  >
    <p className="px-2 pt-3 pb-6 text-center font-display text-2xl md:text-3xl leading-tight text-ink">
      {service.eyebrow}
    </p>

    <div className="relative h-70 md:h-80 flex items-end">
      <div
        className="relative w-full rounded-[24px] h-40 md:h-44 flex items-end"
        style={{ background: color }}
      >
        <img
          src={service.img}
          alt={service.title}
          loading="lazy"
          style={{ "--card-glow": `${color}8C` }}
          className={`pointer-events-none absolute left-1/2 bottom-0 w-auto -translate-x-1/2 object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.4)] transition-[translate,scale,filter] duration-700 group-hover:-translate-y-2 group-hover:scale-[1.04] group-hover:drop-shadow-[0_32px_50px_var(--card-glow)] ${imgClass}`}
        />
        <div className="relative z-10 w-full p-5 text-white">
          <div className="flex items-end justify-between">
            <span className="font-display leading-none text-[clamp(2.2rem,5vw,3.5rem)] drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]">
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

/* A distinct creative "plate" behind each brand logo — gradient, glow tint,
   and an accent for the decorative corner mark. Cycled across the brand list. */
const BRAND_PLATES = [
  {
    gradient: "linear-gradient(135deg,#fb7a3c 0%,#ffac4d 100%)",
    glow: "rgba(251,122,60,0.45)",
    accent: "text-violet/80",
  },

  {
    gradient: "linear-gradient(135deg,#ec4899 0%,#f9669f 100%)",
    glow: "rgba(236,72,153,0.45)",
    accent: "text-white/70",
  },

  {
    gradient: "linear-gradient(135deg,#5b46e8 0%,#7c5cff 100%)",
    glow: "rgba(124,92,255,0.45)",
    accent: "text-sun/70",
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

        {/* Three service cards */}
        <div
          data-reveal-group="up"
          className="grid items-start gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {keys.map((k, i) => {
            const card = CARDS[i % CARDS.length];
            return (
              <ServiceCard
                key={k}
                service={services[k]}
                color={card.color}
                imgClass={card.imgClass}
                num={String(i + 1).padStart(2, "0")}
              />
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
                      b.name === "Adruto"
                        ? "scale-150 group-hover:scale-[1.6]"
                        : ""
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
