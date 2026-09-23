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
            className={`flex h-[22px] w-[22px] flex-shrink-0 cursor-pointer items-center justify-center rounded-sm border
                             ${isChecked ? "border-acid bg-acid" : "border-paper/35 bg-paper/5"} p-[3px] ${className}`}
            onClick={onClick}
        >
            {isChecked && <CheckSvg className="h-full w-full fill-ink" />}
        </button>
    );
}
