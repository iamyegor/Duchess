import { Language } from "@/components/RootLayout/hooks/useLanguageDetection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";
import useGymSelectMapTranslation from "./useGymSelectMapTranslation";

export default function useSelectedCityName() {
    const t = useGymSelectMapTranslation();
    const [selectedCityName, setSelectedCityName] = useState<string>(t.moscow);
    const { uiLanguage } = useLanguage();
    const prevUiLanguage = useRef<Language>(uiLanguage);

    useEffect(() => {
        if (prevUiLanguage.current !== uiLanguage) {
            setSelectedCityName(t.moscow);
        }
        prevUiLanguage.current = uiLanguage;
    }, [selectedCityName, uiLanguage]);

    return { selectedCityName, setSelectedCityName };
}
