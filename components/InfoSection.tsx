import React from 'react';
import { Car, Truck, Bus, Award } from 'lucide-react';
import { Reveal } from './Reveal';

const categories = [
  {
    title: "준중형 SUV",
    models: "스포티지, 투싼",
    desc: "중동 지역 인기 폭발, 높은 잔존가치 보장",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  {
    title: "중형 SUV (7인승)",
    models: "싼타페, 쏘렌토",
    desc: "가족 중심 문화권(남미/중동) 선호도 1위",
    icon: Car,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    title: "승합차",
    models: "스타렉스, 카니발",
    desc: "동남아 & 중앙아시아 스테디셀러",
    icon: Bus,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "상용 / 화물",
    models: "포터, 봉고",
    desc: "개발도상국 건설 현장 필수 아이템",
    icon: Truck,
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
];

export const InfoSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            지금 가장 핫한 수출 모델
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        내 차도 해당되는지 확인해보세요. 주행거리가 많아도 괜찮습니다.
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <Reveal key={idx} delay={idx * 100} direction="up">
                            <div className="glass-panel p-8 rounded-2xl h-full border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group">
                                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-8 h-8 ${item.color}`} />
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