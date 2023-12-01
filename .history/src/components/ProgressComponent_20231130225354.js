import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({ currentvalue, metric }) => {

    const getMetric = () => {
        return metric === 'qualityOfWork' ? currentvalue : metric === 'delivery' ? currentvalue : metric === 'responsibility' ? currentvalue : metric === 'quantityOfWork' ? currentvalue : metric === 'punctuality' ? currentvalue : !currentvalue
    }
  return (
    <ProgressBar variant="info" now={} label={`${currentvalue}`} />
  );
};

export default ProgressComponent;
