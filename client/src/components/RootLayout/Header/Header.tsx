import BurgerMenuSvg from "@/assets/common/burger-menu.svg?react";
import logoImage from "@/assets/logo/logo-inverted.webp";
import BurgerMenuDrawer from "@/components/RootLayout/BurgerMenuDrawer.tsx";
import ContactPhoneNumber from "@/components/RootLayout/Header/ContactPhoneNumber.tsx";
import HeaderLink from "@/components/RootLayout/Header/HeaderLink.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import useHeaderTranslation from "./hooks/useHeaderTranslation";

export default function Header() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const t = useHeaderTranslation();

    return (
        <header className="hidden lg:block fixed top-0 left-0 right-0 px-4 py-4 md:px-8 z-50">
            <div className="container flex justify-between items-center">
                <BurgerMenuDrawer
                    burgerMenuOpen={burgerMenuOpen}
                    setBurgerMenuOpen={setBurgerMenuOpen}
                />
                <h1 className="text-2xl sm:text-3xl font-medium">
                    <Link
                        to="/"
                        className="flex items-center gap-3 rounded-sm border border-paper/15 bg-ink/70 px-4 py-2 backdrop-blur-xl hover:border-default/60"
                    >
                        <img src={logoImage} alt="Duchess Fitness" className="w-12" />
                        <p className="du-display text-3xl text-paper">DUCHESS</p>
                    </Link>
                </h1>
                <div className="hidden lg:flex items-center gap-2 rounded-sm border border-paper/10 bg-ink/70 p-2 text-sm font-bold uppercase text-paper/80 backdrop-blur-xl">
                    <HeaderLink to="/subscriptions">{t.subscriptions}</HeaderLink>
                    <HeaderLink to="/gyms">{t.gyms}</HeaderLink>
                    <HeaderLink to="/promotions">{t.promotions}</HeaderLink>
                </div>
                <div className="flex items-center gap-4 rounded-sm border border-paper/10 bg-ink/70 px-4 py-3 backdrop-blur-xl md:gap-8">
                    <ContactPhoneNumber />
                    <BurgerMenuSvg
                        className="w-5 h-5 hover:cursor-pointer fill-paper hover:fill-default"
                        onClick={() => setBurgerMenuOpen(true)}
                    />
                </div>
            </div>
        </header>
    );
}
