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
import { Form } from "react-bootstrap";
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

const MonthOnMonth = ({ chartData, employeeId, graphMonth, setGraphMonth }) => {
  const uniqueAppraisals = getUniqueMonthlyAppraisals(
    chartData,
    employeeId,
    graphMonth
  );

  const options = useChartOptions(graphMonth);

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

  return (
    <div className="col-12 p-3">
      <div className="d-flex col-lg-3 col-md-6">
        <Form.Label className="w-50 fw-semibold">Select Month</Form.Label>
        <Form.Select
          className="w-50"
          size="sm"
          value={graphMonth}
          onChange={(e) => setGraphMonth(e.target.value)}
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

export default MonthOnMonth;
