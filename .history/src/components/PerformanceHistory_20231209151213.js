import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
const PerformanceHistory = () => {
  const [key, setKey] = useState("Annual");

  return (
    <Tabs activeKey={"Annual"} onSelect={(k) => setKey(k)} className="mb-3">
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};

export default PerformanceHistory;
