import { YMapLocation } from "@yandex/ymaps3-types/imperative/YMap";
import { City } from "@/components/ui/Map/types/City.ts";

export const defaultLocation: YMapLocation = {
    center: [37.50903792972745, 55.755115231627215],
    zoom: 12,
};

export const locations: City[] = [
    {
        name: "Москва",
        markers: [
            {
                name: "Орехово",
                coordinates: [37.5792715107169, 55.77839703854898],
                isSelected: false,
                address:
                    "г. Москва, м. Прокшино ТЦ «Сиеста» вн.тер.г. поселение Сосенское, ул. Николо-Хованская, 7с1",
                phone: "+7 (999) 999 99 99",
                priceForMonth: 1690,
            },
            {
                name: "ХИТ",
                coordinates: [37.63666056562544, 55.752188156777024],
                isSelected: false,
                address: "Москва, Славянская площадь, 4с3",
                phone: "+7 (666) 666 66 66",
                priceForMonth: 1700,
            },
            {
                name: "СТАЛЬ",
                coordinates: [37.60282478570303, 55.7429061604929],
                isSelected: false,
                address: "Москва, 1-й Обыденский переулок, 7",
                phone: "+7 (555) 555 55 55",
                priceForMonth: 1700,
            },
            {
                name: "Железобетон",
                coordinates: [37.61756946893364, 55.7752185603293],
                isSelected: false,
                address: "Москва, 2-й Волконский переулок, 12",
                phone: "+7 (444) 444 44 44",
                priceForMonth: 1600,
            },
        ],
        laptopCenterCoordinates: [37.51697483915114, 55.755394740843464],
        coordinates: [37.61997166532299, 55.755394740843464],
    },
    {
        name: "Санкт-Петербург",
        markers: [
            {
                name: "СИЛА",
                coordinates: [30.284028636651858, 59.94385772688106],
                isSelected: false,
                address: "Санкт-Петербург, 3-я линия Васильевского острова, 30-32",
                phone: "+7 (888) 888 88 88",
                priceForMonth: 1500,
            },
            {
                name: "ТОП",
                coordinates: [30.22393283588901, 59.95386055731349],
                isSelected: false,
                address: "Санкт-Петербург, улица Кораблестроителей, 35к5",
                phone: "+7 (777) 777 77 77",
                priceForMonth: 1300,
            },
        ],
        laptopCenterCoordinates: [30.20992479422894, 59.938879768360074],
        coordinates: [30.31051836112347, 59.940257893908125],
    },
];
