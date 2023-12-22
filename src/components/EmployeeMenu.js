import { FormLabel, FormSelect, Offcanvas, Stack } from "react-bootstrap";
import { departments } from "../utils/dropDownOptions";
import { useState } from "react";
const EmployeeMenu = ({ data, show, handleClose }) => {
  const [selected, setSelected] = useState("IT");
  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Employees</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <section>
          <h6 className="fw-semibold">Employee List</h6>
          <Stack gap={3}>
            <div className="d-flex flex-column">
              <FormLabel htmlFor="employee-list-department">
                Select Department:
              </FormLabel>
              <FormSelect
                id="employee-list-department"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {departments.map((d, index) => (
                  <option key={index}>{d}</option>
                ))}
              </FormSelect>
            </div>
            <div className="vstack gap-2 border-end border-success border-5">
              {data
                .filter((element) => selected.includes(element.department))
                .map((item, index) => (
                  <ul key={index}>
                    <li>
                      <b>Name:</b> {item.firstName} {item.lastName}
                    </li>
                    <li>
                      <b>Employee ID:</b> {item.ID}
                    </li>
                  </ul>
                ))}
            </div>
          </Stack>
        </section>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default EmployeeMenu;
