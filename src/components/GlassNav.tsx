import { useState } from "react";

const baseUrl = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const links = [
  ["About", `${baseUrl}#about`],
  ["Research", `${baseUrl}#research`],
  ["Publications", `${baseUrl}#publications`],
  ["Talks", `${baseUrl}#talks`],
  ["Awards", `${baseUrl}#awards`],
  // ["Writing", "#writing"],
];

export default function GlassNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav" aria-label="Main navigation">
      <a className="nav-mark" href={`${baseUrl}#top`} aria-label="Back to top">Iván G M</a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span>
      </button>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="mailto:ivan.garcia@cimat.mx" onClick={() => setOpen(false)}>Contact me ↗</a>
      </div>
    </nav>
  );
}
