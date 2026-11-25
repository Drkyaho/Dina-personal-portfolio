import { asset } from "../data/portfolio";
import { Icon } from "./Icon";

export function Home() {
  return (
    <section id="home" className="home">
      <div className="cover-kicker">
        <span>
          <span className="status-dot" /> LEARNING. BUILDING. DISCOVERING.
        </span>
        <span className="cover-edition">
          PERSONAL PORTFOLIO <Icon name="spark" size={15} />
        </span>
      </div>
      <div className="hero-title-wrap">
        <h1>
          PORTFOLIO<span className="title-dot">.</span>
        </h1>
        <span className="hero-sticker">
          <Icon name="spark" size={62} />
        </span>
      </div>
      <div className="hero-subline">
        <p>
          A little curiosity.
          <br />
          <span>A world of possibilities.</span>
        </p>
        <p>
          Information Systems graduate.
          <br />
          Exploring what’s next, through data.
        </p>
        <a href="#about" className="round-link" aria-label="Explore about me">
          <Icon name="down" />
        </a>
      </div>
      <div className="hero-grid">
        <div className="interest-card" style={{ transform: "scale(0.95)" }}>
          <div className="card-topline">
            <span>THE INTERSECTION OF</span>
            <Icon name="diagonal" size={22} />
          </div>
          <h2>
            Curiosity,
            <br />
            code &<br />
            <em>possibility.</em>
          </h2>
          <div className="interest-bottom">
            <p>
              Interested in Data Science,
              <br />
              Data Analytics & Machine Learning.
            </p>
            <span className="mini-orbit">↗</span>
          </div>
        </div>
        <a href="#projects" className="orbit-card" style={{ transform: "scale(0.95)" }}>
          <img
            src={asset("images/art/data-pattern.svg")}
            alt="Ilustrasi minimalis pola data: titik-titik cobalt dan garis tren pada latar lime"
            style={{ objectFit: "contain", backgroundColor: "#dcf673" }}
            fetchPriority="high"
          />
          <div className="orbit-label">
            <span>CONNECTING THE DOTS.</span>
            <span className="white-round">
              <Icon name="diagonal" />
            </span>
          </div>
          <span className="vertical-label">ALWAYS EXPLORING / ALWAYS LEARNING</span>
        </a>
        <div className="hero-side">
          <a href="#about" className="intro-card">
            <div className="card-topline">
              <span>BEHIND THE DATA</span>
              <Icon name="diagonal" />
            </div>
            <div className="abstract-avatar">
              <div />
              <span className="avatar-star">
                <Icon name="spark" size={27} />
              </span>
            </div>
            <h3>
              A human,
              <br />
              not just a dataset.
            </h3>
            <span className="underlined">
              A little about me <Icon name="arrow" size={17} />
            </span>
          </a>
          <a className="explore-card" href="#projects">
            <span>IDEAS INTO ACTION</span>
            <div>
              <strong>Explore my work</strong>
              <Icon name="diagonal" size={23} />
            </div>
          </a>
        </div>
      </div>
      <div
        className="cover-bottom"
        style={{ marginTop: "24px", flexWrap: "wrap", gap: "12px 24px" }}
      >
        <a href="#about">
          <Icon name="down" size={14} /> SCROLL TO GET TO KNOW ME
        </a>
        
      </div>
    </section>
  );
}
