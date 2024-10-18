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
        <div className="bg-black">
            <div className="container flex flex-col pt-4 lg:pt-24 items-start justify-start pb-10 space-y-8">
                <h1 className="w-full text-center sm:text-left text-4xl xs:text-5xl font-semibold">
                    {t.subscriptions}
                </h1>
                <nav className="w-full max-w-full lg:max-w-[600px] flex flex-col sm:flex-row rounded-xl bg-neutral-950 border border-neutral-500 text-white p-2 space-y-2 sm:space-y-0 space-x-0 sm:space-x-2">
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
