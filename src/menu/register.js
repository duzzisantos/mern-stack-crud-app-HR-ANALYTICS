import React, { useState } from "react";
import http from "../components/http-config";
import ButtonClass from "../components/buttons";

const Register = () => {
  const [fillForm, setFillForm] = useState({
    staffID: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    department: "",
    dateBirth: "",
    contractType: "",
    dateEmployment: "",
    photo: ""
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
      <div className="page-wrapper">
        <form
          className="forms"
          onSubmit={handleSubmit}
          encType="multipart/formdata"
        >
          <h3>Register new employee</h3>
          <label htmlFor="staffID">Staff ID</label>
          <input
            id="staffID"
            name="staffID"
            type="number"
            disabled
            value={fillForm.staffID}
            onChange={(e) =>
              setFillForm({ ...fillForm, staffID: e.target.value })
            }
          />
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={fillForm.firstName}
            onChange={(e) =>
              setFillForm({ ...fillForm, firstName: e.target.value })
            }
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={fillForm.lastName}
            onChange={(e) =>
              setFillForm({ ...fillForm, lastName: e.target.value })
            }
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={fillForm.email}
            onChange={(e) =>
              setFillForm({ ...fillForm, email: e.target.value })
            }
          />
          <label htmlFor="role">Role</label>
          <input
            id="role"
            name="role"
            type="text"
            value={fillForm.role}
            onChange={(e) => setFillForm({ ...fillForm, role: e.target.value })}
          />
          <label htmlFor="department">Department</label>
          <select
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
          </select>
          <label htmlFor="dateBirth">Date of Birth</label>
          <input
            id="dateBirth"
            name="dateBirth"
            type="date"
            value={fillForm.dateBirth}
            onChange={(e) =>
              setFillForm({ ...fillForm, dateBirth: e.target.value })
            }
          />
          <label htmlFor="contractType">Contract Type</label>
          <input
            id="contractType"
            name="contractType"
            type="text"
            value={fillForm.contractType}
            onChange={(e) =>
              setFillForm({ ...fillForm, contractType: e.target.value })
            }
          />
          <label htmlFor="dateEmployment">Date of Employment</label>
          <input
            id="dateEmployment"
            name="dateEmployment"
            type="date"
            value={fillForm.dateEmployment}
            onChange={(e) =>
              setFillForm({ ...fillForm, dateEmployment: e.target.value })
            }
          />
           <label htmlFor="photo">Photo</label>
          <input
            id="photo"
            name="photo"
            type="text"
            value={fillForm.photo}
            onChange={(e) =>
              setFillForm({ ...fillForm, photo: e.target.value })
            }
          />
          <ButtonClass.Primary />
        </form>
      </div>
    </>
  );
};

export default Register;
