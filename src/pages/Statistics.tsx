import { useState } from "react";
import { Filter } from "lucide-react";

import {IncidentsByTypeChart} from "../components/charts/IncidentsByTypeChart";
import {IncidentsByPriorityChart} from "../components/charts/IncidentsByPriorityChart";
import {IncidentsByLocalityChart} from "../components/charts/IncidentsByLocalityChart";

export default function Statistics() {
    const [showAdvanced, setShowAdvanced] = useState(false);

    const [filters, setFilters] = useState({
        fechaInicio: "",
        fechaFin: "",
        localidad: "",
        tipoIncidente: "",
        prioridad: "",
        genero: "",
        edadMin: "",
        edadMax: "",
        unidad: "",
        recepcion: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({
        ...filters,
        [e.target.name]: e.target.value
        });
    };

    const aplicarFiltros = () => {
        console.log("Filtros aplicados:", filters);
        // Aquí luego llamas al backend
    };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Estadísticas</h1>

      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

            <input
            type="date"
            name="fechaInicio"
            onChange={handleChange}
            className="border rounded p-2"
            />

            <input
            type="date"
            name="fechaFin"
            onChange={handleChange}
            className="border rounded p-2"
            />

            <select name="localidad" onChange={handleChange} className="border rounded p-2">
            <option value="">Todas las localidades</option>
            <option value="Kennedy">Kennedy</option>
            <option value="Suba">Suba</option>
            </select>

            <select name="tipoIncidente" onChange={handleChange} className="border rounded p-2">
            <option value="">Todos los incidentes</option>
            <option value="Accidente">Accidente</option>
            <option value="Emergencia médica">Emergencia médica</option>
            </select>

            <select name="prioridad" onChange={handleChange} className="border rounded p-2">
            <option value="">Todas las prioridades</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
            </select>

        </div>

        <div className="flex justify-between mt-4">

            <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center gap-2 bg-[#0f2a44] text-white px-4 py-2 rounded hover:bg-[#163a5d]"
            >
                <Filter size={18} />
            </button>

            <button
            onClick={aplicarFiltros}
            className="bg-[#0f2a44] text-white px-4 py-2 rounded"
            >
            Aplicar filtros
            </button>
        </div>
        </div>

        {showAdvanced && (
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                <input
                    type="number"
                    name="edadMin"
                    placeholder="Edad mínima"
                    onChange={handleChange}
                    className="border rounded p-2"
                />

                <input
                    type="number"
                    name="edadMax"
                    placeholder="Edad máxima"
                    onChange={handleChange}
                    className="border rounded p-2"
                />

                <select name="unidad" onChange={handleChange} className="border rounded p-2">
                    <option value="">Todas las unidades</option>
                    <option value="Ambulancia">Ambulancia</option>
                    <option value="Policía">Policía</option>
                </select>

                <select name="recepcion" onChange={handleChange} className="border rounded p-2">
                    <option value="">Todos los canales</option>
                    <option value="Telefonía">Telefonía</option>
                    <option value="App">App</option>
                </select>

                </div>

            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            
            <ChartCard title="Incidentes por Tipo">
                <IncidentsByTypeChart />
            </ChartCard>

            <ChartCard title="Prioridad de Incidentes">
                <IncidentsByPriorityChart />
            </ChartCard>

            <ChartCard title="Incidentes por Localidad">
                <IncidentsByLocalityChart />
            </ChartCard>

        </div>

    </>
  );
}

type ChartCardProps = {
  title: string;
  children: React.ReactNode;
};

function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-sm font-semibold text-gray-600 mb-2">
        {title}
      </h2>
      <div className="h-50">
        {children}
      </div>
    </div>
  );
}

