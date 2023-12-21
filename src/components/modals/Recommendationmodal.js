import { Modal, Button } from "react-bootstrap";
import DetailsSummary from "../RecommendationForms/DetailsSummary";

const RecommendationModal = ({
  show,
  handleClose,
  employee,
  appraisalData,
  averageScore,
  recommendationPolicy,
  employeeID,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      keyboard={false}
      size="lg"
      backdrop="static"
      top={true}
    >
      <Modal.Header closeButton>
        <Modal.Title className="">Recommendations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section>
          <h4 className="text-start fs-5 mb-3">
            General recommendations for {employee}
          </h4>
          <div className="d-flex flex-column gap-2 border-start border-5 border-secondary px-2 shadow-sm col-6 mb-3">
            <small className="fw-semibold">Employee ID: {employeeID}</small>
            <small className="fw-semibold">
              Average Appraisal Score: {averageScore}
            </small>
          </div>
          <div className="col-12 py-3">
            {appraisalData
              .filter((item) => employeeID === item.ID)
              .map((element) => ({
                quantity: element.quantityofWork,
                quality: element.qualityOfWork,
                punctuality: element.punctuality,
                delivery: element.delivery,
                responsibility: element.responsibility,
              }))
              .map((x, index) => (
                <details key={index}>
                  <summary>Expand Summary</summary>
                  <DetailsSummary
                    title={"Quality of work"}
                    property={x.quality}
                  />
                  <DetailsSummary
                    title={"Quantity of work"}
                    property={x.quantity}
                  />
                  <DetailsSummary
                    title={"Responsibility"}
                    property={x.responsibility}
                  />
                  <DetailsSummary
                    title={"Punctuality"}
                    property={x.punctuality}
                  />
                  <DetailsSummary title={"Delivery"} property={x.delivery} />
                </details>
              ))}
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="border-0 btn-outline-danger text-light"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecommendationModal;
