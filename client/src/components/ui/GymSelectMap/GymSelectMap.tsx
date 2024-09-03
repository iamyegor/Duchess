import DumbbellSvg from "@/assets/homePage/dumbbell.svg?react";
import LocationSvg from "@/assets/common/location.svg?react";
import PhoneSvg from "@/assets/homePage/phone.svg?react";
import TimeSvg from "@/assets/homePage/time.svg?react";
import MoneySvg from "@/assets/homePage/money.svg?react";

import { forwardRef, useEffect, useMemo, useState } from "react";
import { Marker } from "@/components/ui/GymSelectMap/types/Marker.ts";
import { locations } from "@/data/locations.ts";
import { City } from "@/components/ui/GymSelectMap/types/City.ts";
import Map from "@/components/ui/GymSelectMap/components/Map.tsx";
import SelectComponent from "@/pages/HomePage/components/SelectComponent.tsx";
import { Link, useSearchParams } from "react-router-dom";

const GymSelectMap = forwardRef<HTMLDivElement>((_, ref) => {
    const [markers, setMarkers] = useState<Marker[]>(locations.flatMap((x) => x.markers));
    const [searchParams] = useSearchParams();
    const [selectedCityName, setSelectedCityName] = useState<string>("Москва");
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
    }, [selectedCityName]);

    const city: City = useMemo(
        () => locations.find((x) => x.name === selectedCityName)!,
        [selectedCityName],
    );

    useEffect(() => {
        if (selectedClub) {
            setMarkers(
                markers.map((x) =>
                    x.name !== selectedClub.name
                        ? { ...x, isSelected: false }
                        : { ...x, isSelected: true },
                ),
            );
        }
    }, [selectedClub]);

    function getSubscriptionSearchParams() {
        return searchParams.toString() ? `&${searchParams.toString()}` : "";
    }

    return (
        <div
            className="relative block justify-center items-center md:justify-start lg:p-10 lg:flex lg:h-full max-h-[1000px]"
            ref={ref}
        >
            <div className="relative lg:inset-0 lg:absolute h-[340px] lg:h-full">
                <Map
                    city={city}
                    markers={markers}
                    selectedMarker={selectedClub}
                    setSelectedMarker={setSelectedClub!}
                />
            </div>

            <div className="-mt-[50px] lg:mt-0 container">
                <div className="lg:h-[600px] relative z-10 bg-black/85 backdrop-blur-sm w-full lg:max-w-[500px] rounded-xl p-5 xs:p-8 flex flex-col justify-between space-y-10">
                    <div className="space-y-4">
                        <SelectComponent
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
                            defaultValue="Выберите зал"
                            currentValue={selectedClub?.name ?? "Выберите зал"}
                            values={clubs.map((x) => x.name)}
                        />
                    </div>
                    {selectedClub === null ? (
                        <div className="text-white space-y-5">
                            <h3 className="uppercase text-[32px]">Выберите клуб</h3>
                            <p>
                                DUCHESS FITNESS — сеть технологичных фитнес-клубов с оплатой за
                                месяц. Наша миссия — сделать занятия спортом неотъемлемой частью
                                жизни каждого.
                            </p>
                            <p>
                                Мы создаем не просто клубы, а сообщество единомышленников, для
                                которых физическая активность — норма жизни.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-5 text-lg">
                            <div className="flex items-center space-x-3">
                                <DumbbellSvg className="fill-default w-6 h-6 flex-shrink-0" />
                                <p>{selectedClub?.name}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <LocationSvg className="fill-default w-6 h-6 flex-shrink-0" />
                                <p>{selectedClub?.address}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <PhoneSvg className="fill-default w-6 h-6 flex-shrink-0" />
                                <p>{selectedClub?.phone}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <TimeSvg className="fill-default w-6 h-6 flex-shrink-0" />
                                <p>Круглосуточно</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MoneySvg className="fill-default w-6 h-6 flex-shrink-0" />
                                <p>Ежемесячный платеж от {selectedClub?.priceForMonth}₽</p>
                            </div>
                        </div>
                    )}

                    {!selectedClub || selectedClub?.name == "Выберите зал" ? (
                        <button
                            disabled
                            className="bg-neutral-600 text-neutral-300 w-full p-3 rounded-lg text-center"
                        >
                            Выбрать
                        </button>
                    ) : (
                        <Link
                            to={`/subscription-form?city=${selectedCityName}&gym=${selectedClub?.name}${getSubscriptionSearchParams()}`}
                            className="bg-default w-full p-3 rounded-lg hover:bg-default-dark transition text-center"
                        >
                            Выбрать
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
});

export default GymSelectMap;
