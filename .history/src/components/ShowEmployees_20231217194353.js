import { useState } from "react";
import { departments } from "../utils/dropDownOptions";
import { Form } from "react-bootstrap";

const ShowEmployees = (employeeData) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const getDepartmentEmployees = () => {
    employeeData
      .filter((el) => selectedDepartment.match(new RegExp(el.department), "gi"))
      .map((d) => ({
        fullName: `${d.firstName} ${d.lastName}`,
      }));
  };
  return (
    <div className="dflex flex-column gap-2">
      <div>
        <Form.Label htmlFor="show-employee-department">Department</Form.Label>
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
        <Form.Label htmlFor="show-employee">Employee</Form.Label>
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
      <output></output>
    </div>
  );
};

export default ShowEmployees;
