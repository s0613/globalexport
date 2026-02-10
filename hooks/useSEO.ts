import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type PageKey = 'home' | 'models' | 'price' | 'about' | 'quote';

const canonicalPaths: Record<PageKey, string> = {
  home: '/',
  models: '/models',
  price: '/price',
  about: '/about',
  quote: '/quote',
};

export function useSEO(page: PageKey) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t(`seo.${page}.title`);
    const description = t(`seo.${page}.description`);
    const canonical = `https://totaload.com${canonicalPaths[page]}`;
    const lang = i18n.language;
    const locale = lang === 'ko' ? 'ko_KR' : 'en_US';

    document.title = title;
    document.documentElement.lang = lang;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:locale"]', 'content', locale);
    setMeta('link[rel="canonical"]', 'href', canonical);
  }, [t, i18n.language, page]);
}
