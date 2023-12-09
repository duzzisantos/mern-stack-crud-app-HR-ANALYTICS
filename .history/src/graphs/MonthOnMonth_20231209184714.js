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
  getUniqueMonthlyAppraisals,
  getUniqueMonths,
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

const MonthOnMonth = ({ chartData, employeeId, month }) => {
  const uniqueAppraisals = getUniqueMonthlyAppraisals(
    chartData,
    employeeId,
    month
  );

  console.log(uniqueAppraisals);
  const options = useChartOptions(month);

  const labels = getUniqueMonths(chartData);

  const data = useChartData(
    labels,
    labels,
    uniqueAppraisals.qualityOfWork,
    uniqueAppraisals.quantityOfWork,
    uniqueAppraisals.responsibility,
    uniqueAppraisals.punctuality,
    uniqueAppraisals.delivery
  );

  return <Line options={options} data={data} />;
};

export default MonthOnMonth;
