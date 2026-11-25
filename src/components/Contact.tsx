import { profile } from "../data/portfolio";
import { Photo } from "./Shared";
import { Icon } from "./Icon";
export function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: "mail",
      value: profile.email,
      label: "dinaprastu0410@gmail.com",
      href: profile.email ? `mailto:${profile.email}` : "",
    },
    {
      name: "Linkedin",
      icon: "linkedin",
      value: profile.linkedin,
      label: "https://www.linkedin.com/in/dinaprastuti",
      href: profile.linkedin,
    },
    {
      name: "GitHub",
      icon: "github",
      value: profile.github,
      label: "https://github.com/Drkyaho",
      href: profile.github,
    },
  ];
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <span className="eyebrow">06 / LET’S CONNECT</span>
          <h2>
            Good things start
            <br />
            with a <em>hello.</em>
            <span className="contact-star">
              <Icon name="spark" size={64} />
            </span>
          </h2>
          <p>{profile.closing}</p>
          <div className="contact-links">
            {contacts.map((c) => {
              const content = (
                <>
                  <span className="contact-platform">
                    <Icon name={c.icon} size={21} />
                    <strong>{c.name}</strong>
                  </span>
                  <span>{c.value || c.label}</span>
                  <Icon name="diagonal" size={20} />
                </>
              );
              return c.href ? (
                <a
                  key={c.name}
                  href={c.href}
                  target={c.name === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={c.name}
                  className="contact-unset"
                  title="Add your contact details in src/data/portfolio.ts"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="contact-photo"
          id="contact-polaroids"
          style={{
            width: "100%",
            maxWidth: "340px",
            minWidth: 0,
            margin: "0 auto",
            padding: "24px 24px 0",
            background: "transparent",
            boxShadow: "none",
            transform: "none",
          }}
        >
          <style>{`
            #contact-polaroids .contact-stack-fieldset {
              min-width: 0;
              margin: 0;
              padding: 0;
              border: 0;
            }
            #contact-polaroids .contact-stack-stage {
              position: relative;
              width: 100%;
              aspect-ratio: .88;
              isolation: isolate;
            }
            #contact-polaroids .contact-stack-card {
              position: absolute;
              inset: 0;
              display: grid;
              grid-template-rows: minmax(0, 1fr) auto;
              gap: 12px;
              padding: 10px 10px 13px;
              border: 1px solid var(--line);
              border-radius: 3px;
              background: var(--card);
              color: var(--blue);
              box-shadow: 0 4px 12px #15201518;
              z-index: calc(4 - var(--slot));
              transform: translate(calc(var(--slot) * 4px), calc(var(--slot) * -4px))
                rotate(calc(-4deg + var(--slot) * 5deg));
              transform-origin: 50% 80%;
              transition: transform .55s cubic-bezier(.2,.7,.2,1), box-shadow .3s,
                background-color .3s, border-color .3s, color .3s;
              pointer-events: none;
              user-select: none;
              cursor: pointer;
            }
            #contact-polaroids .contact-stack-card > .photo {
              width: 100%;
              height: 100%;
              min-height: 0;
              min-width: 0;
              object-fit: cover;
              overflow: hidden;
            }
            #contact-polaroids .contact-stack-card > .placeholder {
              background: var(--surface);
              color: var(--muted);
              gap: 8px;
            }
            #contact-polaroids .contact-stack-card > .placeholder > span {
              font-size: 10px;
            }
            #contact-polaroids .contact-stack-caption {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 8px;
              font-size: 7px;
              line-height: 1.5;
              letter-spacing: .5px;
            }
            #contact-polaroids .contact-stack-caption > small {
              flex-shrink: 0;
              font-size: 8px;
              opacity: .65;
            }
            #contact-polaroids .contact-stack-controls {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              gap: 4px;
              margin-top: 22px;
            }
            #contact-polaroids .contact-stack-controls input {
              appearance: none;
              width: 24px;
              height: 24px;
              margin: 0;
              border: 6px solid transparent;
              border-radius: 50%;
              background: var(--blue);
              background-clip: content-box;
              opacity: .3;
              cursor: pointer;
            }
            #contact-polaroids .contact-stack-controls input:checked {
              opacity: 1;
            }
            #contact-polaroids .contact-stack-controls input:focus-visible {
              outline: 2px solid var(--blue);
              outline-offset: 1px;
            }
            #contact-polaroids .contact-stack-hint {
              flex-basis: 100%;
              margin-top: 4px;
              color: inherit;
              text-align: center;
              font-size: 9px;
              line-height: 1.5;
            }
            #contact-polaroids:has(#contact-photo-1:checked) [data-photo-index="0"] { --slot: 0; pointer-events: auto; }
            #contact-polaroids:has(#contact-photo-1:checked) [data-photo-index="1"] { --slot: 1; }
            #contact-polaroids:has(#contact-photo-1:checked) [data-photo-index="2"] { --slot: 2; }
            #contact-polaroids:has(#contact-photo-1:checked) [data-photo-index="3"] { --slot: 3; }
            #contact-polaroids:has(#contact-photo-2:checked) [data-photo-index="0"] { --slot: 3; }
            #contact-polaroids:has(#contact-photo-2:checked) [data-photo-index="1"] { --slot: 0; pointer-events: auto; }
            #contact-polaroids:has(#contact-photo-2:checked) [data-photo-index="2"] { --slot: 1; }
            #contact-polaroids:has(#contact-photo-2:checked) [data-photo-index="3"] { --slot: 2; }
            #contact-polaroids:has(#contact-photo-3:checked) [data-photo-index="0"] { --slot: 2; }
            #contact-polaroids:has(#contact-photo-3:checked) [data-photo-index="1"] { --slot: 3; }
            #contact-polaroids:has(#contact-photo-3:checked) [data-photo-index="2"] { --slot: 0; pointer-events: auto; }
            #contact-polaroids:has(#contact-photo-3:checked) [data-photo-index="3"] { --slot: 1; }
            #contact-polaroids:has(#contact-photo-4:checked) [data-photo-index="0"] { --slot: 1; }
            #contact-polaroids:has(#contact-photo-4:checked) [data-photo-index="1"] { --slot: 2; }
            #contact-polaroids:has(#contact-photo-4:checked) [data-photo-index="2"] { --slot: 3; }
            #contact-polaroids:has(#contact-photo-4:checked) [data-photo-index="3"] { --slot: 0; pointer-events: auto; }
            @media (prefers-reduced-motion: reduce) {
              #contact-polaroids .contact-stack-card { transition: none; }
            }
          `}</style>
          <fieldset className="contact-stack-fieldset">
            <legend className="sr-only">
              Foto kontak. Klik polaroid untuk melihat foto berikutnya. Gunakan tombol panah
              saat titik dipilih untuk menjelajahi empat foto.
            </legend>
            <div className="contact-stack-stage">
              {[
                { src: profile.contactImage, caption: "HERE’S TO WHAT COMES NEXT." },
                // Add public-relative image paths to these three empty placeholders.
                { src: "/images/profile/rame.webp", caption: "THE JOURNEY CONTINUES" },
                { src: "/images/profile/tmn.webp", caption: "CHAPTERS WE SHARED" },
                { src: "/images/profile/kkn.webp", caption: "MADE OF DREAMS & POSSIBILITIES" },
              ].map((photo, index) => (
                <label
                  key={index}
                  className="contact-stack-card"
                  data-photo-index={index}
                  htmlFor={`contact-photo-${((index + 1) % 4) + 1}`}
                  title="Klik untuk melihat foto berikutnya"
                >
                  <Photo src={photo.src} label={`[CONTACT PHOTO ${index + 1}]`} />
                  <span className="contact-stack-caption">
                    {photo.caption}
                    <small>0{index + 1} / 04</small>
                  </span>
                </label>
              ))}
            </div>
            <div className="contact-stack-controls">
              {[1, 2, 3, 4].map((number) => (
                <input
                  key={number}
                  type="radio"
                  name="contact-polaroid-photo"
                  id={`contact-photo-${number}`}
                  defaultChecked={number === 1}
                  aria-label={`Tampilkan foto kontak ${number} dari 4`}
                />
              ))}
              <span className="contact-stack-hint">
                Click a Polaroid or dot to switch photos.
              </span>
            </div>
          </fieldset>
        </div>
      </section>
      <footer>
        <a href="#home" className="wordmark">
          <Icon name="spark" size={24} /> MyPortofolio
        </a>
        <p>
          © {new Date().getFullYear()} {profile.name}. A personal portfolio, always evolving.
        </p>
        <a href="#home">
          BACK TO TOP <Icon name="down" size={15} />
        </a>
      </footer>
    </>
  );
}
