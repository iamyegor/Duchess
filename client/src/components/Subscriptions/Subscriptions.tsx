import { useState } from "react";
import PaymentType from "@/pages/HomePage/types/PaymentType.ts";
import PaymentTypeSwitcher from "@/components/Subscriptions/components/PaymentTypeSwitcher.tsx";
import SubscriptionComponent from "@/components/Subscriptions/components/SubscriptionComponent.tsx";
import useSubscriptions from "@/components/Subscriptions/hooks/useSubscriptions.ts";
import { SwiperSlide } from "swiper/react";
import ContentSwiper from "@/pages/HomePage/components/ContentSwiper.tsx";

export default function Subscriptions() {
    const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>("ежемесячно");
    const { subscriptions } = useSubscriptions({ selectedPaymentType });

    return (
        <div className="container flex flex-col items-start justify-start pb-10 space-y-8">
            <h1 className="font-medium w-full text-center sm:text-left text-4xl xs:text-5xl">АБОНЕМЕНТЫ</h1>
            <nav className="w-full max-w-full lg:max-w-[600px] flex flex-col sm:flex-row rounded-xl bg-black border border-neutral-500 text-white p-2 space-y-2 sm:space-y-0 space-x-0 sm:space-x-2">
                <PaymentTypeSwitcher
                    selectedType={selectedPaymentType}
                    setSelectedPaymentType={setSelectedPaymentType}
                    paymentType="ежемесячно"
                />
                <PaymentTypeSwitcher
                    selectedType={selectedPaymentType}
                    setSelectedPaymentType={setSelectedPaymentType}
                    paymentType="ежегодно"
                />
            </nav>
            <ContentSwiper uniqueValue="subscriptions" style={{ paddingTop: "24px" }}>
                <SwiperSlide>
                    <SubscriptionComponent
                        subscription={{ title: "Тест-драйв", currentPrice: 0 }}
                        paymentType={selectedPaymentType}
                        benefits={[
                            "Тренажерный зал",
                            "Фнализ состава тела InBody",
                            "Бесплатные тренировки с тренером",
                            "Мобильное приложение",
                            "Групповые занятия",
                            "СПА зона",
                            "Безлимитный доступ во все клубы сети",
                            "Доступ для друзей",
                            "Семейный доступ",
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SubscriptionComponent
                        isBest
                        subscription={subscriptions.smartSubscription}
                        paymentType={selectedPaymentType}
                        benefits={[
                            "Тренажерный зал",
                            "Фнализ состава тела InBody",
                            "Бесплатные тренировки с тренером",
                            "Мобильное приложение",
                            "Групповые занятия",
                            "СПА зона",
                            "Безлимитный доступ во все клубы сети",
                            "Доступ для друзей",
                            "Семейный доступ",
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SubscriptionComponent
                        subscription={subscriptions.basicSubscription}
                        paymentType={selectedPaymentType}
                        benefits={[
                            "Тренажерный зал",
                            "Фнализ состава тела InBody",
                            "Бесплатные тренировки с тренером",
                            "Мобильное приложение",
                            "Групповые занятия",
                        ]}
                        notAllowed={[
                            "СПА зона",
                            "Безлимитный доступ во все клубы сети",
                            "Доступ для друзей",
                            "Семейный доступ",
                        ]}
                    />
                </SwiperSlide>
            </ContentSwiper>
        </div>
    );
}
