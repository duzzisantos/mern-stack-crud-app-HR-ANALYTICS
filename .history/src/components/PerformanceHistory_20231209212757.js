import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import YearOnYear from "../graphs/YearOnYear";
import MonthOnMonth from "../graphs/MonthOnMonth";
const PerformanceHistory = ({
  chartData,
  employeeId,
  graphYear,
  setGraphYear,
  graphMonth,
  setGraphMonth,
}) => {
  const [key, setKey] = useState("Annual");

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab eventKey="Annual" title="Year on Year">
        <div className="col-12 d-flex justify-content-center">
          <YearOnYear chartData={chartData} employeeId={employeeId} />
        </div>
      </Tab>
      <Tab eventKey="Monthly" title="Month on Month">
        <div className="col-12 d-flex justify-content-center">
          <MonthOnMonth
            chartData={chartData}
            employeeId={employeeId}
            month={graphMonth}
            setGraphMonth={setGraphMonth}
          />
        </div>
      </Tab>
    </Tabs>
  );
};

export default PerformanceHistory;
