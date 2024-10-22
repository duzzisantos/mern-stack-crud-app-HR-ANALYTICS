import { Alert, Card } from "react-bootstrap";
import { getEmployeeDetails } from "../utils/getEmployeeDetails";

const TopThree = ({ filteredData, employeeData }) => {
  return (
    <div
      className="col-lg-12 col-md-12 d-flex flex-lg-row flex-sm-column justify-content-center py-2 px-2 hstack gap-3 my-4"
      id="top-three-wrapper"
    >
      {filteredData.map((person, outerIndex) => (
        <Card
          key={outerIndex}
          className="col-lg-3 bg-success-subtle border border-success small-screen-display smaller-box-full col-md-10 col-sm-12 p-2 shadow-sm  medal-cards"
        >
          <Card.Header className="text-center bg-transparent border-0 me-4">
            <h5 className="fs-6 fw-semibold text-secondary">
              {person.firstName} {person.lastName}
            </h5>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-center">
              {getEmployeeDetails(person.ID, filteredData, employeeData).map(
                (entity, index) => (
                  <div key={index} className="d-flex felx-column gap-2">
                    <div>
                      <p className="fw-normal text-capitalize text-secondary">
                        {entity.role}
                      </p>
                      <div
                        className="mx-auto fs-2 d-flex justify-content-center align-items-center fw-bold text-secondary"
                        style={{
                          borderRadius: "50%",
                          height: "100px",
                          width: "100px",
                          border: `${
                            outerIndex === 0
                              ? "15px solid gold"
                              : outerIndex === 1
                              ? "15px solid silver"
                              : outerIndex === 2
                              ? "15px solid #cd7f32"
                              : "transparent"
                          }`,
                        }}
                      >
                        {outerIndex + 1}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
      {!filteredData.length && (
        <Alert variant="warning" className="col-lg-10 col-sm-10 backup-100">
          Please search item from filter.
        </Alert>
      )}
    </div>
  );
};

export default TopThree;
