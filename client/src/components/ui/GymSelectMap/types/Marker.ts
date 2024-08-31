import { LngLat } from "@yandex/ymaps3-types";

export interface Marker {
    name: string;
    coordinates: LngLat;
    isSelected: boolean;
    address: string;
    phone: string;
    priceForMonth: number;
}
