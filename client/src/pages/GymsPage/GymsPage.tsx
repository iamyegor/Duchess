import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import GymSelectMap from "@/components/ui/GymSelectMap/GymSelectMap.tsx";
import useGymsPageTranslation from "./hooks/useGymsPageTranslation";

export default function GymsPage() {
    const t = useGymsPageTranslation();

    return (
        <div className="du-page flex h-full flex-col pb-8 pt-4 lg:pb-0 lg:pt-28">
            <DuchessLogo theme="light" />
            <div className="container pb-8">
                <span className="du-kicker">choose floor</span>
                <h3 className="du-display text-7xl text-paper sm:text-9xl">{t.gyms}</h3>
            </div>
            <GymSelectMap />
        </div>
    );
}
