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
        <div className="w-full h-full p-10 py-8 space-y-10">
            <div className="flex items-center w-full justify-between text-sm xs:text-base">
                <ContactPhoneNumber />
                <button className="flex items-center space-x-1 group" onClick={onClose}>
                    <CloseSvg className="fill-default group-hover:fill-default-light w-7 h-7 mt-[1px]" />
                    <p className="group-hover:text-neutral-300">{t.close}</p>
                </button>
            </div>
            <div className="flex flex-col space-y-7">
                {links.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        onClick={onClose}
                        className="text-white hover:text-neutral-300"
                    >
                        {t[link.textKey as keyof typeof t]}
                    </Link>
                ))}
            </div>
        </div>
    );
}
