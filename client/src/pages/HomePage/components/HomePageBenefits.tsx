import gymImage from "@/assets/homePage/gym.jpg";
import DumbbellSvg from "@/assets/homePage/dumbbell.svg?react";
import GradCapSvg from "@/assets/homePage/grad-cap.svg?react";
import LiftingDumbbellSvg from "@/assets/homePage/lifting-dumbbell.svg?react";
import PearSvg from "@/assets/homePage/pear.svg?react";
import PersonSvg from "@/assets/homePage/person.svg?react";
import RainbowSvg from "@/assets/homePage/rainbow.svg?react";

export default function HomePageBenefits() {
    const benefitItemClass = "flex items-center space-x-3";
    const benefitItemImageClass = "fill-white w-6 h-6";

    return (
        <div className="relative bg-black h-[600px] border-y border-white">
            <img
                src={gymImage}
                alt="Gym"
                className="w-full h-full object-cover absolute inset-0 opacity-60"
            />
            <div className="relative z-10 flex w-full h-full justify-center md:justify-end items-center p-10">
                <div className="h-full bg-default p-7 sm:p-10 rounded-xl space-y-6 xs:space-y-10 border border-default-lighter flex flex-col justify-center">
                    <h1 className="text-3xl xs:text-4.5xl sm:text-5xl font-semibold flex flex-col">
                        <span className="text-black">С DUCHESS FITNESS</span>{" "}
                        <span>вы получите</span>
                    </h1>
                    <ul className="text-sm xs:text-base sm:text-xl font-medium space-y-4">
                        <li className={benefitItemClass}>
                            <DumbbellSvg className={benefitItemImageClass} />
                            <p>Уникальные тренировки</p>
                        </li>
                        <li className={benefitItemClass}>
                            <PersonSvg className={benefitItemImageClass} />
                            <p>Индивидуальный подход</p>
                        </li>
                        <li className={benefitItemClass}>
                            <GradCapSvg className={benefitItemImageClass} />
                            <p>Профессиональные тренера</p>
                        </li>
                        <li className={benefitItemClass}>
                            <LiftingDumbbellSvg className={benefitItemImageClass} />
                            <p>Современное оборудование</p>
                        </li>
                        <li className={benefitItemClass}>
                            <RainbowSvg className={benefitItemImageClass} />
                            <p>Приятную атмосферу</p>
                        </li>
                        <li className={benefitItemClass}>
                            <PearSvg className={benefitItemImageClass} />
                            <p>Грамотный дюшес</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
