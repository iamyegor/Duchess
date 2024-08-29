import HomePageFirstPart from "@/pages/HomePage/components/HomePageFirstPart.tsx";
import HomePageBenefits from "@/pages/HomePage/components/HomePageBenefits.tsx";
import HomePageMap from "@/pages/HomePage/components/HomePageMap.tsx";
import Subscriptions from "@/components/Subscriptions/Subscriptions.tsx";
import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import HomePageAboutUs from "@/pages/HomePage/components/HomePageAboutUs/HomePageAboutUs.tsx";

export default function HomePage() {
    return (
        <div className="flex flex-col bg-default h-full">
            <DuchessLogo />
            <HomePageFirstPart />
            <HomePageBenefits />
            <HomePageMap />
            <Subscriptions />
            <HomePageAboutUs />
        </div>
    );
}
