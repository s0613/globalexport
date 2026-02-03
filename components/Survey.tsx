import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronRight, AlertCircle, Search, MapPin, Globe } from 'lucide-react';
import { SurveyData, SurveyStep } from '../types';
import { Reveal } from './Reveal';

interface SurveyProps {
  id: string;
}

export const Survey: React.FC<SurveyProps> = ({ id }) => {
  const [step, setStep] = useState<SurveyStep>(1);
  const [formData, setFormData] = useState<SurveyData>({
    carModel: '',
    accidentHistory: '',
    year: '',
    mileage: '',
    contact: ''
  });
  
  // Analysis simulation state
  const [analysisText, setAnalysisText] = useState("글로벌 시세 데이터베이스 연결 중...");
  const [foundBuyers, setFoundBuyers] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (step < 6) {
      setStep((prev) => (prev + 1) as SurveyStep);
      // Smooth scroll to top of survey container if on mobile
      if (window.innerWidth < 768 && containerRef.current) {
         containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const updateField = (field: keyof SurveyData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Simulation effect when hitting step 6 (Analysis)
  useEffect(() => {
    if (step === 6) {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.floor(Math.random() * 5) + 1;
        setFoundBuyers(count);
        
        if (count > 20 && count < 50) setAnalysisText("중동(리비아, 요르단) 매입 요청 스캔 중...");
        if (count >= 50 && count < 80) setAnalysisText("러시아/중앙아시아 바이어 입찰가 비교 중...");
        if (count >= 80) {
            setAnalysisText(`검색 완료! ${formData.carModel || '차량'} 수출 유망 모델입니다.`);
            clearInterval(interval);
            setTimeout(() => setStep(7), 1500);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [step, formData.carModel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Survey Completed:", formData);
    handleNext();
  };

  const renderStepIndicator = () => {
    if (step >= 7) return null;
    return (
        <div className="flex justify-between mb-8 max-w-md mx-auto">
            {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-500 ${
                        s <= step ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' : 'bg-slate-700 text-slate-400'
                    }`}>
                        {s < step ? <Check size={14} /> : s}
                    </div>
                </div>
            ))}
        </div>
    );
  };

  return (
    <section id={id} className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <Reveal>
            <div className="text-center mb-10">
                <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-2 block">Premium Valuation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    내 차 견적 확인하기
                </h2>
            </div>
        </Reveal>

        <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative">
            {renderStepIndicator()}

            {/* Step 1: Car Model */}
            {step === 1 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-center">어떤 차량을 타고 계신가요?</h3>
                    <div className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="예) 아반떼, 쏘렌토, 포터2" 
                            className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
                            value={formData.carModel}
                            onChange={(e) => updateField('carModel', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && formData.carModel && handleNext()}
                        />
                         <div className="grid grid-cols-2 gap-3 mt-4">
                            {['아반떼', '쏘렌토', '스타렉스', '포터'].map(car => (
                                <button 
                                    key={car}
                                    onClick={() => { updateField('carModel', car); handleNext(); }}
                                    className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 transition-all text-sm text-slate-300"
                                >
                                    {car}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <button 
                            disabled={!formData.carModel}
                            onClick={handleNext}
                            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                        >
                            다음 <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Accident */}
            {step === 2 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-center">사고 이력이 있으신가요?</h3>
                    <p className="text-center text-slate-400 mb-8 text-sm">수출은 단순 교환이나 경미한 사고 감가가 적습니다.</p>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { val: 'none', label: '완전 무사고', desc: '교환/판금 없음' },
                            { val: 'simple', label: '단순 수리', desc: '범퍼, 휀다 등 단순 교환' },
                            { val: 'major', label: '사고 있음', desc: '프레임 손상 또는 휠하우스' }
                        ].map((opt) => (
                            <button
                                key={opt.val}
                                onClick={() => { updateField('accidentHistory', opt.val); handleNext(); }}
                                className="group flex items-center justify-between p-5 rounded-xl border border-slate-700 hover:border-cyan-500 bg-slate-800/30 hover:bg-slate-800 transition-all"
                            >
                                <div className="text-left">
                                    <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{opt.label}</div>
                                    <div className="text-sm text-slate-500">{opt.desc}</div>
                                </div>
                                <ChevronRight className="text-slate-600 group-hover:text-cyan-500" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 3: Year */}
            {step === 3 && (
                <div className="animate-fade-in-up">
                     <h3 className="text-2xl font-bold mb-6 text-center">차량 연식을 선택해주세요</h3>
                     <div className="grid grid-cols-3 gap-3">
                        {Array.from({length: 15}, (_, i) => 2024 - i).map(year => (
                            <button
                                key={year}
                                onClick={() => { updateField('year', year.toString()); handleNext(); }}
                                className="py-3 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white text-slate-300 transition-all font-medium"
                            >
                                {year}년
                            </button>
                        ))}
                     </div>
                </div>
            )}

            {/* Step 4: Mileage */}
            {step === 4 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-2 text-center">주행거리는 얼마나 되나요?</h3>
                    <p className="text-center text-slate-400 mb-8 text-sm">20만km가 넘어도 수출은 문제 없습니다!</p>
                    <div className="relative">
                        <input 
                            type="number" 
                            placeholder="예) 150000" 
                            className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-center"
                            value={formData.mileage}
                            onChange={(e) => updateField('mileage', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && formData.mileage && handleNext()}
                        />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">km</span>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <button 
                            disabled={!formData.mileage}
                            onClick={handleNext}
                            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                        >
                            다음 <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 5: Contact */}
            {step === 5 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-4 text-center">결과를 받아보실 연락처</h3>
                    <p className="text-center text-slate-400 mb-8">
                        <AlertCircle size={16} className="inline mr-1 text-orange-400" />
                        가장 높은 견적을 제시한 바이어 정보를 보내드립니다.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                            type="tel" 
                            placeholder="010-0000-0000" 
                            className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-center placeholder:text-slate-600"
                            value={formData.contact}
                            onChange={(e) => updateField('contact', e.target.value)}
                        />
                        <button 
                            type="submit"
                            disabled={formData.contact.length < 10}
                            className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xl font-bold rounded-xl shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            무료 견적 확인하기
                        </button>
                    </form>
                </div>
            )}

            {/* Step 6: Simulation / Loading */}
            {step === 6 && (
                <div className="text-center py-10 animate-pulse">
                    <div className="w-24 h-24 mx-auto mb-6 relative">
                         <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                         <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                         <Globe className="absolute inset-0 m-auto text-cyan-500 w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{analysisText}</h3>
                    <p className="text-cyan-400 font-bold text-lg">
                        현재 관련 모델 조회수: <span className="text-3xl text-white">{foundBuyers}</span>건
                    </p>
                </div>
            )}

            {/* Step 7: Success */}
            {step === 7 && (
                <div className="text-center py-6 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/40">
                        <Check size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">접수가 완료되었습니다!</h3>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        담당자가 입력하신 정보를 바탕으로<br/>
                        <span className="text-cyan-400 font-bold">최적의 수출 경로</span>를 분석하여<br/>
                        10분 이내에 연락드리겠습니다.
                    </p>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-left mb-8">
                        <p className="text-sm text-slate-500 mb-2">입력 정보 요약</p>
                        <div className="grid grid-cols-2 gap-4 text-white font-medium">
                            <div>차종: {formData.carModel}</div>
                            <div>연식: {formData.year}년</div>
                            <div>주행: {formData.mileage}km</div>
                            <div>사고: {formData.accidentHistory === 'none' ? '무사고' : formData.accidentHistory === 'simple' ? '단순수리' : '사고있음'}</div>
                        </div>
                    </div>
                    <button 
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                        처음으로 돌아가기
                    </button>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};