import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import GymSelectMap from "@/components/ui/GymSelectMap/GymSelectMap.tsx";

function GymsPage() {
    return (
        <div className="flex flex-col bg-default h-full pb-8 lg:pb-0">
            <DuchessLogo />
            <div className="container pt-8 pb-5">
                <h3 className="text-5xl text-white font-semibold">КЛУБЫ</h3>
            </div>
            <GymSelectMap />
        </div>
    );
}

export default GymsPage;
