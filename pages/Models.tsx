import React from 'react';
import { Car, Truck, Bus, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';

const icons = [Award, Car, Bus, Truck];
const colors = ["text-yellow-400", "text-cyan-400", "text-purple-400", "text-orange-400"];
const bgs = ["bg-yellow-400/10", "bg-cyan-400/10", "bg-purple-400/10", "bg-orange-400/10"];

export const Models: React.FC = () => {
  const { t } = useTranslation();
  useSEO('models');

  const categories = t('pages.models.categories', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
    details: string[];
  }>;

  return (
    <div className="pt-20 md:pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {t('pages.models.title')}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
              {t('pages.models.subtitle')}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Models Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <Reveal key={idx} delay={idx * 100} direction="up">
                <article className="glass-panel p-8 rounded-2xl h-full border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl ${bgs[idx]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-10 h-10 ${colors[idx]}`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h2>
                      <p className="text-slate-400 mb-4 leading-relaxed">{item.desc}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors[idx].replace('text-', 'bg-')}`}></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <Reveal>
          <div className="glass-panel p-12 rounded-2xl text-center neon-glow">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('pages.models.ctaTitle')}
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('pages.models.ctaDesc')}
            </p>
            <a
              href="/#survey-section"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              {t('pages.models.ctaButton')}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Models;
