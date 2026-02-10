import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronRight, AlertCircle, Search, MapPin, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SurveyData, SurveyStep } from '../types';
import { Reveal } from './Reveal';

interface SurveyProps {
  id: string;
}

export const Survey: React.FC<SurveyProps> = ({ id }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState<SurveyStep>(1);
  const [formData, setFormData] = useState<SurveyData>({
    carModel: '',
    accidentHistory: '',
    year: '',
    mileage: '',
    contact: ''
  });

  const [analysisText, setAnalysisText] = useState(t('survey.step6.analysis1'));
  const [foundBuyers, setFoundBuyers] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (step < 6) {
      setStep((prev) => (prev + 1) as SurveyStep);
      if (window.innerWidth < 768 && containerRef.current) {
         containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const updateField = (field: keyof SurveyData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (step === 6) {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.floor(Math.random() * 5) + 1;
        setFoundBuyers(count);

        if (count > 20 && count < 50) setAnalysisText(t('survey.step6.analysis2'));
        if (count >= 50 && count < 80) setAnalysisText(t('survey.step6.analysis3'));
        if (count >= 80) {
            setAnalysisText(t('survey.step6.complete', { model: formData.carModel || t('survey.step7.carModel') }));
            clearInterval(interval);
            setTimeout(() => setStep(7), 1500);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [step, formData.carModel, t]);

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

  const quickOptions = t('survey.step1.quickOptions', { returnObjects: true }) as string[];

  const accidentOptions = [
    { val: 'none', label: t('survey.step2.options.none.label'), desc: t('survey.step2.options.none.desc') },
    { val: 'simple', label: t('survey.step2.options.simple.label'), desc: t('survey.step2.options.simple.desc') },
    { val: 'major', label: t('survey.step2.options.major.label'), desc: t('survey.step2.options.major.desc') },
  ];

  const getAccidentLabel = (val: string) => {
    if (val === 'none') return t('survey.step7.accidentNone');
    if (val === 'simple') return t('survey.step7.accidentSimple');
    return t('survey.step7.accidentMajor');
  };

  return (
    <section id={id} className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <Reveal>
            <div className="text-center mb-10">
                <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-2 block">{t('survey.sectionLabel')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {t('survey.sectionTitle')}
                </h2>
            </div>
        </Reveal>

        <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl relative">
            {renderStepIndicator()}

            {/* Step 1: Car Model */}
            {step === 1 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-center">{t('survey.step1.title')}</h3>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder={t('survey.step1.placeholder')}
                            className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500"
                            value={formData.carModel}
                            onChange={(e) => updateField('carModel', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && formData.carModel && handleNext()}
                        />
                         <div className="grid grid-cols-2 gap-3 mt-4">
                            {quickOptions.map(car => (
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
                            {t('common.next')} <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Accident */}
            {step === 2 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-center">{t('survey.step2.title')}</h3>
                    <p className="text-center text-slate-400 mb-8 text-sm">{t('survey.step2.subtitle')}</p>
                    <div className="grid grid-cols-1 gap-4">
                        {accidentOptions.map((opt) => (
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
                     <h3 className="text-2xl font-bold mb-6 text-center">{t('survey.step3.title')}</h3>
                     <div className="grid grid-cols-3 gap-3">
                        {Array.from({length: 15}, (_, i) => 2024 - i).map(year => (
                            <button
                                key={year}
                                onClick={() => { updateField('year', year.toString()); handleNext(); }}
                                className="py-3 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white text-slate-300 transition-all font-medium"
                            >
                                {year}{t('common.yearSuffix')}
                            </button>
                        ))}
                     </div>
                </div>
            )}

            {/* Step 4: Mileage */}
            {step === 4 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-2 text-center">{t('survey.step4.title')}</h3>
                    <p className="text-center text-slate-400 mb-8 text-sm">{t('survey.step4.subtitle')}</p>
                    <div className="relative">
                        <input
                            type="number"
                            placeholder={t('survey.step4.placeholder')}
                            className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-center"
                            value={formData.mileage}
                            onChange={(e) => updateField('mileage', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && formData.mileage && handleNext()}
                        />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">{t('common.kmSuffix')}</span>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <button
                            disabled={!formData.mileage}
                            onClick={handleNext}
                            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                        >
                            {t('common.next')} <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Step 5: Contact */}
            {step === 5 && (
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-4 text-center">{t('survey.step5.title')}</h3>
                    <p className="text-center text-slate-400 mb-8">
                        <AlertCircle size={16} className="inline mr-1 text-orange-400" />
                        {t('survey.step5.subtitle')}
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="tel"
                            placeholder={t('survey.step5.placeholder')}
                            className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-center placeholder:text-slate-600"
                            value={formData.contact}
                            onChange={(e) => updateField('contact', e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={formData.contact.length < 10}
                            className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xl font-bold rounded-xl shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {t('survey.step5.submit')}
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
                        {t('survey.step6.queryCount')} <span className="text-3xl text-white">{foundBuyers}</span>{t('survey.step6.queryUnit')}
                    </p>
                </div>
            )}

            {/* Step 7: Success */}
            {step === 7 && (
                <div className="text-center py-6 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/40">
                        <Check size={40} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{t('survey.step7.title')}</h3>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        {t('survey.step7.descLine1')}<br/>
                        <span className="text-cyan-400 font-bold">{t('survey.step7.descHighlight')}</span>{t('survey.step7.descLine2')}<br/>
                        {t('survey.step7.descLine3')}
                    </p>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-left mb-8">
                        <p className="text-sm text-slate-500 mb-2">{t('survey.step7.summaryTitle')}</p>
                        <div className="grid grid-cols-2 gap-4 text-white font-medium">
                            <div>{t('survey.step7.carModel')}: {formData.carModel}</div>
                            <div>{t('survey.step7.year')}: {formData.year}{t('common.yearSuffix')}</div>
                            <div>{t('survey.step7.mileage')}: {formData.mileage}{t('common.kmSuffix')}</div>
                            <div>{t('survey.step7.accident')}: {getAccidentLabel(formData.accidentHistory)}</div>
                        </div>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                        {t('survey.step7.restart')}
                    </button>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};
