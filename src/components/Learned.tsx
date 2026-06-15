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
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Desarrollo Web Full Stack',
    description:
      'Aprendí a construir aplicaciones completas de principio a fin: interfaces con HTML, CSS, Angular y React en el frontend, y lógica de servidor con Symfony y Java en el backend.',
    tags: ['HTML', 'CSS', 'Angular', 'React', 'Symfony', 'Java'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Bases de datos relacionales',
    description:
      'Diseño y consulta de bases de datos con MySQL, modelado de entidades y relaciones, y uso de Doctrine ORM para trabajar con datos directamente desde el código.',
    tags: ['MySQL', 'Doctrine ORM', 'Modelado de datos'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Entorno profesional real',
    description:
      'En mis prácticas en SendingBay desarrollé funcionalidades reales en remoto, siguiendo procesos y estándares de un equipo profesional con Symfony, Composer y XAMPP.',
    tags: ['Symfony', 'XAMPP', 'Composer', 'Trabajo en equipo'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Sistemas y redes',
    description:
      'Durante el ciclo de SMR aprendí a instalar, configurar y mantener equipos y redes locales, así como a manejar comandos Linux y gestionar sistemas informáticos.',
    tags: ['Linux', 'Redes locales', 'Montaje de equipos'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Herramientas colaborativas',
    description:
      'Control de versiones con Git y GitHub, y uso de entornos de desarrollo como VS Code e IntelliJ IDEA para trabajar de forma ordenada y eficiente en proyectos.',
    tags: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: 'Diseño e interfaz de usuario',
    description:
      'Creación de interfaces responsivas y accesibles prestando atención a la experiencia de usuario, utilizando Bootstrap, CSS personalizado y buenas prácticas de diseño web.',
    tags: ['Bootstrap', 'CSS', 'Responsive', 'UX'],
  },
];

export default function Learned() {
  return (
    <section id="learned" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Qué he <span>aprendido</span>
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
