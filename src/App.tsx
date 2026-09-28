import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import Cursor from "./components/Cursor";

import {
  useActiveSection,
  useIntro,
  useParallax,
  useReveal,
  useScrollProgress,
  useSmoothAnchors,
} from "./lib/useReveal";
import { NAV_LINKS } from "./lib/data";

export default function App() {
  // Wire global effects
  useIntro();
  useReveal();
  useScrollProgress();
  useParallax();
  useSmoothAnchors();

  const sectionIds = NAV_LINKS.map((l) => l.id);
  const active = useActiveSection(sectionIds);

  return (
    <>
      {/* Skip link for a11y */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Scroll progress bar (amber) */}
      <div id="scroll-progress" aria-hidden />

      {/* Page-load intro overlay */}
      <div id="intro-overlay" aria-hidden>
        <div className="text-center">
          <div
            className="intro-text font-display text-offwhite"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <span>Works </span>
            <span className="italic font-light">of </span>
            <span className="text-amber italic">ART</span>
          </div>
        </div>
      </div>

      {/* Custom cursor (desktop) */}
      <Cursor />

      {/* Nav */}
      <Nav active={active} />

      <main id="main">
        <Hero />

        <Marquee />

        <About />

        <Marquee
          text="Cut · Color · Style · Repair · Blowout · Balayage · Ombré"
          variant="light"
        />

        <Services />

        <Pricing />

        <Gallery />

        <Contact />
      </main>

      <Footer />

      <MobileBar />
    </>
  );
}
