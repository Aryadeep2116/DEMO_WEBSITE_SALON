import { useState } from "react";
import { SERVICES } from "../lib/data";

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative bg-charcoal text-offwhite py-24 md:py-36 overflow-hidden"
      aria-label="Services"
    >
      <div
        className="absolute -top-6 right-4 md:right-10 section-number pointer-events-none select-none"
        aria-hidden
      >
        02
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="label-eyebrow text-amber reveal">03 — Services</p>
          <h2
            className="reveal font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mt-5"
            data-reveal-delay="80"
          >
            Barbering & <span className="italic text-amber">Salon</span>{" "}
            Services
          </h2>
          <p
            className="reveal mt-6 text-offwhite/65 max-w-xl text-base md:text-lg"
            data-reveal-delay="160"
          >
            Three decades of craft. Whatever your look is, we can deliver it to
            you. We don't feel everyone fits in a box.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => {
            const isOpen = openIdx === i;
            return (
              <article
                key={s.num}
                className="group relative bg-black/40 border border-white/8 reveal flex flex-col"
                data-reveal-delay={i * 120}
              >
                {/* Photo */}
                <div
                  className="relative aspect-[3/4] overflow-hidden photo-frame"
                  data-cursor="view"
                >
                  <img
                    src={`/images/${s.slot}.jpg`}
                    alt={s.title}
                    width={700}
                    height={900}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 label-eyebrow text-offwhite/80">
                    {s.num}
                  </div>
                  {s.badge && (
                    <div className="absolute top-4 right-4 bg-amber text-black label-eyebrow px-3 py-1.5">
                      {s.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  <div className="mt-3 h-px w-12 bg-amber" />

                  <p
                    className={`mt-5 text-offwhite/75 text-[15px] leading-relaxed ${
                      isOpen ? "" : "line-clamp-3"
                    }`}
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: isOpen ? "unset" : 3,
                      overflow: "hidden",
                    }}
                  >
                    {s.full}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <button
                      type="button"
                      className="label-eyebrow text-offwhite/70 hover:text-amber transition-colors inline-flex items-center gap-2"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      data-cursor="cta"
                    >
                      {isOpen ? "Show less" : "Read more"}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <span className="label-eyebrow text-offwhite/35">
                      {s.category}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
