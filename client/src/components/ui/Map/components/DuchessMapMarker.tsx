import { YMapMarker } from "ymap3-components";
import { Marker } from "../data/locations";
import DuchessMarker from "@/assets/map/duchess-marker.svg";
import SelectedDuchessMarker from "@/assets/map/selected-duchess-marker.svg";

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
