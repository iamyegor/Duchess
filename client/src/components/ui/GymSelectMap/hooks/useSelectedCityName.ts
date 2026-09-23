import { Language } from "@/components/RootLayout/hooks/useLanguageDetection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";
import useGymSelectMapTranslation from "./useGymSelectMapTranslation";

export default function useSelectedCityName() {
    const t = useGymSelectMapTranslation();
    const [selectedCityName, setSelectedCityName] = useState<string>(t.defaultCity);
    const { uiLanguage } = useLanguage();
    const prevUiLanguage = useRef<Language>(uiLanguage);

    useEffect(() => {
        if (prevUiLanguage.current !== uiLanguage) {
            setSelectedCityName(t.defaultCity);
        }
        prevUiLanguage.current = uiLanguage;
    }, [t.defaultCity, uiLanguage]);

    return { selectedCityName, setSelectedCityName };
}
