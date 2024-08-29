import SelectComponent from "@/pages/HomePage/components/SelectComponent.tsx";
import DumbbellSvg from "@/assets/homePage/dumbbell.svg?react";
import LocationSvg from "@/assets/common/location.svg?react";
import PhoneSvg from "@/assets/homePage/phone.svg?react";
import TimeSvg from "@/assets/homePage/time.svg?react";
import MoneySvg from "@/assets/homePage/money.svg?react";
import { Link } from "react-router-dom";
import Map from "./Map";

export default function HomePageMap() {
    const items = [
        {
            image: DumbbellSvg,
            text: "Орехово",
        },
        {
            image: LocationSvg,
            text: "г. Москва, м. Прокшино ТЦ «Сиеста» вн.тер.г. поселение Сосенское, ул. Николо-Хованская, 7с1",
        },
        {
            image: PhoneSvg,
            text: "+7 (999) 999 99 99",
        },
        {
            image: TimeSvg,
            text: "Круглосуточно",
        },
        {
            image: MoneySvg,
            text: "Ежемесячный платеж от 1690₽",
        },
    ];

    return (
        <div className="relative container flex justify-center md:justify-start p-10">
            <div className="absolute inset-0">
                <Map />
            </div>

            <div className="bg-black/85 w-full max-w-[500px] h-full rounded-xl p-8 flex flex-col justify-between">
                <div className="space-y-4">
                    <SelectComponent values={["Москва", "Санкт-Петербург"]} />
                    <SelectComponent values={["Орехово"]} />
                </div>
                <div className="space-y-5 text-lg">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <item.image className="fill-default w-6 h-6 flex-shrink-0" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <Link
                    to="/subscriptions"
                    className="bg-default w-full p-3 rounded-lg hover:bg-default-dark transition text-center"
                >
                    Выбрать
                </Link>
            </div>
        </div>
    );
}
