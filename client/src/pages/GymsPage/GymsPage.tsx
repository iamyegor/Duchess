import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import GymSelectMap from "@/components/ui/GymSelectMap/GymSelectMap.tsx";
import useGymsPageTranslation from "./hooks/useGymsPageTranslation";

export default function GymsPage() {
    const t = useGymsPageTranslation();

    return (
        <div className="flex flex-col pt-4 lg:pt-24 bg-black h-full pb-8 lg:pb-0">
            <DuchessLogo theme="light"/>
            <div className="container pb-5">
                <h3 className="text-5xl text-white font-semibold">{t.gyms}</h3>
            </div>
            <GymSelectMap />
        </div>
    );
}
