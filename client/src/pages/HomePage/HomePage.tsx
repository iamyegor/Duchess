import HomePageFirstPart from "@/pages/HomePage/components/HomePageFirstPart.tsx";
import BenefitsSection from "@/pages/HomePage/components/BenefitsSection.tsx";
import HomePageMap from "@/pages/HomePage/components/HomePageMap.tsx";
import Subscriptions from "@/components/Subscriptions/Subscriptions.tsx";
import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import HomePageAboutUs from "@/pages/HomePage/components/HomePageAboutUs/HomePageAboutUs.tsx";
import { useRef } from "react";

export default function HomePage() {
    const mapRef = useRef<HTMLDivElement>(null);

    function scrollToMap() {
        mapRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="flex flex-col bg-default h-full">
            <DuchessLogo />
            <HomePageFirstPart onButtonClick={scrollToMap} />
            <BenefitsSection />
            <HomePageMap ref={mapRef} />
            <Subscriptions />
            <HomePageAboutUs />
        </div>
    );
}
