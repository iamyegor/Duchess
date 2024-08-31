import LocationSvg from "@/assets/common/location.svg?react";
import PhoneSvg from "@/assets/bottomNavBar/ringing-phone.svg?react";
import BurgerMenuSvg from "@/assets/common/burger-menu.svg?react";
import React, { useState } from "react";
import BurgerMenuDrawer from "@/components/RootLayout/BurgerMenuDrawer.tsx";
import { Link } from "react-router-dom";

export default function BottomNavBar() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const svgClassName = "fill-white group-hover:fill-neutral-300 w-5 xs:w-6 h-5 xs:h-6";

    const itemClassName =
        "flex flex-col items-center justify-center space-y-2 w-[95px] group hover:text-neutral-300";

    return (
        <nav className="flex lg:hidden fixed bottom-0 left-0 right-0 border-t border-t-neutral-500 bg-black justify-evenly items-center p-3 z-20">
            <BurgerMenuDrawer
                burgerMenuOpen={burgerMenuOpen}
                setBurgerMenuOpen={setBurgerMenuOpen}
            />
            <Link to="/gyms" className={itemClassName}>
                <LocationSvg className={svgClassName} />
                <p className="text-xs xs:text-sm">Выбрать клуб</p>
            </Link>
            <a href={`tel:+79999999999`} className={itemClassName}>
                <PhoneSvg className={svgClassName} />
                <p>Позвонить</p>
            </a>
            <button className={itemClassName} onClick={() => setBurgerMenuOpen(true)}>
                <BurgerMenuSvg className={svgClassName} />
                <p className="text-xs xs:text-sm">Меню</p>
            </button>
        </nav>
    );
}
