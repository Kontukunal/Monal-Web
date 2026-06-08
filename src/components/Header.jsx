import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "../hooks/useUiAnimations";
import { Pill, ArrowGlyph } from "./Decor";
import logo from "../assets/Monal_Logo.png";

/* Root-relative hash targets so the nav works from any route — on the
   landing page they smooth-scroll, from a sub-page they return home. */
const NAV = [
  ["Home", "/#home"],
  ["Work", "/#work"],
  ["Solutions", "/#services"],
  ["Studio", "/#about"],
  ["Team", "/#team"],
];

const NavLink = ({ href, children }) => (
  <Link
    to={href}
    className="group relative text-[13px] font-semibold uppercase tracking-[0.12em] text-ink/55 hover:text-ink transition-colors"
  >
    {children}
    <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
  </Link>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-header-item]", {
        y: -26,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.15,
      });
    },
    { scope: rootRef }
  );

  return (
    <header
      ref={rootRef}
      className={`fixed top-0 left-0 w-full z-60 bg-paper transition-all duration-500 ${
        isScrolled
          ? "py-3 border-b border-line"
          : "py-6"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/#home"
          data-header-item
          className="flex items-center gap-2.5 shrink-0"
        >
          <img
            src={logo}
            alt="Monal Digital"
            width="600"
            height="127"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-7 md:h-8 w-auto"
          />
          <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/55 border-l border-line pl-2.5">
            Digital
          </span>
        </Link>

        {/* Center nav */}
        <nav
          data-header-item
          className="hidden lg:flex items-center gap-9"
        >
          {NAV.map(([label, href]) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div data-header-item className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Pill as={Link} to="/#contact">
              Get in touch
            </Pill>
          </div>

          <button
            className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-line text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mx-4 mt-3 rounded-3xl bg-ink text-paper p-7 flex flex-col gap-1 animate-fade-in">
          {NAV.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-3 border-b border-white/10 last:border-0"
            >
              <span className="font-display text-3xl tracking-tight">
                {label}
              </span>
              <ArrowGlyph className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
            </Link>
          ))}
          <Pill
            as={Link}
            to="/#contact"
            variant="accent"
            magnetic={false}
            onClick={() => setOpen(false)}
            className="mt-5 justify-center"
          >
            Get in touch
          </Pill>
        </div>
      )}
    </header>
  );
};

export default Header;
