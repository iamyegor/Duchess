import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        subscriptions: "SUBSCRIPTIONS",
        monthly: "Monthly Payment",
        yearly: "Annual Payment",
        testDrive: "Test Drive",
        gym: "Gym",
        inBodyAnalysis: "InBody Analysis",
        freeTrainerSessions: "Free trainer sessions",
        mobileApp: "Mobile app",
        groupClasses: "Group classes",
        spaZone: "SPA zone",
        unlimitedAccess: "Unlimited access to all clubs",
        guestAccess: "Guest access",
        familyAccess: "Family access",
        perMonth: "per month",
        perYear: "per year",
    },
    {
        locale: "ru",
        subscriptions: "АБОНЕМЕНТЫ",
        monthly: "Ежемесячная Оплата",
        yearly: "Ежегодная Оплата",
        testDrive: "Тест-драйв",
        gym: "Тренажерный зал",
        inBodyAnalysis: "Анализ состава тела InBody",
        freeTrainerSessions: "Бесплатные тренировки с тренером",
        mobileApp: "Мобильное приложение",
        groupClasses: "Групповые занятия",
        spaZone: "СПА зона",
        unlimitedAccess: "Безлимитный доступ во все клубы сети",
        guestAccess: "Доступ для друзей",
        familyAccess: "Семейный доступ",
        perMonth: "В месяй",
        perYear: "В год",
    },
];

export default function useSubscriptionsTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
