
import MonthlyIncidentsChart from "../components/MonthlyIncidentsChart";

export default function Dashboard() {
  return (
    <>
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">
            Dashboard Emergencias 123
          </h1>

          <span className="text-xl font-semibold text-gray-600">
            {new Date().toLocaleDateString("es-CO", { month: "long", year: "numeric" })}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <Card title="Localidades" value="1,245" />
          <Card title="Total llamadas" value="1,245" />
          <Card title="Casos criticos" value="1,245" />
          <Card title="Tiempo de respuesta" value="1,245" />

        </div>

        
        <div className="bg-white rounded-xl shadow p-6 h-50 w-full">
          <MonthlyIncidentsChart />
        </div>

    </>
    
  );
}

type CardProps = {
  title: string;
  value: string;
};

function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
