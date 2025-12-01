import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-2xl">Dashboard</h1>
      <p className="mt-2">Usuario autenticado: {user}</p>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
