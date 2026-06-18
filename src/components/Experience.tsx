import './Experience.css';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Prácticas en desarrollo web (DAW)',
    company: 'SendingBay',
    period: 'mar. 2026 – may. 2026',
    type: 'Contrato de formación · En remoto',
    description:
      'Participación en el desarrollo y mantenimiento de aplicaciones web en un entorno de logística, colaborando con el equipo técnico en tareas de soporte, actualización de funcionalidades y gestión de contenido.',
    tags: ['Node.js', 'TypeScript', 'React', 'Git'],
  },
  {
    id: 'exp2',
    title: 'Proyecto final de FP (TFG) — HairGest',
    company: 'DigitechFP',
    period: 'oct. 2025 – may. 2026',
    type: 'Proyecto académico',
    description:
      'Aplicación web full stack para gestión de citas en centros de peluquería multicentro. Incluye autenticación JWT, sistema de roles y gestión de reservas en tiempo real.',
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TypeScript'],
  },
  {
    id: 'exp3',
    title: 'Prácticas DAW (formación)',
    company: 'Cibernova',
    period: 'may. 2025 – jun. 2025',
    type: 'Contrato de formación · En remoto',
    description:
      'Formación en desarrollo web mediante proyectos guiados y ejercicios prácticos en tecnologías frontend y backend.',
    tags: ['JavaScript', 'Node.js', 'Next.js'],
  },
  {
    id: 'exp4',
    title: 'Prácticas Grado Medio',
    company: 'Boconni Projects',
    period: 'abr. 2024 – jun. 2024',
    type: 'Contrato de formación · Híbrido',
    description:
      'Apoyo en proyectos web corporativos en el sector de diseño de interiores, adaptando contenido y realizando ajustes básicos de diseño con WordPress y herramientas visuales.',
    tags: ['WordPress', 'Canva', 'Diseño web'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span>Experiencia</span>
          </h2>
          <p className="section-subtitle">Prácticas, proyectos y formación</p>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
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
                    <h3 className="timeline-item__title">{exp.title}</h3>
                    <p className="timeline-item__company">{exp.company}</p>
                  </div>
                  <div className="timeline-item__meta">
                    <span className="timeline-item__type">{exp.type}</span>
                    <span className="timeline-item__period">{exp.period}</span>
                  </div>
                </div>
                <p className="timeline-item__description">{exp.description}</p>
                <div className="timeline-item__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
