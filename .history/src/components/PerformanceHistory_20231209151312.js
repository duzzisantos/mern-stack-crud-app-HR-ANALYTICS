import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
const PerformanceHistory = () => {
  const [key, setKey] = useState("Annual");

  return (
    <Tabs activeKey={"Annual"} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab eventKey="Annual" title="Year on Year">
        Tab content for Home
      </Tab>
      <Tab eventKey="Monthly" title="Month on Month">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default PerformanceHistory;
