import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        bestOffer: "Best offer",
        tryIt: "Try it",
        perMonth: "per month",
        perYear: "per year",
        free: "Free",
    },
    {
        locale: "ru",
        bestOffer: "Best offer",
        tryIt: "Try it",
        perMonth: "per month",
        perYear: "per year",
        free: "Free",
    },
];

export default function useSubscriptionTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
