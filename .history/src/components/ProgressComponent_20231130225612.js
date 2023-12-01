import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({ getMetric }) => {
  return <ProgressBar variant="info" now={getMetric} label={`${getMetric}`} />;
};

export default ProgressComponent;
