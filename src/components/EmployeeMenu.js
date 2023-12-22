import {
  Button,
  FormLabel,
  FormSelect,
  Offcanvas,
  Stack,
} from "react-bootstrap";
import { departments } from "../utils/dropDownOptions";
import { useState } from "react";
import { handleCopyElement } from "../utils/handleCopyElement";
import { Clipboard } from "react-bootstrap-icons";
const EmployeeMenu = ({ data, show, handleClose }) => {
  const [selected, setSelected] = useState("IT");
  const [isCopyID, setIsCopyID] = useState(false);
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
                  <article key={index}>
                    <ul>
                      <li>
                        <b>Name:</b> {item.firstName} {item.lastName}
                      </li>
                      <li>
                        <label className="fw-semibold">Employee ID:</label>
                        <input
                          type="text"
                          className="form-control-sm w-50 mx-2 border-0"
                          id={`employee-id-${item.ID}`}
                          value={`${item.ID}`}
                          readOnly
                        />
                        <Button
                          size="sm"
                          variant="transparent"
                          onClick={() =>
                            handleCopyElement(
                              `employee-id-${item.ID}`,
                              setIsCopyID
                            )
                          }
                        >
                          <Clipboard />
                        </Button>
                      </li>
                    </ul>
                  </article>
                ))}
            </div>
            <small>{isCopyID}</small>
          </Stack>
        </section>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default EmployeeMenu;
