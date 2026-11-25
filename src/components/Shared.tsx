import { useEffect, useRef } from "react";
import { asset, type Credential } from "../data/portfolio";
import { Icon } from "./Icon";

export function Heading({
  number,
  label,
  title,
  note,
}: {
  number: string;
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span>{number}</span> / {label}
        </span>
        <h2>{title}</h2>
      </div>
      {note && <p>{note}</p>}
    </div>
  );
}
export function Photo({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return src ? (
    <img className={`photo ${className}`} src={asset(src)} alt={label} loading="lazy" />
  ) : (
    <div className={`photo placeholder ${className}`}>
      <Icon name="image" size={30} />
      <span>{label}</span>
      <small>YOUR PHOTO GOES HERE</small>
    </div>
  );
}
export function CredentialArt({ item }: { item: Credential }) {
  return item.image ? (
    <img src={asset(item.image)} alt={item.title} loading="lazy" />
  ) : (
    <div className="credential-art">
      <div className="credential-paper">
        <span className="tiny">YOUR NEXT CHAPTER</span>
        <Icon name="award" size={33} />
        <strong>[CERTIFICATE IMAGE]</strong>
        <i />
        <i />
        <span className="seal">
          <Icon name="spark" size={23} />
        </span>
        <small>PREVIEW PLACEHOLDER</small>
      </div>
    </div>
  );
}
export function Lightbox({ item, close }: { item: Credential | null; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (item) dialog.current?.showModal();
    else dialog.current?.close();
  }, [item]);
  return (
    <dialog
      ref={dialog}
      className="lightbox"
      onCancel={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {item && (
        <div className="lightbox-inner">
          <button
            autoFocus
            className="icon-button lightbox-close"
            onClick={close}
            aria-label="Close preview"
          >
            <Icon name="close" />
          </button>
          <CredentialArt item={item} />
          <div className="lightbox-details">
            <span className="eyebrow">{item.category}</span>
            <h3>{item.title}</h3>
            <p>
              {item.issuer} · {item.date}
            </p>
            {item.id && <p>Credential ID: {item.id}</p>}
            {item.description && <p>{item.description}</p>}
            {item.url && (
              <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                View credential <Icon name="diagonal" />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
