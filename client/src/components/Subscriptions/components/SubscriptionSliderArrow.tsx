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
                    "-right-6 sm:-right-9": direction === "right",
                    "-left-6 sm:-left-9": direction === "left",
                    hidden: !isShown,
                    block: isShown,
                },
            )}
        >
            <p
                className={classNames(
                    "bg-default w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-black flex justify-center items-center",
                    {
                        [`swiper-next-${uniqueValue}`]: direction === "right",
                        [`swiper-prev-${uniqueValue}`]: direction === "left",
                    },
                )}
            >
                <DownArrowSvg
                    className={classNames("fill-black w-8 h-8 transform", {
                        "rotate-90 mr-1": direction === "left",
                        "-rotate-90 ml-1": direction === "right",
                    })}
                />
            </p>
        </div>
    );
}
