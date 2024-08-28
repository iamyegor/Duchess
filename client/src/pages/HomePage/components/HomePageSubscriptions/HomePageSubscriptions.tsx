import { useState } from "react";
import PaymentType from "@/pages/HomePage/types/PaymentType.ts";
import PaymentTypeSwitcher from "@/pages/HomePage/components/HomePageSubscriptions/components/PaymentTypeSwitcher.tsx";
import SubscriptionComponent from "@/pages/HomePage/components/HomePageSubscriptions/components/SubscriptionComponent.tsx";
import useSubscriptions from "@/pages/HomePage/components/HomePageSubscriptions/hooks/useSubscriptions.ts";
import { SwiperSlide } from "swiper/react";
import HomePageSwiper from "@/pages/HomePage/components/HomePageSwiper.tsx";

export default function HomePageSubscriptions() {
    const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>("ежемесячно");
    const { subscriptions } = useSubscriptions({ selectedPaymentType });

    return (
        <div className="w-full flex flex-col items-start justify-start py-8 px-8 sm:py-12 sm:px-16 space-y-8">
            <h1 className="font-medium text-4xl">АБОНЕМЕНТЫ</h1>
            <nav className="w-full max-w-full lg:max-w-[600px] flex flex-col sm:flex-row rounded-xl bg-black border border-neutral-400 text-white p-2 space-y-2 sm:space-y-0 space-x-0 sm:space-x-2">
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
            <HomePageSwiper uniqueValue="subscriptions" style={{ paddingTop: "24px" }}>
                <SwiperSlide>
                    <SubscriptionComponent
                        subscriptionComponent={{ title: "Тест-драйв", currentPrice: 0 }}
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
                        subscriptionComponent={subscriptions.smartSubscription}
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
                        subscriptionComponent={subscriptions.basicSubscription}
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
            </HomePageSwiper>
        </div>
    );
}
