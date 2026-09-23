import PaymentTypeSwitcher from "@/components/Subscriptions/components/PaymentTypeSwitcher.tsx";
import SubscriptionComponent from "@/components/Subscriptions/components/SubscriptionComponent/SubscriptionComponent";
import useSubscriptions from "@/components/Subscriptions/hooks/useSubscriptions.ts";
import useSubscriptionsTranslation from "@/components/Subscriptions/hooks/useSubscriptionsTranslation.ts";
import ContentSwiper from "@/pages/HomePage/components/ContentSwiper.tsx";
import { SwiperSlide } from "swiper/react";
import useSelectedPaymentType from "./hooks/useSelectedPaymentType";

export default function Subscriptions() {
    const t = useSubscriptionsTranslation();
    const { selectedPaymentType, setSelectedPaymentType } = useSelectedPaymentType(t.monthly);

    const { subscriptions } = useSubscriptions({ selectedPaymentType });

    const benefits = [
        t.gym,
        t.inBodyAnalysis,
        t.freeTrainerSessions,
        t.mobileApp,
        t.groupClasses,
        t.spaZone,
        t.unlimitedAccess,
        t.guestAccess,
        t.familyAccess,
    ];

    const basicBenefits = benefits.slice(0, 5);
    const notAllowedForBasic = benefits.slice(5);

    return (
        <div className="du-section bg-[#080806]">
            <div className="container flex flex-col items-start justify-start space-y-8 pb-4 pt-4 lg:pt-8">
                <div>
                    <span className="du-kicker">membership menu</span>
                    <h1 className="du-display w-full text-left text-7xl text-paper sm:text-9xl">
                    {t.subscriptions}
                    </h1>
                </div>
                <nav className="du-panel flex w-full max-w-full flex-col space-y-2 rounded-sm p-2 text-paper sm:flex-row sm:space-x-2 sm:space-y-0 lg:max-w-[600px]">
                    <PaymentTypeSwitcher
                        selectedType={selectedPaymentType}
                        setSelectedPaymentType={setSelectedPaymentType}
                        paymentType={t.monthly}
                    />
                    <PaymentTypeSwitcher
                        selectedType={selectedPaymentType}
                        setSelectedPaymentType={setSelectedPaymentType}
                        paymentType={t.yearly}
                    />
                </nav>
                <ContentSwiper uniqueValue="subscriptions" style={{ paddingTop: "24px" }}>
                    <SwiperSlide className="!h-auto">
                        <SubscriptionComponent
                            subscription={{ title: t.testDrive, currentPrice: 0 }}
                            paymentType={selectedPaymentType}
                            benefits={benefits}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="!h-auto">
                        <SubscriptionComponent
                            isBest
                            subscription={subscriptions.smartSubscription}
                            paymentType={selectedPaymentType}
                            benefits={benefits}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="!h-auto">
                        <SubscriptionComponent
                            subscription={subscriptions.basicSubscription}
                            paymentType={selectedPaymentType}
                            benefits={basicBenefits}
                            notAllowed={notAllowedForBasic}
                        />
                    </SwiperSlide>
                </ContentSwiper>
            </div>
        </div>
    );
}
