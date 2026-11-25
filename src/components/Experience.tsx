import { useState } from "react";
import { organizations, work } from "../data/portfolio";
import { Heading, Photo } from "./Shared";
import { Icon } from "./Icon";

function Polaroids({ item }: { item: (typeof organizations)[number] }) {
  const [index, setIndex] = useState(0);
  return (
    <article className="organization">
      <div className="polaroid-stage">
        <button
          className="polaroid-deck"
          onClick={() => setIndex((index + 1) % 3)}
          aria-label={`Show next photograph for ${item.name}`}
        >
          {item.images.map((image, i) => {
            const position = (i - index + 3) % 3;
            return (
              <span key={i} className={`polaroid position-${position}`}>
                <Photo src={image} label={item.captions[i]} />
                <span className="polaroid-caption">
                  {item.captions[i]} <small>0{i + 1}</small>
                </span>
              </span>
            );
          })}
        </button>
        <button className="shuffle-button" onClick={() => setIndex((index + 1) % 3)}>
          <Icon name="shuffle" size={16} /> Shuffle memories{" "}
          <span aria-live="polite">{index + 1}/3</span>
        </button>
      </div>
      <div>
        <span className="eyebrow">{item.period}</span>
        <h3>{item.name}</h3>
        <span className="role">{item.role}</span>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section">
      <Heading
        number="02"
        label="EXPERIENCE"
        title="Learning by doing."
        note="Experiences that shape how I think, collaborate, and create."
      />
      <div className="subheading">
        <h3>Out in the real world.</h3>
        <span className="eyebrow">WORK EXPERIENCE / 03</span>
      </div>
      <div className="work-grid">
        {work.map((w, i) => (
          <article className="work-card" key={i}>
            <div className="work-photos">
              {w.images.map((src, j) => (
                <Photo src={src} label={`[WORK ${i + 1} · PHOTO ${j + 1}]`} key={j} />
              ))}
            </div>
            <div className="work-copy">
              <span className="eyebrow">{w.period}</span>
              <h3>{w.title}</h3>
              <strong>{w.company}</strong>
              <p>{w.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="subheading org-heading">
        <h3>Better, together.</h3>
        <span className="eyebrow">ORGANIZATIONAL EXPERIENCE / 02</span>
      </div>
      <div className="organizations">
        {organizations.map((item, i) => (
          <Polaroids item={item} key={i} />
        ))}
      </div>
    </section>
  );
}
