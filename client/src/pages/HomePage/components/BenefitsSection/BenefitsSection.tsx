import gymImage from "@/assets/homePage/gym.jpg";
import DumbbellSvg from "@/assets/homePage/dumbbell.svg?react";
import GradCapSvg from "@/assets/homePage/grad-cap.svg?react";
import LiftingDumbbellSvg from "@/assets/homePage/lifting-dumbbell.svg?react";
import PearSvg from "@/assets/homePage/pear.svg?react";
import PersonSvg from "@/assets/homePage/person.svg?react";
import RainbowSvg from "@/assets/homePage/rainbow.svg?react";
import useBenefitsSectionTranslation from "./hooks/useBenefitsSectionTranslation";

export default function BenefitsSection() {
    const t = useBenefitsSectionTranslation();
    const benefitItemClass = "flex items-center space-x-3";
    const benefitItemImageClass = "fill-default w-6 h-6";

    const benefitIcons = [
        DumbbellSvg,
        PersonSvg,
        GradCapSvg,
        LiftingDumbbellSvg,
        RainbowSvg,
        PearSvg,
    ];

    return (
        <div className="relative bg-black h-[600px] border-y border-neutral-400">
            <img
                src={gymImage}
                alt={t.placeholders.gymImageAlt}
                className="w-full h-full object-cover absolute inset-0 opacity-60"
            />
            <div className="relative z-10 w-full h-full py-10">
                <div className="container flex justify-center md:justify-end items-center h-full">
                    <div className="h-full bg-neutral-950/90 backdrop-blur-sm py-7 px-7 sm:py-10 sm:px-12 rounded-xl space-y-10 xs:space-y-10 border border-neutral-700 flex flex-col justify-center">
                        <h1 className="text-[40px] xs:text-[45px] sm:text-[55px] font-semibold flex flex-col leading-[1.1] tracking-tight">
                            <span className="text-default">{t.title.part1}</span>{" "}
                            <span>{t.title.part2}</span>
                        </h1>
                        <ul className="text-sm xs:text-base sm:text-xl font-medium space-y-6">
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
