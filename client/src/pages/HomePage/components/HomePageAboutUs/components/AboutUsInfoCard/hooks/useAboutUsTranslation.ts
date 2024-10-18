import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        buttonText: "Learn More",
    },
    {
        locale: "ru",
        buttonText: "Подробнее",
    },
];

export default function useAboutUsTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
