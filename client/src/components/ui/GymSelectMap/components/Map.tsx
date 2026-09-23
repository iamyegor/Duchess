import * as YMaps from "@yandex/ymaps3-types";
import { LngLat } from "@yandex/ymaps3-types";
import {
    YMap,
    YMapComponentsProvider,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
} from "ymap3-components";
import React, { SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import DuchessMapMarker from "./DuchessMapMarker.tsx";
import { City } from "@/components/ui/GymSelectMap/types/City.ts";
import { Marker } from "@/components/ui/GymSelectMap/types/Marker.ts";

function Map({
    city,
    markers,
    selectedMarker,
    setSelectedMarker,
}: {
    city: City;
    markers: Marker[];
    selectedMarker: Marker | null;
    setSelectedMarker: React.Dispatch<SetStateAction<Marker | null>>;
}) {
    const center = useMemo<LngLat>(() => {
        if (window.outerWidth >= 1024) {
            return city.laptopCenterCoordinates ?? city.coordinates;
        }

        return city.coordinates;
    }, [city]);

    const [centerLocation, setCenterLocation] = useState<YMaps.YMapLocationRequest>({
        center,
        zoom: 12,
    });

    const handleResize = useCallback(() => {
        const centerCoordinates =
            window.outerWidth >= 1024
                ? (city.laptopCenterCoordinates ?? city.coordinates)
                : city.coordinates;

        setCenterLocation({
            center: centerCoordinates,
            zoom: 12,
        });
    }, [city.coordinates, city.laptopCenterCoordinates]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        setCenterLocation({
            center,
            zoom: 12,
        });
    }, [center]);

    useEffect(() => {
        if (selectedMarker) {
            setCenterLocation({
                center: [
                    selectedMarker.coordinates[0] - city.coordinates[0] + center[0],
                    selectedMarker.coordinates[1] - city.coordinates[1] + center[1],
                ],
                zoom: 12,
                duration: 500,
                easing: "ease-out",
            });
        }
    }, [center, city.coordinates, selectedMarker]);

    return (
        <YMapComponentsProvider apiKey="5949372d-04c6-4c82-8d2b-f7ae4ac61d58" lang="en_US">
            <YMap location={centerLocation} mode="vector" theme="dark">
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />

                {markers.map((marker) => (
                    <DuchessMapMarker
                        key={marker.coordinates.join()}
                        marker={marker}
                        onClick={() => {
                            setSelectedMarker(marker);
                        }}
                    />
                ))}
            </YMap>
        </YMapComponentsProvider>
    );
}

export default Map;
