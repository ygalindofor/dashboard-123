import * as Highcharts from "highcharts"; 
import HighchartsReact from "highcharts-react-official";
import 'highcharts/modules/exporting'; 

export function IncidentsByPriorityChart() {
  const options: Highcharts.Options = {
    chart: { type: "pie" },
    title: { text: "" },

    plotOptions: {
      pie: {
        innerSize: "60%",
      },
    },

    series: [
      {
        type: "pie",
        data: [
          { name: "Alta", y: 120 },
          { name: "Media", y: 80 },
          { name: "Baja", y: 40 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
