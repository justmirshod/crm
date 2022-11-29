import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Yillik Statistika",
      font: {
        size: 24,
        weight: "bold",
      },
      color: "black",
      position: "top",
      align: "start",
      padding: {
        bottom: 20,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "DataSet",
      data: [11, 12, 12, 15, 10, 5, 13, 18, 3, 12, 2, 14],
      backgroundColor: [
        "#F2EFFF",
        "#F2EFFF",
        "#F2EFFF",
        "#F2EFFF",
        "#F2EFFF",
        "#F2EFFF",
        "#F2EFFF",
        "#5932EA",
        "#F2EFFF",
        "#F2EFFF",
        "#F2EFFF",
        "#F2EFFF",
      ],
      borderRadius: 6,
      borderSkipped: false,
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
