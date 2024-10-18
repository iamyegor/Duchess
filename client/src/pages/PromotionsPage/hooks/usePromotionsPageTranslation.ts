import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        promotions: "PROMOTIONS",
        noEntryFee: "0₽ entry fee",
        discountDescription:
            "100% discount on the entry fee when purchasing a membership in all Duchess Fitness clubs.",
        finalDiscounts: "Final discounts",
        buyMembership: "BUY MEMBERSHIP",
    },
    {
        locale: "ru",
        promotions: "АКЦИИ",
        noEntryFee: "0₽ на вступительный взнос",
        discountDescription:
            "Скидка 100% на вступительный взнос при покупке абонемента во всех клубах сети Duchess Fitness.",
        finalDiscounts: "Финальные скидки",
        buyMembership: "КУПИТЬ АБОНЕМЕНТ",
    },
];

export default function usePromotionsPageTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
