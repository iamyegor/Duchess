import { Link } from "react-router-dom";
import CloseSvg from "@/assets/common/small-cross.svg?react";
import ContactPhoneNumber from "@/components/RootLayout/Header/ContactPhoneNumber.tsx";

interface BurgerMenuProps {
    onClose: () => void;
}

const links = [
    { to: "/gyms", text: "Выбрать клуб" },
    { to: "/subscriptions", text: "Абонементы" },
    { to: "/programs", text: "Направления и программы" },
    { to: "/beginners", text: "Для новых клиентов" },
    { to: "/promotions", text: "Акции" },
    { to: "/faq", text: "Частые вопросы" },
];

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
    return (
        <div className="w-full h-full p-10 py-8 space-y-10">
            <div className="flex items-center w-full justify-between text-sm xs:text-base">
                <ContactPhoneNumber />
                <button className="flex items-center space-x-1 group" onClick={onClose}>
                    <CloseSvg className="fill-default group-hover:fill-default-light w-7 h-7 mt-[1px]" />
                    <p className="group-hover:text-neutral-300">Закрыть</p>
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
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
}
