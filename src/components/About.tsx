import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-text">
            <h2 className="section-title">
              Sobre <span>mí</span>
            </h2>

            <div className="about-intro">
              <p>
                Soy <strong>Mónica Muñoz de la Torre</strong>, estudiante de Técnico
                Superior en Desarrollo de Aplicaciones Web (DAW). Antes completé el ciclo
                de Sistemas Microinformáticos y Redes (SMR), lo que me dio una base sólida
                en infraestructura y redes.
              </p>
              <p>
                Me apasiona el desarrollo frontend y full stack. He trabajado en proyectos
                reales durante prácticas en empresa y a lo largo de mi formación, donde he
                aplicado tecnologías modernas y aprendido a trabajar de forma profesional.
              </p>
              <p>
                Busco oportunidades donde pueda seguir creciendo, aportar energía y
                curiosidad, y desarrollarme como profesional en el mundo del desarrollo web.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card glass-card">
                <span className="highlight-card__icon">🎓</span>
                <div>
                  <strong>DAW</strong>
                  <span>Técnico Superior en Desarrollo de Aplicaciones Web</span>
                </div>
              </div>
              <div className="highlight-card glass-card">
                <span className="highlight-card__icon">🖥️</span>
                <div>
                  <strong>SMR</strong>
                  <span>Sistemas Microinformáticos y Redes</span>
                </div>
              </div>
              <div className="highlight-card glass-card">
                <span className="highlight-card__icon">🌐</span>
                <div>
                  <strong>Full Stack & Frontend</strong>
                  <span>Proyectos académicos y prácticas en empresa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual" aria-hidden="true">
            <div className="about-orb-wrap">
              <div className="about-orb">
                <div className="about-orb__core" />
                <div className="about-orb__shine" />
                <div className="about-orb__ring" />
                <div className="about-orb__ring about-orb__ring--2" />
                <div className="about-orb__symbol">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
              </div>

              <div className="about-stat about-stat--1">
                <span className="about-stat__value">2</span>
                <span>proyectos</span>
              </div>
              <div className="about-stat about-stat--2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>Full Stack</span>
              </div>
              <div className="about-stat about-stat--3">
                <span className="about-stat__value">DAW</span>
                <span>+ SMR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
