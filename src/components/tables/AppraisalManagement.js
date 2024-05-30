import { useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import AppraisalEditModal from "../modals/AppraisalEditModal";
import AppraisalDeleteModal from "../modals/AppraisalDelete";

const AppraisalManagement = ({
  appraisalData,
  selectedDepartment,
  selectedMonth,
  selectedYear,
  token,
}) => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [chooseID, setChooseID] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (id) => {
    setShow(true);
    setChooseID(id);
  };

  const handleShowDelete = (id) => {
    setShowDelete(true);
    setChooseID(id);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };
  const filteredData = appraisalData.filter(
    (element) =>
      selectedDepartment.match(new RegExp(`${element.department}`), "gi") &&
      selectedMonth.match(new RegExp(`${element.month}`), "gi") &&
      selectedYear.toString().match(new RegExp(`${element.year}`), "gi")
  );

  return (
    <div className="table-responsive col-lg-10 col-md-12 col-sm-12 mx-auto px-lg-5 my-4">
      <h2 className="fs-5 fw-bold">Appraisal Management</h2>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Quality of work</th>
            <th>Quantity of work</th>
            <th>Responsibility</th>
            <th>Punctuality</th>
            <th>Delivery</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody security="secure">
          {filteredData.map((element, index) => (
            <tr key={index} className="table-sm-y">
              <td>
                {element.firstName} {element.lastName}
              </td>
              <td>{element.qualityOfWork}</td>
              <td>{element.quantityOfWork}</td>
              <td>{element.responsibility}</td>
              <td>{element.punctuality}</td>
              <td>{element.delivery}</td>
              <td>
                <Button
                  variant="transparent"
                  className="btn btn-outline-success border-0 text-outline-light"
                  onClick={(id) => handleShow(element._id)}
                >
                  <Pencil />
                </Button>
              </td>
              <td>
                <Button
                  variant="transparent"
                  className="btn btn-outline-danger border-0 text-outline-light"
                  onClick={(id) => handleShowDelete(element._id)}
                >
                  <Trash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {!filteredData.length && (
        <Alert variant="warning">
          Appraisal data unavailable. Ensure to use the correct filters above.
        </Alert>
      )}

      {show && (
        <AppraisalEditModal
          show={show}
          handleClose={handleClose}
          selectedID={chooseID}
          token={token}
          appraisalData={filteredData}
        />
      )}

      {showDelete && (
        <AppraisalDeleteModal
          handleClose={handleCloseDelete}
          show={showDelete}
          selectedID={chooseID}
        />
      )}
    </div>
  );
};

export default AppraisalManagement;
