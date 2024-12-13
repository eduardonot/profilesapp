import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as languages from "@/lang/languages";

const defaultLanguage = navigator.language || "en-US";

const resources = {
  "en-US": languages["en-US"],
  "pt-BR": languages["pt-BR"],
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
