import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import './DisplayText.css';

const DisplayText = () => {
    const { translations } = useContext(LanguageContext);

    return (
      <h1 className="display-text">{translations.message}</h1>
    );
};

export default DisplayText;
