import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/RootLayout/Header/Header.tsx";
import Footer from "@/components/RootLayout/Footer/Footer.tsx";
import BottomNavBar from "@/components/RootLayout/BottomNavBar/BottomNavBar.tsx";
import { useEffect } from "react";
import useLanguageDetection from "./hooks/useLanguageDetection";

export default function RootLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="min-h-screen w-full">
                    <Outlet />
                </div>
            </div>
            <BottomNavBar />
            <Footer />
        </>
    );
}
