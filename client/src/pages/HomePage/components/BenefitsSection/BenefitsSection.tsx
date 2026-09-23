import DumbbellSvg from "@/assets/homePage/dumbbell.svg?react";
import GradCapSvg from "@/assets/homePage/grad-cap.svg?react";
import gymImage from "@/assets/homePage/gym.webp";
import LiftingDumbbellSvg from "@/assets/homePage/lifting-dumbbell.svg?react";
import PearSvg from "@/assets/homePage/pear.svg?react";
import PersonSvg from "@/assets/homePage/person.svg?react";
import RainbowSvg from "@/assets/homePage/rainbow.svg?react";
import useBenefitsSectionTranslation from "./hooks/useBenefitsSectionTranslation";

export default function BenefitsSection() {
    const t = useBenefitsSectionTranslation();
    const benefitItemClass = "flex items-center gap-4 border-b border-paper/10 pb-4 last:border-0";
    const benefitItemImageClass = "fill-acid w-6 h-6";

    const benefitIcons = [
        DumbbellSvg,
        PersonSvg,
        GradCapSvg,
        LiftingDumbbellSvg,
        RainbowSvg,
        PearSvg,
    ];

    return (
        <div className="relative min-h-[660px] overflow-hidden border-y border-paper/10 bg-[#080806]">
            <img
                src={gymImage}
                alt={t.placeholders.gymImageAlt}
                className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.75)_42%,rgba(5,5,5,0.25)_100%)]" />
            <div className="relative z-10 w-full py-16 lg:py-24">
                <div className="container flex min-h-[540px] items-center justify-center md:justify-end">
                    <div className="du-panel flex w-full max-w-[560px] flex-col justify-center space-y-10 rounded-sm px-7 py-8 sm:px-12 sm:py-12">
                        <span className="du-kicker">club system</span>
                        <h1 className="du-display flex flex-col text-[62px] text-paper sm:text-[86px]">
                            <span className="text-default">{t.title.part1}</span>{" "}
                            <span>{t.title.part2}</span>
                        </h1>
                        <ul className="space-y-4 text-sm font-semibold text-paper/80 xs:text-base sm:text-lg">
                            {t.benefits.map((benefit, index) => {
                                const Icon = benefitIcons[index];
                                return (
                                    <li key={index} className={benefitItemClass}>
                                        <Icon className={benefitItemImageClass} />
                                        <p>{benefit}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
