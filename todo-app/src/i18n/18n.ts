import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './en.json';
import ko from './ko.json';
import ja from './ja.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en }, // 영어
    ko: { translation: ko }, // 한국어
    ja: { translation: ja }, // 일본어
  },
  lng: 'en',
  fallbackLng: 'en', // 기본 언어
  interpolation: {
    escapeValue: false, // React에서는 HTML escape 불필요
  },
});

export default i18n;