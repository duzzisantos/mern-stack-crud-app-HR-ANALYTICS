import React, { useState } from "react";
import http from "../components/http-config";
import { departments, monthsArray } from "../utils/dropDownOptions";
import useGetEmployeeData from "../http-methods/getEmployeeData";
import { Button, Container, Form } from "react-bootstrap";
import ShowEmployees from "../components/ShowEmployees";

import {
  Calendar2Fill,
  CalendarMonthFill,
  ChatDots,
  ChatFill,
  PeopleFill,
  PersonBadge,
  PersonFill,
  StarFill,
} from "react-bootstrap-icons";

const EmployeeAppraisal = ({ user }) => {
  const today = new Date();
  const accessToken = user?.accessToken;

  const currentYear = today.getFullYear();
  const { employees } = useGetEmployeeData(accessToken);

  const [appraise, setAppraise] = useState({
    month: "January",
    year: currentYear,
    department: "",
    ID: 0,
    firstName: "",
    lastName: "",
    qualityOfWork: 0,
    delivery: 0,
    responsibility: 0,
    quantityOfWork: 0,
    punctuality: 0,
    supervisorComment: "",
    hrComment: "",
  });

  //Submits appraisal update
  const handleSubmit = () => {
    const isLocal = process.env.NODE_ENV === "development";
    const isProduction = process.env.NODE_ENV === "production";
    const { post, appraisalURL, appraiseURLServer, headers } = http;
    post(
      isLocal ? appraisalURL : isProduction && appraiseURLServer,
      appraise,
      headers(accessToken)
    )
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container
        id="appraisal-wrapper"
        fluid
        className="d-flex flex-lg-row flex-sm-column flex-md-column text-primary-emphasis col-lg-10 col-sm-12 col-md-12 pt-4 gap-5 overflow-hidden"
      >
        <ShowEmployees employeeData={employees} />

        <form
          className="mb-4 col-lg-6 col-sm-10 col-md-10 py-3 rounded-3 shadow-sm d-flex flex-column gap-3 justify-content-center align-items-center bg-success-subtle border border-success"
          encType="multipart/formdata"
          onSubmit={handleSubmit}
          id="appraisal-form"
        >
          <h1 className="fs-2 fw-bold">Appraise Employee</h1>
          <div className="col-11">
            <Form.Label htmlFor="month">
              <CalendarMonthFill /> Month
            </Form.Label>
            <Form.Select
              className="selection"
              id="month"
              name="month"
              onChange={(e) =>
                setAppraise({ ...appraise, month: e.target.value })
              }
            >
              <option name="Select">Select</option>
              {monthsArray.map((element, i) => (
                <option key={i} value={element}>
                  {element}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-11">
            <Form.Label htmlFor="year">
              <Calendar2Fill /> Year
            </Form.Label>
            <Form.Control
              required
              id="year"
              name="year"
              type="text"
              value={appraise.year}
              onChange={(e) =>
                setAppraise({ ...appraise, year: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="department">
              <PeopleFill /> Department
            </Form.Label>
            <Form.Select
              id="department"
              value={appraise.department}
              onChange={(e) =>
                setAppraise({ ...appraise, department: e.target.value })
              }
            >
              <option name="default">Select</option>
              {departments.map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </Form.Select>
          </div>
          <div className="col-11">
            <Form.Label htmlFor="ID1">
              <PersonBadge /> Staff ID
            </Form.Label>
            <Form.Control
              required
              id="ID"
              name="ID"
              type="number"
              value={appraise.ID}
              onChange={(e) => setAppraise({ ...appraise, ID: e.target.value })}
            />
          </div>
          <div className="col-11">
            {" "}
            <Form.Label htmlFor="firstName">
              <PersonFill /> First Name
            </Form.Label>
            <Form.Control
              required
              id="firstName"
              name="firstName"
              type="text"
              value={appraise.firstName}
              onChange={(e) =>
                setAppraise({ ...appraise, firstName: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="lastName">
              <PersonFill /> Last Name
            </Form.Label>
            <Form.Control
              required
              id="lastName"
              name="lastName"
              type="text"
              value={appraise.lastName}
              onChange={(e) =>
                setAppraise({ ...appraise, lastName: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="qtyWork">
              <StarFill /> Quality of Work
            </Form.Label>
            <Form.Range
              className="border-0"
              id="qtyWork"
              name="qtyWork"
              type="range"
              min={0}
              max={5}
              step={1}
              value={appraise.qualityOfWork}
              onChange={(e) =>
                setAppraise({ ...appraise, qualityOfWork: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="delivery">
              <StarFill /> Delivery
            </Form.Label>
            <Form.Range
              className="border-0"
              id="delivery"
              name="delivery"
              type="range"
              min={0}
              max={5}
              step={1}
              value={appraise.delivery}
              onChange={(e) =>
                setAppraise({ ...appraise, delivery: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="responsibility">
              <StarFill /> Responsibility
            </Form.Label>
            <Form.Range
              className="border-0"
              id="responsibility"
              name="responsibility"
              type="range"
              min={0}
              max={5}
              step={1}
              value={appraise.responsibility}
              onChange={(e) =>
                setAppraise({ ...appraise, responsibility: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="qntyWork">
              <StarFill /> Quantity of Work
            </Form.Label>
            <Form.Range
              className="border-0"
              id="qntyWork"
              name="qntyWork"
              type="range"
              min={0}
              max={5}
              step={1}
              value={appraise.quantityOfWork}
              onChange={(e) =>
                setAppraise({ ...appraise, quantityOfWork: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="punctuality">
              <StarFill /> Punctuality
            </Form.Label>
            <Form.Range
              className="border-0"
              id="punctuality"
              name="punctuality"
              type="range"
              min={0}
              max={5}
              step={1}
              value={appraise.punctuality}
              onChange={(e) =>
                setAppraise({ ...appraise, punctuality: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Form.Label htmlFor="superVisorComment">
              <ChatFill /> Supervisor Comment
            </Form.Label>
            <Form.Control
              required
              type="text"
              as={"textarea"}
              rows={3}
              id="supervisorComment"
              name="supervisorComment"
              value={appraise.supervisorComment}
              onChange={(e) =>
                setAppraise({ ...appraise, supervisorComment: e.target.value })
              }
            />
          </div>
          <div className="col-11 mb-3">
            <Form.Label htmlFor="hrComment">
              <ChatDots /> HR Comment
            </Form.Label>
            <Form.Control
              required
              type="text"
              rows={3}
              as={"textarea"}
              id="hrComment"
              name="hrComment"
              value={appraise.hrComment}
              onChange={(e) =>
                setAppraise({ ...appraise, hrComment: e.target.value })
              }
            />
          </div>
          <div className="col-11">
            <Button className="btn-success" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default EmployeeAppraisal;
