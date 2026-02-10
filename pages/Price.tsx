import React from 'react';
import { TrendingUp, TrendingDown, Minus, Globe, Car, BarChart3, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../hooks/useSEO';

export const Price: React.FC = () => {
  const { t } = useTranslation();
  useSEO('price');

  const priceData = t('pages.price.priceData', { returnObjects: true }) as Array<{
    model: string; year: string; domestic: number; export: number; diff: string; trend: string;
  }>;

  const regionalData = t('pages.price.regionalData', { returnObjects: true }) as Array<{
    region: string; models: string[]; demand: string;
  }>;

  const trendData = t('pages.price.trendData', { returnObjects: true }) as Array<{
    period: string; change: string; description: string;
  }>;

  const TrendIcon = ({ trend }: { trend: string }) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-slate-400" />;
  };

  const getDemandStyle = (demand: string) => {
    const veryHigh = t('pages.price.demandVeryHigh');
    const high = t('pages.price.demandHigh');
    if (demand === veryHigh) return 'bg-green-500/20 text-green-400';
    if (demand === high) return 'bg-cyan-500/20 text-cyan-400';
    return 'bg-yellow-500/20 text-yellow-400';
  };

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          {t('pages.price.title')}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-4 whitespace-pre-line">
          {t('pages.price.subtitle')}
        </p>
        <p className="text-sm text-slate-500 text-center">
          {t('pages.price.disclaimer')}
        </p>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <Car className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{t('pages.price.tableTitle')}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-4 text-slate-400 font-medium">{t('pages.price.thModel')}</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium">{t('pages.price.thYear')}</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">{t('pages.price.thDomestic')}</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">{t('pages.price.thExport')}</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">{t('pages.price.thDiff')}</th>
                <th className="text-center py-4 px-4 text-slate-400 font-medium">{t('pages.price.thTrend')}</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 font-medium">{item.model}</td>
                  <td className="py-4 px-4 text-slate-400">{item.year}</td>
                  <td className="py-4 px-4 text-right text-slate-400">{item.domestic.toLocaleString()}{t('common.tenThousandWon')}</td>
                  <td className="py-4 px-4 text-right text-cyan-400 font-semibold">{item.export.toLocaleString()}{t('common.tenThousandWon')}</td>
                  <td className="py-4 px-4 text-right text-green-400 font-medium">{item.diff}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <TrendIcon trend={item.trend} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-slate-800/50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{t('pages.price.regionalTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalData.map((region, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{region.region}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getDemandStyle(region.demand)}`}>
                    {region.demand}
                  </span>
                </div>
                <div className="space-y-2">
                  {region.models.map((model, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-sm">{model}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{t('pages.price.trendTitle')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendData.map((item, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl">
              <div className="text-sm text-slate-400 mb-2">{item.period}</div>
              <div className="text-3xl font-bold text-green-400 mb-2">{item.change}</div>
              <div className="text-sm text-slate-300">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-panel p-6 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('pages.price.forecastTitle')}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('pages.price.forecastDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-8">
        <div className="glass-panel p-12 rounded-2xl text-center neon-glow">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('pages.price.ctaTitle')}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('pages.price.ctaDesc')}
          </p>
          <a
            href="/#survey-section"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            {t('pages.price.ctaButton')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Price;
