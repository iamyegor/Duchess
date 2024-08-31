import { Navigation } from "swiper/modules";
import React, { useState } from "react";
import { Swiper } from "swiper/react";
import SubscriptionSliderArrow from "@/components/Subscriptions/components/SubscriptionSliderArrow.tsx";

interface CustomSwiperProps {
    uniqueValue: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function ContentSwiper({ uniqueValue, children, style }: CustomSwiperProps) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className="w-full relative h-full">
            <Swiper
                className="w-full h-full"
                style={style}
                spaceBetween={40}
                slidesPerView={1}
                navigation={{
                    nextEl: `.swiper-next-${uniqueValue}`,
                    prevEl: `.swiper-prev-${uniqueValue}`,
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
                {children}
            </Swiper>
            <SubscriptionSliderArrow
                uniqueValue={uniqueValue}
                direction="left"
                isShown={!isBeginning}
            />
            <SubscriptionSliderArrow uniqueValue={uniqueValue} direction="right" isShown={!isEnd} />
        </div>
    );
}
