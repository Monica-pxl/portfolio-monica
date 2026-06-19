import { type ReactNode } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Learned.css';

interface LearningStatic {
  index: number;
  icon: ReactNode;
}

const LEARNINGS_STATIC: LearningStatic[] = [
  {
    index: 0,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    index: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    index: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    index: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 20l5-5" />
        <path d="M12 20l-5-5" />
        <path d="M12 15v5" />
      </svg>
    ),
  },
  {
    index: 4,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function Learned() {
  const { language } = useLanguage();
  const t = translations[language].learned;

  return (
    <section id="learned" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t.title} <span>{t.titleSpan}</span>
          </h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="learned__grid">
          {LEARNINGS_STATIC.map((item) => {
            const tItem = t.items[item.index];
            return (
            <div key={item.index} className="learned-card glass-card">
              <div className="learned-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="learned-card__title">{tItem.title}</h3>
              <p className="learned-card__description">{tItem.description}</p>
              <div className="learned-card__tags">
                {tItem.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
