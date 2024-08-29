import HomePageSwiper from "@/pages/HomePage/components/HomePageSwiper.tsx";
import { SwiperSlide } from "swiper/react";
import AboutUsInfoCard from "@/pages/HomePage/components/HomePageAboutUs/components/AboutUsInfoCard.tsx";

const aboutUsContent = [
    {
        title: "НАСТРОЕНИЕ",
        content:
            "В каждом дне - шанс изменить жизнь, сделать шаг в сторону здоровья и счастья. Позитивное настроение - искра, запускающая перемены к лучшему. Ваше настроение - это художник, создающий вашу жизнь. Давайте вместе наполним ее яркими красками!",
    },
    {
        title: "ОБЩЕНИЕ",
        content:
            "DUCHESS - это сила сообщества людей, поддерживающих друг друга, отмечающих успехи каждого. Заводите знакомства, делитесь своими впечатлениями, учитесь у других и растите вместе с нами. Атмосфера в наших стенах - результат крепких связей, дружбы и взаимного уважения.",
    },
    {
        title: "РАССЛАБЛЕНИЕ",
        content:
            "После тяжелой работы лучшее место для расслабления - DUCHESS FITNESS. Здесь вы найдете не только постоянное движение, но и моменты паузы и восстановления. В этих тихих моментах мы находим себя. Дышите, отпустите все и просто живите здесь и сейчас.",
    },
];

export default function HomePageAboutUs() {
    return (
        <section className="bg-black text-white py-10 px-8 xs:px-12 border-b-2 border-neutral-800">
            <div className="container space-y-6">
                <div className="max-w-5xl">
                    <h1 className="text-3xl font-bold">DUCHESS - это...</h1>
                </div>
                <div className="w-full h-[500px] xl:h-[450px]">
                    <HomePageSwiper uniqueValue="about-us">
                        {aboutUsContent.map((item, index) => (
                            <SwiperSlide key={index}>
                                <AboutUsInfoCard title={item.title} content={item.content} />
                            </SwiperSlide>
                        ))}
                    </HomePageSwiper>
                </div>
            </div>
        </section>
    );
}
