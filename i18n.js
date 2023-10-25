// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";
import uzTranslation from "./locales/uz.json";

i18n
  .use(initReactI18next) // Initialize i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      uz: { translation: uzTranslation },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;
