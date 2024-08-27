import { Drawer } from "@mui/material";
import BurgerMenu from "@/components/RootLayout/Header/BurgerMenu.tsx";

interface BurgerMenuDrawerProps {
    burgerMenuOpen: boolean;
    setBurgerMenuOpen: (open: boolean) => void;
}

export default function BurgerMenuDrawer({
    burgerMenuOpen,
    setBurgerMenuOpen,
}: BurgerMenuDrawerProps) {
    return (
        <Drawer
            open={burgerMenuOpen}
            onClose={() => setBurgerMenuOpen(false)}
            anchor="right"
            sx={{
                "& .MuiDrawer-paper": {
                    backgroundColor: "black",
                    color: "#ffffff",
                },
            }}
            PaperProps={{
                className: "w-full lg:w-[450px]",
            }}
        >
            <BurgerMenu onClose={() => setBurgerMenuOpen(false)} />
        </Drawer>
    );
}
