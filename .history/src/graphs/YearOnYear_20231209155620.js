import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const YearOnYear = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Quality of Work",
        data: [5, 4, 5, 3.8, 4.7],
        borderColor: "#fec501",
        backgroundColor: "#fec501",
      },
      {
        label: "Quantity of work",
        data: [5, 2, 3.3, 3, 4.2],
        borderColor: "#ffa354",
        backgroundColor: "#ffa345",
      },
      {
        label: "Punctuality",
        data: [4.7, 4.3, 5, 4.1, 4.8],
        borderColor: "#2f3ddf",
        backgroundColor: "#2f3ddf",
      },
      {
        label: "Responsibility",
        data: [3.8, 4.1, 2.9, 3.4, 4.4],
        borderColor: "#2aa454",
        backgroundColor: "#2aa454",
      },
      {
        label: "Delivery",
        data: [5, 4, 4.5, 3.2, 4.7],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default YearOnYear;
