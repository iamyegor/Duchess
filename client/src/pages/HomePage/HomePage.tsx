import Subscriptions from "@/components/Subscriptions/Subscriptions.tsx";
import GymSelectMap from "@/components/ui/GymSelectMap/GymSelectMap.tsx";
import BenefitsSection from "@/pages/HomePage/components/BenefitsSection/BenefitsSection";
import HomePageAboutUs from "@/pages/HomePage/components/HomePageAboutUs/HomePageAboutUs.tsx";
import HomePageFirstPart from "@/pages/HomePage/components/HomePageFirstPart/HomePageFirstPart";
import { useRef } from "react";

export default function HomePage() {
    const mapRef = useRef<HTMLDivElement>(null);

    function scrollToMap() {
        mapRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="du-page flex h-full flex-col">
            <HomePageFirstPart onButtonClick={scrollToMap} />
            <BenefitsSection />
            <div className="relative pb-[100px] md:pb-16 lg:h-auto">
                <GymSelectMap ref={mapRef} />
            </div>
            <Subscriptions />
            <HomePageAboutUs />
        </div>
    );
}
