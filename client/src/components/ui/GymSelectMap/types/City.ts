import { LngLat } from "@yandex/ymaps3-types";
import { Marker } from "@/components/ui/GymSelectMap/types/Marker.ts";

export interface City {
    name: string;
    markers: Marker[];
    laptopCenterCoordinates: LngLat;
    coordinates: LngLat;
}
