import { type ReactNode } from 'react';
import './Learned.css';

interface Learning {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const LEARNINGS: Learning[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Desarrollo Full Stack y herramientas modernas',
    description:
      'He trabajado en funcionalidades frontend y backend durante mis prácticas, integrando APIs, automatizando procesos y gestionando datos en Notion. También he creado componentes reutilizables y sistemas de diseño con Storybook en React.',
    tags: ['React', 'Storybook', 'APIs', 'Notion', 'Frontend', 'Backend'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Automatización y gestión de datos',
    description:
      'He participado en la creación de flujos de automatización: envío de correos automáticos, gestión de reseñas de usuarios y almacenamiento estructurado de información en bases de datos conectadas con Notion.',
    tags: ['Automatización', 'Notion', 'Email', 'Base de datos'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
    title: 'Desarrollo de extensiones y herramientas internas',
    description:
      'He desarrollado una extensión de Chrome orientada a mejorar la productividad en reuniones diarias (daily standups), utilizada dentro del entorno de la empresa.',
    tags: ['Chrome Extension', 'JavaScript', 'DevTools', 'Productividad'],
  },
  {
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
    title: 'Diseño web y experiencia de usuario',
    description:
      'He apoyado en tareas de diseño frontend: selección de referencias visuales, creación de maquetas y uso de herramientas como WordPress, Canva y CSS para mejorar la parte visual de los proyectos.',
    tags: ['WordPress', 'Canva', 'CSS', 'Maquetación', 'UX/UI'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Control de calidad y testing',
    description:
      'He realizado pruebas de APIs con Postman y verificado el correcto funcionamiento del backend y el frontend para asegurar la estabilidad de las aplicaciones.',
    tags: ['Postman', 'Testing', 'APIs', 'QA'],
  },
];

export default function Learned() {
  return (
    <section id="learned" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Conocimientos <span>prácticos</span>
          </h2>
          <p className="section-subtitle">
            Reflexiones y aprendizajes clave a lo largo de mi formación y experiencia
          </p>
        </div>

        <div className="learned__grid">
          {LEARNINGS.map((item) => (
            <div key={item.title} className="learned-card glass-card">
              <div className="learned-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="learned-card__title">{item.title}</h3>
              <p className="learned-card__description">{item.description}</p>
              <div className="learned-card__tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
