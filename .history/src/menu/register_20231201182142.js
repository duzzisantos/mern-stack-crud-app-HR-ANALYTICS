import React, { useState } from "react";
import http from "../components/http-config";
import ButtonClass from "../components/buttons";
import Auth from "../auth/auth";
import { Button, Container, Form } from "react-bootstrap";

const Register = () => {
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

  const handleSubmit = () => {
    http
      .post(http.registerURL, fillForm, http.headers)
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Auth />
      <Container fluid className="d-flex justify-content-center py-4">
        <form
          className="col-lg-6 py-3 rounded-3 shadow-sm d-flex flex-column border gap-3 justify-content-center align-items-center"
          encType="multipart/formdata"
          onSubmit={handleSubmit}
        >
          <h1 className="fs-3 fw-bold">Register new employee</h1>
          <div className="col-9">
            <Form.Label htmlFor="ID">Staff ID</Form.Label>
            <Form.Control
              id="ID"
              name="ID"
              type="number"
              disabled
              value={fillForm.ID}
              onChange={(e) => setFillForm({ ...fillForm, ID: e.target.value })}
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              id="firstName"
              name="firstName"
              type="text"
              value={fillForm.firstName}
              onChange={(e) =>
                setFillForm({ ...fillForm, firstName: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              id="lastName"
              name="lastName"
              type="text"
              value={fillForm.lastName}
              onChange={(e) =>
                setFillForm({ ...fillForm, lastName: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="text"
              value={fillForm.email}
              onChange={(e) =>
                setFillForm({ ...fillForm, email: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="role">Role</Form.Label>
            <Form.Control
              id="role"
              name="role"
              type="text"
              value={fillForm.role}
              onChange={(e) =>
                setFillForm({ ...fillForm, role: e.target.value })
              }
            />
          </div>

          <div className="col-9">
            <Form.Label htmlFor="department">Department</Form.Label>
            <Form.Select
              id="department"
              value={fillForm.department}
              onChange={(e) =>
                setFillForm({ ...fillForm, department: e.target.value })
              }
            >
              <option name="default">--Select--</option>
              <option name="IT">IT</option>
              <option name="Admin">Admin</option>
              <option name="Procurement">Procurement</option>
              <option name="Finance">Finance</option>
              <option name="Operations">Operations</option>
              <option name="Customer service">Customer service</option>
            </Form.Select>
          </div>
          <div className="col-9">
            <Form.Label htmlFor="dateBirth">Date of Birth</Form.Label>
            <Form.Control
              id="dateBirth"
              name="dateBirth"
              type="date"
              value={fillForm.dateBirth}
              onChange={(e) =>
                setFillForm({ ...fillForm, dateBirth: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="contractType">Contract Type</Form.Label>
            <Form.Control
              id="contractType"
              name="contractType"
              type="text"
              value={fillForm.contractType}
              onChange={(e) =>
                setFillForm({ ...fillForm, contractType: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="dateEmployment">Date of Employment</Form.Label>
            <Form.Control
              id="dateEmployment"
              name="dateEmployment"
              type="date"
              value={fillForm.dateEmployment}
              onChange={(e) =>
                setFillForm({ ...fillForm, dateEmployment: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Form.Label htmlFor="photo">Photo</Form.Label>
            <Form.Control
              id="photo"
              name="photo"
              type="text"
              value={fillForm.photo}
              onChange={(e) =>
                setFillForm({ ...fillForm, photo: e.target.value })
              }
            />
          </div>
          <div className="col-9">
            <Button variant="success">Submit</Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Register;
