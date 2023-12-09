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

const YearOnYear = ({
  chartData,
  employeeId,
  year,
  graphYear,
  setGraphYear,
}) => {
  const uniqueAppraisals = getUniqueAppraisals(chartData, employeeId, year);

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
    <div className="col-12 p-3">
      <div className="d-flex col-lg-3 col-md-6">
        <Form.Label className="w-50 fw-semibold">Select Year</Form.Label>
        <Form.Select
          size="sm"
          value={graphYear}
          onChange={(e) => setGraphYear(e.target.value)}
        >
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
