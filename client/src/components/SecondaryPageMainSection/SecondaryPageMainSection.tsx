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
        <div className="relative flex h-[680px] flex-col items-center overflow-hidden pt-2">
            <DuchessLogo />
            <div className="absolute inset-0">
                <img src={img} alt={t.altText} className="h-full w-full object-cover opacity-72" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.95),rgba(5,5,5,0.62),rgba(5,5,5,0.25))]" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050505] to-transparent" />
            <div className="container z-10 flex h-full items-center p-4">
                <div className="du-animate-rise flex flex-col justify-start lg:max-w-[760px]">
                    <span className="du-kicker">duchess program</span>
                    <h1 className="du-display mb-6 text-[64px] text-paper xs:text-[76px] sm:text-[118px]">
                        {title}
                    </h1>
                    <p className="mb-12 max-w-xl border-l border-paper/20 pl-5 leading-7 text-paper/72">
                        {description}
                    </p>
                    <Link
                        to="/gyms"
                        className="du-button w-full text-center text-sm tracking-[0.14em] sm:w-[320px]"
                    >
                        {t.buyMembership}
                    </Link>
                </div>
            </div>
        </div>
    );
}
