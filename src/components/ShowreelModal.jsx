import React, { useEffect } from "react";
import { Asterisk } from "./Decor";

/* Hosted in /public; this modal only mounts when opened, so the video is
   fetched on demand (never as part of the initial page load). */
const SHOWREEL_SRC = "/showreel/Showreel.mp4";
const SHOWREEL_POSTER = "/showreel/Showreel-poster.webp";

const ShowreelModal = ({ setShowreelOpen }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowreelOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [setShowreelOpen]);

  return (
    <div className="fixed inset-0 z-100 bg-ink/97 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <button
        onClick={() => setShowreelOpen(false)}
        className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/25 text-white hover:bg-accent hover:text-ink hover:border-accent transition-all flex items-center justify-center"
        aria-label="Close"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-center gap-3 mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
          <Asterisk className="w-4 h-4 text-accent" spin />
          Monal Digital Showreel
          <Asterisk className="w-4 h-4 text-accent" spin />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/12 bg-black">
          <video
            className="w-full h-full object-contain"
            src={SHOWREEL_SRC}
            poster={SHOWREEL_POSTER}
            title="Showreel"
            controls
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default ShowreelModal;
