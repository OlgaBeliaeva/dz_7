import React from 'react';
import DisplayText from './components/DisplayText';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
    <div className="App">
      <DisplayText />
      <LanguageSwitcher />
    </div>
  </LanguageProvider>
  );
}

export default App;
