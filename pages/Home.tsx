import React from 'react';
import { Hero } from '../components/Hero';
import { InfoSection } from '../components/InfoSection';
import { Survey } from '../components/Survey';
import { useSEO } from '../hooks/useSEO';

export const Home: React.FC = () => {
  useSEO('home');

  const scrollToSurvey = () => {
    const surveySection = document.getElementById('survey-section');
    if (surveySection) {
      surveySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero onStartSurvey={scrollToSurvey} />
      <InfoSection />
      <Survey id="survey-section" />
    </>
  );
};

export default Home;
