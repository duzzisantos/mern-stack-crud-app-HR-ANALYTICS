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
// import { Form } from "react-bootstrap";
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
  const labels = getAvailableYears(chartData);
  const {
    qualityOfWork,
    quantityOfWork,
    responsibility,
    punctuality,
    delivery,
  } = getUniqueAppraisals(chartData, employeeId, labels);

  console.log(getUniqueAppraisals(chartData, employeeId, labels));

  const options = useChartOptions("Year-on-Year");
  const data = useChartData(
    labels,
    qualityOfWork,
    quantityOfWork,
    responsibility,
    punctuality,
    delivery
  );

  return <Line options={options} data={data} />;
};

export default YearOnYear;
