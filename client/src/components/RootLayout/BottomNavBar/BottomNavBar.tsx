import PhoneSvg from "@/assets/bottomNavBar/ringing-phone.svg?react";
import BurgerMenuSvg from "@/assets/common/burger-menu.svg?react";
import LocationSvg from "@/assets/common/location.svg?react";
import BurgerMenuDrawer from "@/components/RootLayout/BurgerMenuDrawer.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import useBottomNavTranslation from "./hooks/useBottomNavTranslation";

export default function BottomNavBar() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const t = useBottomNavTranslation();
    const svgClassName = "fill-paper group-hover:fill-default w-5 xs:w-6 h-5 xs:h-6";

    const itemClassName =
        "flex flex-col items-center justify-center space-y-1.5 w-[95px] group hover:text-default text-[11px] xs:text-xs font-bold uppercase tracking-[0.08em]";

    return (
        <nav className="fixed bottom-3 left-3 right-3 z-20 flex items-center justify-evenly rounded-sm border border-paper/15 bg-ink/90 p-3 text-paper shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl lg:hidden">
            <BurgerMenuDrawer
                burgerMenuOpen={burgerMenuOpen}
                setBurgerMenuOpen={setBurgerMenuOpen}
            />
            <Link to="/gyms" className={itemClassName}>
                <LocationSvg className={svgClassName} />
                <p>{t.selectGym}</p>
            </Link>
            <a href={`tel:+442079460958`} className={itemClassName}>
                <PhoneSvg className={svgClassName} />
                <p>{t.call}</p>
            </a>
            <button className={itemClassName} onClick={() => setBurgerMenuOpen(true)}>
                <BurgerMenuSvg className={svgClassName} />
                <p>{t.menu}</p>
            </button>
        </nav>
    );
}
