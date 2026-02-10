import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700 border border-slate-700 transition-colors"
      aria-label="Switch language"
    >
      <Globe size={14} />
      <span>{i18n.language === 'ko' ? 'EN' : 'KO'}</span>
    </button>
  );
};
