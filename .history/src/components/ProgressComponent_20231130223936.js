import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({ progressTitle, currentvalue }) => {
  return <ProgressBar variant="info" now={currentvalue} />;
};

export default ProgressComponent;
