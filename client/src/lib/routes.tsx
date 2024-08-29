import RootLayout from "@/components/RootLayout/RootLayout.tsx";
import HomePage from "@/pages/HomePage/HomePage.tsx";
import PromotionsPage from "@/pages/PromotionsPage/PromotionsPage";
import SubscriptionsPage from "@/pages/SubscriptionsPage/SubscriptionsPage.tsx";
import SubscriptionFormPage from "@/pages/SubscriptionFormPage/SubscriptionFormPage.tsx";

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
            {
                path: "/subscriptions",
                element: <SubscriptionsPage />,
            },
            {
                path: "/subscription-form",
                element: <SubscriptionFormPage />,
            },
        ],
    },
];
