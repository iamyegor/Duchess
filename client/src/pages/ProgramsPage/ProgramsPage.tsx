import gymImage from "@/assets/programsPage/gym.webp";
import programsImage from "@/assets/programsPage/programs.png";
import spaImage from "@/assets/programsPage/spa.jpg";
import trainerImage from "@/assets/programsPage/trainer.jpg";
import SecondaryPageMainSection from "@/components/SecondaryPageMainSection/SecondaryPageMainSection";
import SecondaryPageSection from "@/components/ui/SecondaryPageSection.tsx";
import useProgramsTranslation from "./hooks/useProgramsTranslation";

export default function ProgramsPage() {
    const t = useProgramsTranslation();

    return (
        <div className="bg-default">
            <SecondaryPageMainSection
                img={programsImage}
                title={t.title}
                description={t.description}
            />
            <SecondaryPageSection
                image={gymImage}
                title={t.gymTitle}
                content={t.gymContent}
                bgColor="orange"
                imageAlignment="right"
            />
            <SecondaryPageSection
                image={trainerImage}
                title={t.trainerTitle}
                content={t.trainerContent}
                bgColor="black"
                imageAlignment="left"
            />
            <SecondaryPageSection
                image={spaImage}
                title={t.spaTitle}
                content={t.spaContent}
                bgColor="orange"
                imageAlignment="right"
            />
        </div>
    );
}
