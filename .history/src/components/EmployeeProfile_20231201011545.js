const EmployeeProfile = ({ employee }) => {
  return (
    <div
      className="d-flex flex-column p-4 gap-3 bg-light shadow-sm rounded-3 col-3"
      style={{ height: "600px" }}
    >
      <div className="d-flex flex-column gap-3">
        <small>Employee Details</small>
        <div className="p-2">
          <article>
            {employee.map((element, i) => (
              <ul key={i}>
                <li>
                  Name:
                  {element.firstName} {element.lastName}
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
        <small>Department Details</small>
        <div className="p-2">
          <article>
            {employee.map((item, i) => (
              <ul key={i}>
                <li>Role: {item.role}</li>
                <li>Department: {item.department}</li>
                <li>Employment Date: {item.dateOfEmployment}</li>
              </ul>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
