import { useNavigate } from "react-router-dom";
import { useAuthState } from "../store/authStore";

export default function Login() {

    const login = useAuthState((state) => state.login);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/dashboard");
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">Connexion</h1>
        <button 
          onClick={handleLogin} 
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Se connecter
        </button>
      </div>
    );
}