import { YMapMarker } from "ymap3-components";
import DuchessMarker from "@/assets/map/marker.svg";
import SelectedDuchessMarker from "@/assets/map/selected-marker.svg";
import { Marker } from "@/components/ui/GymSelectMap/types/Marker.ts";
import React from "react";

function DuchessMapMarker({
    marker,
    onClick,
}: {
    marker: Marker;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
    return (
        <YMapMarker coordinates={marker.coordinates}>
            <button className="-ml-[25px] -mt-[50px] w-[50px] h-[50px]" onClick={onClick}>
                <img
                    className="w-full"
                    src={marker.isSelected ? SelectedDuchessMarker : DuchessMarker}
                    alt="Duchess"
                />
            </button>
        </YMapMarker>
    );
}

export default DuchessMapMarker;
