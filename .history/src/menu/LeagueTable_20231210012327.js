import { useState } from "react";
import Auth from "../auth/auth";
import { Container, Form } from "react-bootstrap";

const LeagueTable = () => {
  const [selection, setSelection] = useState("");
  const departments = [
    "IT",
    "Admin",
    "Procurement",
    "Finance",
    "Operations",
    "Customer service",
  ];
  console.log(selection);
  return (
    <>
      <Auth />
      <Container
        fluid
        className="col-12 d-flex justify-content-center"
        style={{ height: "fit-content" }}
      >
        <div className="col-lg-9 d-flex flex-column gap-3 py-4 justify-content-center align-items-center">
          <h1 className="fs-3 fw-bold text-center">League Table</h1>
          <div className="hstack gap-2 col-lg-6 col-md-12 mt-3 bg-danger">
            <Form.Label className="fw-bold w-75" htmlFor="department">
              Filter by department:{" "}
            </Form.Label>

            <Form.Select
              id="department"
              name="department"
              onChange={(e) => setSelection(e.target.value)}
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LeagueTable;
