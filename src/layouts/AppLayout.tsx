import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthState } from "../store/authStore";

export default function AppLayout() {

    const logout = useAuthState((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <>
        <div>
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <div className="flex gap-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard/finances">Finances</Link>
          <Link to="/dashboard/loan">Prêt Étudiant</Link>
        </div>
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
          Déconnexion
        </button>
      </nav>
      <main className="p-4">
        <Outlet /> {/* Affiche le contenu du dashboard */}
      </main>
    </div>
        </>
    );
}