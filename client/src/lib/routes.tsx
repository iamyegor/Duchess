import RootLayout from "@/components/RootLayout/RootLayout.tsx";
import HomePage from "@/pages/HomePage/HomePage.tsx";
import PromotionsPage from "@/pages/PromotionsPage/PromotionsPage";
import SubscriptionsPage from "@/pages/SubscriptionsPage/SubscriptionsPage.tsx";
import SubscriptionFormPage from "@/pages/SubscriptionFormPage/SubscriptionFormPage.tsx";
import ProgramsPage from "@/pages/ProgramsPage/ProgramsPage.tsx";
import BeginnersPage from "@/pages/BeginnersPage/BeginnersPage.tsx";
import FaqPage from "@/pages/FaqPage/FaqPage.tsx";
import GymsPage from "@/pages/GymsPage/GymsPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage.tsx";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const routes = [
    {
        path: "/",
        element: (
            <LanguageProvider>
                <RootLayout />
            </LanguageProvider>
        ),
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "promotions",
                element: <PromotionsPage />,
            },
            {
                path: "subscriptions",
                element: <SubscriptionsPage />,
            },
            {
                path: "subscription-form",
                element: <SubscriptionFormPage />,
            },
            {
                path: "programs",
                element: <ProgramsPage />,
            },
            {
                path: "beginners",
                element: <BeginnersPage />,
            },
            {
                path: "faq",
                element: <FaqPage />,
            },
            {
                path: "gyms",
                element: <GymsPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
];
