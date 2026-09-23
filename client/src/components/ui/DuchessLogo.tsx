import logoLightImage from "@/assets/logo/logo-inverted.webp";
import logoImage from "@/assets/logo/logo.webp";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function DuchessLogo({ theme = "dark" }: { theme?: "light" | "dark" }) {
    return (
        <div className="z-20 mt-1 flex w-full justify-center pb-8 lg:mt-14 lg:hidden">
            <Link
                to="/"
                className={classNames(
                    "flex flex-col justify-center rounded-sm border border-paper/10 bg-ink/45 px-5 py-4 backdrop-blur lg:hidden",
                    {},
                )}
            >
                <img
                    className="mx-auto w-28"
                    src={theme === "dark" ? logoImage : logoLightImage}
                    alt="Duchess Fitness"
                />
                <p className="du-display text-center text-4xl text-paper">DUCHESS</p>
            </Link>
        </div>
    );
}
