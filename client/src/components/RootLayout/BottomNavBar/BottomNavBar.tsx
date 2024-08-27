import LocationSvg from "@/assets/common/location.svg?react";
import PhoneSvg from "@/assets/bottomNavBar/ringing-phone.svg?react";
import BurgerMenuSvg from "@/assets/common/burger-menu.svg?react";
import React, { useState } from "react";
import BurgerMenuDrawer from "@/components/RootLayout/BurgerMenuDrawer.tsx";

export default function BottomNavBar() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const svgClassName = "fill-white w-5 xs:w-6 h-5 xs:h-6";

    return (
        <nav className="flex lg:hidden fixed bottom-0 left-0 right-0 border-t border-t-neutral-500 bg-black justify-evenly items-center p-3 z-20">
            <BurgerMenuDrawer
                burgerMenuOpen={burgerMenuOpen}
                setBurgerMenuOpen={setBurgerMenuOpen}
            />
            <BottomNavBarItem svg={<LocationSvg className={svgClassName} />} text="Выбрать клуб" />
            <BottomNavBarItem svg={<PhoneSvg className={svgClassName} />} text="Позвонить" />
            <BottomNavBarItem
                svg={<BurgerMenuSvg className={svgClassName} />}
                text="Меню"
                onClick={() => setBurgerMenuOpen(true)}
            />
        </nav>
    );
}

interface BottomNavBarItemProps {
    svg: React.ReactNode;
    text: string;
    onClick?: () => void;
}

function BottomNavBarItem({ svg, text, onClick }: BottomNavBarItemProps) {
    return (
        <button
            className="flex flex-col items-center justify-center space-y-2 w-[95px]"
            onClick={onClick}
        >
            {svg}
            <p className="text-xs xs:text-sm">{text}</p>
        </button>
    );
}
