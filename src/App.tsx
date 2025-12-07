import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="estadisticas" element={<Statistics />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
