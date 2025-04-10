import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        chooseClub: "Choose a Club",
        subscriptions: "Subscriptions",
        programsAndDirections: "Programs",
        forNewClients: "For New Clients",
        promotions: "Promotions",
        faq: "FAQ",
        close: "Close",
    },
    {
        locale: "ru",
        chooseClub: "Выбрать клуб",
        subscriptions: "Абонементы",
        programsAndDirections: "Направления и программы",
        forNewClients: "Для новых клиентов",
        promotions: "Акции",
        faq: "Частые вопросы",
        close: "Закрыть",
    },
];

export default function useBurgerMenuTranslation() {
        const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
