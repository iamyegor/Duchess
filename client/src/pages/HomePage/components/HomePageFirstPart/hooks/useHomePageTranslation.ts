import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export const translations = [
    {
        locale: "en",
        title: "DUCHESS FITNESS GYM",
        description:
            "DUCHESS FITNESS is a place where your discipline and determination meet support and motivation. We create a cozy and friendly atmosphere for those who strive for the best version of themselves.",
        buttonText: "Buy with discount",
        placeholders: {
            gymImageAlt: "Gym background image",
            girlImageAlt: "Beautiful Girl",
        },
    },
    {
        locale: "ru",
        title: "ЗАЛ DUCHESS FITNESS",
        description:
            "DUCHESS FITNESS — это место, где ваша дисциплина и решимость встречаются с поддержкой и мотивацией. Мы создаем уютную и дружелюбную атмосферу для тех, кто стремится к лучшей версии себя.",
        buttonText: "Купить со скидкой",
        placeholders: {
            gymImageAlt: "Фоновое изображение зала",
            girlImageAlt: "Красивая Девушка",
        },
    },
];

export default function useHomePageTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) ?? translations[0];
}
