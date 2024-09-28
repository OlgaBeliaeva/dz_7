import React, { useState, createContext } from 'react';
// Создание контекста для языка
export const LanguageContext = createContext();

// Переводы
const translations = {
  en: {
    message: 'English language was chosen',
    switch: 'Switch language',
  },
  de: {
    message: 'Die Deutsche Sprache wurde gewählt',
    switch: 'Sprache wechseln',
  },
  it: {
    message: 'È stata scelta la lingua italiana',
    switch: 'Cambia lingua',
  },
  ru: {
    message: 'Выбран русский язык',
    switch: 'Сменить язык',
  }
};


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // по умолчанию английский язык

  // Логика переключения между языками (en -> de -> it -> ru -> en)

 const switchLanguage = () => {
    setLanguage(prevLang => 
      prevLang === 'en' ? 'de' : 
      prevLang === 'de' ? 'it' : 
      prevLang === 'it' ? 'ru' : 'en');
  };

  const contextValue = {
    language,
    translations: translations[language],
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

