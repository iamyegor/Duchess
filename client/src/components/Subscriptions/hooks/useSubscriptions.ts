import Subscriptions from "@/components/Subscriptions/types/Subscriptions.ts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const translations = {
    en: {
        basicSubscription: "Basic Subscription",
        smartSubscription: "Smart Subscription",
        monthlyPayment: "Monthly Payment",
    },
    ru: {
        basicSubscription: "Базовая подписка",
        smartSubscription: "Грамотная подписка",
        monthlyPayment: "Ежемесячная Оплата",
    },
};

const getSubscriptions = (isMonthly: boolean, locale: "en" | "ru") => ({
    basicSubscription: {
        title: translations[locale].basicSubscription,
        currentPrice: isMonthly ? 1990 : 19900,
        ...(isMonthly ? {} : { priceWithoutDiscount: 23880 }),
    },
    smartSubscription: {
        title: translations[locale].smartSubscription,
        currentPrice: isMonthly ? 2490 : 22990,
        ...(isMonthly ? {} : { priceWithoutDiscount: 29880 }),
    },
});

export default function useSubscriptions({ selectedPaymentType }: { selectedPaymentType: string }) {
    const { uiLanguage } = useLanguage();
    const [subscriptions, setSubscriptions] = useState<Subscriptions>(getSubscriptions(true, "ru"));
    const [locale, setLocale] = useState<"en" | "ru">("ru");

    useEffect(() => {
        const currentLocale = uiLanguage === "en" ? "en" : "ru";
        setLocale(currentLocale);

        const isMonthly = selectedPaymentType === translations[currentLocale].monthlyPayment;
        setSubscriptions(getSubscriptions(isMonthly, currentLocale));
    }, [selectedPaymentType, uiLanguage]);

    return { subscriptions, locale };
}
