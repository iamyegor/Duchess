import { Link } from "react-router-dom";
import CloseSvg from "@/assets/common/small-cross.svg?react";
import ContactPhoneNumber from "@/components/RootLayout/Header/ContactPhoneNumber.tsx";
import useBurgerMenuTranslation from "./hooks/useBurgerMenuTranslation";

interface BurgerMenuProps {
    onClose: () => void;
}

const links = [
    { to: "/gyms", textKey: "chooseClub" },
    { to: "/subscriptions", textKey: "subscriptions" },
    { to: "/programs", textKey: "programsAndDirections" },
    { to: "/beginners", textKey: "forNewClients" },
    { to: "/promotions", textKey: "promotions" },
    { to: "/faq", textKey: "faq" },
];

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
    const t = useBurgerMenuTranslation();

    return (
        <div className="h-full w-full space-y-12 bg-[#090907] p-8 py-8">
            <div className="flex items-center w-full justify-between text-sm xs:text-base">
                <ContactPhoneNumber />
                <button
                    className="group flex items-center gap-2 rounded-sm border border-paper/15 px-3 py-2"
                    onClick={onClose}
                >
                    <CloseSvg className="mt-[1px] h-6 w-6 fill-default group-hover:fill-default-light" />
                    <p className="font-bold uppercase text-paper/80 group-hover:text-paper">{t.close}</p>
                </button>
            </div>
            <div className="flex flex-col divide-y divide-paper/10 border-y border-paper/10">
                {links.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        onClick={onClose}
                        className="du-display py-5 text-5xl text-paper hover:pl-3 hover:text-default"
                    >
                        {t[link.textKey as keyof typeof t]}
                    </Link>
                ))}
            </div>
        </div>
    );
}
