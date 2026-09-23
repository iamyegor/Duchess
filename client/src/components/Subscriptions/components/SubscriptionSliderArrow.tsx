import classNames from "classnames";
import DownArrowSvg from "@/assets/homePage/arrow-down.svg?react";

export default function SubscriptionSliderArrow({
    uniqueValue,
    direction,
    isShown,
}: {
    uniqueValue: string;
    direction: "left" | "right";
    isShown: boolean;
}) {
    return (
        <div
            className={classNames(
                "absolute top-0 bottom-0 z-10 flex justify-between items-center cursor-pointer",
                {
                    "-right-3 sm:-right-4": direction === "right",
                    "-left-3 sm:-left-4": direction === "left",
                    hidden: !isShown,
                    block: isShown,
                },
            )}
        >
            <div
                className={classNames(
                    "flex h-10 w-10 items-center justify-center rounded-sm border border-paper/15 bg-default shadow-[0_12px_35px_rgba(255,119,0,0.28)] sm:h-12 sm:w-12",
                    {
                        [`swiper-next-${uniqueValue}`]: direction === "right",
                        [`swiper-prev-${uniqueValue}`]: direction === "left",
                    },
                )}
            >
                <DownArrowSvg
                    className={classNames("fill-black w-7 h-7 transform", {
                        "rotate-90 mr-1": direction === "left",
                        "-rotate-90 ml-1": direction === "right",
                    })}
                />
            </div>
        </div>
    );
}
