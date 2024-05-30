import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

import {
  monthsArray,
  departments,
  generateYears,
} from "../utils/dropDownOptions";
import useGetEmployeeData from "../http-methods/getEmployeeData";
import useGetEmployeeAppraisal from "../http-methods/getEmployeeAppraisal";
import TopThree from "../components/TopThree";
import League from "../components/tables/League";
import { Calendar, CalendarMonthFill, PeopleFill } from "react-bootstrap-icons";

const LeagueTable = ({ user }) => {
  const token = user?.accessToken;
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const { employees } = useGetEmployeeData(token);
  const { appraisal } = useGetEmployeeAppraisal(token);

  const filteredDataByDepartment = appraisal.filter(
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
      <Container
        fluid
        className="py-4 d-flex flex-column gap-3 col-sm-10 col-lg-12 col-md-10 mx-lg-auto mx-md-auto"
      >
        <h1 className="fs-2 fw-bold mx-auto">League Table</h1>

        <div
          className="d-flex flex-lg-row mx-auto justify-content-center gap-3 fw-bold flex-sm-column col-lg-10 col-sm-10 col-md-10"
          id="league-table-filter"
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
          <div className="col-lg-3 col-sm-10 col-md-10">
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

          <div className="col-lg-3 col-sm-10 col-md-10">
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

        <div
          className="col-lg-12 col-md-10  col-sm-12"
          id="league-table-wrapper"
        >
          <TopThree
            filteredData={getSortedEmployees.slice(0, 3)}
            employeeData={employees}
          />
          <League
            filteredData={getSortedEmployees}
            employeeData={employees}
            user={user}
          />
        </div>
      </Container>
    </>
  );
};

export default LeagueTable;
