import React from "react";
import { Link } from "react-router-dom";

type TSidebarItemProps = {
    to: string;
    icon: React.ReactNode;
    label: string;
    isExpanded: boolean;
}

export default function SidebarItemProps({to, icon, label, isExpanded}: TSidebarItemProps) {
    return (
        <Link to={to} className="transition-all">
            {icon}
            {isExpanded && <span className="text-lg">{label}</span>}
        </Link>
    )
}