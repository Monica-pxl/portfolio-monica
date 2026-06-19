import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Experience.css';

interface Experience {
  id: string;
  company: string;
}

const EXPERIENCES: Experience[] = [
  { id: 'exp1', company: 'SendingBay' },
  { id: 'exp2', company: 'DigitechFP' },
  { id: 'exp3', company: 'Cibernova' },
  { id: 'exp4', company: 'Boconni Projects' },
];

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span>{t.title}</span>
          </h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => {
            const tExp = t.items.find(item => item.id === exp.id)!;
            return (
            <article key={exp.id} className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__dot" />
                {i < EXPERIENCES.length - 1 && (
                  <div className="timeline-item__line" />
                )}
              </div>

              <div className="timeline-item__card glass-card">
                <div className="timeline-item__header">
                  <div>
                    <h3 className="timeline-item__title">{tExp.title}</h3>
                    <p className="timeline-item__company">{exp.company}</p>
                  </div>
                  <div className="timeline-item__meta">
                    <span className="timeline-item__type">{tExp.type}</span>
                    <span className="timeline-item__period">{tExp.period}</span>
                  </div>
                </div>
                <p className="timeline-item__description">{tExp.description}</p>
                <div className="timeline-item__tags">
                  {tExp.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
