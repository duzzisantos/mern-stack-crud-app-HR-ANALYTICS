import { useEffect, useState } from "react";
import http from "../components/http-config";
import axios from "axios";
import Auth from "../auth/auth";
import { Container, Form } from "react-bootstrap";
import ProgressComponent from "../components/ProgressComponent";
import HRComments from "../components/HRComments";
import EmployeeProfile from "../components/EmployeeProfile";

const DashBoard = () => {
  const [graphData, setGraphData] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");
  const [selectMonth, setSelectMonth] = useState("");
  const [selectYear, setSelectYear] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(http.appraisalURL);
      setGraphData(res.data);
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
  };

  const getEmployee = async () => {
    try {
      const res = await axios.get(http.registerURL);
      setEmployee(res.data);
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getEmployee();
  }, []);

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Get years you want to map on options element for querying appraisal period
  const startYear = 2015;
  const nextFifteenYears = 2030;
  const years = [];

  for (let year = startYear; year <= nextFifteenYears; year++) {
    years.push(year);
  }

  const filteredEmployees = employee.filter((element) =>
    search === element.ID.toString() ? element : !element
  );

  const filteredAppraisal = graphData.filter((element) =>
    search === element.ID.toString() &&
    selectMonth.match(new RegExp(`${element.month}`, "i")) &&
    selectYear.match(new RegExp(`${element.year}`, "i"))
      ? element
      : !element
  );

  return (
    <>
      <Auth />
      <Container
        fluid
        className="col-12 d-flex justify-content-center"
        style={{ height: "fit-content" }}
      >
        <div className="col-lg-9 d-flex flex-column gap-3 py-4">
          <h1 className="fs-3 fw-bold text-center">Appraisal Dashboard</h1>
          <div className="d-flex justify-content-center gap-3">
            <Form.Control
              size="sm"
              className="w-25"
              type="search"
              placeholder="Filter by Staff ID"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Form.Select
              size="sm"
              className="w-25"
              id="select-month"
              name="selected-month"
              onChange={(e) => setSelectMonth(e.target.value)}
            >
              {monthsArray.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              size="sm"
              className="w-25"
              id="selected-year"
              name="selected-year"
              onChange={(e) => setSelectYear(e.target.value)}
            >
              {years.map((element, index) => (
                <option key={index} value={element}>
                  {element}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className="col d-flex flex-nowrap p-1 gap-1 justify-content-between hstack vstack">
            {filteredAppraisal.map((item, index) => {
              const {
                quantityOfWork,
                qualityOfWork,
                delivery,
                responsibility,
                punctuality,
              } = item;
              return (
                <ProgressComponent
                  key={index}
                  quantityOfWork={quantityOfWork}
                  qualityOfWork={qualityOfWork}
                  delivery={delivery}
                  responsibility={responsibility}
                  punctuality={punctuality}
                />
              );
            })}

            {filteredAppraisal.map((item, i) => (
              <HRComments
                key={i}
                hrComments={item.hrComment}
                superVisorComments={item.supervisorComment}
              />
            ))}
            <EmployeeProfile employee={filteredEmployees} />
          </div>
          <div
            className=" bg-light shadow-sm py-2"
            style={{ height: "600px" }}
          ></div>
        </div>
      </Container>
    </>
  );
};

export default DashBoard;
