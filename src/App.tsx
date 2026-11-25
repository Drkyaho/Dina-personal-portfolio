import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Awards, Certificates } from "./components/Credentials";
import { Contact } from "./components/Contact";
import { Lightbox } from "./components/Shared";
import type { Credential } from "./data/portfolio";

export default function App() {
  const [preview, setPreview] = useState<Credential | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04 },
    );
    document.querySelectorAll(".section").forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Awards preview={setPreview} />
        <Certificates preview={setPreview} />
        <Contact />
      </main>
      <Lightbox item={preview} close={() => setPreview(null)} />
    </>
  );
}
