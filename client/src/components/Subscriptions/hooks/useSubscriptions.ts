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
        basicSubscription: "Basic Subscription",
        smartSubscription: "Smart Subscription",
        monthlyPayment: "Monthly Payment",
    },
};

const getSubscriptions = (isMonthly: boolean, locale: "en" | "ru") => ({
    basicSubscription: {
        title: translations[locale].basicSubscription,
        currentPrice: isMonthly ? 29 : 299,
        ...(isMonthly ? {} : { priceWithoutDiscount: 348 }),
    },
    smartSubscription: {
        title: translations[locale].smartSubscription,
        currentPrice: isMonthly ? 45 : 459,
        ...(isMonthly ? {} : { priceWithoutDiscount: 540 }),
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
