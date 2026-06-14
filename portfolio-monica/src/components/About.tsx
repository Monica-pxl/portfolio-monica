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
            <div className="about-orb">
              <div className="about-orb__core" />
              <div className="about-orb__shine" />
              <div className="about-orb__ring" />
              <div className="about-orb__ring about-orb__ring--2" />
            </div>
            <div className="about-floating-tags">
              <span>React</span>
              <span>Angular</span>
              <span>Node.js</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
