import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Home, BarChart2, LogOut } from "lucide-react";

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">

      {/* ✅ SIDEBAR FIJO */}
      <aside className="w-64 bg-[#0f2a44] text-white flex flex-col">

        {/* Usuario */}
        <div className="flex flex-col items-center py-6 border-b border-white/20">
          <div className="w-20 h-20 rounded-full bg-white text-[#0f2a44] flex items-center justify-center text-3xl font-bold">
            {user?.charAt(0).toUpperCase() || "U"}
          </div>
          <p className="mt-3 text-sm font-semibold">Usuario</p>
          <p className="text-xs text-white/70">{user}</p>
        </div>

        {/* Menú */}
        <nav className="flex-1 px-4 py-6 space-y-4">
          <MenuItem
            icon={<Home size={20} />}
            label="Inicio"
            onClick={() => navigate("/dashboard")}
          />

          <MenuItem
            icon={<BarChart2 size={20} />}
            label="Estadísticas"
            onClick={() => navigate("/dashboard/estadisticas")}
          />
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/20">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
}

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

function MenuItem({ icon, label, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-2 rounded hover:bg-white/10 transition"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}
