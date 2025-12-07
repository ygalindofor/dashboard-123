import * as Highcharts from "highcharts"; 
import HighchartsReact from "highcharts-react-official";
import 'highcharts/modules/exporting'; 

export function IncidentsByLocalityChart() {
  const options: Highcharts.Options = {
    chart: { type: "bar" },
    title: { text: "" },

    xAxis: {
      categories: [
        "Suba", "Kennedy", "Bosa", "Engativá", "Usme"
      ],
    },

    yAxis: {
      title: { text: "Cantidad" },
    },

    series: [
      {
        type: "bar",
        name: "Incidentes",
        data: [150, 130, 110, 90, 70],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
