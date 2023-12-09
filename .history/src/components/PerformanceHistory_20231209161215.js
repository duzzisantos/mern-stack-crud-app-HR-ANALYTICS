import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import YearOnYear from "../graphs/YearOnYear";
import MonthOnMonth from "../graphs/MonthOnMonth";
const PerformanceHistory = () => {
  const [key, setKey] = useState("Annual");

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab
        eventKey="Annual"
        title="Year on Year"
        className="text-secondary text-capitalize"
      >
        <div className="col-12 d-flex justify-content-center">
          <YearOnYear />
        </div>
      </Tab>
      <Tab eventKey="Monthly" title="Month on Month">
        <div className="col-12 d-flex justify-content-center">
          <MonthOnMonth />
        </div>
      </Tab>
    </Tabs>
  );
};

export default PerformanceHistory;
