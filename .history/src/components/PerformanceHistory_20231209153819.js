import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import YearOnYear from "../graphs/YearOnYear";
const PerformanceHistory = () => {
  const [key, setKey] = useState("Annual");

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab eventKey="Annual" title="Year on Year">
        <div>
          <YearOnYear />
        </div>
      </Tab>
      <Tab eventKey="Monthly" title="Month on Month">
        <div></div>
      </Tab>
    </Tabs>
  );
};

export default PerformanceHistory;
