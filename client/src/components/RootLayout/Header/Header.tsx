import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderLink from "@/components/RootLayout/Header/HeaderLink.tsx";
import BurgerMenuSvg from "@/assets/common/burger-menu.svg?react";
import BurgerMenuDrawer from "@/components/RootLayout/BurgerMenuDrawer.tsx";

export default function Header() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    return (
        <header className="hidden lg:block fixed top-0 left-0 right-0 py-3 px-4 md:px-8 z-20 bg-black">
            <div className="max-w-[1500px] mx-auto flex justify-between items-center">
                <BurgerMenuDrawer
                    burgerMenuOpen={burgerMenuOpen}
                    setBurgerMenuOpen={setBurgerMenuOpen}
                />
                <h1 className="text-2xl sm:text-3xl font-thin">
                    <Link to="/">DUCHESS FITNESS</Link>
                </h1>
                <div className="hidden lg:flex space-x-14">
                    <HeaderLink to="/subscriptions">Абонементы</HeaderLink>
                    <HeaderLink to="/gyms">Клубы</HeaderLink>
                    <HeaderLink to="/promotions">Акции</HeaderLink>
                </div>
                <div className="flex items-center space-x-4 md:space-x-10">
                    <p className="text-nowrap">+7 (999) 999 99 99</p>
                    <BurgerMenuSvg
                        fill="white"
                        className="w-5 h-5 hover:cursor-pointer"
                        onClick={() => setBurgerMenuOpen(true)}
                    />
                </div>
            </div>
        </header>
    );
}
