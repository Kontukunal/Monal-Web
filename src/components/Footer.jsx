import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow, Pill, Asterisk } from "./Decor";
import logo from "../assets/Monal_Logo.png";

const SocialIcon = ({ children, href = "#", label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-accent hover:text-ink hover:border-accent transition-all"
  >
    {children}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      to={href}
      className="group inline-flex items-center justify-end lg:justify-start gap-2 text-white/60 hover:text-white transition-colors"
    >
      <span className="w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-4" />
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 bg-dots-light opacity-15 pointer-events-none" />

      {/* CTA banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <div data-reveal="up" className="mb-7 flex justify-center">
            <Eyebrow tone="light">Ready to start</Eyebrow>
          </div>
          <h2
            data-split
            className="headline-vibrant font-display capitalize text-[clamp(2rem,8vw,8rem)] leading-[0.86] tracking-[-0.04em] max-w-5xl mx-auto"
          >
            Let&apos;s build the next classic.
          </h2>
          <div data-reveal="up" data-reveal-delay="0.15" className="mt-12">
            <Pill as={Link} to="/#contact" variant="accent">
              Get in touch
            </Pill>
          </div>
        </div>
      </div>

      {/* Links + contact */}
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-16 md:pb-24">
        <div className="grid gap-14 lg:gap-24 lg:grid-cols-[1.4fr_1.5fr_0.9fr]">
          {/* Brand */}
          <div
            data-reveal-group="up"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <Link to="/#home" className="inline-flex items-center gap-3 mb-8">
              <img
                src={logo}
                alt="Monal Digital"
                width="600"
                height="127"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55 border-l border-white/20 pl-3">
                Digital
              </span>
            </Link>

            <p className="text-white/55 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
              A premium animation studio taking the very best of Indian creative
              talent to global screens.
            </p>
          </div>

          {/* Contact + Explore (side by side on mobile) */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            {/* Contact */}
            <div
              id="contact"
              className="scroll-mt-28 flex flex-col items-start text-left lg:items-start lg:text-left"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35 mb-5">
                Get in touch
              </div>
              <div className="space-y-2 mb-6">
                <a
                  href="mailto:hello@monaldigital.com"
                  className="block text-white/75 text-base md:text-lg hover:text-accent transition-colors break-all"
                >
                  hello@monaldigital.com
                </a>
                <a
                  href="tel:+917830314847"
                  className="block text-white/75 text-base md:text-lg hover:text-accent transition-colors"
                >
                  +91 78303 14847
                </a>
              </div>

              <p className="text-white/45 leading-relaxed max-w-xs">
                Monal Digital, Karan Tower, Gas Godam Rd,
                <br />
                Haldwani, Uttarakhand, India 263139
              </p>
            </div>

            {/* Explore */}
            <div className="text-right lg:text-left">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35 mb-5">
                Explore
              </div>
              <ul className="space-y-3.5 text-base">
                <FooterLink href="/#work">Projects</FooterLink>
                <FooterLink href="/#about">Studio</FooterLink>
                <FooterLink href="/#services">Solutions</FooterLink>
                <FooterLink href="/#team">Team</FooterLink>
                <FooterLink href="/#contact">Contact</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative px-4 select-none">
        <h2
          data-split-chars
          className="font-display capitalize text-center leading-[0.78] tracking-[-0.04em] text-[26vw] text-white"
        >
          Monal
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Socials */}
          <div className="flex items-center gap-3">
            <SocialIcon
              href="https://www.linkedin.com/company/monaldigital"
              label="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18.3h-2.6V14c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.6v4.4h-2.6V9.7H13v1.1c.3-.5 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.5v5.3z" />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/monaldigital"
              label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </SocialIcon>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
            <Asterisk className="w-3.5 h-3.5 text-accent" spin />© 2026 Monal
            Digital €” Crafted with vision in Haldwani
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
