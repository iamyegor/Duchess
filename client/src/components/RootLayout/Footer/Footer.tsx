import FooterSectionComponent from "@/components/RootLayout/Footer/FooterSectionComponent.tsx";
import FooterSection from "@/components/RootLayout/Footer/types/FooterSection.tsx";

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
            name: "Членам клуба",
            links: [
                { name: "Акции", href: "/" },
                { name: "Duchess TV", href: "/" },
                { name: "Мероприятия", href: "/" },
                { name: "FAQ", href: "/" },
            ],
        },
    ];

    return (
        <footer className="p-8">
            <div className="container flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between">
                {sections.map((section, index) => (
                    <>
                        <FooterSectionComponent key={section.name} section={section} />
                        {index != sections.length - 1 && <hr className="block lg:hidden" />}
                    </>
                ))}
            </div>
        </footer>
    );
}
