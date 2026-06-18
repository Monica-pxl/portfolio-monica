import './Projects.css';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  github: string;
  demo: string | null;
}

const PROJECTS: Project[] = [
  {
    id: 'hairgest',
    title: 'HairGest',
    subtitle: 'TFG — Gestión de peluquerías',
    description:
      'Aplicación web full stack para gestión de citas en peluquerías multicentro. Incluye sistema de autenticación con JWT, gestión de roles diferenciados, reservas online y una API REST completa.',
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TypeScript'],
    features: ['Autenticación y roles', 'Reservas online', 'API REST', 'Multi-centro'],
    github: 'https://github.com/Monica-pxl/tfg-peluqueria-monica-munoz-mean',
    demo: 'https://hairgest-angular.vercel.app/',
  },
  {
    id: 'gallery',
    title: 'Galería Interactiva',
    subtitle: 'SPA · React + TypeScript',
    description:
      'Single Page Application con gestión de tarjetas fotográficas. Permite agregar, editar y eliminar imágenes, dar likes, reordenarlas con drag & drop y alternar entre modo claro y oscuro.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    features: ['CRUD completo', 'Likes', 'Drag & drop', 'Modo oscuro'],
    github: 'https://github.com/Monica-pxl/Proyecto-React-Monica-Munoz',
    demo: null,
  },
];

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Mis <span>proyectos</span>
          </h2>
          <p className="section-subtitle">
            Proyectos académicos y personales que reflejan mis habilidades
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card glass-card">
              <div className="project-card__header">
                <div className="project-card__icon">
                  <CodeIcon />
                </div>
                <div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                </div>
              </div>

              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__features">
                {project.features.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn--sm"
                >
                  <GithubIcon />
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn--sm"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="btn btn-ghost btn--sm btn--disabled">
                    Demo próximamente
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
