import SecondaryPageMainSection from "@/components/ui/SecondaryPageMainSection.tsx";
import SecondaryPageSection from "@/components/ui/SecondaryPageSection.tsx";
import gymImage from "@/assets/beginnersPage/gym.webp";
import newbiesImage from "@/assets/beginnersPage/newbies.webp";
import newbies2Image from "@/assets/beginnersPage/newbies2.jpg";
import BenefitsSection from "@/pages/HomePage/components/BenefitsSection.tsx";

export default function BeginnersPage() {
    return (
        <div>
            <SecondaryPageMainSection
                img={gymImage}
                title="DUCHESS FITNESS НОВОЕ МЕСТО ПРИТЯЖЕНИЯ"
            />
            <SecondaryPageSection
                image={newbiesImage}
                title="Если начинать, то с DUCHESS FITNESS"
                content="Каждый человек пришел когда-то в зал впервые. Он также, как и ты, испытывал страх перед тренажерным залом, переживал за косые взгляды со стороны. DUCHESS FITNESS - место поддержки и твоей мотивации. Наша команда будет сопровождать тебя на всем пути. Будь уверен в этом! Ниже ты найдешь информацию о том, что тебе будет доступно в DUCHESS FITNESS."
                bgColor="orange"
                imageAlignment="right"
            />
            <BenefitsSection />
            <SecondaryPageSection
                image={newbies2Image}
                title="Программа DUCHESS INTRO для начинающих"
                content="Чтобы ваш старт был легким, а тренировки приносили удовольствие и результат, мы создали для вас программу DUCHESS INTRO! Это ваш стартовый бесплатный набор для безопасных и комфортных тренировок в тренажерном зале, который поможет начать путь новичкам или быстрее достичь поставленных целей тем, кто уже занимается. Записаться на тренировки DUCHESS INTRO можно на ресепшене клуба или в мобильном приложении."
                bgColor="orange"
                imageAlignment="right"
            />
        </div>
    );
}
