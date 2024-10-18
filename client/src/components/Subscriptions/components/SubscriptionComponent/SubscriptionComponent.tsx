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

    const isMonthlyPayment =
        paymentType === "Monthly Payment" || paymentType === "Ежемесячная Оплата";

    return (
        <div
            className={`flex-1 rounded-xl bg-neutral-950 border-neutral-700 border p-8 h-full max-w-full flex flex-col justify-between ${className} relative`}
        >
            {isBest && (
                <div className="bg-default text-sm text-black rounded-lg p-3 py-2 flex items-center space-x-3 absolute -top-5 left-5 sm:left-auto right-5 border-2 border-black">
                    <TrophySvg className="fill-black w-5 h-5 flex-shrink-0" />
                    <p>{t.bestOffer}</p>
                </div>
            )}
            <div className="space-y-4 mb-12 mt-2">
                <h3 className="text-2xl font-medium">{subscription.title}</h3>
                <ul className={`text-sm xs:text-base space-y-4 ${className}`}>
                    {benefits.map((benefit, index) => (
                        <li key={index} className="text-white flex items-center space-x-3 ml-1">
                            <CheckSvg className="fill-default w-5 h-5 mt-1 flex-shrink-0" />
                            <p>{benefit}</p>
                        </li>
                    ))}
                    {notAllowed &&
                        notAllowed.map((notAllowedItem, index) => (
                            <li
                                key={index}
                                className="text-neutral-500 flex items-center space-x-3"
                            >
                                <SmallCrossSvg className="fill-neutral-500 w-7 h-7 flex-shrink-0" />
                                <p>{notAllowedItem}</p>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="space-y-8">
                <h3 className="text-center font-medium text-xl space-x-3 flex flex-col space-y-2">
                    {subscription.priceWithoutDiscount && (
                        <span className="line-through text-neutral-400 text-sm ">
                            {subscription.priceWithoutDiscount}₽{" "}
                            {isMonthlyPayment ? t.perMonth : t.perYear}
                        </span>
                    )}
                    <span>
                        {subscription.currentPrice
                            ? `${subscription.currentPrice}₽ ${isMonthlyPayment ? t.perMonth : t.perYear}`
                            : t.free}
                    </span>
                </h3>
                <div>
                    <Link
                        to={`/gyms?subscription=${subscription.title}&paymentType=${paymentType}`}
                        className="bg-default hover:bg-default/90 block rounded-lg p-3 transition text-center"
                    >
                        {t.tryIt}
                    </Link>
                </div>
            </div>
        </div>
    );
}
