import { useLanguage } from "@/contexts/LanguageContext";

const translations = [
    {
        locale: "en",
        selectGym: "Select a gym",
        chooseClub: "Choose a club",
        description:
            "DUCHESS FITNESS is a network of technological fitness clubs with monthly payments. Our mission is to make sports an integral part of everyone's life.",
        community:
            "We create not just clubs, but a community of like-minded people for whom physical activity is a norm of life.",
        open24Hours: "Open 24/7",
        monthlyPaymentFrom: "Monthly payment from",
        select: "Select",
        moscow: "Moscow",
    },
    {
        locale: "ru",
        selectGym: "Выберите зал",
        chooseClub: "Выберите клуб",
        description:
            "DUCHESS FITNESS — сеть технологичных фитнес-клубов с оплатой за месяц. Наша миссия — сделать занятия спортом неотъемлемой частью жизни каждого.",
        community:
            "Мы создаем не просто клубы, а сообщество единомышленников, для которых физическая активность — норма жизни.",
        open24Hours: "Круглосуточно",
        monthlyPaymentFrom: "Ежемесячный платеж от",
        select: "Выбрать",
        moscow: "Москва",
    },
];

export default function useGymSelectMapTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
