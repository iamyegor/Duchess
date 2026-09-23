import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        title: {
            part1: "DUCHESS FITNESS",
            part2: "OFFERS YOU",
        },
        benefits: [
            "Unique workouts",
            "Individual approach",
            "Professional trainers",
            "Modern equipment",
            "Pleasant atmosphere",
            "Proper duchess",
        ],
        placeholders: {
            gymImageAlt: "Gym",
        },
    },
    {
        locale: "ru",
        title: {
            part1: "DUCHESS FITNESS",
            part2: "OFFERS YOU",
        },
        benefits: [
            "Unique workouts",
            "Individual approach",
            "Professional trainers",
            "Modern equipment",
            "Pleasant atmosphere",
            "Proper duchess",
        ],
        placeholders: {
            gymImageAlt: "Gym",
        },
    },
];

export default function useBenefitsSectionTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
