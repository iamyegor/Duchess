import React from "react";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
    to: string;
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
}

export default function HeaderLink({ to, children, onMouseEnter, onMouseLeave, onClick }: HeaderLinkProps) {
    return (
        <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <Link
                to={to}
                className="block rounded-sm px-5 py-3 text-xs tracking-[0.16em] text-paper/75 hover:bg-paper/10 hover:text-paper"
            >
                {children}
            </Link>
        </button>
    );
}
