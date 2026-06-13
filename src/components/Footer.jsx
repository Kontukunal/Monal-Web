import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow, Pill, Asterisk, Facets } from "./Decor";
import { projects } from "../data/constants";
import logo from "../assets/Monal_Logo.png";
import logoArt from "../assets/Monal_Logo_art.png";

const ctaArt = projects[4].img;

const SocialIcon = ({ children, href = "#", label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-ink hover:border-white transition-all"
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
      <span className="w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-4" />
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer
      data-stack-panel
      className="relative bg-ink text-paper rounded-t-[34px] md:rounded-t-[52px] -mt-9 md:-mt-14 shadow-[0_-30px_70px_-28px_rgba(20,17,30,0.5)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-facets-dark pointer-events-none" />

      {/* CTA banner — premium glass card with faint faceted light */}
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-4">
        <div className="relative overflow-hidden rounded-[36px] bg-white/[0.04] border border-white/10 px-8 md:px-16 py-14 md:py-20">
          <div className="absolute inset-0 bg-facets-dark pointer-events-none" />
          <Facets className="absolute -top-8 -right-8 w-120 h-auto" opacity={0.1} />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-6">
                <Eyebrow tone="dark" dot="bg-sun">
                  Ready to start
                </Eyebrow>
              </div>
              <h2 className="font-display capitalize text-white text-[clamp(2rem,5vw,4.2rem)] leading-[0.98] max-w-xl">
                Let's build the next children's brand.
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed max-w-lg">
                Whether you&apos;re creating a new series, scaling a channel, or
                developing an original IP, Monal can help bring it to life and
                connect it with its audience.
              </p>
              <div className="mt-10">
                <Pill as={Link} to="/#contact" variant="ghost">
                  Start a conversation
                </Pill>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-md mx-auto rounded-[28px] overflow-hidden ring-1 ring-white/20 rotate-3 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)] animate-float">
                <img
                  src={ctaArt}
                  alt="Monal key art"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links + contact */}
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12">
        <div className="grid gap-14 lg:gap-24 lg:grid-cols-[1.4fr_1.5fr_0.9fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
              Monal Digital is a creative studio specializing in animation
              production, YouTube growth, and children&apos;s entertainment. We
              create stories, characters, and digital brands that reach millions
              of families worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:contents">
            <div
              id="contact"
              className="scroll-mt-28 flex flex-col items-start text-left"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35 mb-5">
                Get in touch
              </div>
              <div className="space-y-2 mb-6">
                <a
                  href="mailto:hello@monaldigital.com"
                  className="block text-white/75 text-base md:text-lg hover:text-white transition-colors break-all"
                >
                  hello@monaldigital.com
                </a>
                <a
                  href="tel:+917830314847"
                  className="block text-white/75 text-base md:text-lg hover:text-white transition-colors"
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

            <div className="text-right lg:text-left">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35 mb-5">
                Explore
              </div>
              <ul className="space-y-3.5 text-base">
                <FooterLink href="/#work">Portfolio</FooterLink>
                <FooterLink href="/#about">Studio</FooterLink>
                <FooterLink href="/#services">Solutions</FooterLink>
                <FooterLink href="/#team">Team</FooterLink>
                <FooterLink href="/#contact">Contact</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant logo */}
      <div className="relative px-6 md:px-12 pt-12 md:pt-20 pb-10 md:pb-16 select-none">
        <img
          src={logoArt}
          alt="Monal"
          loading="lazy"
          decoding="async"
          draggable="false"
          className="w-full max-w-375 mx-auto h-auto"
        />
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
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

          <div className="flex items-center justify-center text-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
            <Asterisk className="w-3.5 h-3.5 text-white/40" spin />© 2026 Monal
            Digital · Crafted with vision in Haldwani
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
