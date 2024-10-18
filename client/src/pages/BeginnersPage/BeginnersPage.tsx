import gymImage from "@/assets/beginnersPage/gym.webp";
import newbiesImage from "@/assets/beginnersPage/newbies.webp";
import newbies2Image from "@/assets/beginnersPage/newbies2.jpg";
import SecondaryPageMainSection from "@/components/SecondaryPageMainSection/SecondaryPageMainSection";
import SecondaryPageSection from "@/components/ui/SecondaryPageSection.tsx";
import BenefitsSection from "@/pages/HomePage/components/BenefitsSection/BenefitsSection";
import useBeginnersTranslation from "./hooks/useBeginnersTranslation";

export default function BeginnersPage() {
    const t = useBeginnersTranslation();

    return (
        <div>
            <SecondaryPageMainSection
                img={gymImage}
                title={t.mainTitle}
                description={t.mainDescription}
            />
            <SecondaryPageSection
                image={newbiesImage}
                title={t.newbiesTitle}
                content={t.newbiesContent}
                bgColor="orange"
                imageAlignment="right"
            />
            <BenefitsSection />
            <SecondaryPageSection
                image={newbies2Image}
                title={t.introTitle}
                content={t.introContent}
                bgColor="orange"
                imageAlignment="right"
            />
        </div>
    );
}
