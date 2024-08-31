import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import GymSelectMap from "@/components/ui/GymSelectMap/GymSelectMap.tsx";

function MapPage() {
    return (
        <div className="flex flex-col bg-default h-full pt-8 pb-16 lg:pb-0">
            <DuchessLogo />
            <div className="container">
                <h3 className="uppercase text-[32px] text-black font-medium mb-[50px]">КЛУБЫ</h3>
            </div>
            <GymSelectMap />
        </div>
    );
}

export default MapPage;
