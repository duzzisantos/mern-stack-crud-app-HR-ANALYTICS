import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({ currentvalue, getMetric }) => {
  return <ProgressBar variant="info" now={getMetric} label={`${getMetric}`} />;
};

export default ProgressComponent;
