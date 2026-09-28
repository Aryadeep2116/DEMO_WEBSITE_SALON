import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS, SALON } from "../lib/data";

type Props = {
  active: string;
};

export default function Nav({ active }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-blur border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between">
          <a href="#home" aria-label="Home" className="block">
            <Logo size="md" />
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-9"
            aria-label="Primary"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav-link label-eyebrow transition-colors ${
                  active === l.id
                    ? "active text-amber"
                    : "text-offwhite/85 hover:text-amber"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SALON.phoneRaw}`}
              className="hidden md:inline-flex btn-amber"
              data-cursor="cta"
            >
              Book Now
            </a>
            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-offwhite"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              <div className="relative w-6 h-3.5">
                <span
                  className={`absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300 ${
                    open ? "bottom-0 -rotate-45" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="h-full flex flex-col justify-between pt-28 pb-10 px-8">
          <nav className="space-y-2" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block font-display text-5xl text-offwhite leading-[1.05] tracking-tight"
                style={{
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {l.label}
                <span className="text-amber">.</span>
              </a>
            ))}
          </nav>
          <div className="space-y-5">
            <a
              href={`tel:${SALON.phoneRaw}`}
              className="block label-eyebrow text-amber"
            >
              {SALON.phone}
            </a>
            <div className="flex gap-5 text-offwhite/80">
              <a
                href={SALON.instagram}
                aria-label="Instagram"
                className="hover:text-amber transition-colors"
              >
                Instagram
              </a>
              <a
                href={SALON.facebook}
                aria-label="Facebook"
                className="hover:text-amber transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
