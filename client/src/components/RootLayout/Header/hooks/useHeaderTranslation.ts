import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        subscriptions: "Subscriptions",
        gyms: "Gyms",
        promotions: "Promotions",
    },
    {
        locale: "ru",
        subscriptions: "Абонементы",
        gyms: "Клубы",
        promotions: "Акции",
    },
];

export default function useHeaderTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
