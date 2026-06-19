import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './About.css';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-text">
            <h2 className="section-title">
              {t.title} <span>{t.titleSpan}</span>
            </h2>

            <div className="about-intro">
              <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card glass-card">
                <span className="highlight-card__icon">🎓</span>
                <div>
                  <strong>{t.card1Title}</strong>
                  <span>{t.card1Sub}</span>
                </div>
              </div>
              <div className="highlight-card glass-card">
                <span className="highlight-card__icon">🖥️</span>
                <div>
                  <strong>{t.card2Title}</strong>
                  <span>{t.card2Sub}</span>
                </div>
              </div>
              <div className="highlight-card glass-card">
                <span className="highlight-card__icon">🌐</span>
                <div>
                  <strong>{t.card3Title}</strong>
                  <span>{t.card3Sub}</span>
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
                <span>{t.statProjects}</span>
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
