import ContentSwiper from "@/pages/HomePage/components/ContentSwiper.tsx";
import AboutUsInfoCard from "@/pages/HomePage/components/HomePageAboutUs/components/AboutUsInfoCard/AboutUsInfoCard";
import { SwiperSlide } from "swiper/react";
import useHomePageAboutUsTranslation from "./hooks/useHomePageAboutUsTranslation";

export default function HomePageAboutUs() {
    const { title, aboutUsContent } = useHomePageAboutUsTranslation();

    return (
        <section className="du-section bg-[#050505] text-paper">
            <div className="container space-y-6">
                <div className="max-w-5xl">
                    <span className="du-kicker">inside duchess</span>
                    <h1 className="du-display text-6xl sm:text-8xl">{title}</h1>
                </div>
                <div className="w-full">
                    <ContentSwiper uniqueValue="about-us">
                        {aboutUsContent.map((item, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <AboutUsInfoCard title={item.title} content={item.content} />
                            </SwiperSlide>
                        ))}
                    </ContentSwiper>
                </div>
            </div>
        </section>
    );
}
