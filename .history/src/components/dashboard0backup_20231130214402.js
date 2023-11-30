import React from "react";

const DashBoard = () => {
  return (
    <div className="page-wrapper">
      <h3>Appraisal Dashboard</h3>
      <div className="filter-wrapper">
        <input type="search" placeholder="Filter by Staff ID" />
        <select className="month-select" id="month1" name="month1">
          <option name="Select" disabled>
            --Select--
          </option>
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
        <select className="month-select" id="year-sel" name="year-sel">
          <option name="Select" disabled>
            --Select--
          </option>
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
      {/* <hr></hr> */}
      <div className="rating-data">
        <div id="rating-graph">
          <h5>Maxine Musterfrau appraisal points summary</h5>

          <hr></hr>
          {/*data here*/}
          <div id="left-graph"></div>
        </div>
        <div id="rating-summary">
          <div id="summary-image-area">
            <div className="dashboard-image-holder">
              <img
                src={
                  "https://p0.pikist.com/photos/973/269/business-woman-professional-suit-elegant-female-person-business-people-women.jpg"
                }
                alt="what"
                id="dashboard-img"
              />
            </div>
            <span className="summary-span">Maxine Musterfrau</span>
            <span className="summary-span">Job title</span>
            <span className="summary-span">Email</span>
            <span className="summary-span">Department</span>
          </div>
          <div id="main-summary">
            <h5>Top annual appraisal comments</h5>

            <hr></hr>

            {/*data here*/}
            <div id="right-graph"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
