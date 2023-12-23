import React, { useEffect, useState } from "react";
import http from "../components/http-config";

import { Button, Form } from "react-bootstrap";
import Auth from "../auth/auth";

const AddEmployee = ({ user }) => {
  const [accessToken, setAccessToken] = useState("");
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

  useEffect(() => {
    user &&
      user
        .getIdToken()
        .then((token) => setAccessToken(token))
        .catch((err) => console.warn(err.message));
  }, [user]);

  const isLocal = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  const handleSubmit = () => {
    const { post, registerURL, registerURLServer } = http;

    post(isLocal ? registerURL : isProduction && registerURLServer, fillForm, {
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
      <Auth />
      <div className="d-flex justify-content-center py-4 container-fluid">
        <form
          className="col-lg-6 col-md-12 col-sm-12 px-5 py-3 border shadow-sm rounded-3 d-flex flex-column gap-3 justify-content-center align-items-center"
          encType="multipart/formdata"
          onSubmit={handleSubmit}
        >
          <h1 className="fs-4 fw-bold">Add new employee</h1>

          <div className="col-9 gap-3 d-flex flex-column justify-content-center">
            <Form.Label htmlFor="ID">Staff ID</Form.Label>
            <Form.Control
              id="ID"
              name="ID"
              type="number"
              disabled
              value={fillForm.ID}
              onChange={(e) => setFillForm({ ...fillForm, ID: e.target.value })}
            />

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

            <div className="col-9 justify-content-between d-flex">
              <Button type="submit" variant="success">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
