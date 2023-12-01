import React, { useState, useEffect } from "react";
import ButtonClass from "../components/buttons";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Auth from "../auth/auth";
import { Form } from "react-bootstrap";

const UpdateEmployee = () => {
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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/register/${params.ID}`)
      .then((res) => {
        console.log({ ID: params.ID });
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
  }, [params.ID]);

  //Put request
  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/api/register/${params.ID}`, {
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
      })
      .then((res) => {
        console.log(res.statusText);
        navigate("/table/:ID");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Auth />
      <div className="d-flex justify-content-center py-4 container-fluid">
        <form
          className="col-lg-6 py-3 rounded-3 shadow-sm d-flex flex-column border gap-3 justify-content-center align-items-center"
          onSubmit={(ID, e) => handleUpdate(ID, e)}
          encType="multipart/formdata"
        >
          <h1 className="fs-3 fw-bold">Update Employee</h1>
          <div className="col-9 gap-5 d-flex flex-column justify-content-center">
            <Form.Label htmlFor="ID">Staff ID</Form.Label>
            <Form.Control
              id="ID"
              name="ID"
              type="number"
              disabled
              value={ID}
              onChange={(e) => setStaffID(e.target.value)}
            />
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label htmlFor="role">Role</Form.Label>
            <Form.Control
              id="role"
              name="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <Form.Label htmlFor="department">Department</Form.Label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option name="default">--Select--</option>
              <option name="IT">IT</option>
              <option name="Admin">Admin</option>
              <option name="Procurement">Procurement</option>
              <option name="Finance">Finance</option>
              <option name="Operations">Operations</option>
              <option name="Customer service">Customer service</option>
            </select>
            <Form.Label htmlFor="dateBirth">Date of Birth</Form.Label>
            <Form.Control
              id="dateBirth"
              name="dateBirth"
              type="date"
              value={dateBirth}
              onChange={(e) => setDateBirth(e.target.value)}
            />
            <Form.Label htmlFor="contractType">Contract Type</Form.Label>
            <Form.Control
              id="contractType"
              name="contractType"
              type="text"
              value={contractType}
              onChange={(e) => setContractType(e.target.value)}
            />
            <Form.Label htmlFor="dateEmployment">Date of Employment</Form.Label>
            <Form.Control
              id="dateEmployment"
              name="dateEmployment"
              type="date"
              value={dateEmployment}
              onChange={(e) => setDateEmployment(e.target.value)}
            />
            <Form.Label htmlFor="photo">Photo</Form.Label>
            <Form.Control
              id="photo"
              name="photo"
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            <ButtonClass.Primary />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateEmployee;
