import { Card } from "react-bootstrap";
import { getEmployeeDetails } from "../utils/getEmployeeDetails";

const TopThree = ({ filteredData, employeeData }) => {
  return (
    <div className="col-9 col-md-12 d-flex hstack gap-3 my-4">
      {filteredData.map((person, index) => (
        <Card
          key={index}
          className="col-lg-3 col-md-4 col-sm-12 p-2 shadow-lg border-0"
        >
          <Card.Header className="text-center bg-transparent border-0 me-4">
            <h5 className="fs-6 fw-semibold text-uppercase">
              {person.firstName} {person.lastName}
            </h5>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-center">
              {getEmployeeDetails(person.ID, filteredData, employeeData).map(
                (entity, index) => (
                  <div key={index} className="d-flex felx-column gap-2">
                    <div>
                      <p className="fw-semibold text-capitalize">
                        {entity.role}
                      </p>
                      <div
                        className="mx-auto fs-2 d-flex justify-content-center align-items-center border border-2 border-secondary"
                        style={{
                          borderRadius: "50%",
                          height: "100px",
                          width: "100px",
                          backgroundColor: `${
                            index === 0
                              ? "gold"
                              : index === 1
                              ? "silver"
                              : index === 2
                              ? "#cd7f32"
                              : "transparent"
                          }`,
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TopThree;
