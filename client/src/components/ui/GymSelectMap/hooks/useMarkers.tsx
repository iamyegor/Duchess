import { Language } from "@/components/RootLayout/hooks/useLanguageDetection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { City } from "../types/City";
import { Marker } from "../types/Marker";

export default function useMarkers(locations: City[]) {
    const [markers, setMarkers] = useState<Marker[]>(locations.flatMap((x) => x.markers));
    const { uiLanguage } = useLanguage();
    const prevUiLanguage = useRef<Language>(uiLanguage);

    useEffect(() => {
        if (prevUiLanguage.current !== uiLanguage) {
            setMarkers(locations.flatMap((x) => x.markers));
        }
        prevUiLanguage.current = uiLanguage;
    }, [uiLanguage]);

    return { markers, setMarkers };
}
