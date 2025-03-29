import { motion } from "framer-motion";
import { Menu, LayoutDashboard, HandCoins, ChartArea, ChevronsRightLeft, ChevronsRight } from "lucide-react";
import SidebarItemProps from "../hooks/SidebarItemProps";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "../store/authStore";
import { button, div, span } from "framer-motion/client";

type TOption = {
    icon: React.ReactNode;
    title: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    open: boolean;
    to: string;
}

export default function Sidebar() {

    const [open, setOpen] = useState(true);

    const [selected, setSelected] = useState("Dashboard");

    const logout = useAuthState((state) => state.logout);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <motion.nav 
            layout
            className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
            style={{width: open ? "280px" : "fit-content"}}
        >
            <ToggleSidebar open={open} setOpen={setOpen} />
            <TitleSidebar open={open} />

            <div className="flex flex-col gap-1 space-y-1">
                <Option to="/dashboard" icon={<LayoutDashboard size={26} />} title="Dashboard" selected={selected} setSelected={setSelected} open={open} />
                <Option to="/dashboard/finances" icon={<HandCoins size={26} />} title="Finances" selected={selected} setSelected={setSelected} open={open} />
                <Option to="/dashboard/loan" icon={<ChartArea size={26} />} title="Prêt Étudiant" selected={selected} setSelected={setSelected} open={open} />
            </div>
        </motion.nav>
    );
}

function TitleSidebar({ open }: {open: boolean}) {
    return (
        <div className="mb-3 pb-3 border-b border-slate-300">
            <div className="flex cursor-pointer item-center justify-between rounded-md transition-colors px-1 hover:bg-slate-100">
                <div className="flex items-center gap-2">
                    <TitleLogo />
                    {open && (
                        <motion.div layout
                            initial={{opacity: 0, y: 12}}
                            animate={{opacity: 1, y: 0}}
                            transition={{ delay: 0.125}}
                        >
                            <h3 className="block text-xl font-semibold">Unreachable-Studio</h3>
                            <span className="block text-xs font-medium">Dashboard</span>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

function TitleLogo() {
    return <motion.div 
        layout
        className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
        <svg className="fill-slate-50" id="logo-35" width="28" height="22" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1"></path>
            <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom"></path>
        </svg>
    </motion.div>
}

function Option({icon, title, selected, setSelected, open, to}: TOption) {
    return (
        <Link to={to} onClick={() => setSelected(title)}>
            <motion.div layout className={`relative flex h-10 w-full justify-between items-center 
                rounded-md transition-colors ${selected === title
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-slate-500 hover:bg-slate-300"}`}>
                <motion.div layout className="flex items-center">
                    <motion.div layout className="grid h-full w-12 place-content-center text-lg">
                        {icon}
                    </motion.div>
                    {open && <motion.span layout 
                            initial={{opacity: 0, y: 12}}
                            animate={{opacity: 1, y: 0}}
                            transition={{ delay: 0.125}} className="text-md font-medium">{title}</motion.span>}
                </motion.div>
            </motion.div>
            
        </Link>
    )
}

function ToggleSidebar({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <motion.button 
        layout
        onClick={() => setOpen((pv) => !pv)}
        className="absolute grid size-8 place-content-center bottom-[6vh] right-[-16px] rounded-md border bg-slate-50 border-slate-300 hover:bg-slate-100 text-indigo-600">
            <ChevronsRight className={`transition-transform ${open && "rotate-180"} duration-400`} />
        </motion.button>
    )
}