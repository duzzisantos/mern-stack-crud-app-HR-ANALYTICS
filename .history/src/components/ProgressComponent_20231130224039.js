import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({ currentvalue }) => {
  return (
    <ProgressBar variant="info" now={currentvalue} label={`${currentvalue}`} />
  );
};

export default ProgressComponent;
