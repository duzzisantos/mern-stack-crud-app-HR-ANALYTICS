import { Alert, Card } from "react-bootstrap";
import { getEmployeeDetails } from "../utils/getEmployeeDetails";

const TopThree = ({ filteredData, employeeData }) => {
  return (
    <div className="col-9 col-md-12 d-flex justify-content-center py-2 px-2 hstack gap-3 my-4">
      {filteredData.map((person, outerIndex) => (
        <Card
          key={outerIndex}
          className="col-lg-3 col-md-4 col-sm-12 p-2 shadow-sm border-0"
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
                        className="mx-auto fs-2 d-flex justify-content-center align-items-center fw-bold text-dark"
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
        <Alert variant="warning" className="col-9">
          Unfortunately, that query does not exist. Please try another filter
          combination using the dropdown options above.
        </Alert>
      )}
    </div>
  );
};

export default TopThree;
