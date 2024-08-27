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
            <Link to={to} className="text-sm hover:text-neutral-300">
                {children}
            </Link>
        </button>
    );
}