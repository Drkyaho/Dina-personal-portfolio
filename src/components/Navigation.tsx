import { useEffect, useState } from "react";
import { navigation, sectionIds } from "../data/portfolio";
import { Icon } from "./Icon";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(document.documentElement.dataset.theme === "dark");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    } catch {
      /* Storage may be disabled. */
    }
  }
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a
          href="#home"
          className="wordmark"
          aria-label="MyPortofolio home"
          style={{ backgroundColor: "transparent", transition: "color 0.3s" }}
        >
          <Icon name="spark" size={26} /> MyPortofolio
        </a>
        <div className={`nav-links ${open ? "is-open" : ""}`} id="navigation">
          {navigation.map((label, i) => (
            <a
              key={label}
              href={`#${sectionIds[i]}`}
              className={active === sectionIds[i] ? "active" : ""}
              aria-current={active === sectionIds[i] ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            aria-pressed={dark}
          >
            <Icon name={dark ? "sun" : "moon"} size={19} />
          </button>
          <button
            className="icon-button mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navigation"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
