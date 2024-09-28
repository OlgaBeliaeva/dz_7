import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { translations, switchLanguage } = useContext(LanguageContext);

    return (
      <button className="language-switcher" onClick={switchLanguage}>
        {translations.switch}
      </button>
  );
};

export default LanguageSwitcher;