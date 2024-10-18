import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        gyms: "GYMS",
    },
    {
        locale: "ru",
        gyms: "КЛУБЫ",
    },
];

export default function useGymsPageTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
