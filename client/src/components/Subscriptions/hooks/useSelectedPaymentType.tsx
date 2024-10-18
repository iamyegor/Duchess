import { Language } from "@/components/RootLayout/hooks/useLanguageDetection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";

export default function useSelectedPaymentType(localizedMonthly: string) {
    const [selectedPaymentType, setSelectedPaymentType] = useState<string>(localizedMonthly);
    const { uiLanguage } = useLanguage();
    const prevUiLanguage = useRef<Language>(uiLanguage);

    useEffect(() => {
        if (prevUiLanguage.current !== uiLanguage) {
            setSelectedPaymentType(localizedMonthly);
        }
        prevUiLanguage.current = uiLanguage;
    }, [selectedPaymentType, uiLanguage]);

    return { selectedPaymentType, setSelectedPaymentType };
}
