import React, { useState, useEffect } from "react";
import { Container, Alert, Button, Form } from "react-bootstrap";

import {
  monthsArray,
  generateYears,
  departments,
} from "../utils/dropDownOptions";
import useEmployeeAppraisal from "../http-methods/getEmployeeAppraisal";
import AppraisalManagement from "../components/tables/AppraisalManagement";
import HeadCount from "../components/HeadCount";

const Settings = ({ user }) => {
  const [accessToken, setAccessToken] = useState("");
  const getAppraisal = useEmployeeAppraisal(accessToken);
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedMonth, setSelectedMonth] = useState(monthsArray[0]);
  const [selectedYear, setSelectedYear] = useState(generateYears()[0]);

  useEffect(() => {
    user && user.getIdToken().then((token) => setAccessToken(token));
  }, [user]);

  const { isLoading, isError, data, refetch } = getAppraisal;

  //Handle error before consuming data from use query hook
  if (isError) {
    return (
      <Alert variant="warning">
        Error in loading data{" "}
        <Button onClick={() => refetch}>Reload data</Button>
      </Alert>
    );
  } else if (isLoading) {
    return <Alert>Employee list and departments are loading</Alert>;
  } else if (!data || data === undefined) {
    return <Alert>Data is unavailable at the moment</Alert>;
  }

  return (
    <>
      <Container
        fluid
        className="py-4 d-flex flex-column gap-3 justify-content-center align-items-center col-9"
      >
        <h1 className="fw-bold fs-2">HR Management</h1>
        <div className="d-flex justify-content-center mt-2">
          <div className="hstack gap-3">
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
        <AppraisalManagement
          appraisalData={data}
          selectedDepartment={selectedDepartment}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          token={accessToken}
        />

        <HeadCount
          selectedDepartment={selectedDepartment}
          appraisalData={data}
        />
      </Container>
    </>
  );
};

export default Settings;
