import { City } from "@/components/ui/GymSelectMap/types/City.ts";
import { useLanguage } from "@/contexts/LanguageContext";
import { YMapLocation } from "@yandex/ymaps3-types/imperative/YMap";
import { useMemo } from "react";

export const defaultLocation: YMapLocation = {
    center: [-0.1276, 51.5072],
    zoom: 12,
};

const locationsRu: City[] = [
    {
        name: "London",
        markers: [
            {
                name: "Shoreditch",
                coordinates: [-0.0754, 51.5227],
                isSelected: false,
                address: "London, 56 Shoreditch High St, E1 6JJ",
                phone: "+44 20 7946 0958",
                priceForMonth: 39,
            },
            {
                name: "Camden",
                coordinates: [-0.1437, 51.539],
                isSelected: false,
                address: "London, 182 Camden High St, NW1 8QP",
                phone: "+44 20 7946 0959",
                priceForMonth: 35,
            },
            {
                name: "Canary Wharf",
                coordinates: [-0.0195, 51.5054],
                isSelected: false,
                address: "London, 15 Canada Square, E14 5GL",
                phone: "+44 20 7946 0960",
                priceForMonth: 45,
            },
        ],
        laptopCenterCoordinates: [-0.18, 51.515],
        coordinates: [-0.1276, 51.5072],
    },
    {
        name: "Manchester",
        markers: [
            {
                name: "Deansgate",
                coordinates: [-2.2479, 53.4774],
                isSelected: false,
                address: "Manchester, 83 Deansgate, M3 2BW",
                phone: "+44 161 496 0421",
                priceForMonth: 32,
            },
            {
                name: "Northern Quarter",
                coordinates: [-2.2368, 53.4848],
                isSelected: false,
                address: "Manchester, 24 Lever St, M1 1DW",
                phone: "+44 161 496 0422",
                priceForMonth: 29,
            },
        ],
        laptopCenterCoordinates: [-2.28, 53.48],
        coordinates: [-2.2426, 53.4808],
    },
];

const locationsEn: City[] = [
    {
        name: "London",
        markers: [
            {
                name: "Shoreditch",
                coordinates: [-0.0754, 51.5227],
                isSelected: false,
                address: "London, 56 Shoreditch High St, E1 6JJ",
                phone: "+44 20 7946 0958",
                priceForMonth: 39,
            },
            {
                name: "Camden",
                coordinates: [-0.1437, 51.539],
                isSelected: false,
                address: "London, 182 Camden High St, NW1 8QP",
                phone: "+44 20 7946 0959",
                priceForMonth: 35,
            },
            {
                name: "Canary Wharf",
                coordinates: [-0.0195, 51.5054],
                isSelected: false,
                address: "London, 15 Canada Square, E14 5GL",
                phone: "+44 20 7946 0960",
                priceForMonth: 45,
            },
        ],
        laptopCenterCoordinates: [-0.18, 51.515],
        coordinates: [-0.1276, 51.5072],
    },
    {
        name: "Manchester",
        markers: [
            {
                name: "Deansgate",
                coordinates: [-2.2479, 53.4774],
                isSelected: false,
                address: "Manchester, 83 Deansgate, M3 2BW",
                phone: "+44 161 496 0421",
                priceForMonth: 32,
            },
            {
                name: "Northern Quarter",
                coordinates: [-2.2368, 53.4848],
                isSelected: false,
                address: "Manchester, 24 Lever St, M1 1DW",
                phone: "+44 161 496 0422",
                priceForMonth: 29,
            },
        ],
        laptopCenterCoordinates: [-2.28, 53.48],
        coordinates: [-2.2426, 53.4808],
    },
];

export default function useLocations() {
    const { uiLanguage } = useLanguage();
    const locations = useMemo(
        () => (uiLanguage === "en" ? locationsEn : locationsRu),
        [uiLanguage],
    );

    return locations;
}
