import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onStartSurvey: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSurvey }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none lg:w-2/3" />

      {/* Spline Container */}
      <div className="absolute top-0 right-0 w-full h-[50vh] lg:h-full lg:w-3/4 z-0 opacity-80 lg:opacity-100">
         <iframe
            src='https://my.spline.design/pushittothelimit-Sq1M3KaS2awLKqeKwMrq8Q4T/'
            frameBorder='0'
            width='100%'
            height='100%'
            className="w-full h-full pointer-events-auto"
            title="3D Car Animation"
         ></iframe>
         <div className="absolute inset-0 bg-transparent pointer-events-none md:hidden" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <div className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-sm font-semibold flex items-center gap-1">
                <Globe size={14} /> {t('hero.badgeGlobal')}
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 text-sm font-semibold flex items-center gap-1">
                <TrendingUp size={14} /> {t('hero.badgeDemand')}
              </span>
            </div>
          </div>

          <div className={`transition-all duration-700 ease-out delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              {t('hero.titleLine1')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                {t('hero.titleLine2')}
              </span><br />
              {t('hero.titleLine3')}
            </h1>
          </div>

          <div className={`transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              {t('hero.descLine1')}<br />
              {t('hero.descLine2')}<br />
              <strong className="text-white">{t('hero.descHighlight')}</strong>{t('hero.descLine3')}
            </p>
          </div>

          <div className={`transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={onStartSurvey}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm" />
            </button>
            <p className="mt-4 text-sm text-slate-500">
              {t('hero.disclaimer')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-slate-500 hidden lg:block">
        <span className="text-xs uppercase tracking-widest mb-2 block text-center">{t('hero.scroll')}</span>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};
