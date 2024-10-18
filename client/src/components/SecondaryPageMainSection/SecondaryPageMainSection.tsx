import DuchessLogo from "@/components/ui/DuchessLogo.tsx";
import { Link } from "react-router-dom";
import useSecondaryPageTranslation from "./hooks/useSecondaryPageTranslation";

interface SecondaryPageMainSectionProps {
    img: string;
    title: string;
    description: string;
}

export default function SecondaryPageMainSection({
    img,
    title,
    description,
}: SecondaryPageMainSectionProps) {
    const t = useSecondaryPageTranslation();

    return (
        <div className="flex flex-col pt-2 items-center relative h-[650px]">
            <DuchessLogo />
            <div className="absolute inset-0">
                <img src={img} alt={t.altText} className="w-full h-full object-cover" />
            </div>
            <div className="z-10 container h-full flex items-center p-4">
                <div className="flex flex-col justify-start lg:max-w-[650px]">
                    <h1 className="text-[24px] xs:text-[30px] sm:text-[50px] font-bold mb-4 leading-[1.1] tracking-tight">
                        {title}
                    </h1>
                    <p className="mb-12">{description}</p>
                    <Link
                        to="/gyms"
                        className="px-6 py-4 w-full sm:w-[320px] border border-neutral-500 rounded-xl bg-black text-white hover:bg-black/90 hover:shadow-2xl transition text-center"
                    >
                        {t.buyMembership}
                    </Link>
                </div>
            </div>
        </div>
    );
}
