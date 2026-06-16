import './Hero.css';

// Para añadir tu foto: cambia PHOTO_SRC por la ruta a tu imagen, p.ej. '/foto-monica.jpg'
const PHOTO_SRC = '/monica.png'; // déjalo vacío mientras no tengas foto

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__layout">
        {/* ── Columna izquierda: texto ── */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible para nuevas oportunidades
          </div>

          <h1 className="hero__name">
            Hola, soy <span>Mónica</span>
            <br />
            Muñoz de la Torre
          </h1>

          <p className="hero__role">Desarrolladora Web Junior · DAW</p>

          <p className="hero__description">
            Desarrolladora web junior con experiencia en proyectos full stack y frontend
            mediante prácticas y proyectos académicos.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              Ver proyectos
            </a>
            <a href="#contact" className="btn btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contacto
            </a>
            <a
              href="https://github.com/Monica-pxl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="/cv-monica.pdf"
              download="CV-Monica-Munoz.pdf"
              className="btn btn-outline"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              CV Español
            </a>
            <a
              href="/cv-monica-en.pdf"
              download="CV-Monica-Munoz-EN.pdf"
              className="btn btn-outline"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              CV English
            </a>
          </div>

          <div className="hero__scroll" aria-hidden="true">
            <div className="hero__scroll-line" />
            <span>Scroll</span>
          </div>
        </div>

        {/* ── Columna derecha: foto ── */}
        <div className="hero__photo-wrap" aria-hidden={!PHOTO_SRC}>
          <div className="hero__photo-frame">
            {PHOTO_SRC ? (
              <img
                src={PHOTO_SRC}
                alt="Mónica Muñoz de la Torre"
                className="hero__photo-img"
              />
            ) : (
              <div className="hero__photo-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Tu foto aquí</span>
              </div>
            )}
            <div className="hero__photo-ring" aria-hidden="true" />
            <div className="hero__photo-dot hero__photo-dot--1" aria-hidden="true" />
            <div className="hero__photo-dot hero__photo-dot--2" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
