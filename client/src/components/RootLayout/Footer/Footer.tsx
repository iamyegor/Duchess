import FooterSectionComponent from "@/components/RootLayout/Footer/FooterSectionComponent.tsx";
import FooterSection from "@/components/RootLayout/Footer/types/FooterSection.tsx";
import useFooterTranslation from "./hooks/useFooterTranslation";

export default function Footer() {
    const t = useFooterTranslation();

    const sections: FooterSection[] = [
        {
            name: t.sectionNames.workouts,
            links: [
                { name: t.subSectionNames.trainers, href: "/" },
                { name: t.subSectionNames.gym, href: "/" },
                { name: t.subSectionNames.groupWorkouts, href: "/" },
                { name: t.subSectionNames.onlineWorkouts, href: "/" },
                { name: t.subSectionNames.outdoorGroupWorkouts, href: "/" },
                { name: t.subSectionNames.functionalTraining, href: "/" },
                { name: t.subSectionNames.strengthTraining, href: "/" },
                { name: t.subSectionNames.fitnessTesting, href: "/" },
                { name: t.subSectionNames.studentWorkouts, href: "/" },
                { name: t.subSectionNames.schedule, href: "/" },
            ],
        },
        {
            name: t.sectionNames.services,
            links: [
                { name: t.subSectionNames.saunasAndHammam, href: "/" },
                { name: t.subSectionNames.affordableMemberships, href: "/" },
                { name: t.subSectionNames.singleVisit, href: "/" },
                { name: t.subSectionNames.fitnessForTeenagers, href: "/" },
            ],
        },
        {
            name: t.sectionNames.clubMembers,
            links: [
                { name: t.subSectionNames.memberships, href: "/" },
                { name: t.subSectionNames.partnersAndPrivileges, href: "/" },
                { name: t.subSectionNames.faq, href: "/" },
            ],
        },
        {
            name: t.sectionNames.forTrainees,
            links: [
                { name: t.subSectionNames.promotions, href: "/" },
                { name: t.subSectionNames.duchessTV, href: "/" },
                { name: t.subSectionNames.events, href: "/" },
                { name: t.subSectionNames.faq, href: "/" },
            ],
        },
    ];

    return (
        <footer className="pt-10 pb-28 lg:pb-5 bg-black border-t-2 border-neutral-800">
            <div className="container flex flex-col items-center gap-y-8 lg:gap-y-0">
                <div className="flex w-full flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <FooterSectionComponent section={section} />
                            {index !== sections.length - 1 && (
                                <hr className="block border-neutral-600 lg:hidden" />
                            )}
                        </div>
                    ))}
                </div>
                <p>
                    <span>{t.developedBy}</span>{" "}
                    <a
                        className="font-sofa text-neutral-400 hover:text-neutral-100 transition"
                        href={t.developer.link}
                    >
                        {t.developer.name}
                    </a>
                </p>
            </div>
        </footer>
    );
}
