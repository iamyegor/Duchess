import FooterSectionComponent from "@/components/RootLayout/Footer/FooterSectionComponent.tsx";
import FooterSection from "@/components/RootLayout/Footer/types/FooterSection.tsx";
import useFooterTranslation from "./hooks/useFooterTranslation";

export default function Footer() {
    const t = useFooterTranslation();

    const sections: FooterSection[] = [
        {
            name: t.sectionNames.workouts,
            links: [
                { name: t.subSectionNames.programs, href: "/programs" },
                { name: t.subSectionNames.gym, href: "/gyms" },
            ],
        },
        {
            name: t.sectionNames.services,
            links: [
                { name: t.subSectionNames.memberships, href: "/subscriptions" },
            ],
        },
        {
            name: t.sectionNames.clubMembers,
            links: [
                { name: t.subSectionNames.faq, href: "/faq" },
            ],
        },
        {
            name: t.sectionNames.forTrainees,
            links: [
                { name: t.subSectionNames.beginners, href: "/beginners" },
                { name: t.subSectionNames.promotions, href: "/promotions" },
            ],
        },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-paper/10 bg-[#080806] pb-32 pt-14 lg:pb-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-default to-transparent" />
            <div className="container flex flex-col items-center gap-y-8 lg:gap-y-0">
                <div className="flex w-full flex-col gap-10 lg:grid lg:grid-cols-4">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <FooterSectionComponent section={section} />
                            {index !== sections.length - 1 && (
                                <hr className="mt-8 block border-paper/10 lg:hidden" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
