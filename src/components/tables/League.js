import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import RecommendationModal from "../modals/Recommendationmodal";

const League = ({ filteredData, employeeData, user }) => {
  const [showmodal, setShowModal] = useState(false);
  const [selectedProps, setSelectedProps] = useState({
    employee: "",
    employeeID: 0,
    average: 0,
    month: "",
    year: 0,
  });
  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = (ID, firstName, lastName, average, month, year) => {
    setShowModal(true);
    setSelectedProps({
      employee: `${firstName} ${lastName}`,
      employeeID: ID,
      average: average,
      month: month,
      year: year,
    });
  };

  const getAverageScore = (
    quantityOfWork,
    qualityOfWork,
    responsibility,
    delivery,
    punctuality
  ) => {
    return (
      (quantityOfWork +
        qualityOfWork +
        responsibility +
        delivery +
        punctuality) /
      5
    );
  };
  return (
    <>
      {filteredData.length ? (
        <div className="table-responsive col-lg-10 col-md-12 col-sm-12 mx-auto px-lg-5 px-sm-5 my-4">
          <h2 className="fs-4 fw-bold">League Standings</h2>
          <Table size="sm" bordered hover responsive>
            <thead>
              <tr>
                <th>Position</th>
                <th>Employee</th>
                <th>Role</th>
                <th>Quality of work</th>
                <th>Quantity of work</th>
                <th>Responsibility</th>
                <th>Punctuality</th>
                <th>Delivery</th>
                <th>Average Score</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((element, index) => {
                const {
                  delivery,
                  punctuality,
                  qualityOfWork,
                  quantityOfWork,
                  responsibility,
                  firstName,
                  lastName,
                  ID,
                  month,
                  year,
                } = element;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {firstName} {lastName}
                    </td>
                    <td>
                      {employeeData
                        .filter((each) => each.ID === ID)
                        .map((el) => el.role)}
                    </td>
                    <td>{qualityOfWork}</td>
                    <td>{quantityOfWork}</td>
                    <td>{responsibility}</td>
                    <td>{punctuality}</td>
                    <td>{delivery}</td>
                    <td>
                      {getAverageScore(
                        quantityOfWork,
                        qualityOfWork,
                        responsibility,
                        delivery,
                        punctuality
                      )}
                    </td>
                    <td>
                      <Button
                        variant="transparent"
                        className="rounded-5"
                        onClick={(id) =>
                          handleShow(
                            ID,
                            firstName,
                            lastName,
                            getAverageScore(
                              quantityOfWork,
                              qualityOfWork,
                              responsibility,
                              delivery,
                              punctuality
                            ),
                            month,
                            year
                          )
                        }
                      >
                        <ThreeDotsVertical />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          {showmodal && (
            <RecommendationModal
              show={showmodal}
              handleClose={handleClose}
              employeeID={selectedProps.employeeID}
              employee={selectedProps.employee}
              appraisalData={filteredData}
              averageScore={selectedProps.average}
              user={user}
              month={selectedProps.month}
              year={selectedProps.year}
            />
          )}
        </div>
      ) : null}
    </>
  );
};

export default League;
