import { useEffect, useRef, useState } from "react";

const STATS = [
  // PLACEHOLDER FACTS — verify before launch (see brief)
  { value: 25, suffix: "+", label: "Years in Los Feliz" },
  { value: 1, prefix: "A-List", suffix: "", label: "Clientele" },
  { value: 1, prefix: "Award-Winning", suffix: "", label: "Stylists" },
];

function CountUp({
  end,
  duration = 1800,
  trigger,
}: {
  end: number;
  duration?: number;
  trigger: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration]);
  return <>{val}</>;
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStatsInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative bg-offwhite text-black py-24 md:py-36 overflow-hidden"
      aria-label="About"
    >
      {/* Outlined section number */}
      <div
        className="absolute -top-6 left-4 md:left-10 section-number light pointer-events-none select-none"
        aria-hidden
      >
        01
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Image collage */}
        <div className="lg:col-span-6 relative">
          <div
            className="relative photo-frame reveal-img aspect-[4/5] md:aspect-[5/6]"
            data-parallax="0.08"
            data-cursor="view"
          >
            <img
              src="/images/about-1.jpg"
              alt="A stylist at work inside Works of ART Hair Salon"
              width={900}
              height={1100}
              loading="lazy"
            />
          </div>
          <div
            className="absolute -bottom-10 -right-4 md:-right-12 w-[55%] photo-frame reveal-img aspect-[3/4] border-[8px] border-offwhite shadow-2xl"
            data-parallax="0.18"
            data-cursor="view"
            style={{ transitionDelay: "200ms" }}
          >
            <img
              src="/images/about-2.jpg"
              alt="Color application at the salon"
              width={600}
              height={800}
              loading="lazy"
              style={{ objectPosition: "center 40%" }}
            />
          </div>

          {/* Floating label */}
          <div className="absolute -top-4 -left-4 md:-left-8 bg-amber text-black px-5 py-3 label-eyebrow shadow-xl reveal">
            Est. 2001
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-6 lg:pt-16">
          <p className="label-eyebrow text-amber reveal">02 — Our Story</p>
          <h2
            className="reveal font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mt-5"
            data-reveal-delay="80"
          >
            A neighborhood
            <br />
            salon with a{" "}
            <span className="italic text-amber">gallery</span> soul.
          </h2>

          <div className="mt-8 space-y-5 max-w-xl text-base md:text-[17px] leading-relaxed text-black/75">
            <p className="reveal" data-reveal-delay="160">
              Works of Art Hair Salon is celebrating its 20th-plus year at its
              current location on Hollywood Boulevard near Vermont Street, in
              the hip, artsy Los Feliz shopping and entertainment district.
              Situated above one of the best restaurants in Los Angeles, and
              down the street from one of L.A.'s top art galleries, La Luz de
              Jesus, the salon is a great destination.
            </p>
            <p className="reveal" data-reveal-delay="220">
              From set openings to fashion shows, Works of Art has been a
              major part of the Hollywood scene for over a decade. It has,
              however, maintained its easygoing atmosphere. Not wanting to
              become an overly trendy, uncomfortable place for wanna-be celebs,
              the salon stands out as a cool neighborhood hangout, with many
              clients just stopping by to say hello.
            </p>
            <p className="reveal" data-reveal-delay="280">
              Owner Art Cartilel is very attuned to the ever-changing needs of
              his clients, which brings a constant stream of educators and
              classes into the salon to keep the stylists up-to-date with the
              latest trends and styles.
            </p>
          </div>

          {/* Pull quote — NOTE: keep wording exactly as sourced;
              flag for salon owner to confirm attribution. */}
          <figure className="mt-10 max-w-xl reveal" data-reveal-delay="360">
            <blockquote className="pull-quote">
              "If we can't give it there, they will go elsewhere."
            </blockquote>
            <figcaption className="mt-4 label-eyebrow text-black/55">
              — Art Cartilel, Owner{" "}
              <span className="text-amber">*</span>
            </figcaption>
          </figure>

          <div className="mt-10 reveal" data-reveal-delay="440">
            <a href="#contact" className="btn-amber" data-cursor="cta">
              Contact Us
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
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        ref={statsRef}
        className="mx-auto max-w-[1440px] px-6 md:px-10 mt-24 md:mt-32 grid sm:grid-cols-3 gap-px bg-black/10"
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className="bg-offwhite px-6 py-10 md:py-14 text-center reveal"
            data-reveal-delay={i * 80}
          >
            <div className="font-display text-5xl md:text-7xl tracking-tight leading-none">
              {s.prefix ? (
                <span className="text-amber">{s.prefix}</span>
              ) : (
                <CountUp end={s.value} trigger={statsInView} />
              )}
              {s.suffix && <span className="text-amber">{s.suffix}</span>}
            </div>
            <div className="label-eyebrow text-black/55 mt-4">{s.label}</div>
          </div>
        ))}
      </div>

      {/* NOTE FOR DEVELOPER: verify the three stats above (25 years,
          A-List Clientele, Award-Winning Stylists) before launch. */}
    </section>
  );
}
