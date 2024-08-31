import { Link } from "react-router-dom";
import logoImage from "@/assets/logo/logo.png";
import classNames from "classnames";

export default function DuchessLogo() {
    return (
        <div className="w-full flex mt-1 lg:mt-14 justify-center z-10">
            <Link to="/" className={classNames("flex flex-col lg:hidden justify-center", {})}>
                <img className="w-44" src={logoImage} alt="Duchess Fitness" />
                <p className="text-center font-semibold text-4xl">DUCHESS</p>
            </Link>
        </div>
    );
}
