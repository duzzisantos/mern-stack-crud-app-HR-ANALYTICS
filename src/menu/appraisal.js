import React, { useEffect, useState } from "react";
import http from "../components/http-config";
import { departments, monthsArray } from "../utils/dropDownOptions";
import useGetEmployeeData from "../http-methods/getEmployeeData";
import { Alert, Button, Container, Form } from "react-bootstrap";
import ShowEmployees from "../components/ShowEmployees";

const Appraisal = ({ user }) => {
  const today = new Date();
  const [accessToken, setAccessToken] = useState("");

  const currentYear = today.getFullYear();
  const getEmployees = useGetEmployeeData(accessToken);

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

  const { isError, isLoading, refetch, data } = getEmployees;

  useEffect(() => {
    user &&
      user
        .getIdToken()
        .then((token) => setAccessToken(token))
        .catch((err) => console.warn(err));
  }, [user]);

  const handleSubmit = () => {
    http
      .post(http.appraisalURL, appraise, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        className="d-flex justify-content-center py-4 gap-4 overflow-hidden"
      >
        <ShowEmployees
          employeeData={(!isLoading || !isError || !data === undefined) && data}
        />

        <form
          className="col-lg-6 col-sm-12 py-3 rounded-3 shadow-sm d-flex flex-column border gap-3 justify-content-center align-items-center"
          encType="multipart/formdata"
          onSubmit={handleSubmit}
        >
          <h1 className="fs-2 fw-bold">Appraise Employee</h1>
          <div className="col-9">
            <Form.Label htmlFor="month">Month</Form.Label>
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
          <div className="col-9">
            <Form.Label htmlFor="year">Year</Form.Label>
            <Form.Control
              id="year"
              name="year"
              type="text"
              value={appraise.year}
              onChange={(e) =>
                setAppraise({ ...appraise, year: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="department">Department</Form.Label>
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
          <div className="col-9">
            <Form.Label htmlFor="ID1">Staff ID</Form.Label>
            <Form.Control
              id="ID"
              name="ID"
              type="number"
              value={appraise.ID}
              onChange={(e) => setAppraise({ ...appraise, ID: e.target.value })}
            />
          </div>
          <div className="col-9">
            {" "}
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              id="firstName"
              name="firstName"
              type="text"
              value={appraise.firstName}
              onChange={(e) =>
                setAppraise({ ...appraise, firstName: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              id="lastName"
              name="lastName"
              type="text"
              value={appraise.lastName}
              onChange={(e) =>
                setAppraise({ ...appraise, lastName: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="qtyWork">Quality of Work</Form.Label>
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
          <div className="col-9">
            <Form.Label htmlFor="delivery">Delivery</Form.Label>
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
          <div className="col-9">
            <Form.Label htmlFor="responsibility">Responsibility</Form.Label>
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
          <div className="col-9">
            <Form.Label htmlFor="qntyWork">Quantity of Work</Form.Label>
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
          <div className="col-9">
            <Form.Label htmlFor="punctuality">Punctuality</Form.Label>
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
          <div className="col-9">
            <Form.Label htmlFor="superVisorComment">
              Supervisor Comment
            </Form.Label>
            <Form.Control
              type="textarea"
              id="supervisorComment"
              name="supervisorComment"
              value={appraise.supervisorComment}
              onChange={(e) =>
                setAppraise({ ...appraise, supervisorComment: e.target.value })
              }
            />
          </div>
          <div className="col-9 mb-3">
            <Form.Label htmlFor="hrComment">HR Comment</Form.Label>
            <Form.Control
              type="textarea"
              id="hrComment"
              name="hrComment"
              value={appraise.hrComment}
              onChange={(e) =>
                setAppraise({ ...appraise, hrComment: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Button className="btn-success" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Appraisal;
