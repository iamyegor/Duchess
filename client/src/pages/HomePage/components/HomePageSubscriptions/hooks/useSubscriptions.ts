import { useEffect, useState } from "react";
import PaymentType from "@/pages/HomePage/types/PaymentType.ts";
import Subscriptions from "@/pages/HomePage/components/HomePageSubscriptions/types/Subscriptions.ts";

const monthlySubscriptions = {
    basicSubscription: {
        title: "Базовая подписка",
        currentPrice: 1990,
    },
    smartSubscription: {
        title: "Грамотная подписка",
        currentPrice: 2490,
    },
};

export default function useSubscriptions({
    selectedPaymentType,
}: {
    selectedPaymentType: PaymentType;
}) {
    const [subscriptions, setSubscriptions] = useState<Subscriptions>(monthlySubscriptions);

    useEffect(() => {
        if (selectedPaymentType === "ежемесячно") {
            setSubscriptions(monthlySubscriptions);
        } else {
            setSubscriptions({
                basicSubscription: {
                    title: "Базовая подписка",
                    currentPrice: 19900,
                    priceWithoutDiscount: 23880,
                },
                smartSubscription: {
                    title: "Грамотная подписка",
                    currentPrice: 22990,
                    priceWithoutDiscount: 29880,
                },
            });
        }
    }, [selectedPaymentType]);

    return { subscriptions };
}
