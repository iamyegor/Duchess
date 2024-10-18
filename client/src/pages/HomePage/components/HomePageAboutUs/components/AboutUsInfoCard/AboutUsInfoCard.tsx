import { Link } from "react-router-dom";
import useAboutUsTranslation from "./hooks/useAboutUsTranslation";

interface CardProps {
    title: string;
    content: string;
}

export default function AboutUsInfoCard({ title, content }: CardProps) {
    const t = useAboutUsTranslation();

    return (
        <div className="bg-neutral-950 border border-neutral-700 text-white p-8 rounded-xl space-y-8 xs:space-y-12 flex flex-col justify-between h-full">
            <div className="space-y-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-base">{content}</p>
            </div>
            <Link
                to="/beginners"
                className="bg-default w-full text-white py-3 rounded-lg hover:bg-default-dark transition duration-300 flex justify-center items-center"
            >
                {t.buttonText}
            </Link>
        </div>
    );
}
