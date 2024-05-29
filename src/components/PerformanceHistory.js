import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import YearOnYear from "../graphs/YearOnYear";
import MonthOnMonth from "../graphs/MonthOnMonth";
const PerformanceHistory = ({
  chartData,
  employeeId,
  graphYear,
  setGraphYear,
  years,
}) => {
  const [key, setKey] = useState("Annual");

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab eventKey="Annual" title="Year on Year">
        <div className="col-12 d-flex justify-content-center px-4">
          <YearOnYear
            chartData={chartData}
            employeeId={employeeId}
            years={years}
          />
        </div>
      </Tab>
      <Tab eventKey="Monthly" title="Month on Month">
        <div className="col-12 d-flex justify-content-center">
          <MonthOnMonth
            chartData={chartData}
            employeeId={employeeId}
            graphYear={graphYear}
            setGraphYear={setGraphYear}
          />
        </div>
      </Tab>
    </Tabs>
  );
};

export default PerformanceHistory;
