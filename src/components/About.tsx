import {
  badges,
  education,
  hardSkills,
  softSkills,
  profile,
  thesis,
  tools,
  asset,
} from "../data/portfolio";
import { Heading, Photo } from "./Shared";
import { Icon } from "./Icon";

function EducationCards() {
  return (
    <div className="education-grid">
      {education.map((item, i) => (
        <article className="education-card" key={item.type}>
          <div className="card-topline">
            <span>{item.type}</span>
            <span>0{i + 1}</span>
          </div>
          {/* Add each photo's public-relative path to its src below when ready. */}
          {[
            { type: "FORMAL EDUCATION", src: "/images/edu/si.webp" },
            { type: "STUDENT EXCHANGE", src: "/images/edu/pmm.webp" },
            { type: "PROFESSIONAL LEARNING", src: "/images/edu/ml.webp" },
          ]
            .filter((photo) => photo.type === item.type)
            .map((photo) => (
              <div
                key={photo.type}
                className="education-photo"
                role={photo.src ? undefined : "img"}
                aria-label={photo.src ? undefined : `Empty photo placeholder for ${item.place}`}
                style={{
                  width: "85%",
                  maxWidth: "220px",
                  aspectRatio: "16 / 9",
                  marginTop: "18px",
                  marginInline: "auto",
                  borderRadius: "8px",
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--surface)",
                  overflow: "hidden",
                }}
              >
                {photo.src && (
                  <img
                    src={asset(photo.src)}
                    alt={`Photo for ${item.place}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                )}
              </div>
            ))}
          <span className="education-period">{item.period}</span>
          <h4>{item.title}</h4>
          <p className="school">{item.place}</p>
          <p>{item.detail}</p>
          <p className="muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
function Skills() {
  return (
    <div className="skills-grid">
      <div>
        <span className="eyebrow">01 / HARD SKILLS</span>
        <h3>The technical toolkit.</h3>
        <div className="tags">
          {hardSkills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <div>
        <span className="eyebrow">02 / SOFT SKILLS</span>
        <h3>The human side.</h3>
        <div className="tags">
          {softSkills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
function Tools() {
  return (
    <div className="tools-block">
      <div className="subheading">
        <h3>Tools I work with.</h3>
        <span className="muted">A few familiar faces in my workflow.</span>
      </div>
      <div className="tools-grid">
        {tools.map(([name, slug]) => (
          <div className="tool" key={name}>
            <img src={asset(`images/tools/${slug}.svg`)} alt="" loading="lazy" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export function About() {
  return (
    <section id="about" className="section">
      <Heading
        number="01"
        label="ABOUT ME"
        title="More than a data point."
        note="The person, the path, and the things I’m learning along the way."
      />
      <div className="about-intro">
        <div className="profile-photo">
          <Photo
            src={profile.image || "/images/profile/profil.webp"}
            label="Foto profil dengan buket bunga"
          />
          <span className="photo-sticker">
            HELLO, IT’S ME <Icon name="spark" size={17} />
          </span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">A LITTLE INTRODUCTION</span>
          <h3>
            Hi, I’m <span>{profile.name}.</span>
            <br />
            Curiosity is my starting point.
          </h3>
          <p>{profile.summary}</p>
          <a href="#contact" className="text-link">
            Let’s connect <Icon name="diagonal" size={18} />
          </a>
        </div>
      </div>
      <div className="subheading">
        <h3>Learning, one chapter at a time.</h3>
        <span className="eyebrow">EDUCATION & LEARNING</span>
      </div>
      <EducationCards />
      <article className="thesis-card">
        <div className="thesis-label">
          <Icon name="code" size={32} />
          <span className="eyebrow">
            THE FINAL-YEAR
            <br />
            DEEP DIVE
          </span>
        </div>
        <div>
          <span className="eyebrow">UNDERGRADUATE THESIS</span>
          <h3>{thesis.title}</h3>
          <p>{thesis.description}</p>
          <div className="thesis-meta">
            <span>
              METHOD <b>{thesis.methodology}</b>
            </span>
            <span>
              TECHNOLOGY <b>{thesis.technologies}</b>
            </span>
            <span>
              OUTCOME <b>{thesis.outcome}</b>
            </span>
          </div>
          {thesis.url && (
            <a href={thesis.url} className="text-link" target="_blank" rel="noreferrer">
              Read the research <Icon name="diagonal" />
            </a>
          )}
        </div>
      </article>
      <Skills />
      <Tools />
      <div className="badges-block" style={{ display: "block", padding: "clamp(16px, 2vw, 24px)" }}>
        <div style={{ marginBottom: "18px", minWidth: 0 }}>
          <span className="eyebrow" style={{ lineHeight: 1.6 }}>
            SMALL MILESTONES. REAL LEARNING.
          </span>
          <h3 style={{ lineHeight: 1.35 }}>Collected along the way.</h3>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {badges.map((b) => (
            <div
              className="badge"
              key={b.name}
              style={{
                minWidth: 0,
                marginTop: 0,
                padding: "14px",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "76px",
                  height: "76px",
                  flex: "0 0 76px",
                  display: "grid",
                  placeItems: "center",
                  padding: "5px",
                  borderRadius: "12px",
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--surface)",
                }}
              >
                {b.image ? (
                  <img
                    src={asset(b.image)}
                    alt={b.name}
                    loading="lazy"
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                  />
                ) : (
                  <Icon name="award" size={44} />
                )}
              </div>
              <div style={{ minWidth: 0, overflowWrap: "anywhere", whiteSpace: "normal" }}>
                <strong style={{ fontSize: "12px", lineHeight: 1.45 }}>{b.name}</strong>
                <span style={{ fontSize: "11px", lineHeight: 1.5 }}>{b.issuer}</span>
                {b.url && (
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      marginTop: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    View credential <Icon name="diagonal" size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
