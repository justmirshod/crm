import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#F7258F", "#653DEA", "#F1EFFB"],
      borderJoinStyle: "miter ",
      offset: 5,
      weight: 10,
      cutout: "60%",
    },
  ],
};

export default function PieChart() {
  return <Doughnut data={data} />;
}
