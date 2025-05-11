import i18next from "i18next";
import en from "./i18n/en.json";
import it from "./i18n/it.json";

export async function loadI18n(lang = 'en') {
  await i18next.init({
    lng: lang,
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      it: { translation: it }
    }
  });

  return i18next;
}
