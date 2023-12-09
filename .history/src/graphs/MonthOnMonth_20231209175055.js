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
import { getUniqueMonthlyAppraisals } from "../utils/getChartLabels";
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

const MonthOnMonth = ({ chartData, employeeId, month }) => {
  const uniqueAppraisals = getUniqueMonthlyAppraisals(
    chartData,
    employeeId,
    month
  );

  console.log(uniqueAppraisals);
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
        data: uniqueAppraisals["qualityOfWork"],
        borderColor: "#2ec501",
        backgroundColor: "#2ec501",
      },
      {
        label: "Quantity of work",
        data: uniqueAppraisals["quantityOfWork"],
        borderColor: "#2ff354",
        backgroundColor: "#2ff345",
      },
      {
        label: "Punctuality",
        data: uniqueAppraisals["punctuality"],
        borderColor: "#000aaa",
        backgroundColor: "#000aaa",
      },
      {
        label: "Responsibility",
        data: uniqueAppraisals["responsibilty"],
        borderColor: "#2f2445",
        backgroundColor: "#2f2445",
      },
      {
        label: "Delivery",
        data: uniqueAppraisals["delivery"],
        borderColor: "#006fff",
        backgroundColor: "#006fff",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default MonthOnMonth;
