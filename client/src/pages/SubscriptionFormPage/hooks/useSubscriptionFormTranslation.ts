import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const translations = [
    {
        locale: "en",
        title: "SUBSCRIBE",
        cityPlaceholder: "Select city",
        gymPlaceholder: "Select gym",
        subscriptionPlaceholder: "Select subscription",
        namePlaceholder: "Name*",
        emailPlaceholder: "E-mail*",
        privacyPolicy: "I agree with the privacy policy",
        spam: "Receive notifications about new promotions and discounts",
        submitButton: "Subscribe",
        subscriptionUnavailable: "Subscription is temporarily unavailable!",
        subscriptions: {
            "Грамотная подписка": "Smart subscription",
            "Базовая подписка": "Basic subscription",
            "Тест-драйв": "Test drive",
        },
    },
    {
        locale: "ru",
        title: "ОФОРМИТЬ АБОНЕМЕНТ",
        cityPlaceholder: "Выберите город",
        gymPlaceholder: "Выберите зал",
        subscriptionPlaceholder: "Выберите абонемент",
        namePlaceholder: "Имя*",
        emailPlaceholder: "E-mail*",
        privacyPolicy: "Согласие с политикой конфиденциальности",
        spam: "Получать уведомления о новых акциях и скидках",
        submitButton: "Записаться",
        subscriptionUnavailable: "Оформление абонемента временно недоступно!",
        subscriptions: {
            "Грамотная подписка": "Грамотная подписка",
            "Базовая подписка": "Базовая подписка",
            "Тест-драйв": "Тест-драйв",
        },
    },
];

export default function useSubscriptionFormTranslation() {
    const { uiLanguage } = useLanguage();
    const [translation, setTranslation] = useState(translations[0]);

    useEffect(() => {
        if (uiLanguage) {
            setTranslation(
                translations.find((translation) => translation.locale === uiLanguage) ||
                    translations[0],
            );
        }
    }, []);

    return translation;
}
