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
import { useChartOptions } from "../utils/usechartOptions";
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

  const labels = getAvailableYears(chartData);
  const options = useChartOptions(year);
  const data = useChartData(
    labels,
    uniqueAppraisals.qualityOfWork,
    uniqueAppraisals.quantityOfWork,
    uniqueAppraisals.responsibility,
    uniqueAppraisals.punctuality,
    uniqueAppraisals.delivery
  );

  return <Line options={options} data={data} />;
};

export default YearOnYear;
