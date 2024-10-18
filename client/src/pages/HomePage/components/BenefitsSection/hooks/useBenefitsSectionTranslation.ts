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
            part1: "С DUCHESS FITNESS",
            part2: "ВЫ ПОЛУЧИТЕ",
        },
        benefits: [
            "Уникальные тренировки",
            "Индивидуальный подход",
            "Профессиональные тренера",
            "Современное оборудование",
            "Приятную атмосферу",
            "Грамотный дюшес",
        ],
        placeholders: {
            gymImageAlt: "Зал",
        },
    },
];

export default function useBenefitsSectionTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
