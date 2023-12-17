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
import League from "../components/tables/League";

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

  const filteredDataByDepartment = getAppraisal.data.filter(
    (element) =>
      selectedDepartment.match(new RegExp(`${element.department}`), "gi") &&
      selectedMonth.match(new RegExp(`${element.month}`), "gi") &&
      selectedYear.toString().match(new RegExp(`${element.year}`), "gi")
  );

  const getSortedEmployees = filteredDataByDepartment
    .map((item) => ({
      ...item,
      averageScore:
        (item.qualityOfWork +
          item.quantityOfWork +
          item.punctuality +
          item.delivery +
          item.responsibility) /
        5,
    }))
    .sort((curr, prev) => prev.averageScore - curr.averageScore);

  return (
    <>
      <Auth />
      <Container
        fluid
        className="container-fluid pt-4 col-12 d-flex flex-column justify-content-center align-items-center"
        style={{ height: "fit-content" }}
      >
        <h1 className="fs-2 fw-bold">League Table - {selectedDepartment}</h1>
        <div className="d-flex justify-content-center mt-2">
          <div className="hstack gap-5">
            <div>
              <Form.Label className="fw-bold w-75" htmlFor="department">
                Department:{" "}
              </Form.Label>

              <Form.Select
                size="sm"
                id="department"
                name="department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div>
              {" "}
              <Form.Label className="fw-bold w-75" htmlFor="league-month">
                Month
              </Form.Label>
              <Form.Select
                size="sm"
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
            </div>

            <div>
              <Form.Label className="fw-bold w-75" htmlFor="league-year">
                Year
              </Form.Label>
              <Form.Select
                size="sm"
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
          </div>
        </div>

        <div className="col-10">
          <TopThree
            filteredData={getSortedEmployees.slice(0, 3)}
            employeeData={data}
          />
        </div>
        <League filteredData={getSortedEmployees} employeeData={data} />
      </Container>
    </>
  );
};

export default LeagueTable;
