import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({
  quantityOfWork,
  qualityOfWork,
  delivery,
  responsibility,
  punctuality,
}) => {
  return (
    <div className="d-flex flex-column gap-5 p-4 shadow-sm col-3">
      <ProgressBar
        striped
        variant="secondary"
        now={qualityOfWork * 20}
        label={`${qualityOfWork * 20}`}
      />
      <ProgressBar
        striped
        variant="secondary"
        now={delivery * 20}
        label={`${delivery * 20}`}
      />
      <ProgressBar
        striped
        variant="secondary"
        now={responsibility * 20}
        label={`${responsibility * 20}`}
      />
      <ProgressBar
        striped
        variant="secondary"
        now={quantityOfWork * 20}
        label={`${quantityOfWork * 20}`}
      />
      <ProgressBar
        striped
        variant="secondary"
        now={punctuality * 20}
        label={`${punctuality * 20}`}
      />
    </div>
  );
};

export default ProgressComponent;
