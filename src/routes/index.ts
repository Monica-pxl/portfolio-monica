export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'learned' | 'contact';

export const sectionPaths: Record<'es' | 'en', Record<SectionId, string>> = {
  es: {
    hero: '/',
    about: '/sobre-mi',
    skills: '/skills',
    projects: '/proyectos',
    experience: '/experiencia',
    learned: '/conocimientos',
    contact: '/contacto',
  },
  en: {
    hero: '/',
    about: '/about',
    skills: '/skills',
    projects: '/projects',
    experience: '/experience',
    learned: '/knowledge',
    contact: '/contact',
  },
};

export function getSectionIdFromPath(pathname: string): SectionId | null {
  for (const lang of ['es', 'en'] as const) {
    for (const [sectionId, path] of Object.entries(sectionPaths[lang])) {
      if (path === pathname) return sectionId as SectionId;
    }
  }
  return null;
}

export function navigateToSection(sectionId: SectionId, language: 'es' | 'en') {
  const path = sectionPaths[language][sectionId];
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  window.history.pushState({}, '', path);
}
