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
        <YearOnYear
          chartData={chartData}
          employeeId={employeeId}
          year={graphYear}
          setGraphYear={setGraphYear}
        />
      </Tab>
      <Tab eventKey="Monthly" title="Month on Month">
        <MonthOnMonth
          chartData={chartData}
          employeeId={employeeId}
          month={graphMonth}
          setGraphMonth={setGraphMonth}
        />
      </Tab>
    </Tabs>
  );
};

export default PerformanceHistory;
