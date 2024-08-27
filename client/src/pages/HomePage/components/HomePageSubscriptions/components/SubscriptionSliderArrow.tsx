import classNames from "classnames";
import DownArrowSvg from "@/assets/homePage/arrow-down.svg?react";

export default function SubscriptionSliderArrow({
    direction,
    isShown,
}: {
    direction: "left" | "right";
    isShown: boolean;
}) {
    return (
        <div
            className={classNames(
                "absolute top-0 bottom-0 z-10 flex justify-between items-center cursor-pointer",
                {
                    "-right-6 sm:-right-12": direction === "right",
                    "-left-6 sm:-left-12": direction === "left",
                    hidden: !isShown,
                    block: isShown,
                },
            )}
        >
            <p
                className={classNames(
                    "pointer-events-auto bg-default w-11 h-11 sm:w-16 sm:h-16 rounded-full border-2 border-black flex justify-center items-center",
                    {
                        "swiper-next": direction === "right",
                        "swiper-prev": direction === "left",
                    },
                )}
            >
                <DownArrowSvg
                    className={classNames("fill-black w-8 h-8 transform", {
                        "rotate-90": direction === "left",
                        "-rotate-90": direction === "right",
                    })}
                />
            </p>
        </div>
    );
}
