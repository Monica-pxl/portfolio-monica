import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import './Skills.css';

interface SkillGroup {
  categoryKey: number;
  icon: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    categoryKey: 0,
    icon: '{ }',
    skills: ['JavaScript', 'TypeScript', 'Java', 'C#', 'PHP', 'XML'],
  },
  {
    categoryKey: 1,
    icon: '◈',
    skills: ['HTML', 'CSS', 'Angular', 'React', 'Bootstrap', 'Twig'],
  },
  {
    categoryKey: 2,
    icon: '⬡',
    skills: ['Node.js', 'Express', 'JWT Authentication', 'Symfony', 'Doctrine ORM', 'Composer'],
  },
  {
    categoryKey: 3,
    icon: '◭',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    categoryKey: 4,
    icon: '⌘',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Visual Studio', 'WordPress', 'Canva', 'XAMPP', 'MySQL Workbench'],
  },
];

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t.title} <span>{t.titleSpan}</span>
          </h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="skill-groups">
          {SKILL_GROUPS.map((group) => (
            <div key={group.categoryKey} className="skill-group glass-card">
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <h3 className="skill-group__title">{t.categories[group.categoryKey]}</h3>
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
