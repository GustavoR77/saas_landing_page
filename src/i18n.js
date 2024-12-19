import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//import HTTPApi from "i18next-http-backend";

import translationPT from "./locales/pt/translation.json";
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
//import translationES from '../public/locales/en/translation.json'

// the translations
const resources = {
  pt: {
    translation: translationPT,
  },
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)

  //.use(HTTPApi)
  .init({
    resources,
    debug: true,
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
