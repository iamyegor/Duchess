import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        altText: "Main image",
        buyMembership: "Buy Membership",
    },
    {
        locale: "ru",
        altText: "Main image",
        buyMembership: "Buy Membership",
    },
];

export default function useSecondaryPageTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
