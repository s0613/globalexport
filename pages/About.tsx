import React, { useEffect } from 'react';
import { Globe, Shield, Users, TrendingUp, CheckCircle, MapPin } from 'lucide-react';

// SEO 메타데이터 설정
const SEO = {
  title: '중고차 수출 전문기업 GlobalExport | 대한민국 No.1 중고차 해외수출 플랫폼',
  description: 'GlobalExport는 대한민국 No.1 중고차 해외수출 플랫폼입니다. 전 세계 40개국 바이어 네트워크를 보유하고 있으며, 안전하고 투명한 중고차 수출 서비스를 제공합니다.',
  canonical: 'https://totaload.com/about'
};

export const About: React.FC = () => {
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
      {/* 메인 히어로 섹션 */}
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          GlobalExport - 대한민국 No.1 중고차 해외수출 플랫폼
        </h1>
        <p className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
          GlobalExport는 대한민국 중고차를 전 세계로 수출하는 전문 플랫폼입니다.
          10년 이상의 경험과 40개국 이상의 바이어 네트워크를 바탕으로
          안전하고 투명한 수출 서비스를 제공합니다.
        </p>
      </section>

      {/* 회사 비전 섹션 */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          회사 비전
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">글로벌 시장 선도</h3>
            <p className="text-slate-400">
              전 세계 중고차 수출 시장을 선도하는 플랫폼으로 성장하여
              한국 중고차의 가치를 전 세계에 알립니다.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">신뢰와 투명성</h3>
            <p className="text-slate-400">
              모든 거래 과정을 투명하게 공개하고,
              고객이 안심하고 수출할 수 있는 환경을 제공합니다.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">최고가 보장</h3>
            <p className="text-slate-400">
              광범위한 바이어 네트워크를 통해
              고객의 차량에 가장 높은 가격을 제시합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 글로벌 네트워크 섹션 */}
      <section className="bg-slate-800/50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            글로벌 네트워크
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                GlobalExport는 전 세계 40개국 이상에 구축된 바이어 네트워크를 보유하고 있습니다.
                중동, 아프리카, 동남아시아, 러시아 등 주요 중고차 수입국에
                직접적인 판매 채널을 운영하고 있습니다.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">중동 지역: UAE, 사우디아라비아, 카타르, 쿠웨이트</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">아프리카: 케냐, 탄자니아, 나이지리아, 가나</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">아시아: 몽골, 카자흐스탄, 우즈베키스탄</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">러시아 및 CIS 국가</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40+</div>
                <div className="text-slate-400">수출 대상국</div>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-slate-400">글로벌 바이어</div>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-slate-400">연간 수출 대수</div>
              </div>
              <div className="glass-panel p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10년+</div>
                <div className="text-slate-400">업계 경력</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 특징 섹션 */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          서비스 특징
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">전담 매니저 배정</h3>
            <p className="text-sm text-slate-400">
              수출 전 과정을 담당하는 전담 매니저가
              1:1로 고객을 케어합니다.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">안전한 결제 시스템</h3>
            <p className="text-sm text-slate-400">
              에스크로 결제 시스템으로
              안전한 거래를 보장합니다.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">전국 픽업 서비스</h3>
            <p className="text-sm text-slate-400">
              전국 어디서나 무료로 차량을
              픽업해 드립니다.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">실시간 추적</h3>
            <p className="text-sm text-slate-400">
              선적부터 도착까지
              실시간으로 추적 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="container mx-auto px-6 py-16">
        <div className="glass-panel p-12 rounded-2xl text-center neon-glow">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            지금 바로 내 차 수출 시세를 확인하세요
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            무료 시세 조회를 통해 내 차의 해외 수출 가격을 확인하고,
            전문 상담사와 상담받아 보세요.
          </p>
          <a
            href="/#survey-section"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            무료 시세 조회하기
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
