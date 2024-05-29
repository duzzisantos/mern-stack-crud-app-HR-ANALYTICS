import { useMemo, useState } from "react";
import { departments } from "../utils/dropDownOptions";
import { Button, Form } from "react-bootstrap";
import { Clipboard, PeopleFill, PersonFill } from "react-bootstrap-icons";
import { handleCopyElement } from "../utils/handleCopyElement";

const ShowEmployees = ({ employeeData }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [isCopyID, setCopyID] = useState(false);
  const [isCopyFirstName, setCopyFirstName] = useState(false);
  const [isCopyLastName, setCopyLastName] = useState(false);

  const getDepartmentEmployees = () => {
    return employeeData
      .filter((el) =>
        selectedDepartment.match(new RegExp(`${el.department}`), "gi")
      )
      .map((d) => `${d.firstName} ${d.lastName}`);
  };

  const details = useMemo(() => {
    for (const employee of employeeData) {
      if (
        selectedEmployee.includes(employee.firstName) &&
        selectedEmployee.includes(employee.lastName)
      ) {
        return {
          firstName: employee.firstName,
          lastName: employee.lastName,
          employeeID: employee.ID,
        };
      }
    }
  }, [employeeData, selectedEmployee]);

  return (
    <div className="d-flex flex-column col-lg-4 col-sm-10 col-md-10 gap-3 shadow-sm h-100 p-3 rounded-2">
      <h2 className="fs-5 fw-bold">Search and copy employee details</h2>
      <div className="my-3">
        <Form.Label htmlFor="show-employee-department">
          <PeopleFill /> By Department
        </Form.Label>
        <Form.Select
          id="show-employee-department"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option>Select</option>
          {departments.map((dep, i) => (
            <option value={dep} key={i}>
              {dep}
            </option>
          ))}
        </Form.Select>
      </div>
      <div>
        <Form.Label htmlFor="show-employee">
          <PersonFill /> By Employee
        </Form.Label>
        <Form.Select
          id="show-employee"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option>Select</option>
          {getDepartmentEmployees().map((dep, i) => (
            <option value={dep} key={i}>
              {dep}
            </option>
          ))}
        </Form.Select>
      </div>
      <output className="my-3 shadow-sm rounded-2 border">
        <ol className="my-3 mx-2 gap-2 vstack">
          <li className="d-flex justify-content-between hstack gap-2">
            <label>ID: </label>
            <input
              className="border-bottom border-0 rounded-0"
              type="text"
              value={`${details?.employeeID ?? ""}`}
              id="employee-id-input"
              readOnly
            />{" "}
            <Button
              variant="transparent"
              className="btn btn-sm text-secondary"
              onClick={() => handleCopyElement("employee-id-input", setCopyID)}
            >
              <Clipboard />
            </Button>
          </li>
          <li className="d-flex justify-content-between hstack gap-2">
            <label>First: </label>
            <input
              type="text"
              className="border-bottom border-0 rounded-0"
              value={`${details?.firstName ?? ""}`}
              id="employee-firstName-input"
              readOnly
            />{" "}
            <Button
              variant="transparent"
              className="btn btn-sm mb-2 text-secondary"
              onClick={() =>
                handleCopyElement("employee-firstName-input", setCopyFirstName)
              }
            >
              <Clipboard />
            </Button>
          </li>
          <li className="d-flex justify-content-between hstack gap-2">
            <label>Last: </label>
            <input
              type="text"
              className="border-bottom border-0 rounded-0"
              value={`${details?.lastName ?? ""}`}
              id="employee-lastName-input"
              readOnly
            />{" "}
            <Button
              variant="transparent"
              className="btn btn-sm mb-2 text-secondary"
              onClick={() =>
                handleCopyElement("employee-lastName-input", setCopyLastName)
              }
            >
              <Clipboard />
            </Button>
          </li>
        </ol>
      </output>
      {isCopyFirstName && isCopyID && isCopyLastName}
    </div>
  );
};

export default ShowEmployees;
