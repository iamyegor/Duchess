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
];

export default function useSubscriptionsTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
