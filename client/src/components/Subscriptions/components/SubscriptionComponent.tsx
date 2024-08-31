import Subscription from "@/components/Subscriptions/types/Subscription.ts";
import PaymentType from "@/pages/HomePage/types/PaymentType.ts";
import CheckSvg from "@/assets/common/check.svg?react";
import TrophySvg from "@/assets/homePage/trophy.svg?react";
import SmallCrossSvg from "@/assets/common/small-cross-2.svg?react";
import { Link } from "react-router-dom";

export type SubscriptionComponentType = {
    isBest?: boolean;
    subscription: Subscription;
    paymentType: PaymentType;
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
    return (
        <div
            className={`flex-1 rounded-xl bg-black p-8 h-full max-w-full flex flex-col justify-between ${className} relative`}
        >
            {isBest && (
                <div className="bg-default text-sm text-black rounded-lg p-3 py-2 flex items-center space-x-3 absolute -top-5 left-5 sm:left-auto right-5 border-2 border-black">
                    <TrophySvg className="fill-black w-5 h-5 flex-shrink-0" />
                    <p>Лучшее предложение</p>
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
                                className="text-neutral-400 flex items-center space-x-3"
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
                            {paymentType == "ежемесячно" ? "в месяц" : "в год"}
                        </span>
                    )}
                    <span>
                        {subscription.currentPrice
                            ? `${subscription.currentPrice}₽ ${paymentType == "ежемесячно" ? "в месяц" : "в год"}`
                            : "Бесплатно"}
                    </span>
                </h3>
                <div>
                    <Link
                        to={`/gyms?subscription=${subscription.title}&paymentType=${paymentType}`}
                        className="bg-default hover:bg-default-dark block rounded-lg p-3 transition text-center"
                    >
                        Попробовать
                    </Link>
                </div>
            </div>
        </div>
    );
}
