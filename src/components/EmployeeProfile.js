const EmployeeProfile = ({ employee }) => {
  return (
    <div
      className="d-flex flex-column p-4 gap-3  shadow-sm rounded-1 col-lg-4"
      style={{ height: "600px" }}
    >
      <div className="d-flex flex-column gap-3">
        <small className="fw-bold">Employee Details</small>
        <div className="p-2">
          <article>
            {employee.map((element, i) => (
              <ul key={i}>
                <li>
                  Name: {element.firstName} {element.lastName}
                </li>

                <li>Contract Type: {element.contractType}</li>
                <li>Birthday: {element.dateBirth}</li>
              </ul>
            ))}
          </article>
        </div>
      </div>
      <hr />

      <div className="d-flex flex-column gap-3">
        <small className="fw-bold">Department Details</small>
        <div className="p-2">
          <article>
            {employee.map((item, i) => (
              <ul key={i}>
                <li>Role: {item.role}</li>
                <li>Department: {item.department}</li>
                <li>Employment Date: {item.dateEmployment}</li>
              </ul>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
