import React from 'react';
import { ArrowRight, Globe, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

interface HeroProps {
  onStartSurvey: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSurvey }) => {
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
         {/* Overlay to prevent scroll trapping on mobile until focused interactions */}
         <div className="absolute inset-0 bg-transparent pointer-events-none md:hidden" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-sm font-semibold flex items-center gap-1">
                <Globe size={14} /> Global Export Market
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 text-sm font-semibold flex items-center gap-1">
                <TrendingUp size={14} /> Demand High
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              내 차, 한국보다<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                해외에서 더 비싸게
              </span><br />
              팔릴 수 있을까?
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              3분 만에 확인하는 내 중고차 수출 시세 및 수요 조사.<br />
              감가상각이 심한 국내 시장 대신,<br />
              <strong className="text-white">전 세계 바이어</strong>와 직접 연결되는 기회를 잡으세요.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <button
              onClick={onStartSurvey}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">수출 가능 여부 확인하기</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm" />
            </button>
            <p className="mt-4 text-sm text-slate-500">
              * 개인정보는 시세 조회 목적으로만 사용됩니다.
            </p>
          </Reveal>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-slate-500 hidden lg:block">
        <span className="text-xs uppercase tracking-widest mb-2 block text-center">Scroll</span>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};