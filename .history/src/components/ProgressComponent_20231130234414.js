import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({
  quantityOfWork,
  qualityOfWork,
  delivery,
  responsibility,
  punctuality,
}) => {
  return (
    <div>
      <ProgressBar
        variant="secondary"
        now={qualityOfWork * 20}
        label={`${qualityOfWork * 20}`}
      />
      <ProgressBar
        variant="secondary"
        now={delivery * 20}
        label={`${delivery * 20}`}
      />
      <ProgressBar
        variant="secondary"
        now={responsibility * 20}
        label={`${responsibility * 20}`}
      />
      <ProgressBar
        variant="secondary"
        now={quantityOfWork * 20}
        label={`${quantityOfWork * 20}`}
      />
      <ProgressBar
        variant="secondary"
        now={punctuality * 20}
        label={`${punctuality * 20}`}
      />
    </div>
  );
};

export default ProgressComponent;
