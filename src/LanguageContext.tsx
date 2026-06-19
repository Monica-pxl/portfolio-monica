import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    if (stored === 'es' || stored === 'en') return stored;
    return 'es';
  });

  const toggleLanguage = () => {
    setLanguage(l => {
      const next = l === 'es' ? 'en' : 'es';
      localStorage.setItem('language', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
