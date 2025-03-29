import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {

    return (
    <section className="flex bg-indigo-50">
        <Sidebar />        
        <div className="p-2">
            <main>
                <Outlet />
            </main>
        </div>
    </section>
    );
}