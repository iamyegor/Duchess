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
            className={classNames("py-24", {
                "bg-default": bgColor === "orange",
                "bg-black": bgColor === "black",
            })}
        >
            <div
                className={classNames(
                    "flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:gap-x-14 container lg:items-center",
                    {
                        "lg:flex-row-reverse": imageAlignment === "left",
                    },
                )}
            >
                <div className="flex-1 text-white space-y-8">
                    <h2 className="text-3xl sm:text-5xl font-semibold">{title}</h2>
                    <p className="text-[16px] font-medium">{content}</p>
                </div>
                <div className="flex-1 h-min" style={{ aspectRatio: "16/10" }}>
                    <img
                        src={image}
                        alt="Section Image"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}
