import React, { useRef, useState } from "react";
import { Eyebrow, Asterisk } from "./Decor";

/* Served from /public (stable URL) and lazy-loaded €” see the <video> below.
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
            className="text-white/55 max-w-sm leading-relaxed text-base md:text-lg"
          >
            A two-minute glance at the worlds, characters, and moments
            we&apos;ve animated this year.
          </p>
        </div>

        {/* Video frame */}
        <div data-reveal="zoom" className="relative group">
          <div className="relative aspect-video rounded-[20px] overflow-hidden border border-white/12 bg-black">
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

            {/* Fullscreen */}
            <button
              onClick={enterFullscreen}
              className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 hover:bg-accent hover:text-ink hover:border-accent transition-all"
            >
              Fullscreen †—
            </button>

            {/* Play / pause */}
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause showreel" : "Play showreel"}
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                playing ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
            >
              <span className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent" />
              <span className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent text-ink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {playing ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </span>
            </button>

            {/* Caption strip */}
            <div className="absolute bottom-0 inset-x-0 px-6 py-4 flex items-end justify-between bg-linear-to-t from-black/80 to-transparent">
              <div>
                <div className="font-display text-xl md:text-2xl uppercase tracking-tight">
                  Monal Digital · Reel 2026
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                {["2D", "3D", "VFX"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full border border-white/25"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Corner badge */}
          <div className="absolute -top-3 -left-3 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-ink text-[10px] font-bold uppercase tracking-[0.22em]">
            <Asterisk className="w-3 h-3" spin />
            New Reel
          </div>
        </div>

        {/* Sub row */}
        <div
          data-reveal="fade"
          className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-[11px] font-semibold uppercase tracking-[0.24em]"
        >
          <div className="flex items-center gap-2.5">
            <Asterisk className="w-3.5 h-3.5 text-accent" spin />
            Sound on for the full experience
          </div>
          <div className="flex items-center gap-6">
            <span>Edit · Monal Studio</span>
            <span>Score · Original</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
