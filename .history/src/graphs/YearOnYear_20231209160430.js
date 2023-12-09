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
        text: "Year-on-Year mean performance score",
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
        borderColor: "#2ec501",
        backgroundColor: "#2ec501",
      },
      {
        label: "Quantity of work",
        data: [5, 2, 3.3, 3, 4.2],
        borderColor: "#2ff354",
        backgroundColor: "#2ff345",
      },
      {
        label: "Punctuality",
        data: [4.7, 4.3, 5, 4.1, 4.8],
        borderColor: "#000aaa",
        backgroundColor: "#000aaa",
      },
      {
        label: "Responsibility",
        data: [3.8, 4.1, 2.9, 3.4, 4.4],
        borderColor: "#ffa44b",
        backgroundColor: "#ffa44b",
      },
      {
        label: "Delivery",
        data: [5, 4, 4.5, 3.2, 4.7],
        borderColor: "#006fff",
        backgroundColor: "#006fff",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default YearOnYear;
