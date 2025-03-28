import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "../store/authStore";

export default function ProtectedRoutes() {
    const isAuthenticated = useAuthState((state) => state.isAuthenticated);
    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}