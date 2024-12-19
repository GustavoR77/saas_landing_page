import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//import HTTPApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  //.use(HTTPApi)
  .init({
    debug: true,
    lng: "pt",
    resources: {
      en: {
        translation: {
          subtitle: "Video Editing",
          title: "Amazingly simple",
          heroDescription:
            "We designed XORA AI Video Editor to be an easy to use, quick to learn and surprisingly powerful.",
          heroButton: "Try it now",
          features: "features",
          pricing: "pricing",
        },
      },
      pt: {
        translation: {
          subtitle: "Edição de Vídeo",
          title: "Incrivelmente simples",
          heroDescription:
            "Nós projetamos o Editor de Vídeo XORA AI para ser fácil de usar, rápido de aprender e surpreendentemente poderoso.",
          heroButton: "Experimente agora",
          features: "recursos",
          pricing: "preços",
        },
      },
      es: {
        translation: {
          subtitle: "Edición de Video",
          title: "Increíblemente simple",
          heroDescription:
            "Diseñamos el Editor de Vídeo XORA AI para que sea fácil de usar, rápido de aprender y sorprendentemente poderoso.",
          heroButton: "Pruébalo ahora",
          features: "recursos",
          pricing: "precios",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
