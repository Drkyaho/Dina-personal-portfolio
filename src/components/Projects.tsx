import { useRef, useState } from "react";
import { projects, asset } from "../data/portfolio";
import { Heading } from "./Shared";
import { Icon } from "./Icon";

function ProjectVisual({ index }: { index: number }) {
  return (
    <div className={`project-visual visual-${index}`}>
      <div className="dashboard">
        <div className="dashboard-top">
          <span>
            <i /> PROJECT PREVIEW
          </span>
          <span>•••</span>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-nav">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="dashboard-content">
            <span className="tiny">FROM RAW DATA TO SOMETHING MEANINGFUL</span>
            <h4>
              {
                [
                  "A clearer perspective.",
                  "Connected by design.",
                  "Patterns into predictions.",
                  "Beyond what meets the eye.",
                ][index]
              }
            </h4>
            <div className="stat-skeletons">
              <i />
              <i />
              <i />
            </div>
            <div className="chart">
              <div className="chart-bars">
                {[35, 56, 44, 75, 61, 83, 69, 94, 83, 100, 90, 114].map((v, i) => (
                  <i key={i} style={{ height: `${v}px` }} />
                ))}
              </div>
              <div className="chart-donut" />
            </div>
            <span className="tiny">ILLUSTRATIVE VISUAL · REPLACE WITH YOUR PROJECT</span>
          </div>
        </div>
      </div>
      <span className="preview-sticker">
        <Icon name={index > 1 ? "code" : "spark"} size={32} />
      </span>
    </div>
  );
}
export function Projects() {
  const [index, setIndex] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const move = (direction: number) =>
    setIndex((i) => (i + direction + projects.length) % projects.length);
  return (
    <section id="projects" className="section projects-section">
      <Heading
        number="03"
        label="SELECTED PROJECTS"
        title="Where curiosity takes shape."
        note="An evolving collection of questions explored and ideas built."
      />
      <div className="project-stage">
        <div
          className="project-carousel"
          id="project-slides"
          role="region"
          aria-roledescription="carousel"
          aria-label="Project showcase"
          onTouchStart={(e) => {
            touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }}
          onTouchEnd={(e) => {
            if (touch.current !== null) {
              const delta = touch.current.x - e.changedTouches[0].clientX;
              const vertical = touch.current.y - e.changedTouches[0].clientY;
              if (Math.abs(delta) > 45 && Math.abs(delta) > Math.abs(vertical)) {
                move(delta > 0 ? 1 : -1);
              }
              touch.current = null;
            }
          }}
          onTouchCancel={() => {
            touch.current = null;
          }}
        >
          <div className="project-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((p, i) => (
              <article
                className="project-slide"
                key={p.category}
                aria-hidden={index !== i}
                inert={index !== i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${projects.length}: ${p.title}`}
              >
                <div className="project-media">
                  {p.image ? (
                    <img
                      className="project-image"
                      src={asset(p.image)}
                      alt={p.title}
                      loading="lazy"
                      style={{
                        padding: 0,
                        objectFit: "cover",
                        objectPosition: "center",
                        overflow: "hidden",
                        borderRadius: "inherit",
                      }}
                    />
                  ) : (
                    <ProjectVisual index={i} />
                  )}
                </div>
                <div className="project-copy">
                  <span className="eyebrow">
                    <span className="status-dot" /> {p.category}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <details key={`project-context-${index}`} className="project-notes">
                    <summary>Additional project context</summary>
                    <p
                      className={p.additionalDescription ? "project-notes-content" : "project-notes-placeholder"}
                      style={{ whiteSpace: "pre-line" }}
                      >
                      {p.additionalDescription || "Add project description here..."}
                    </p>
                  </details>
                  <div className="tags">
                    {p.tools.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <p className="project-skills">{p.skills.join(" / ")}</p>
                  {p.github ? (
                    <a
                      className="button button-blue"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="github" size={17} /> View GitHub Repository{" "}
                      <Icon name="diagonal" size={16} />
                    </a>
                  ) : (
                    <>
                      <button className="button button-blue" disabled>
                        <Icon name="github" size={17} /> View GitHub Repository
                      </button>
                      <small className="muted">Repository link will be added here.</small>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          className="icon-button project-nav project-nav-prev prev"
          onClick={() => move(-1)}
          aria-label="Previous project"
          aria-controls="project-slides"
        >
          <Icon name="arrow" size={18} />
        </button>
        <button
          className="icon-button project-nav project-nav-next"
          onClick={() => move(1)}
          aria-label="Next project"
          aria-controls="project-slides"
        >
          <Icon name="arrow" size={18} />
        </button>
      </div>
      <div className="carousel-footer">
        <span aria-live="polite">
          <strong>{String(index + 1).padStart(2, "0")}</strong> /{" "}
          {String(projects.length).padStart(2, "0")}{" "}
          <span className="carousel-hint">A WORK IN PROGRESS. JUST LIKE ME.</span>
        </span>
        <div className="carousel-dots">
          {projects.map((p, i) => (
            <button
              key={p.category}
              onClick={() => setIndex(i)}
              className={index === i ? "selected" : ""}
              aria-label={`Show project ${i + 1}: ${p.category}`}
              aria-pressed={index === i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
