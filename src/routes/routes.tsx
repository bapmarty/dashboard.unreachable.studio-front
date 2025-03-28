import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import AppLayout from "../layouts/AppLayout";
import Dashboard from "../pages/Dashboard";
import Finances from "../pages/Finances";
import Loan from "../pages/Loan";
import ProtectedRoutes from "./protectedRoutes";

export const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    {
        path: "/dashboard",
        element: <ProtectedRoutes />,
        children: [
            { path: "", element: <AppLayout />,
                children: [
                    { path: "", element: <Dashboard /> },
                    { path: "finances", element: <Finances /> },
                    { path: "loan", element: <Loan /> },
                ],
            }
        ]
    },
])