import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
                <Link to="/" className="text-white font-bold text-lg mb-4 block hover:text-cyan-400 transition-colors">
                  GlobalExport
                </Link>
                <p className="text-slate-500 text-sm whitespace-pre-line">
                    {t('footer.description')}
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">{t('footer.service')}</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                    <li>
                      <a href="/#survey-section" className="hover:text-cyan-400 transition-colors">
                        {t('footer.quoteLink')}
                      </a>
                    </li>
                    <li>{t('footer.exportModels')}</li>
                    <li>{t('footer.livePrice')}</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">{t('footer.company')}</h4>
                <ul className="text-slate-500 text-sm space-y-2">
                    <li>
                      <Link to="/about" className="hover:text-cyan-400 transition-colors">
                        {t('footer.aboutLink')}
                      </Link>
                    </li>
                    <li>{t('footer.terms')}</li>
                    <li>{t('footer.privacy')}</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">{t('footer.contact')}</h4>
                <p className="text-slate-500 text-sm">
                    1544-0000<br/>
                    support@globalexport.com<br/>
                    인천광역시 연수구 송도동
                </p>
            </div>
        </div>
        <div className="pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
            {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};
