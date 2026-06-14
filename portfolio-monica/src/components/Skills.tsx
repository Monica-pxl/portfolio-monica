import './Skills.css';

interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Lenguajes',
    icon: '{ }',
    skills: ['JavaScript', 'TypeScript', 'Java', 'C#', 'PHP', 'XML'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: ['HTML', 'CSS', 'Angular', 'React', 'Bootstrap', 'Twig'],
  },
  {
    category: 'Backend & Frameworks',
    icon: '⬡',
    skills: ['Node.js', 'Express', 'Symfony', 'Doctrine ORM', 'Composer'],
  },
  {
    category: 'Bases de datos',
    icon: '◭',
    skills: ['MySQL', 'MongoDB', 'MySQL Workbench', 'XAMPP'],
  },
  {
    category: 'Herramientas',
    icon: '⌘',
    skills: ['Git', 'VS Code', 'IntelliJ IDEA', 'Visual Studio', 'WordPress', 'Canva'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Mis <span>skills</span>
          </h2>
          <p className="section-subtitle">Tecnologías y herramientas con las que he trabajado</p>
        </div>

        <div className="skill-groups">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="skill-group glass-card">
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <h3 className="skill-group__title">{group.category}</h3>
              </div>
              <div className="skill-group__pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
