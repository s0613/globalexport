import React from 'react';
import { Globe, Shield, Users, TrendingUp, CheckCircle, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../hooks/useSEO';

const visionIcons = [Globe, Shield, TrendingUp];
const featureIcons = [Users, Shield, MapPin, Globe];

export const About: React.FC = () => {
  const { t } = useTranslation();
  useSEO('about');

  const visions = t('pages.about.visions', { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const networkRegions = t('pages.about.networkRegions', { returnObjects: true }) as string[];
  const features = t('pages.about.features', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          {t('pages.about.title')}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
          {t('pages.about.subtitle')}
        </p>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          {t('pages.about.visionTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((vision, idx) => {
            const Icon = visionIcons[idx];
            return (
              <div key={idx} className="glass-panel p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{vision.title}</h3>
                <p className="text-slate-400">{vision.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-800/50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {t('pages.about.networkTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {t('pages.about.networkDesc')}
              </p>
              <ul className="space-y-4">
                {networkRegions.map((region, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{region}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{t('pages.about.stats.countries')}</div>
                <div className="text-slate-400">{t('pages.about.stats.countriesLabel')}</div>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{t('pages.about.stats.buyers')}</div>
                <div className="text-slate-400">{t('pages.about.stats.buyersLabel')}</div>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{t('pages.about.stats.annual')}</div>
                <div className="text-slate-400">{t('pages.about.stats.annualLabel')}</div>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{t('pages.about.stats.experience')}</div>
                <div className="text-slate-400">{t('pages.about.stats.experienceLabel')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          {t('pages.about.featuresTitle')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div key={idx} className="glass-panel p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="glass-panel p-12 rounded-2xl text-center neon-glow">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('pages.about.ctaTitle')}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('pages.about.ctaDesc')}
          </p>
          <a
            href="/#survey-section"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            {t('pages.about.ctaButton')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
