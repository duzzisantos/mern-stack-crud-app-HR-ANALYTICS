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
import { getUniqueAppraisals } from "../utils/getChartLabels";
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

const YearOnYear = ({ chartData, employeeId, year }) => {
  const uniqueAppraisals = getUniqueAppraisals(chartData, employeeId, year);

  console.log(uniqueAppraisals);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Annual performance score - ${year} `,
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
        data: uniqueAppraisals.qualityofWork,
        borderColor: "#2ec501",
        backgroundColor: "#2ec501",
      },
      {
        label: "Quantity of work",
        data: uniqueAppraisals.quantityOfWork,
        borderColor: "#2ff354",
        backgroundColor: "#2ff345",
      },
      {
        label: "Punctuality",
        data: uniqueAppraisals.punctuality,
        borderColor: "#000aaa",
        backgroundColor: "#000aaa",
      },
      {
        label: "Responsibility",
        data: uniqueAppraisals.responsibility,
        borderColor: "#2f2445",
        backgroundColor: "#2f2445",
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
