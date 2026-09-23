import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="du-page flex h-full min-h-screen flex-col items-center justify-center p-6 md:flex-row">
            <div className="flex flex-col items-center md:items-start">
                <h1 className="du-display mb-8 text-[150px] text-default">404</h1>
                <div
                    className="mx-4 mb-10 max-w-[500px] text-center text-lg text-paper/70
                    md:mx-0"
                >
                    Page not found
                </div>
                <div className="flex w-full space-x-4">
                    <Link
                        to="/"
                        className="du-button w-full py-3 text-center text-sm"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
