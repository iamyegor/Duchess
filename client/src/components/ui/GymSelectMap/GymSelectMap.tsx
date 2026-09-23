import LocationSvg from "@/assets/common/location.svg?react";
import DumbbellSvg from "@/assets/homePage/dumbbell.svg?react";
import MoneySvg from "@/assets/homePage/money.svg?react";
import PhoneSvg from "@/assets/homePage/phone.svg?react";
import TimeSvg from "@/assets/homePage/time.svg?react";

import Map from "@/components/ui/GymSelectMap/components/Map.tsx";
import { City } from "@/components/ui/GymSelectMap/types/City.ts";
import { Marker } from "@/components/ui/GymSelectMap/types/Marker.ts";
import useLocations from "@/data/locations";
import SelectComponent from "@/pages/HomePage/components/SelectComponent.tsx";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useGymSelectMapTranslation from "./hooks/useGymSelectMapTranslation";
import useMarkers from "./hooks/useMarkers";
import useSelectedCityName from "./hooks/useSelectedCityName";

const GymSelectMap = forwardRef<HTMLDivElement>((_, ref) => {
    const t = useGymSelectMapTranslation();
    const locations = useLocations();
    const { markers, setMarkers } = useMarkers(locations);
    const [searchParams] = useSearchParams();
    const { selectedCityName, setSelectedCityName } = useSelectedCityName();
    const [selectedClub, setSelectedClub] = useState<Marker | null>(null);
    const [clubs, setClubs] = useState<Marker[]>(
        locations.filter((x) => x.name === selectedCityName).flatMap((x) => x.markers),
    );

    useEffect(() => {
        const clubs = locations
            .filter((x) => x.name === selectedCityName)
            .flatMap((x) => x.markers);

        if (clubs.findIndex((x) => x.name === selectedClub?.name) === -1) {
            setClubs(clubs);
            setSelectedClub(null);
        }
    }, [locations, selectedCityName, selectedClub?.name]);

    const city: City = useMemo(
        () => locations.find((x) => x.name === selectedCityName)!,
        [locations, selectedCityName],
    );

    useEffect(() => {
        if (selectedClub) {
            setMarkers((currentMarkers) =>
                currentMarkers.map((x) =>
                    x.name !== selectedClub.name
                        ? { ...x, isSelected: false }
                        : { ...x, isSelected: true },
                ),
            );
        }
    }, [selectedClub, setMarkers]);

    function getSubscriptionSearchParams() {
        return searchParams.toString() ? `&${searchParams.toString()}` : "";
    }

    return (
        <div
            className="relative block max-h-[1000px] items-center justify-center overflow-hidden bg-[#050505] md:justify-start lg:flex lg:h-full lg:p-10"
            ref={ref}
        >
            <div className="relative h-[360px] lg:absolute lg:inset-0 lg:h-full">
                <Map
                    city={city}
                    markers={markers}
                    selectedMarker={selectedClub}
                    setSelectedMarker={setSelectedClub!}
                />
            </div>

            <div className="container -mt-[50px] lg:mt-0">
                <div className="du-panel relative z-10 flex w-full flex-col justify-between space-y-10 rounded-sm p-5 xs:p-8 lg:h-[620px] lg:max-w-[500px]">
                    <div className="space-y-4">
                        <SelectComponent
                            currentValue={selectedCityName}
                            values={locations.map((x) => x.name)}
                            onChange={(e) => {
                                setSelectedCityName(e.target.value as string);
                            }}
                        />
                        <SelectComponent
                            onChange={(e) => {
                                const club: Marker = clubs.filter(
                                    (x) => x.name === (e.target.value as string),
                                )[0];

                                setSelectedClub(club);
                            }}
                            defaultValue={t.selectGym}
                            currentValue={selectedClub?.name ?? t.selectGym}
                            values={clubs.map((x) => x.name)}
                        />
                    </div>
                    {selectedClub === null ? (
                        <div className="space-y-5 text-paper">
                            <span className="du-kicker">city selector</span>
                            <h3 className="du-display text-[58px]">{t.chooseClub}</h3>
                            <p className="leading-7 text-paper/70">{t.description}</p>
                            <p className="leading-7 text-paper/70">{t.community}</p>
                        </div>
                    ) : (
                        <div className="space-y-5 text-lg text-paper/80">
                            <div className="flex items-center gap-3">
                                <DumbbellSvg className="h-6 w-6 flex-shrink-0 fill-acid" />
                                <p>{selectedClub?.name}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <LocationSvg className="h-6 w-6 flex-shrink-0 fill-acid" />
                                <p>{selectedClub?.address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <PhoneSvg className="h-6 w-6 flex-shrink-0 fill-acid" />
                                <p>{selectedClub?.phone}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <TimeSvg className="h-6 w-6 flex-shrink-0 fill-acid" />
                                <p>{t.open24Hours}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MoneySvg className="h-6 w-6 flex-shrink-0 fill-acid" />
                                <p>
                                    {t.monthlyPaymentFrom} £{selectedClub?.priceForMonth}
                                </p>
                            </div>
                        </div>
                    )}

                    {!selectedClub || selectedClub?.name == t.selectGym ? (
                        <button
                            disabled
                            className="w-full rounded-sm bg-paper/10 p-3 text-center font-bold uppercase text-paper/35"
                        >
                            {t.select}
                        </button>
                    ) : (
                        <Link
                            to={`/subscription-form?city=${selectedCityName}&gym=${selectedClub?.name}${getSubscriptionSearchParams()}`}
                            className="du-button w-full p-3 text-center text-sm"
                        >
                            {t.select}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
});

export default GymSelectMap;
