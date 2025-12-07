import * as Highcharts from "highcharts"; 
import HighchartsReact from "highcharts-react-official";
import 'highcharts/modules/exporting'; 

export function IncidentsByTypeChart() {
  const options: Highcharts.Options = {
    chart: { type: "column" },
    title: { text: "" },

    xAxis: {
      categories: ["Accidente", "Robo", "Salud", "Incendio", "Otros"],
    },

    yAxis: {
      title: { text: "Cantidad" },
    },

    series: [
      {
        type: "column",
        name: "Incidentes",
        data: [120, 90, 160, 40, 70],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
