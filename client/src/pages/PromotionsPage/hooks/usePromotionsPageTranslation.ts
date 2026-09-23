import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        promotions: "PROMOTIONS",
        noEntryFee: "£0 joining fee",
        discountDescription:
            "100% discount on the entry fee when purchasing a membership in all Duchess Fitness clubs.",
        finalDiscounts: "Final discounts",
        buyMembership: "BUY MEMBERSHIP",
    },
    {
        locale: "ru",
        promotions: "PROMOTIONS",
        noEntryFee: "£0 joining fee",
        discountDescription:
            "100% discount on the entry fee when purchasing a membership in all Duchess Fitness clubs.",
        finalDiscounts: "Final discounts",
        buyMembership: "BUY MEMBERSHIP",
    },
];

export default function usePromotionsPageTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
