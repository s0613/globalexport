import React from 'react';
import { FileText, Calculator, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Survey } from '../components/Survey';
import { Reveal } from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';

const stepIcons = [FileText, Calculator, Users];
const stepColors = ["text-cyan-400", "text-green-400", "text-purple-400"];
const stepBgs = ["bg-cyan-400/10", "bg-green-400/10", "bg-purple-400/10"];

export const Quote: React.FC = () => {
  const { t } = useTranslation();
  useSEO('quote');

  const steps = t('pages.quote.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const trustBadges = t('pages.quote.trustBadges', { returnObjects: true }) as string[];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {t('pages.quote.title')}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {t('pages.quote.subtitle')}
            </p>
          </div>
        </Reveal>

        {/* Process Steps */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {steps.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <div key={idx} className="relative">
                  <div className="glass-panel p-6 rounded-xl border border-slate-700 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${stepBgs[idx]} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${stepColors[idx]}`} />
                      </div>
                      <span className="text-2xl font-bold text-slate-600">0{idx + 1}</span>
                    </div>
                    <h2 className="text-lg font-bold text-white mb-2">{step.title}</h2>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-600 text-2xl">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Survey Form Section */}
      <Survey id="quote-survey" />

      {/* Trust Badges */}
      <section className="container mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-4">{t('pages.quote.trustTitle')}</p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
              {trustBadges.map((badge, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Quote;
