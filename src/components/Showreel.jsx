import React, { useRef, useState } from "react";
import { Eyebrow, Asterisk } from "./Decor";

/* Served from /public (stable URL) and lazy-loaded — see the <video> below.
   The heavy file is never fetched until the visitor actually hits play. */
const SHOWREEL_SRC = "/showreel/Showreel.mp4";
const SHOWREEL_POSTER = "/showreel/Showreel-poster.webp";

const Showreel = ({ setShowreelOpen }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const enterFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iOS Safari
  };

  return (
    <section
      id="showreel"
      className="relative bg-ink text-paper py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots-light opacity-25 pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-8 mb-12 md:mb-16">
          <div className="flex flex-col items-center">
            <div data-reveal="up" className="mb-6">
              <Eyebrow tone="light">Reel · 2026</Eyebrow>
            </div>
            <h2
              data-split
              className="headline-vibrant font-display capitalize text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.04em]"
            >
              The showreel.
            </h2>
          </div>
          <p
            data-reveal="up"
            data-reveal-delay="0.1"
            className="font-script-desc text-white/55 max-w-sm leading-relaxed text-base md:text-lg"
          >
            A two-minute glance at the worlds, characters, and moments
            we&apos;ve animated this year.
          </p>
        </div>

        {/* Centred video card */}
        <div className="mx-auto w-full max-w-4xl">
          <div data-reveal="zoom" className="relative group">
            {/* Soft accent glow behind the frame */}
            <div className="absolute -inset-8 md:-inset-14 rounded-[48px] bg-accent/25 blur-[70px] opacity-60 pointer-events-none" />

            {/* Decorative spinning asterisk peeking out behind the frame */}
            <Asterisk className="absolute -bottom-10 -right-10 w-28 md:w-36 text-accent/30 hidden md:block -z-10" spin />

            {/* Vertical side tag */}
            <span className="absolute top-1/2 -left-12 -translate-y-1/2 hidden xl:block text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40 [writing-mode:vertical-rl] rotate-180">
              Monal Studio · Showreel
            </span>

            <div className="relative aspect-video rounded-[20px] overflow-hidden ring-1 ring-white/15 bg-black shadow-[0_50px_110px_-40px_rgba(0,0,0,0.95)]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={SHOWREEL_SRC}
                poster={SHOWREEL_POSTER}
                preload="none"
                muted
                loop
                playsInline
                onClick={togglePlay}
              />

              {/* Live runtime badge */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                4K · 02:14
              </div>

              {/* Fullscreen */}
              <button
                onClick={enterFullscreen}
                className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 hover:bg-accent hover:text-ink hover:border-accent transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                </svg>
                Fullscreen
              </button>

              {/* Play / pause — with a rotating text ring */}
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pause showreel" : "Play showreel"}
                className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                  playing ? "opacity-0 hover:opacity-100" : "opacity-100"
                }`}
              >
                <span className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent" />

                <span className="relative grid place-items-center w-28 h-28 md:w-36 md:h-36">
                  {/* Spinning circular caption */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 h-full w-full animate-spin-slow text-white/70"
                  >
                    <defs>
                      <path
                        id="reelRing"
                        fill="none"
                        d="M50,13 a37,37 0 1,1 0,74 a37,37 0 1,1 0,-74"
                      />
                    </defs>
                    <text
                      fill="currentColor"
                      fontSize="7"
                      fontWeight="600"
                      className="uppercase"
                    >
                      <textPath
                        href="#reelRing"
                        startOffset="0"
                        textLength="232"
                        lengthAdjust="spacing"
                      >
                        Play the showreel · Play the showreel ·
                      </textPath>
                    </text>
                  </svg>

                  {/* Centre disc */}
                  <span className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent text-ink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {playing ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="5" width="4" height="14" rx="1" />
                        <rect x="14" y="5" width="4" height="14" rx="1" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </span>
                </span>
              </button>

              {/* Caption strip */}
              <div className="absolute bottom-0 inset-x-0 px-5 py-4 flex items-center justify-between gap-3 bg-linear-to-t from-black/80 to-transparent">
                <div className="font-display text-base md:text-xl uppercase tracking-tight">
                  Monal Digital · Reel 2026
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {["2D", "3D", "VFX"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full border border-white/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute -top-3 -left-3 z-20 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-ink text-[10px] font-bold uppercase tracking-[0.22em]">
              <Asterisk className="w-3 h-3" spin />
              New Reel
            </div>
          </div>

          {/* Meta row */}
          <div
            data-reveal="fade"
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-[11px] font-semibold uppercase tracking-[0.24em]"
          >
            <div className="flex items-center gap-2.5">
              <Asterisk className="w-3.5 h-3.5 text-accent" spin />
              Sound on for the full experience
            </div>
            <div className="flex items-center gap-5">
              <span>Edit · Monal Studio</span>
              <span>Score · Original</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
