import { Link } from "react-router-dom";

interface CardProps {
    title: string;
    content: string;
}

export default function AboutUsInfoCard({ title, content }: CardProps) {
    return (
        <div className="bg-default text-white p-8 rounded-xl space-y-8 xs:space-y-12 flex flex-col justify-between h-full">
            <div className="space-y-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm xs:text-base sm:text-lg">{content}</p>
            </div>
            <Link
                to="/beginners"
                className="bg-black w-full text-white py-3 rounded-lg hover:bg-neutral-900 transition duration-300 flex justify-center items-center"
            >
                Подробнее
            </Link>
        </div>
    );
}
