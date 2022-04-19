import React, { useState, useEffect } from "react";
import ButtonClass from "../components/buttons";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
    axios.get(`http://localhost:8080/api/register/${params.ID}`)
    .then(res => {
        console.log({ID: params.ID})
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
    .catch(err => {
        console.log(err)
    })
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
        navigate("/table/:ID")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="page-wrapper">
        <form
          className="forms"
          onSubmit={(ID, e) => handleUpdate(ID, e)}
          encType="multipart/formdata"
        >
          <h3>Update Employee</h3>
          <label htmlFor="ID">Staff ID</label>
          <input
            id="ID"
            name="ID"
            type="number"
            disabled
            value={ID}
            onChange={(e) => setStaffID(e.target.value)}
          />
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="role">Role</label>
          <input
            id="role"
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="department">Department</label>
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
          <label htmlFor="dateBirth">Date of Birth</label>
          <input
            id="dateBirth"
            name="dateBirth"
            type="date"
            value={dateBirth}
            onChange={(e) => setDateBirth(e.target.value)}
          />
          <label htmlFor="contractType">Contract Type</label>
          <input
            id="contractType"
            name="contractType"
            type="text"
            value={contractType}
            onChange={(e) => setContractType(e.target.value)}
          />
          <label htmlFor="dateEmployment">Date of Employment</label>
          <input
            id="dateEmployment"
            name="dateEmployment"
            type="date"
            value={dateEmployment}
            onChange={(e) => setDateEmployment(e.target.value)}
          />
          <label htmlFor="photo">Photo</label>
          <input
            id="photo"
            name="photo"
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <ButtonClass.Primary />
        </form>
      </div>
    </>
  );
};

export default UpdateEmployee;