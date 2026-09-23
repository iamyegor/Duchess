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
        subscriptions: "Subscriptions",
        gyms: "Gyms",
        promotions: "Promotions",
    },
];

export default function useHeaderTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
