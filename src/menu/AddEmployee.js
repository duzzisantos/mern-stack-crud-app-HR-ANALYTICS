import React, { useState } from "react";
import http from "../components/http-config";

import { Button, Container, Form } from "react-bootstrap";

const AddEmployee = ({ user }) => {
  const accessToken = user?.accessToken;
  const [fillForm, setFillForm] = useState({
    ID: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    department: "",
    dateBirth: "",
    contractType: "",
    dateEmployment: "",
    photo: "",
  });

  const isLocal = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  const handleSubmit = () => {
    const { post, registerURL, registerURLServer, headers } = http;

    post(
      isLocal ? registerURL : isProduction && registerURLServer,
      fillForm,
      headers(accessToken)
    )
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const departments = [
    "IT",
    "Admin",
    "Procurement",
    "Finance",
    "Operations",
    "Customer service",
  ];

  return (
    <>
      <Container fluid className="col-12 d-flex justify-content-center py-4">
        <form
          className="col-lg-6 col-md-12 col-sm-12 px-5 py-3 smaller-box-full shadow-sm rounded-3 d-flex flex-column gap-3 justify-content-center align-items-center"
          encType="multipart/formdata"
          onSubmit={handleSubmit}
        >
          <h1 className="fs-4 fw-bold">Add new employee</h1>

          <div className="col-sm-12 col-12">
            <Form.Label htmlFor="ID">Staff ID</Form.Label>
            <Form.Control
              required
              id="ID"
              name="ID"
              type="number"
              disabled
              value={fillForm.ID}
              onChange={(e) => setFillForm({ ...fillForm, ID: e.target.value })}
            />
          </div>
          <div className="col-sm-12 col-12">
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              required
              id="firstName"
              name="firstName"
              type="text"
              value={fillForm.firstName}
              onChange={(e) =>
                setFillForm({ ...fillForm, firstName: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              required
              id="lastName"
              name="lastName"
              type="text"
              value={fillForm.lastName}
              onChange={(e) =>
                setFillForm({ ...fillForm, lastName: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              required
              id="email"
              name="email"
              type="text"
              value={fillForm.email}
              onChange={(e) =>
                setFillForm({ ...fillForm, email: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="role">Role</Form.Label>
            <Form.Control
              required
              id="role"
              name="role"
              type="text"
              value={fillForm.role}
              onChange={(e) =>
                setFillForm({ ...fillForm, role: e.target.value })
              }
            />
          </div>

          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="department">Department</Form.Label>
            <Form.Select
              id="department"
              value={fillForm.department}
              onChange={(e) =>
                setFillForm({ ...fillForm, department: e.target.value })
              }
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="dateBirth">Date of Birth</Form.Label>
            <Form.Control
              required
              id="dateBirth"
              name="dateBirth"
              type="date"
              value={fillForm.dateBirth}
              onChange={(e) =>
                setFillForm({ ...fillForm, dateBirth: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="contractType">Contract Type</Form.Label>
            <Form.Control
              required
              id="contractType"
              name="contractType"
              type="text"
              value={fillForm.contractType}
              onChange={(e) =>
                setFillForm({ ...fillForm, contractType: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="dateEmployment">Date of Employment</Form.Label>
            <Form.Control
              required
              id="dateEmployment"
              name="dateEmployment"
              type="date"
              value={fillForm.dateEmployment}
              onChange={(e) =>
                setFillForm({ ...fillForm, dateEmployment: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-sm-12">
            <Form.Label htmlFor="photo">Photo</Form.Label>
            <Form.Control
              required
              id="photo"
              name="photo"
              type="text"
              value={fillForm.photo}
              onChange={(e) =>
                setFillForm({ ...fillForm, photo: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-sm-12">
            <Button type="submit" variant="success">
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddEmployee;
