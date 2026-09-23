import { Link } from "react-router-dom";
import useAboutUsTranslation from "./hooks/useAboutUsTranslation";

interface CardProps {
    title: string;
    content: string;
}

export default function AboutUsInfoCard({ title, content }: CardProps) {
    const t = useAboutUsTranslation();

    return (
        <div className="du-panel flex h-full flex-col justify-between space-y-8 rounded-sm p-8 text-paper xs:space-y-12">
            <div className="space-y-4">
                <h2 className="du-display text-4xl">{title}</h2>
                <p className="text-base leading-7 text-paper/70">{content}</p>
            </div>
            <Link
                to="/beginners"
                className="du-button flex w-full items-center justify-center py-3 text-sm"
            >
                {t.buttonText}
            </Link>
        </div>
    );
}
