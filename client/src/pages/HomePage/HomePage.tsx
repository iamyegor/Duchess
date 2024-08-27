import { Link } from "react-router-dom";
import HomePageFirstPart from "@/pages/HomePage/components/HomePageFirstPart.tsx";
import HomePageBenefits from "@/pages/HomePage/components/HomePageBenefits.tsx";
import HomePageMap from "@/pages/HomePage/components/HomePageMap.tsx";
import HomePageSubscriptions from "@/pages/HomePage/components/HomePageSubscriptions/HomePageSubscriptions.tsx";

export default function HomePage() {
    return (
        <div className="flex flex-col bg-default h-full">
            <Link to="/" className="text-4xl font-thin text-center p-5">
                DUCHESS FITNESS
            </Link>
            <HomePageFirstPart />
            <HomePageBenefits />
            <HomePageMap />
            <HomePageSubscriptions />
        </div>
    );
}
