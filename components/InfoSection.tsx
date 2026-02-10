import React from 'react';
import { Car, Truck, Bus, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from './Reveal';

const icons = [Award, Car, Bus, Truck];
const colors = ["text-yellow-400", "text-cyan-400", "text-purple-400", "text-orange-400"];
const bgs = ["bg-yellow-400/10", "bg-cyan-400/10", "bg-purple-400/10", "bg-orange-400/10"];

export const InfoSection: React.FC = () => {
  const { t } = useTranslation();
  const categories = t('info.categories', { returnObjects: true }) as Array<{ title: string; models: string; desc: string }>;

  return (
    <section className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            {t('info.title')}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        {t('info.subtitle')}
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((item, idx) => {
                    const Icon = icons[idx];
                    return (
                        <Reveal key={idx} delay={idx * 100} direction="up">
                            <div className="glass-panel p-8 rounded-2xl h-full border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group">
                                <div className={`w-14 h-14 rounded-xl ${bgs[idx]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-8 h-8 ${colors[idx]}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-cyan-400 font-medium mb-4">{item.models}</p>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
    </section>
  );
};
