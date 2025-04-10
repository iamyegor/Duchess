import logoLightImage from "@/assets/logo/logo-inverted.webp";
import logoImage from "@/assets/logo/logo.webp";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function DuchessLogo({ theme = "dark" }: { theme?: "light" | "dark" }) {
    return (
        <div className="flex lg:hidden w-full mt-1 lg:mt-14 justify-center z-20 pb-10">
            <Link to="/" className={classNames("flex flex-col lg:hidden justify-center", {})}>
                <img
                    className="w-44"
                    src={theme === "dark" ? logoImage : logoLightImage}
                    alt="Duchess Fitness"
                />
                <p className="text-center font-semibold text-4xl">DUCHESS</p>
            </Link>
        </div>
    );
}
