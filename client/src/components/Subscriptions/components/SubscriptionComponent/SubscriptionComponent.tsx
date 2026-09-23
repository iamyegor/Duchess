import React from "react";
import { Link } from "react-router-dom";
import Subscription from "@/components/Subscriptions/types/Subscription.ts";
import CheckSvg from "@/assets/common/check.svg?react";
import TrophySvg from "@/assets/homePage/trophy.svg?react";
import SmallCrossSvg from "@/assets/common/small-cross-2.svg?react";
import useSubscriptionTranslation from "./hooks/useSubscriptionTranslation";

export type SubscriptionComponentType = {
    isBest?: boolean;
    subscription: Subscription;
    paymentType: string;
    benefits: string[];
    className?: string;
    notAllowed?: string[];
};

export default function SubscriptionComponent({
    isBest = false,
    subscription,
    paymentType,
    benefits,
    className = "",
    notAllowed,
}: SubscriptionComponentType) {
    const t = useSubscriptionTranslation();

    const isMonthlyPayment = paymentType === "Monthly Payment";

    return (
        <div
            className={`du-panel relative flex h-full max-w-full flex-1 flex-col justify-between rounded-sm p-8 ${className}`}
        >
            {isBest && (
                <div className="absolute -top-5 left-5 flex items-center gap-3 rounded-sm border border-ink bg-acid p-3 py-2 text-sm font-extrabold uppercase text-ink sm:left-auto sm:right-5">
                    <TrophySvg className="h-5 w-5 flex-shrink-0 fill-ink" />
                    <p>{t.bestOffer}</p>
                </div>
            )}
            <div className="space-y-4 mb-12 mt-2">
                <h3 className="du-display text-5xl text-paper">{subscription.title}</h3>
                <ul className={`text-sm xs:text-base space-y-4 ${className}`}>
                    {benefits.map((benefit, index) => (
                        <li key={index} className="ml-1 flex items-center gap-3 text-paper/78">
                            <CheckSvg className="mt-1 h-5 w-5 flex-shrink-0 fill-acid" />
                            <p>{benefit}</p>
                        </li>
                    ))}
                    {notAllowed &&
                        notAllowed.map((notAllowedItem, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-paper/32"
                            >
                                <SmallCrossSvg className="h-7 w-7 flex-shrink-0 fill-paper/32" />
                                <p>{notAllowedItem}</p>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="space-y-8">
                <h3 className="flex flex-col space-y-2 text-center text-xl font-bold">
                    {subscription.priceWithoutDiscount && (
                        <span className="text-sm text-paper/40 line-through">
                            £{subscription.priceWithoutDiscount}{" "}
                            {isMonthlyPayment ? t.perMonth : t.perYear}
                        </span>
                    )}
                    <span className="du-display text-5xl text-default">
                        {subscription.currentPrice
                            ? `£${subscription.currentPrice} ${isMonthlyPayment ? t.perMonth : t.perYear}`
                            : t.free}
                    </span>
                </h3>
                <div>
                    <Link
                        to={`/gyms?subscription=${subscription.title}&paymentType=${paymentType}`}
                        className="du-button block p-3 text-center text-sm"
                    >
                        {t.tryIt}
                    </Link>
                </div>
            </div>
        </div>
    );
}
