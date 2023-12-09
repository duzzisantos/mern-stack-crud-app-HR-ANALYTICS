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
import {
  getAvailableYears,
  getUniqueAppraisals,
} from "../utils/getChartLabels";
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

  const labels = getAvailableYears(chartData);

  const data = {
    labels,
    datasets: [
      {
        label: "Quality of Work",
        data: uniqueAppraisals.qualityofWork / labels.length,
        borderColor: "#2ec501",
        backgroundColor: "#2ec501",
      },
      {
        label: "Quantity of work",
        data: uniqueAppraisals.quantityOfWork / labels.length,
        borderColor: "#2ff354",
        backgroundColor: "#2ff345",
      },
      {
        label: "Punctuality",
        data: uniqueAppraisals.punctuality / labels.length,
        borderColor: "#000aaa",
        backgroundColor: "#000aaa",
      },
      {
        label: "Responsibility",
        data: uniqueAppraisals.responsibility / labels.length,
        borderColor: "#2f2445",
        backgroundColor: "#2f2445",
      },
      {
        label: "Delivery",
        data: uniqueAppraisals.delivery,
        borderColor: "#006fff",
        backgroundColor: "#006fff",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default YearOnYear;
