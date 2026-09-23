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
                    backgroundColor: "#090907",
                    color: "#fff7e8",
                    borderLeft: "1px solid rgba(255, 247, 232, 0.14)",
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
