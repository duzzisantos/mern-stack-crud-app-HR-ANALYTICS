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
import { Form } from "react-bootstrap";
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

  return (
    <div className="col-12">
      <div>
        <Form.Label>Select Year</Form.Label>
        <Form.Select>
          {labels.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </Form.Select>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default YearOnYear;
