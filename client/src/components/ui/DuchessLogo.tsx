import { Link } from "react-router-dom";
import logoImage from "@/assets/logo/logo.png";
import classNames from "classnames";

interface DuchessLogoProps {
    whiteVariant?: boolean;
}

export default function DuchessLogo({ whiteVariant = false }: DuchessLogoProps) {
    return (
        <div className="w-full flex lg:mb-16 justify-center z-10">
            <Link
                to="/"
                className={classNames("flex lg:hidden justify-center p-4", {
                    "bg-white rounded-full ": whiteVariant,
                })}
            >
                <img
                    className={classNames("w-44 h-44 rounded-full", { "!w-24 !h-24": whiteVariant })}
                    src={logoImage}
                    alt="Duchess Fitness"
                />
            </Link>
        </div>
    );
}
