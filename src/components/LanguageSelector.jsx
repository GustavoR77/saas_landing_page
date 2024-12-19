import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", lang: "Portuguese", country: "brazil" },
  { code: "en", lang: "English", country: "usa" },
  { code: "es", lang: "Spanish", country: "spain" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="small-compact flex w-auto flex-wrap items-center justify-center gap-2 max-md:mb-3">
      {languages.map((lng) => {
        return (
          <img
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            src={`/images/flags/${lng.country}.png`}
            width={30}
            alt={lng.country}
            className="cursor-pointer"
          />
        );
      })}
    </div>
  );
};

export default LanguageSelector;
