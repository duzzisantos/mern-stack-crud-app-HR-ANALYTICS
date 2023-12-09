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
import { useChartData } from "../utils/useChartData";
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

  const data = useChartData(
    labels,
    uniqueAppraisals.quantityOfWork,
    uniqueAppraisals.quantityOfWork,
    uniqueAppraisals.responsibility,
    uniqueAppraisals.punctuality,
    uniqueAppraisals.delivery
  );

  return <Line options={options} data={data} />;
};

export default YearOnYear;
