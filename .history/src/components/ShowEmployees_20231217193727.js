import { useState } from "react";
import { departments } from "../utils/dropDownOptions";
import { Form } from "react-bootstrap";

const ShowEmployees = (appraisalData, employeeData) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
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
    </div>
  );
};

export default ShowEmployees;
