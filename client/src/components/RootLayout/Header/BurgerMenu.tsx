import { Link } from "react-router-dom";
import CloseSvg from "@/assets/common/small-cross.svg?react";

interface BurgerMenuProps {
    onClose: () => void;
}

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
    return (
        <div className="w-full h-full p-10 py-8 space-y-10">
            <div className="flex items-center w-full justify-between">
                <p className="text-nowrap">+7 (999) 999 99 99</p>
                <button className="flex items-center" onClick={onClose}>
                    <CloseSvg className="fill-default w-7 h-7" />
                    <p>Закрыть</p>
                </button>
            </div>
            <div className="flex flex-col space-y-5">
                <Link to="/gyms">Выбрать клуб</Link>
                <Link to="/subscriptions">Абонементы</Link>
                <Link to="/programs">Направления и программы</Link>
                <Link to="/beginners">Для новых клиентов</Link>
                <Link to="/promotions">Акции</Link>
                <Link to="/faq">Частые вопросы</Link>
            </div>
        </div>
    );
}
