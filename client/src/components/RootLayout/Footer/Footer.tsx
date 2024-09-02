import FooterSectionComponent from "@/components/RootLayout/Footer/FooterSectionComponent.tsx";
import FooterSection from "@/components/RootLayout/Footer/types/FooterSection.tsx";
import AboutSection from "@/components/RootLayout/Footer/AboutSection.tsx";

export default function Footer() {
    const sections: FooterSection[] = [
        {
            name: "Тренировки",
            links: [
                { name: "Тренеры", href: "/" },
                { name: "Тренажерный зал", href: "/" },
                { name: "Групповые тренировки", href: "/" },
                { name: "Тренировки онлайн", href: "/" },
                { name: "Групповые тренировки на улице", href: "/" },
                { name: "Функциональные тренировки", href: "/" },
                { name: "Силовые тренировки", href: "/" },
                { name: "Фитнес-тестирование", href: "/" },
                { name: "Тренировки для студентов", href: "/" },
                { name: "Расписание", href: "/" },
            ],
        },
        {
            name: "Услуги",
            links: [
                { name: "Сауны и хаммам", href: "/" },
                { name: "Недорогие абонементы", href: "/" },
                { name: "Разовое посещение", href: "/" },
                { name: "Фитнес для подростков", href: "/" },
            ],
        },
        {
            name: "Членам клуба",
            links: [
                { name: "Абонементы", href: "/" },
                { name: "Партнёры и привилегии", href: "/" },
                { name: "FAQ", href: "/" },
            ],
        },
        {
            name: "Тренирующемся",
            links: [
                { name: "Акции", href: "/" },
                { name: "Duchess TV", href: "/" },
                { name: "Мероприятия", href: "/" },
                { name: "FAQ", href: "/" },
            ],
        },
    ];

    return (
        <footer className="pt-10 pb-28 lg:pb-10 bg-black border-t-2 border-neutral-800">
            <div className="container grid grid-cols-1 xl:grid-cols-5 px-8 gap-y-10 gap-8">
                {sections.map((section, index) => (
                    <>
                        <FooterSectionComponent key={section.name} section={section} />
                        {index != sections.length - 1 && (
                            <hr className="block border-neutral-600 lg:hidden" />
                        )}
                    </>
                ))}

                <AboutSection />
            </div>
        </footer>
    );
}
