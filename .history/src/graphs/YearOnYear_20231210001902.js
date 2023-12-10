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

const YearOnYear = ({ chartData, employeeId, years }) => {
  const {
    qualityOfWork,
    quantityOfWork,
    responsibility,
    punctuality,
    delivery,
  } = getUniqueAppraisals(chartData, employeeId, years);

  const options = useChartOptions(`Year-on-Year`);
  const data = useChartData(
    years,
    qualityOfWork,
    quantityOfWork,
    responsibility,
    punctuality,
    delivery
  );

  return <Line options={options} data={data} />;
};

export default YearOnYear;
