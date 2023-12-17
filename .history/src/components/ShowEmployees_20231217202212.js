import { useState } from "react";
import { departments } from "../utils/dropDownOptions";
import { Button, Form } from "react-bootstrap";

const ShowEmployees = ({ employeeData }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const getDepartmentEmployees = () => {
    return employeeData
      .filter((el) =>
        selectedDepartment.match(new RegExp(`${el.department}`), "gi")
      )
      .map((d) => `${d.firstName} ${d.lastName}`);
  };

  const renderEmployeeDetails = () => {
    for (const employee of employeeData) {
      if (
        selectedEmployee.includes(employee.firstName) &&
        selectedEmployee.endsWith(employee.lastName)
      ) {
        return {
          firstName: employee.firstName,
          lastName: employee.lastName,
          employeeID: employee.ID,
        };
      }
    }
  };

  const details = renderEmployeeDetails();

  return (
    <div className="d-flex flex-column col-lg-3 gap-3 border border-secondary-subtle h-100 p-3 rounded-2">
      <h2 className="fs-5 fw-bold">Search and copy employee details</h2>
      <div className="my-3">
        <Form.Label htmlFor="show-employee-department">
          By Department
        </Form.Label>
        <Form.Select
          id="show-employee-department"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          {departments.map((dep, i) => (
            <option value={dep} key={i}>
              {dep}
            </option>
          ))}
        </Form.Select>
      </div>
      <div>
        <Form.Label htmlFor="show-employee">By Employee</Form.Label>
        <Form.Select
          id="show-employee"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          {getDepartmentEmployees().map((dep, i) => (
            <option value={dep} key={i}>
              {dep}
            </option>
          ))}
        </Form.Select>
      </div>
      <output className="my-3 bg-secondary">
        <ol className="my-3 text-light">
          <li className="d-flex justify-content-between mb-2">
            {details.employeeID}
            <Button className="btn btn-sm">Copy</Button>
          </li>
          <li className="d-flex justify-content-between">
            {details.firstName}{" "}
            <Button className="btn btn-sm mb-2">Copy</Button>
          </li>
          <li className="d-flex justify-content-between">
            {details.lastName} <Button className="btn btn-sm">Copy</Button>
          </li>
        </ol>
      </output>
    </div>
  );
};

export default ShowEmployees;
