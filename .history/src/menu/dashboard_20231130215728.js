import React from "react";
import { useEffect, useState } from "react";
import http from "../components/http-config";
import axios from "axios";
import Auth from "../auth/auth";
import { Container, Form } from "react-bootstrap";

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

  return (
    <>
      <Auth />
      <Container
        fluid
        className="col-12 bg-warning d-flex justify-content-center"
      >
        <div className="col-lg-9 d-flex flex-column gap-3">
          <h3>Appraisal Dashboard</h3>
          <div className="bg-info d-flex justify-content-center gap-3">
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
            <select
              className="year-select"
              id="selected-year"
              name="selected-year"
              onChange={(e) => setSelectYear(e.target.value)}
            >
              {years.map((element, index) => (
                <option key={index} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>

          <div className="dashboard-wrapper">
            <fieldset className="dashboard-fieldset">
              {graphData
                .filter((data) =>
                  search === "" ||
                  selectMonth === "default" ||
                  selectYear === "default"
                    ? !data
                    : search.match(new RegExp(`${data.ID}`), "gi") &&
                      selectMonth.match(new RegExp(`${data.month}`), "gi") &&
                      selectYear.match(new RegExp(`${data.year}`), "gi")
                    ? data
                    : !data
                )
                .map((data) => (
                  <div className="data-mapper" key={data._id}>
                    <div className="progress-wrapper">
                      <label htmlFor="quality">
                        Quality of work -{" "}
                        <span className="label-span">{data.qualityOfWork}</span>
                      </label>
                      <progress
                        id="quality"
                        max={5}
                        value={data.qualityOfWork}
                      ></progress>
                      <label htmlFor="delivery">
                        Delivery -{" "}
                        <span className="label-span">{data.delivery}</span>
                      </label>
                      <progress id="delivery" max={5} value={data.delivery}>
                        5
                      </progress>
                      <label htmlFor="responsibility">
                        Responsibility -{" "}
                        <span className="label-span">
                          {data.responsibility}
                        </span>
                      </label>
                      <progress
                        id="responsibility"
                        max={5}
                        value={data.responsibility}
                      >
                        3
                      </progress>
                      <label htmlFor="quantity">
                        Quantity of work -{" "}
                        <span className="label-span">
                          {data.quantityOfWork}
                        </span>
                      </label>
                      <progress
                        id="quantity"
                        max={5}
                        value={data.quantityOfWork}
                      >
                        5
                      </progress>
                      <label htmlFor="punctuality">
                        Punctuality -{" "}
                        <span className="label-span">{data.punctuality}</span>
                      </label>
                      <progress
                        id="punctuality"
                        max={5}
                        value={data.punctuality}
                      >
                        2
                      </progress>
                    </div>
                    <div className="appraisal-comments">
                      <fieldset className="inner-fieldset">
                        <h5>
                          HR Comment - {data.month}, {data.year}
                        </h5>
                        <em>
                          <blockquote>
                            {'"'}
                            {data.hrComment}
                            {'"'}
                          </blockquote>
                        </em>
                      </fieldset>
                      <fieldset className="inner-fieldset">
                        <h5>
                          Supervisor Comment - {data.month}, {data.year}
                        </h5>
                        <em>
                          <blockquote>
                            {'"'}
                            {data.supervisorComment}
                            {'"'}
                          </blockquote>
                        </em>
                      </fieldset>
                    </div>
                    <div className="average-appraisal">
                      <div className="user-profile">
                        {employee
                          .filter((data) =>
                            search === "" ||
                            selectMonth === "default" ||
                            selectYear === "default"
                              ? !data
                              : search.match(new RegExp(`${data.ID}`), "gi")
                              ? data
                              : !data
                          )
                          .map((data) => (
                            <img
                              key={data._id}
                              src={data.photo}
                              alt="Staff"
                              id="dashboard-img"
                            />
                          ))}
                      </div>
                      <span className="dashboard-span">
                        {data.firstName} {data.lastName}
                      </span>
                      <span className="dashboard-span">{data.department}</span>
                      <label htmlFor="positive">Performance score</label>
                      <progress
                        id="positive"
                        value={
                          (data.quantityOfWork +
                            data.qualityOfWork +
                            data.punctuality +
                            data.responsibility +
                            data.delivery) /
                          5
                        }
                        max={5}
                      >
                        80%
                      </progress>
                      <label htmlFor="score">Management satisfaction</label>
                      <progress
                        id="score"
                        value={
                          (data.delivery +
                            data.qualityOfWork +
                            data.quantityOfWork +
                            data.punctuality +
                            data.responsibility) /
                            5 -
                          0.15
                        }
                        max={5}
                      >
                        80%
                      </progress>
                    </div>
                  </div>
                ))}
            </fieldset>
          </div>
          <div className="other-charts">
            <h5 style={{ marginLeft: "10%" }}>Yearly appraisal score trend</h5>
            {graphData
              .filter((data) =>
                search === "" ||
                selectMonth === "default" ||
                selectYear === "default"
                  ? !data
                  : search.match(new RegExp(`${data.ID}`), "gi")
                  ? data
                  : !data
              )
              .map((data) => (
                <div className="bar-graph" key={data._id}>
                  <label style={{ marginLeft: "10%" }}>
                    {data.month} -{" "}
                    {(data.delivery +
                      data.qualityOfWork +
                      data.quantityOfWork +
                      data.punctuality +
                      data.responsibility) /
                      5}
                  </label>
                  <progress
                    className="bar"
                    value={
                      (data.delivery +
                        data.qualityOfWork +
                        data.quantityOfWork +
                        data.punctuality +
                        data.responsibility) /
                      5
                    }
                    max={5}
                  ></progress>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashBoard;
