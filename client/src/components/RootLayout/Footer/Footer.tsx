import FooterSectionComponent from "@/components/RootLayout/Footer/FooterSectionComponent.tsx";
import FooterSection from "@/components/RootLayout/Footer/types/FooterSection.tsx";
import AboutSection from "@/components/RootLayout/Footer/AboutSection.tsx";
import gDigitalLogo from "@/assets/g-digital/g-digital-logo.png";

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
        <footer className="pt-10 pb-28 lg:pb-5 bg-black border-t-2 border-neutral-800">
            <div className="container flex flex-col items-center gap-y-8 lg:gap-y-0">
                <div className="flex w-full flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    {sections.map((section, index) => (
                        <>
                            <FooterSectionComponent key={section.name} section={section} />
                            {index != sections.length - 1 && (
                                <hr className="block border-neutral-600 lg:hidden" />
                            )}
                        </>
                    ))}
                </div>
                <p>
                    <span>Разработано</span>{" "}
                    <a
                        className="font-sofa text-neutral-400 hover:text-neutral-100 transition"
                        href="https://kwork.ru/user/gdigital_development"
                    >
                        <span>GD</span>
                        <span className="text-xs">igital</span>
                    </a>
                </p>
            </div>
        </footer>
    );
}
