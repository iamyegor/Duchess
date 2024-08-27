import { useState } from "react";
import PaymentType from "@/pages/HomePage/types/PaymentType.ts";
import PaymentTypeSwitcher from "@/pages/HomePage/components/HomePageSubscriptions/components/PaymentTypeSwitcher.tsx";
import SubscriptionComponent from "@/pages/HomePage/components/HomePageSubscriptions/components/SubscriptionComponent.tsx";
import useSubscriptions from "@/pages/HomePage/components/HomePageSubscriptions/hooks/useSubscriptions.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SubscriptionSliderArrow from "@/pages/HomePage/components/HomePageSubscriptions/components/SubscriptionSliderArrow.tsx";

export default function HomePageSubscriptions() {
    const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>("ежемесячно");
    const { subscriptions } = useSubscriptions({ selectedPaymentType });
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

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
            <div className="w-full relative">
                <Swiper
                    className="w-full h-full"
                    style={{ paddingTop: "24px" }}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        800: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
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
                </Swiper>
                <SubscriptionSliderArrow direction="left" isShown={!isBeginning} />
                <SubscriptionSliderArrow direction="right" isShown={!isEnd} />
            </div>
        </div>
    );
}
