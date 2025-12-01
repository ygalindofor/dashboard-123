import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ok = login(email, password);

    if (!ok) {
      setError("Credenciales incorrectas");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
        
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Iniciar Sesión
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="text-gray-600 text-sm">Correo</label>
            <input
              type="email"
              className="w-full p-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 mt-1 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
