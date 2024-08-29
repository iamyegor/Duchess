import React from "react";
import CheckSvg from "@/assets/common/check.svg?react";

interface CheckboxProps {
    isChecked: boolean;
    id?: string;
    onClick: () => void;
    className?: string;
}

export default function Checkbox({ id, isChecked, onClick, className }: CheckboxProps) {
    return (
        <button
            id={id}
            type="button"
            className={`w-[22px] h-[22px] rounded-md flex justify-center items-center cursor-pointer border 
                             ${isChecked ? "bg-default border-default-lighter" : "border-neutral-300"} p-[3px] flex-shrink-0 ${className}`}
            onClick={onClick}
        >
            {isChecked && <CheckSvg className="fill-white w-full h-full" />}
        </button>
    );
}
