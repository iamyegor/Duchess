import { Outlet } from "react-router-dom";
import Header from "@/components/RootLayout/Header/Header.tsx";
import Footer from "@/components/RootLayout/Footer/Footer.tsx";
import BottomNavBar from "@/components/RootLayout/BottomNavBar/BottomNavBar.tsx";

export default function RootLayout() {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="min-h-screen max-w-[2000px] w-full">
                    <Outlet />
                </div>
            </div>
            <BottomNavBar />
            <Footer />
        </>
    );
}
