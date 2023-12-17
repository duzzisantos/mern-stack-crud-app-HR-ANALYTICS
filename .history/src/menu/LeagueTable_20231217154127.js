import { useState } from "react";
import Auth from "../auth/auth";
import { Alert, Button, Container, Form } from "react-bootstrap";
import useGetEmployeeData from "../http-methods/getEmployeeData";
import TopThree from "../components/TopThree";

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

  const getEmployees = useGetEmployeeData();
  const { isError, isLoading, refetch, data } = getEmployees;

  if (isLoading) {
    return <Alert>Page is currently loading</Alert>;
  } else if (isError) {
    <Alert variant="warning">
      Error in loading resources{" "}
      <Button variant="secondary" onClick={() => refetch}>
        Reload
      </Button>
    </Alert>;
  } else if (!data || data === undefined) {
    <Alert>Data is unavailable at the moment. Please try again later.</Alert>;
  }

  return (
    <>
      <Auth />
      <Container
        fluid
        className="container-fluid pt-4 col-12 d-flex flex-column justify-content-center align-items-center"
        style={{ height: "fit-content" }}
      >
        <h1 className="fs-2 fw-bold">League Table</h1>
        <div className="col-lg-6 col-md-10 d-flex justify-content-center">
          <div className="hstack d-flex gap-2  col-lg-6 col-md-12 mt-3">
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
          <TopThree employeeData={data} />
        </div>
      </Container>
    </>
  );
};

export default LeagueTable;
