import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { locations } from "@/data/locations.ts";

export default function useSelectedCityAndGym() {
    const [searchParams, _setSearchParams] = useSearchParams();
    const [selectedCity, setSelectedCity] = useState<string>(locations[0].name);
    const [selectedGym, setSelectedGym] = useState<string>("Выберите зал");

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
    }, [searchParams.toString()]);

    function changeCity(city: string) {
        setSelectedCity(city);
        setSelectedGym("Выберите зал");
    }

    return { selectedCity, selectedGym, changeCity, changeGym: setSelectedGym };
}
