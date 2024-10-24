import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

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
  const { appraisal } = useEmployeeAppraisal(accessToken);
  const { employees } = useGetEmployeeData(accessToken);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <>
      <Container
        fluid
        className="text-primary-emphasis py-4 d-flex flex-column gap-3 col-sm-10 col-lg-12 col-md-10 mx-lg-auto mx-md-auto"
      >
        <h1 className="fw-bold fs-2 mx-auto">HR Management</h1>

        <div
          className="d-flex flex-lg-row mx-auto justify-content-center gap-3 fw-bold flex-sm-column col-lg-10 col-sm-10 col-md-10"
          id="hr-manager-filter"
        >
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

        <div className="hr-table-wrapper">
          <AppraisalManagement
            appraisalData={appraisal}
            selectedDepartment={selectedDepartment}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            token={accessToken}
          />

          <HeadCount
            selectedDepartment={selectedDepartment}
            employeeData={employees}
          />
        </div>
      </Container>
    </>
  );
};

export default HRManager;
