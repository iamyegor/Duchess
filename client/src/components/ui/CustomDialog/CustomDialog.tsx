import MuiDialog from "@/components/ui/CustomDialog/MuiDialog.tsx";
import React from "react";
import classNames from "classnames";

interface DialogProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
    auxiliaryButton?: React.ReactNode;
}

export default function CustomDialog({ isOpen, children, onClose, auxiliaryButton }: DialogProps) {
    return (
        <MuiDialog open={isOpen} onClose={onClose}>
            <div className="space-y-5">
                {children}
                <hr className="border-paper/10" />
                <div
                    className={classNames("w-full flex justify-end", {
                        "!justify-between": auxiliaryButton,
                    })}
                >
                    {auxiliaryButton}
                    <button
                        onClick={onClose}
                        className="du-button px-6 py-2 text-sm focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
        </MuiDialog>
    );
}
