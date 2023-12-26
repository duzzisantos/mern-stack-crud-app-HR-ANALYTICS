import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import http from "../components/http-config";
import Auth from "../auth/auth";

const ManageEmployees = ({ user }) => {
  const [accessToken, setAccessToken] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const [ID, setStaffID] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [contractType, setContractType] = useState("");
  const [dateEmployment, setDateEmployment] = useState("");
  const [photo, setPhoto] = useState("");

  //Get request
  const isLocal = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";
  useEffect(() => {
    user && user.getIdToken().then((token) => setAccessToken(token));
  }, [user]);

  useEffect(() => {
    const { get, registerURL, registerURLServer } = http;
    get(
      `${isLocal ? registerURL : isProduction && registerURLServer}/${
        params.ID
      }`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
      .then((res) => {
        const employeeData = res.data;
        setStaffID(employeeData.ID);
        setFirstName(employeeData.firstName);
        setLastName(employeeData.lastName);
        setEmail(employeeData.email);
        setRole(employeeData.role);
        setDepartment(employeeData.department);
        setDateBirth(employeeData.dateBirth);
        setContractType(employeeData.contractType);
        setDateEmployment(employeeData.dateEmployment);
        setPhoto(employeeData.photo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.ID, accessToken, isLocal, isProduction]);

  //Put request
  const handleUpdate = () => {
    const { update, registerURL, registerURLServer, headers } = http;
    update(
      `${isLocal ? registerURL : isProduction && registerURLServer}/${
        params.ID
      }`,
      {
        ID,
        firstName,
        lastName,
        email,
        role,
        department,
        dateBirth,
        contractType,
        dateEmployment,
        photo,
      },
      headers(accessToken)
    )
      .then((res) => {
        console.log(res.statusText);
        navigate("/table/:ID");
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
          className="col-lg-6 col-md-12 col-sm-12 smaller-box-full px-5 py-3 border shadow-sm rounded-3 d-flex flex-column gap-3 justify-content-center align-items-center"
          onSubmit={(ID, e) => handleUpdate(ID, e)}
          encType="multipart/formdata"
        >
          <h1 className="fs-2 fw-bold">Edit Employee Record</h1>
          <div className="col-9 gap-3 d-flex flex-column justify-content-center">
            <Form.Label htmlFor="ID">Staff ID</Form.Label>
            <Form.Control
              required
              id="ID"
              name="ID"
              type="number"
              disabled
              value={ID}
              onChange={(e) => setStaffID(e.target.value)}
            />
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              required
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              required
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              required
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label htmlFor="role">Role</Form.Label>
            <Form.Control
              required
              id="role"
              name="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <Form.Label htmlFor="department">Department</Form.Label>
            <Form.Select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
            <Form.Label htmlFor="dateBirth">Date of Birth</Form.Label>
            <Form.Control
              required
              id="dateBirth"
              name="dateBirth"
              type="date"
              value={dateBirth}
              onChange={(e) => setDateBirth(e.target.value)}
            />
            <Form.Label htmlFor="contractType">Contract Type</Form.Label>
            <Form.Control
              required
              id="contractType"
              name="contractType"
              type="text"
              value={contractType}
              onChange={(e) => setContractType(e.target.value)}
            />
            <Form.Label htmlFor="dateEmployment">Date of Employment</Form.Label>
            <Form.Control
              required
              id="dateEmployment"
              name="dateEmployment"
              type="date"
              value={dateEmployment}
              onChange={(e) => setDateEmployment(e.target.value)}
            />
            <Form.Label htmlFor="photo">Photo</Form.Label>
            <Form.Control
              required
              id="photo"
              name="photo"
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="col-9 justify-content-between d-flex">
            <Button type="submit" variant="success">
              Submit
            </Button>
            <Button
              variant="transparent"
              className="text-dark border border-secondary"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft /> Go back
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManageEmployees;
