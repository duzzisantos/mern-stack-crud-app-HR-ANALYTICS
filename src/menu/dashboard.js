import React from "react";
import { useEffect, useState } from "react";
import http from "../components/http-config";
import axios from "axios";
import Auth from "../auth/auth";

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

  return (
    <>
      <Auth />
      <div className="page-wrapper">
        <h3>Appraisal Dashboard</h3>
        <div className="filter-wrapper">
          <input
            type="search"
            placeholder="Filter by Staff ID"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="month-select"
            id="month"
            name="month"
            onChange={(e) => setSelectMonth(e.target.value)}
          >
            <option name="default">--Month--</option>
            <option name="January">January</option>
            <option name="February">February</option>
            <option name="March">March</option>
            <option name="April">April</option>
            <option name="May">May</option>
            <option name="June">June</option>
            <option name="July">July</option>
            <option name="August">August</option>
            <option name="September">September</option>
            <option name="October">October</option>
            <option name="November">November</option>
            <option name="December">December</option>
          </select>
          <select
            className="year-select"
            id="year"
            name="year"
            onChange={(e) => setSelectYear(e.target.value)}
          >
            <option name="default">--Year--</option>
            <option name="2015">2015</option>
            <option name="2016">2016</option>
            <option name="2017">2017</option>
            <option name="2018">2018</option>
            <option name="2019">2019</option>
            <option name="2020">2020</option>
            <option name="2021">2021</option>
            <option name="2022">2022</option>
            <option name="2023">2023</option>
            <option name="2024">2024</option>
            <option name="2025">2025</option>
            <option name="2026">2026</option>
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
                      <span className="label-span">{data.responsibility}</span>
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
                      <span className="label-span">{data.quantityOfWork}</span>
                    </label>
                    <progress id="quantity" max={5} value={data.quantityOfWork}>
                      5
                    </progress>
                    <label htmlFor="punctuality">
                      Punctuality -{" "}
                      <span className="label-span">{data.punctuality}</span>
                    </label>
                    <progress id="punctuality" max={5} value={data.punctuality}>
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
    </>
  );
};

export default DashBoard;
