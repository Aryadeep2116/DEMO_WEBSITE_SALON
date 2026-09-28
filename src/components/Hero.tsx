import { SALON } from "../lib/data";
import { useOpenStatus } from "../lib/useReveal";

export default function Hero() {
  const { open, label } = useOpenStatus();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden grain"
      aria-label="Hero"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-interior.jpg"
          alt="Inside Works of ART hair salon in Los Feliz"
          className="w-full h-full object-cover ken-burns"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-10 pt-32 md:pt-36 pb-10">
        {/* Top eyebrow + status badge row */}
        <div className="flex items-start justify-between gap-4">
          <p className="label-eyebrow text-offwhite/85 reveal" data-reveal-delay="200">
            Los Feliz · Los Angeles · Est. 2001
          </p>

          <div
            className="reveal flex items-center gap-2 px-3.5 py-2 border border-white/15 backdrop-blur-md bg-black/20"
            data-reveal-delay="350"
          >
            <span
              className={`block w-1.5 h-1.5 rounded-full ${
                open ? "bg-green-400" : "bg-amber"
              }`}
              style={{
                boxShadow: open
                  ? "0 0 0 4px rgba(74,222,128,0.18)"
                  : "0 0 0 4px rgba(232,149,43,0.18)",
              }}
              aria-hidden
            />
            <span className="label-eyebrow text-offwhite/90">
              {open ? label : "Open Tue – Sat"}
            </span>
          </div>
        </div>

        {/* Centered giant title */}
        <div className="max-w-[1500px]">
          <h1 className="font-display text-offwhite leading-[0.9] tracking-tight">
            <span
              className="block reveal"
              style={{ fontSize: "clamp(4rem, 11vw, 13rem)" }}
              data-reveal-delay="450"
            >
              Works
            </span>
            <span
              className="block reveal italic font-light text-offwhite/70 pl-[12vw]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)" }}
              data-reveal-delay="650"
            >
              of
            </span>
            <span
              className="block reveal text-amber"
              style={{
                fontSize: "clamp(4.5rem, 13vw, 15rem)",
                fontStyle: "italic",
              }}
              data-reveal-delay="850"
            >
              ART
            </span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl font-display italic text-2xl md:text-3xl text-offwhite/90"
            data-reveal-delay="1050"
          >
            Hair Salon in Los Feliz. Where hair becomes art.
          </p>

          <div
            className="reveal mt-10 flex flex-col sm:flex-row gap-4"
            data-reveal-delay="1200"
          >
            <a
              href={`tel:${SALON.phoneRaw}`}
              className="btn-amber"
              data-cursor="cta"
            >
              Book an Appointment
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#gallery" className="btn-outline" data-cursor="cta">
              View Our Work
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between gap-6">
          <div className="reveal max-w-xs" data-reveal-delay="1400">
            <p className="label-eyebrow text-amber mb-2">Visit</p>
            <p className="text-offwhite/85 text-sm leading-relaxed">
              {SALON.address.street}
              <br />
              {SALON.address.city}, {SALON.address.region}{" "}
              {SALON.address.postal}
            </p>
          </div>

          <a
            href="#about"
            className="reveal hidden md:flex items-center gap-3 text-offwhite/80 hover:text-amber transition-colors"
            data-reveal-delay="1500"
            aria-label="Scroll to about"
          >
            <span className="label-eyebrow">Scroll</span>
            <span className="relative w-12 h-12 rounded-full border border-white/30 flex items-center justify-center overflow-hidden">
              <span className="absolute inset-0 border-t border-amber rounded-full animate-spin-slow" />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-bounce-soft"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
