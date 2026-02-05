import React, { useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus, Globe, Car, BarChart3, ArrowRight } from 'lucide-react';

// SEO 메타데이터 설정
const SEO = {
  title: '중고차 수출 시세 실시간 조회 | 내 차 해외 판매가격 확인 - GlobalExport',
  description: '내 중고차의 해외 수출 시세를 실시간으로 확인하세요. 국내 중고차 시세보다 높은 해외 수출가격을 비교하고, 최적의 판매 시점을 파악할 수 있습니다.',
  canonical: 'https://totaload.com/price'
};

// 샘플 시세 데이터
const priceData = [
  { model: '현대 투싼', year: '2020', domestic: 1850, export: 2400, diff: '+29.7%', trend: 'up' },
  { model: '기아 스포티지', year: '2019', domestic: 1650, export: 2200, diff: '+33.3%', trend: 'up' },
  { model: '현대 싼타페', year: '2020', domestic: 2100, export: 2850, diff: '+35.7%', trend: 'up' },
  { model: '기아 쏘렌토', year: '2021', domestic: 2800, export: 3500, diff: '+25.0%', trend: 'stable' },
  { model: '현대 팰리세이드', year: '2020', domestic: 3200, export: 4100, diff: '+28.1%', trend: 'up' },
  { model: '기아 카니발', year: '2021', domestic: 2900, export: 3800, diff: '+31.0%', trend: 'up' },
];

const regionalData = [
  { region: '중동', models: ['투싼', '싼타페', '쏘렌토'], demand: '매우 높음', color: 'cyan' },
  { region: '러시아/CIS', models: ['스포티지', '투싼', '카니발'], demand: '높음', color: 'blue' },
  { region: '아프리카', models: ['포터', '봉고', '스타렉스'], demand: '매우 높음', color: 'green' },
  { region: '동남아시아', models: ['카니발', '스타리아', '팰리세이드'], demand: '보통', color: 'yellow' },
];

const trendData = [
  { period: '2024년 1분기', change: '+5.2%', description: 'SUV 수출 수요 증가' },
  { period: '2024년 2분기', change: '+3.8%', description: '중동 지역 수요 상승' },
  { period: '2024년 3분기', change: '+7.1%', description: '러시아 시장 회복세' },
  { period: '2024년 4분기', change: '+4.5%', description: '연말 수출 성수기' },
];

export const Price: React.FC = () => {
  useEffect(() => {
    // 페이지 타이틀 설정
    document.title = SEO.title;

    // 메타 태그 동적 업데이트
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', SEO.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', SEO.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', SEO.description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', SEO.canonical);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', SEO.canonical);
    }
  }, []);

  const TrendIcon = ({ trend }: { trend: string }) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-slate-400" />;
  };

  return (
    <div className="pt-20 md:pt-24 pb-16">
      {/* 메인 히어로 섹션 */}
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          중고차 해외수출 실시간 시세 조회
        </h1>
        <p className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-4">
          내 중고차의 해외 수출 시세를 실시간으로 확인하세요.
          국내 중고차 시세보다 높은 해외 수출가격을 비교하고, 최적의 판매 시점을 파악할 수 있습니다.
        </p>
        <p className="text-sm text-slate-500 text-center">
          * 시세는 차량 상태, 옵션, 시장 상황에 따라 변동될 수 있습니다.
        </p>
      </section>

      {/* 차종별 수출 시세 섹션 */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <Car className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">차종별 수출 시세</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-4 text-slate-400 font-medium">차종</th>
                <th className="text-left py-4 px-4 text-slate-400 font-medium">연식</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">국내 시세</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">수출 시세</th>
                <th className="text-right py-4 px-4 text-slate-400 font-medium">차이</th>
                <th className="text-center py-4 px-4 text-slate-400 font-medium">추세</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 font-medium">{item.model}</td>
                  <td className="py-4 px-4 text-slate-400">{item.year}</td>
                  <td className="py-4 px-4 text-right text-slate-400">{item.domestic.toLocaleString()}만원</td>
                  <td className="py-4 px-4 text-right text-cyan-400 font-semibold">{item.export.toLocaleString()}만원</td>
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

      {/* 지역별 인기 모델 섹션 */}
      <section className="bg-slate-800/50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">지역별 인기 모델</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalData.map((region, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{region.region}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    region.demand === '매우 높음'
                      ? 'bg-green-500/20 text-green-400'
                      : region.demand === '높음'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
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

      {/* 시세 변동 추이 섹션 */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">시세 변동 추이</h2>
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
              <h3 className="font-semibold mb-2">2024년 수출 시세 전망</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                2024년 중고차 수출 시장은 전반적으로 상승세를 유지할 것으로 전망됩니다.
                특히 SUV 모델의 수요가 지속적으로 증가하고 있으며,
                중동 및 러시아 지역의 수입 수요가 회복되면서 수출 시세 상승이 예상됩니다.
                현재가 수출을 고려하기 좋은 시점입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="container mx-auto px-6 py-8">
        <div className="glass-panel p-12 rounded-2xl text-center neon-glow">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            내 차의 정확한 수출 시세가 궁금하신가요?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            차량 정보를 입력하시면 실제 바이어 입찰가 기반의 정확한 수출 예상가를 알려드립니다.
          </p>
          <a
            href="/#survey-section"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            무료 시세 조회하기
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Price;
