import Logo from "./Logo";
import { NAV_LINKS, SALON } from "../lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-offwhite pt-20 pb-10 border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Centered logo */}
        <div className="flex flex-col items-center text-center">
          <Logo size="lg" variant="light" />
          <p className="mt-7 font-display italic text-offwhite/65 text-xl md:text-2xl max-w-xl">
            {SALON.tagline}
          </p>
        </div>

        {/* Nav links */}
        <nav
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 label-eyebrow text-offwhite/65"
          aria-label="Footer"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="hover:text-amber transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Contact + social */}
        <div className="mt-12 grid md:grid-cols-3 gap-10 border-t border-white/10 pt-10">
          <div className="text-center md:text-left">
            <p className="label-eyebrow text-offwhite/55 mb-3">Visit</p>
            <p className="text-offwhite/85 leading-relaxed">
              {SALON.address.street}
              <br />
              {SALON.address.city}, {SALON.address.region}{" "}
              {SALON.address.postal}
            </p>
          </div>
          <div className="text-center">
            <p className="label-eyebrow text-offwhite/55 mb-3">Call</p>
            <a
              href={`tel:${SALON.phoneRaw}`}
              className="font-display text-3xl text-amber hover:text-amber-bright transition-colors"
            >
              {SALON.phone}
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="label-eyebrow text-offwhite/55 mb-3">Follow</p>
            <div className="flex items-center justify-center md:justify-end gap-5">
              <a
                href={SALON.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-amber transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
              <a
                href={SALON.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-amber transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={SALON.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-amber transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h3l-7 8 8 12h-7l-5-7-6 7H1l8-9L1 2h7l4 6 6-6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-offwhite/45">
          <p>
            © {year} Works of ART Hair Salon. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-amber transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
