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
                  {element.firstName} {element.lastName}
                </li>
                <li>{element.contractType}</li>
                <li>{element.dateBirth}</li>
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
                <li>{item.role}</li>
                <li>{item.department}</li>
                <li>{item.dateOfEmployment}</li>
              </ul>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};
