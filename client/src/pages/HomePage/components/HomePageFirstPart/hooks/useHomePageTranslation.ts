import { useLanguage } from "@/contexts/LanguageContext";

export const translations = [
    {
        locale: "en",
        title: "DUCHESS FITNESS GYM",
        description:
            "DUCHESS FITNESS is a place where your discipline and determination meet support and motivation. We create a cozy and friendly atmosphere for those who strive for the best version of themselves.",
        buttonText: "Buy with discount",
        placeholders: {
            gymImageAlt: "Gym background image",
            memberImageAlt: "Fitness club member",
        },
    },
    {
        locale: "ru",
        title: "DUCHESS FITNESS GYM",
        description:
            "DUCHESS FITNESS is a place where your discipline and determination meet support and motivation. We create a cozy and friendly atmosphere for those who strive for the best version of themselves.",
        buttonText: "Buy with discount",
        placeholders: {
            gymImageAlt: "Gym background image",
            memberImageAlt: "Fitness club member",
        },
    },
];

export default function useHomePageTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
