import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="h-full flex flex-col md:flex-row items-center justify-center p-6">
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-8xl font-medium italic mb-8">404</h1>
                <div
                    className="text-lg max-w-[500px] mb-10 text-center md:text-left mx-4 
                    md:mx-0"
                >
                    Страница не найдена
                </div>
                <div className="flex space-x-4 w-full">
                    <Link
                        to="/"
                        className="bg-black w-full text-center hover:bg-neutral-900 font-medium py-3 rounded-xl"
                    >
                        Домой
                    </Link>
                </div>
            </div>
        </div>
    );
}
