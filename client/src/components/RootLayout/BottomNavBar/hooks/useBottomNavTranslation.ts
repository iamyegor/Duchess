import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        selectGym: "Select Gym",
        call: "Call",
        menu: "Menu",
    },
    {
        locale: "ru",
        selectGym: "Выбрать клуб",
        call: "Позвонить",
        menu: "Меню",
    },
];

export default function useBottomNavTranslation() {
        const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
