import RootLayout from "@/components/RootLayout/RootLayout.tsx";
import HomePage from "@/pages/HomePage/HomePage.tsx";
import PromotionsPage from "@/pages/PromotionsPage/PromotionsPage";
export const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/promotions",
                element: <PromotionsPage />,
            },
        ],
    },
];
