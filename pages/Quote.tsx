import React, { useEffect } from 'react';
import { FileText, Calculator, Users } from 'lucide-react';
import { Survey } from '../components/Survey';
import { Reveal } from '../components/Reveal';

// SEO 메타데이터 설정
const SEO = {
  title: '내 중고차 수출 견적 무료 조회 | 3분 만에 확인 - GlobalExport',
  description: '내 중고차 해외수출 견적을 3분 만에 무료로 확인하세요. 차량 정보만 입력하면 전 세계 바이어들의 실시간 수요와 예상 수출가격을 바로 확인할 수 있습니다.',
  canonical: 'https://totaload.com/quote'
};

const steps = [
  {
    title: "차량 정보 입력",
    desc: "차종, 연식, 주행거리 등 기본 정보를 입력하세요. 3분이면 충분합니다.",
    icon: FileText,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    title: "예상 수출가격 확인",
    desc: "전 세계 바이어들의 실시간 수요 데이터를 분석하여 예상 수출가격을 알려드립니다.",
    icon: Calculator,
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
  {
    title: "바이어 매칭",
    desc: "가장 높은 가격을 제시한 검증된 해외 바이어와 직접 연결해 드립니다.",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  }
];

export const Quote: React.FC = () => {
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
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              내 중고차 수출 견적 무료 조회
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              차량 정보만 입력하면 전 세계 바이어들의 실시간 수요와
              예상 수출가격을 바로 확인할 수 있습니다.
            </p>
          </div>
        </Reveal>

        {/* Process Steps */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="glass-panel p-6 rounded-xl border border-slate-700 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${step.bg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${step.color}`} />
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
            <p className="text-slate-500 text-sm mb-4">안심하고 이용하세요</p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                100% 무료 상담
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                개인정보 보호
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                강제 계약 없음
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                10분 내 응답
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Quote;
