import React, { useEffect } from 'react';
import { Car, Truck, Bus, Award } from 'lucide-react';
import { Reveal } from '../components/Reveal';

// SEO 메타데이터 설정
const SEO = {
  title: '중고차 수출 인기모델 | 스포티지 투싼 싼타페 쏘렌토 스타렉스 - GlobalExport',
  description: '해외에서 인기 있는 중고차 수출 모델을 확인하세요. 스포티지, 투싼, 싼타페, 쏘렌토, 스타렉스, 카니발, 포터, 봉고 등 중동, 동남아, 남미에서 높은 수요를 자랑하는 차종입니다.',
  canonical: 'https://totaload.com/models'
};

const categories = [
  {
    title: "준중형 SUV - 스포티지, 투싼",
    models: "스포티지, 투싼",
    desc: "중동 지역 인기 폭발, 높은 잔존가치 보장. 연비 효율과 내구성으로 해외 바이어들의 첫 번째 선택입니다.",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    details: [
      "중동, 아프리카 지역 수요 1위",
      "연식 10년 이내 차량 선호",
      "주행거리 15만km 이하 권장"
    ]
  },
  {
    title: "중형 SUV - 싼타페, 쏘렌토",
    models: "싼타페, 쏘렌토",
    desc: "가족 중심 문화권(남미/중동) 선호도 1위. 7인승 구성으로 대가족 문화권에서 높은 인기를 자랑합니다.",
    icon: Car,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    details: [
      "남미, 중동 가족용 차량 1위",
      "디젤 모델 특히 인기",
      "4WD 옵션 프리미엄 가격"
    ]
  },
  {
    title: "승합차 - 스타렉스, 카니발",
    models: "스타렉스, 카니발",
    desc: "동남아 & 중앙아시아 스테디셀러. 다인승 운송과 비즈니스 용도로 꾸준한 수요가 있습니다.",
    icon: Bus,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    details: [
      "동남아 미니버스 개조용 인기",
      "12인승 모델 최고 인기",
      "LPG 모델도 수출 가능"
    ]
  },
  {
    title: "상용/화물 - 포터, 봉고",
    models: "포터, 봉고",
    desc: "개발도상국 건설 현장 필수 아이템. 내구성과 경제성으로 아프리카, 중앙아시아에서 높은 수요를 보입니다.",
    icon: Truck,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    details: [
      "아프리카 건설 현장 필수",
      "1톤 트럭 수요 폭발",
      "고연식 차량도 수출 가능"
    ]
  },
];

export const Models: React.FC = () => {
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

  return (
    <div className="pt-20 md:pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              해외수출 인기 중고차 모델
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              해외에서 인기 있는 중고차 수출 모델을 확인하세요.
              중동, 동남아, 남미에서 높은 수요를 자랑하는 차종들입니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Models Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 100} direction="up">
                <article className="glass-panel p-8 rounded-2xl h-full border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-10 h-10 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h2>
                      <p className="text-slate-400 mb-4 leading-relaxed">{item.desc}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`}></span>
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
              내 차도 수출 가능할까요?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              위 모델 외에도 다양한 차종이 수출 가능합니다. 무료 견적을 받아보세요.
            </p>
            <a
              href="/#survey-section"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              무료 견적 받기
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Models;
