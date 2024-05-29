import React, { useState } from "react";
import { Container, Alert, Button, Form } from "react-bootstrap";

import {
  monthsArray,
  generateYears,
  departments,
} from "../utils/dropDownOptions";
import useEmployeeAppraisal from "../http-methods/getEmployeeAppraisal";
import useGetEmployeeData from "../http-methods/getEmployeeData";
import AppraisalManagement from "../components/tables/AppraisalManagement";
import HeadCount from "../components/HeadCount";
import { Calendar, CalendarMonthFill, PeopleFill } from "react-bootstrap-icons";

const HRManager = ({ user }) => {
  const accessToken = user?.accessToken;
  const getAppraisal = useEmployeeAppraisal(accessToken);
  const getEmployees = useGetEmployeeData(accessToken);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedMonth, setSelectedMonth] = useState(monthsArray[0]);
  const [selectedYear, setSelectedYear] = useState(generateYears()[0]);

  const { isLoading, isError, data, refetch } = getAppraisal;

  //Handle error before consuming data from use query hook
  if (isError || getEmployees.isError) {
    return (
      <Alert variant="warning">
        Error in loading data{" "}
        <Button onClick={() => refetch}>Reload data</Button>
      </Alert>
    );
  } else if (isLoading || getEmployees.isLoading) {
    return <Alert>Employee list and departments are loading</Alert>;
  } else if (
    !data ||
    data === undefined ||
    !getEmployees.data ||
    getEmployees.data === undefined
  ) {
    return <Alert>Data is unavailable at the moment</Alert>;
  }

  return (
    <>
      <Container
        fluid
        className="py-4 d-flex flex-column gap-3 justify-content-center align-items-center"
      >
        <h1 className="fw-bold fs-2">HR Management</h1>

        <div className="d-flex flex-lg-row justify-content-center gap-3 fw-bold flex-sm-column col-lg-10 col-sm-10 col-md-10">
          <div className="col-lg-3 col-md-10 col-sm-10">
            <Form.Label className="fw-bold" htmlFor="department">
              <PeopleFill /> Department:{" "}
            </Form.Label>

            <Form.Select
              size="sm"
              id="department"
              name="department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option>Please Select</option>
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-lg-3 col-md-10 col-sm-10">
            {" "}
            <Form.Label className="fw-bold" htmlFor="league-month">
              <CalendarMonthFill /> Month
            </Form.Label>
            <Form.Select
              size="sm"
              id="league-month"
              name="league-month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option>Please Select</option>
              {monthsArray.map((onwa) => (
                <option value={onwa} key={onwa}>
                  {onwa}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col-lg-3 col-md-10 col-sm-10">
            <Form.Label className="fw-bold" htmlFor="league-year">
              <Calendar /> Year
            </Form.Label>
            <Form.Select
              size="sm"
              id="league-year"
              name="league-year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option>Please Select</option>
              {generateYears().map((afor, index) => (
                <option value={afor} key={index}>
                  {afor}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <AppraisalManagement
          appraisalData={data}
          selectedDepartment={selectedDepartment}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          token={accessToken}
        />

        <HeadCount
          selectedDepartment={selectedDepartment}
          employeeData={getEmployees.data}
        />
      </Container>
    </>
  );
};

export default HRManager;
