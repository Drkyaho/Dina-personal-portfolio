import { useState } from "react";
import { awards, awardImages, certificates, type Credential } from "../data/portfolio";
import { CredentialArt, Heading } from "./Shared";
import { Icon } from "./Icon";

export function Awards({ preview }: { preview: (item: Credential) => void }) {
  return (
    <section id="awards" className="section">
      <Heading
        number="04"
        label="AWARDS & RECOGNITION"
        title="Moments that matter."
        note="A few milestones from the academic journey."
      />
      <div className="awards-grid">
        {awards.map((a, i) => (
          <article key={a.title} className={`award-card award-${i}`}>
            <div className="award-symbol">
              <Icon name="award" size={49} />
            </div>
            <div>
              <span className="eyebrow">{a.year} / ACADEMIC AWARD</span>
              <h3>{a.title}</h3>
              <strong>{a.institution}</strong>
              <p>{a.description}</p>
            </div>
            <Icon name="spark" size={26} />
          </article>
        ))}
      </div>
      <div className="award-gallery">
        {awardImages.map((item, i) => (
          <button className="credential-small" key={i} onClick={() => preview(item)}>
            <CredentialArt item={item} />
            <span>
              {item.title}
              <Icon name="diagonal" size={16} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
export function Certificates({ preview }: { preview: (item: Credential) => void }) {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(0);
  const pageSize = 6;
  const categories = ["All", ...new Set(certificates.map((c) => c.category))];
  const filtered = certificates.filter((c) => filter === "All" || c.category === filter);
  const pageCount = Math.ceil(filtered.length / pageSize);
  const visible = filtered.slice(page * pageSize, (page + 1) * pageSize);
  return (
    <section id="certificates" className="section">
      <Heading
        number="05"
        label="CERTIFICATES"
        title="Never done learning."
        note="Building knowledge, one course, one challenge, one small breakthrough at a time."
      />
      <div className="filter-tabs" aria-label="Filter certificates">
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={filter === c}
            className={filter === c ? "active" : ""}
            onClick={() => {
              setFilter(c);
              setPage(0);
            }}
          >
            {c}
            {c === "All" && <span>{certificates.length.toString().padStart(2, "0")}</span>}
          </button>
        ))}
      </div>
      <div className="certificate-grid" id="certificate-results">
        {visible.map((c, i) => (
          <button className="certificate-card" key={c.title} onClick={() => preview(c)}>
            <div className={`certificate-image tone-${i % 4}`}>
              <CredentialArt item={c} />
              <span className="certificate-open">
                <Icon name="diagonal" size={18} />
              </span>
            </div>
            <div className="certificate-copy">
              <span className="eyebrow">{c.category}</span>
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
              <span className="certificate-date">
                {c.date} <span>View certificate ↗</span>
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="certificate-pagination">
        <p role="status">
          Showing {filtered.length ? page * pageSize + 1 : 0}–
          {Math.min((page + 1) * pageSize, filtered.length)} of {filtered.length} certificates
        </p>
        {pageCount > 1 && (
          <nav aria-label="Certificate pages">
            <button
              className="icon-button prev"
              onClick={() => setPage((current) => current - 1)}
              disabled={page === 0}
              aria-label="Previous certificate page"
              aria-controls="certificate-results"
            >
              <Icon name="arrow" size={16} />
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                className={`icon-button ${page === index ? "current-page" : ""}`}
                onClick={() => setPage(index)}
                aria-label={`Certificate page ${index + 1}`}
                aria-current={page === index ? "page" : undefined}
                aria-controls="certificate-results"
              >
                {index + 1}
              </button>
            ))}
            <button
              className="icon-button"
              onClick={() => setPage((current) => current + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next certificate page"
              aria-controls="certificate-results"
            >
              <Icon name="arrow" size={16} />
            </button>
          </nav>
        )}
      </div>
      <p className="gallery-note">
        A growing collection. There’s always something new to learn. <Icon name="spark" size={17} />
      </p>
    </section>
  );
}
