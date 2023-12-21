import { Modal } from "react-bootstrap";
import AppriaseEditForm from "../forms/AppraiseEditForm";

const AppraisalEditModal = ({
  show,
  handleClose,
  selectedID,
  token,
  appraisalData,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Updating Appraisal for {selectedID}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AppriaseEditForm
          accessToken={token}
          selectedID={selectedID}
          appraisalData={appraisalData}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AppraisalEditModal;
