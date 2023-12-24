import { Modal, Button } from "react-bootstrap";
import useMutate from "../../http-methods/useMutate";
import { useMutation, useQueryClient } from "react-query";
import http from "../http-config";
const AppraisalDeleteModal = ({ show, handleClose, selectedID, token }) => {
  const { delete: axiosDelete, appraisalURL, appraiseURLServer } = http;
  const queryClient = useQueryClient();

  const handleSettled = () => {
    queryClient.invalidateQueries(["EmployeeAppraisal"]);
  };
  const mutation = useMutate(
    {},
    selectedID,
    token,
    useMutation,
    axiosDelete,
    appraisalURL ?? appraiseURLServer,
    handleSettled
  );

  const handleDelete = () => {
    mutation.mutate({ selectedID });
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Deleting Appraisal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="fs-5">Do you really want to delete this appraisal? </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="transparent"
          className="border border-secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          className="border-0 btn-outline-danger text-light"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AppraisalDeleteModal;
