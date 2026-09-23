import FooterSection from "@/components/RootLayout/Footer/types/FooterSection.tsx";
import { Link } from "react-router-dom";

interface FooterSectionProps {
    section: FooterSection;
}

export default function FooterSectionComponent({ section }: FooterSectionProps) {
    return (
        <div className="space-y-6">
            <h1 className="du-display text-3xl text-paper">{section.name}</h1>
            <div className="flex flex-col space-y-3 text-sm text-paper/58">
                {section.links.map((link) => (
                    <Link key={link.name} to={link.href} className="hover:text-default">
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
