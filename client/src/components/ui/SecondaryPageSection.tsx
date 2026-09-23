import React from "react";
import classNames from "classnames";

interface ProgramsPageSectionProps {
    image: string;
    title: string;
    content: string;
    bgColor: "orange" | "black";
    imageAlignment: "left" | "right";
}

export default function SecondaryPageSection({
    image,
    title,
    content,
    bgColor,
    imageAlignment,
}: ProgramsPageSectionProps) {
    return (
        <div
            className={classNames("relative overflow-hidden py-20 lg:py-28", {
                "bg-[#0b0b09]": bgColor === "black",
                "bg-[linear-gradient(135deg,#19100a_0%,#0b0b09_52%,#140f08_100%)]":
                    bgColor === "orange",
            })}
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
            <div
                className={classNames(
                    "container flex flex-col space-y-10 lg:flex-row lg:items-center lg:gap-x-16 lg:space-y-0",
                    {
                        "lg:flex-row-reverse": imageAlignment === "left",
                    },
                )}
            >
                <div className="flex-1 space-y-8 text-paper">
                    <span className="du-kicker">training zone</span>
                    <h2 className="du-display text-6xl sm:text-8xl">{title}</h2>
                    <p className="max-w-xl text-[16px] font-medium leading-8 text-paper/70">
                        {content}
                    </p>
                </div>
                <div
                    className="du-photo-frame h-min flex-1 rounded-sm"
                    style={{ aspectRatio: "16/10" }}
                >
                    <img
                        src={image}
                        alt="Section Image"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
