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
  getAvailableYears,
  getUniqueMonthlyAppraisals,
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

const MonthOnMonth = ({ chartData, employeeId, setGraphYear, graphYear }) => {
  const {
    qualityOfWork,
    quantityOfWork,
    responsibility,
    punctuality,
    delivery,
    months,
  } = getUniqueMonthlyAppraisals(chartData, employeeId, graphYear);

  const options = useChartOptions("monthly");

  const uniqueYears = getAvailableYears(chartData);
  const data = useChartData(
    months,
    qualityOfWork[0],
    quantityOfWork[0],
    responsibility[0],
    punctuality[0],
    delivery[0]
  );

  return (
    <div className="col-12 p-3">
      <div className="d-flex hstack gap-2 col-lg-3 col-md-6">
        <Form.Label>Select Year</Form.Label>
        <Form.Select
          className="w-50"
          size="sm"
          value={graphYear}
          onChange={setGraphYear}
        >
          {uniqueYears.map((el, i) => (
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
