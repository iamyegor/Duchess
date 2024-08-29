import { Link } from "react-router-dom";
import logoImage from "@/assets/logo/logo.png";

export default function DuchessLogo() {
    return (
        <div className="w-full flex lg:mb-16 justify-center">
            <Link to="/" className="flex lg:hidden justify-center">
                <img className="w-44 h-44 rounded-full" src={logoImage} alt="Duchess Fitness" />
            </Link>
        </div>
    );
}
