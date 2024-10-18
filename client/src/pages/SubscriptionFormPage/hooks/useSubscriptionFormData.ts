import { useLanguage } from "@/contexts/LanguageContext";
import useLocations from "@/data/locations";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Language } from "@/components/RootLayout/hooks/useLanguageDetection";

export default function useSubscriptionFormData({
    gymPlaceholder,
    subscriptionPlaceholder,
}: {
    gymPlaceholder: string;
    subscriptionPlaceholder: string;
}) {
    const locations = useLocations();
    const [searchParams, _setSearchParams] = useSearchParams();
    const [selectedCity, setSelectedCity] = useState<string>(locations[0].name);
    const [selectedGym, setSelectedGym] = useState<string>(gymPlaceholder);
    const [selectedSubscription, setSelectedSubscription] =
        useState<string>(subscriptionPlaceholder);
    const { uiLanguage } = useLanguage();
    const prevUiLanguage = useRef<Language>(uiLanguage);

    useEffect(() => {
        const city = searchParams.get("city");
        const gym = searchParams.get("gym");

        if (city && gym) {
            const cityWithSameName = locations.find((x) => x.name === city);
            const gymExists = cityWithSameName?.markers.find((x) => x.name === gym);

            if (cityWithSameName && gymExists) {
                setSelectedCity(city);
                setSelectedGym(gym);
            }
        }

        const subscription = searchParams.get("subscription");
        if (subscription) {
            setSelectedSubscription(subscription);
        }
    }, [searchParams.toString()]);

    useEffect(() => {
        if (prevUiLanguage.current !== uiLanguage) {
            setSelectedGym(gymPlaceholder);
            setSelectedSubscription(subscriptionPlaceholder);
        }
        prevUiLanguage.current = uiLanguage;
    }, [uiLanguage, gymPlaceholder, subscriptionPlaceholder]);

    function changeCity(city: string) {
        setSelectedCity(city);
        setSelectedGym(gymPlaceholder);
    }

    return {
        selectedCity,
        selectedGym,
        selectedSubscription,
        changeCity,
        changeGym: setSelectedGym,
        setSelectedSubscription,
    };
}
