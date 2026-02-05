import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { InfoSection } from '../components/InfoSection';
import { Survey } from '../components/Survey';

// SEO 메타데이터 설정
const SEO = {
  title: 'GlobalExport - 중고차 수출 시세 조회 | 내 차 해외 수출 가격 확인',
  description: '중고차 수출 시세를 무료로 확인하세요. 현대, 기아, 쌍용 등 국산 중고차의 해외 수출 예상 가격을 실시간으로 조회할 수 있습니다. 중고차 수출 전문 플랫폼 GlobalExport',
  canonical: 'https://totaload.com/'
};

export const Home: React.FC = () => {
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
