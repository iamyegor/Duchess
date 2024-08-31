import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderLink from "@/components/RootLayout/Header/HeaderLink.tsx";
import BurgerMenuSvg from "@/assets/common/burger-menu.svg?react";
import BurgerMenuDrawer from "@/components/RootLayout/BurgerMenuDrawer.tsx";
import logoImage from "@/assets/logo/logo-inverted.png";
import ContactPhoneNumber from "@/components/RootLayout/Header/ContactPhoneNumber.tsx";

export default function Header() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    return (
        <header className="hidden lg:block fixed top-0 left-0 right-0 py-3 px-4 md:px-8 z-20 bg-black">
            <div className="container flex justify-between items-center">
                <BurgerMenuDrawer
                    burgerMenuOpen={burgerMenuOpen}
                    setBurgerMenuOpen={setBurgerMenuOpen}
                />
                <h1 className="text-2xl sm:text-3xl font-medium">
                    <Link to="/" className="flex items-end space-x-4">
                        <img src={logoImage} alt="Duchess Fitness" className="w-20" />
                        <p className="mb-1">DUCHESS</p>
                    </Link>
                </h1>
                <div className="hidden lg:flex space-x-14">
                    <HeaderLink to="/subscriptions">Абонементы</HeaderLink>
                    <HeaderLink to="/gyms">Клубы</HeaderLink>
                    <HeaderLink to="/promotions">Акции</HeaderLink>
                </div>
                <div className="flex items-center space-x-4 md:space-x-10">
                    <ContactPhoneNumber />
                    <BurgerMenuSvg
                        className="w-5 h-5 hover:cursor-pointer fill-white hover:fill-neutral-300"
                        onClick={() => setBurgerMenuOpen(true)}
                    />
                </div>
            </div>
        </header>
    );
}
