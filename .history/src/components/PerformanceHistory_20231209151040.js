import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
const PerformanceHistory = () => {
  const [key, setKey] = useState("annual");

  return (
    <Tabs>
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
};
