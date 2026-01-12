
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../data/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.id;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = navigator.language || (navigator as any).userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
