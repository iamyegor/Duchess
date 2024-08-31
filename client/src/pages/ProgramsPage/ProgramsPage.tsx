import SecondaryPageSection from "@/components/ui/SecondaryPageSection.tsx";
import gymImage from "@/assets/programsPage/gym.webp";
import trainerImage from "@/assets/programsPage/trainer.jpg";
import spaImage from "@/assets/programsPage/spa.jpg";
import SecondaryPageMainSection from "@/components/ui/SecondaryPageMainSection.tsx";
import programsImage from "@/assets/programsPage/programs.png";

export default function ProgramsPage() {
    return (
        <div className="bg-default">
            <SecondaryPageMainSection
                img={programsImage}
                title="Жизнь в ритме DUCHESS FITNESS"
            />
            <SecondaryPageSection
                image={gymImage}
                title="Тренажерный зал DUCHESS FITNESS"
                content="Тренажерный зал DUCHESS FITNESS - уникальное пространство, которое сочетает все необходимое для достижения ваших целей! Каждый зал DUCHESS оснащен современным, высокопроизводительным кардиооборудованием и непревзойденными тренажерами для силового и функционального тренинга от американского бренда Matrix."
                bgColor="orange"
                imageAlignment="right"
            />
            <SecondaryPageSection
                image={trainerImage}
                title="Персональные тренировки"
                content="Персональные тренировки - это быстрый путь к поставленной цели! Работа с тренером формирует не только личный план тренировок, но и обеспечивает вам индивидуальный подход и безопасность на физическом и эмоциональном уровне."
                bgColor="black"
                imageAlignment="left"
            />
            <SecondaryPageSection
                image={spaImage}
                title="DUCHESS FITNESS SPA"
                content="Насладитесь полной релаксацией в нашем DUCHESS SPA комплексе. Разгрузите себя от стрессов повседневной жизни и расслабьтесь после интенсивной тренировки."
                bgColor="orange"
                imageAlignment="right"
            />
        </div>
    );
}
