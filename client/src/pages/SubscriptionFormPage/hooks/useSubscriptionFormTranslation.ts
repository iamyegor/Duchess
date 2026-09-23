import { useLanguage } from "@/contexts/LanguageContext";

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
            "Smart Subscription": "Smart subscription",
            "Basic Subscription": "Basic subscription",
            "Test Drive": "Test drive",
        },
    },
    {
        locale: "ru",
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
            "Smart Subscription": "Smart subscription",
            "Basic Subscription": "Basic subscription",
            "Test Drive": "Test drive",
        },
    },
];

export default function useSubscriptionFormTranslation() {
    const { uiLanguage } = useLanguage();
    return translations.find((translation) => translation.locale === uiLanguage) || translations[0];
}
