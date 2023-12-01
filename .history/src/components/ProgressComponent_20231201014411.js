import { ProgressBar } from "react-bootstrap";

const ProgressComponent = ({
  quantityOfWork,
  qualityOfWork,
  delivery,
  responsibility,
  punctuality,
}) => {
  return (
    <div className="d-flex flex-column gap-4 p-4 shadow-sm col-sm-12 col-lg-4 fw-bold">
      <small>Quality of work</small>
      <ProgressBar
        striped
        animated
        variant="success"
        now={qualityOfWork * 20}
        label={`${qualityOfWork * 20}`}
      />
      <small>Delivery</small>
      <ProgressBar
        striped
        animated
        variant="success"
        now={delivery * 20}
        label={`${delivery * 20}`}
      />
      <small>Responsibilty</small>
      <ProgressBar
        striped
        animated
        variant="success"
        now={responsibility * 20}
        label={`${responsibility * 20}`}
      />
      <small>Quantity of work</small>
      <ProgressBar
        striped
        animated
        variant="success"
        now={quantityOfWork * 20}
        label={`${quantityOfWork * 20}`}
      />
      <small>Punctuality</small>
      <ProgressBar
        striped
        animated
        variant="success"
        now={punctuality * 20}
        label={`${punctuality * 20}`}
      />
    </div>
  );
};

export default ProgressComponent;
