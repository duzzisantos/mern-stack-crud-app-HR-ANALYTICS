import { useState } from "react";
import Auth from "../auth/auth";
import { Alert, Button, Container, Form } from "react-bootstrap";
import {
  monthsArray,
  departments,
  generateYears,
} from "../utils/dropDownOptions";
import useGetEmployeeData from "../http-methods/getEmployeeData";
import useGetEmployeeAppraisal from "../http-methods/getEmployeeAppraisal";
import TopThree from "../components/TopThree";

const LeagueTable = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedMonth, setSelectedMonth] = useState(monthsArray[0]);
  const [selectedYear, setSelectedYear] = useState(generateYears()[0]);
  const getEmployees = useGetEmployeeData();
  const getAppraisal = useGetEmployeeAppraisal();
  const { isError, isLoading, refetch, data } = getEmployees;

  if (isLoading || getAppraisal.isLoading) {
    return <Alert>Page is currently loading</Alert>;
  } else if (isError || getAppraisal.isError) {
    <Alert variant="warning">
      Error in loading resources{" "}
      <Button
        variant="secondary"
        onClick={() => {
          refetch();
          getAppraisal.refetch();
        }}
      >
        Reload
      </Button>
    </Alert>;
  } else if (
    !data ||
    data === undefined ||
    !getAppraisal.data ||
    getAppraisal.data === undefined
  ) {
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
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
            <Form.Label htmlFor="league-month">Month</Form.Label>
            <Form.Select
              id="league-month"
              name="league-month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {monthsArray.map((onwa) => (
                <option value={onwa} key={onwa}>
                  {onwa}
                </option>
              ))}
            </Form.Select>

            <Form.Label htmlFor="league-year">Year</Form.Label>
            <Form.Select
              id="league-year"
              name="league-year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {generateYears().map((afor, index) => (
                <option value={afor} key={index}>
                  {afor}
                </option>
              ))}
            </Form.Select>
          </div>
          <TopThree
            employeeData={data}
            department={selectedDepartment}
            appraisalData={getAppraisal.data}
            year={selectedYear}
          />
        </div>
      </Container>
    </>
  );
};

export default LeagueTable;
