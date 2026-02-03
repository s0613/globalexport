import React from 'react';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Survey } from './components/Survey';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const scrollToSurvey = () => {
    const surveySection = document.getElementById('survey-section');
    if (surveySection) {
      surveySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-50 selection:bg-cyan-500 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 h-16 md:h-20">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                GlobalExport
            </div>
            <button 
                onClick={scrollToSurvey}
                className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-700"
            >
                견적 조회
            </button>
        </div>
      </header>

      <main>
        <Hero onStartSurvey={scrollToSurvey} />
        <InfoSection />
        <Survey id="survey-section" />
      </main>

      <Footer />
    </div>
  );
};

export default App;