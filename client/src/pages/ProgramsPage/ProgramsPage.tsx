import ProgramsPageMainSection from "@/pages/ProgramsPage/components/ProgramsPageMainSection.tsx";
import ProgramsPageSection from "@/pages/ProgramsPage/components/ProgramsPageSection.tsx";
import ProgramsPageSpaSection from "@/pages/ProgramsPage/components/ProgramsPageSpaSection.tsx";
import gymImage from "@/assets/programsPage/gym.webp";
import trainerImage from "@/assets/programsPage/trainer.jpg";
import spaImage from "@/assets/programsPage/spa.jpeg";

export default function ProgramsPage() {
    return (
        <div className="bg-default">
            <ProgramsPageMainSection />
            <ProgramsPageSection
                image={gymImage}
                title="Тренажерный зал DUCHESS FITNESS"
                content="Тренажерный зал DUCHESS FITNESS - уникальное пространство, которое сочетает все необходимое для достижения ваших целей! Каждый зал DUCHESS оснащен современным, высокопроизводительным кардиооборудованием и непревзойденными тренажерами для силового и функционального тренинга от американского бренда Matrix."
                bgColor="orange"
                alignment="right"
            />
            <ProgramsPageSection
                image={trainerImage}
                title="Персональные тренировки"
                content="Персональные тренировки - это быстрый путь к поставленной цели! Работа с тренером формирует не только личный план тренировок, но и обеспечивает вам индивидуальный подход и безопасность на физическом и эмоциональном уровне."
                bgColor="black"
                alignment="left"
            />
            <ProgramsPageSection
                image={spaImage}
                title="DUCHESS FITNESS SPA"
                content="Насладитесь полной релаксацией в нашем DUCHESS SPA комплексе. Разгрузите себя от стрессов повседневной жизни и расслабьтесь после интенсивной тренировки."
                bgColor="orange"
                alignment="right"
            />
        </div>
    );
}
