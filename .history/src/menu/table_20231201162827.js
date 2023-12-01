import React, { useEffect, useState } from "react";
import http from "../components/http-config";
import axios from "axios";
import { Link } from "react-router-dom";
import Auth from "../auth/auth";
import { Form } from "react-bootstrap";

const EmployeeList = () => {
  const [list, setList] = useState([]);
  const [selection, setSelection] = useState("default");

  const getEmployeeData = async () => {
    try {
      const res = await http.get(http.registerURL, http.headers);
      console.log(res.statusText);
      console.log(res.data);
      setList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  const handleDelete = (_id) => {
    axios
      .delete("http://localhost:8080/api/register/" + _id)
      .then((res) => {
        getEmployeeData();
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
      <div className="container-fluid pt-4 col-12 d-flex flex-column justify-content-center align-items-center">
        <h1 className="fs-2 fw-bold">Employee List</h1>
        <div className="col-lg-6 col-md-10 d-flex justify-content-center">
          <div className="hstack gap-2 col-lg-6 col-md-12 mt-3">
            <Form.Label className="fw-bold w-75" htmlFor="department">
              Filter by department:{" "}
            </Form.Label>

            <Form.Select
              id="department"
              name="department"
              onChange={(e) => setSelection(e.target.value)}
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <div className="boxes">
          {list
            .filter((item) =>
              selection === "default"
                ? !item
                : selection.match(new RegExp(`${item.department}`), "gi")
                ? item
                : !item
            )
            .map((item) => (
              <fieldset
                className="col-lg-3 col-md-6 col-sm-12 mt-3"
                key={item._id}
              >
                <legend className="legend-display">
                  <img src={item.photo} alt="Staff" />
                </legend>
                <b>
                  <span style={{ marginLeft: "25%", color: "#730071" }}>
                    {item.firstName} {item.lastName}
                  </span>
                </b>
                <ul className="data-list">
                  <li>
                    <b>Staff ID</b>: {item.ID}
                  </li>
                  {/* <li><b>First name</b>: {item.firstName}</li>
                <li><b>Last name</b>: {item.lastName}</li> */}
                  <li>
                    <b>Email</b>: {item.email}
                  </li>
                  <li>
                    <b>Role</b>: {item.role}
                  </li>
                  <li>
                    <b>Department</b>: {item.department}
                  </li>
                  <li>
                    <b>Birthday</b>: {item.dateBirth}
                  </li>
                  <li>
                    <b>Contract type</b>: {item.contractType}
                  </li>
                  <li>
                    <b>Date of employment</b>: {item.dateEmployment}
                  </li>
                </ul>
                <button
                  className="delete-btn"
                  type="button"
                  onClick={(e) => handleDelete(item._id)}
                >
                  Delete
                </button>
                <button className="edit-btn" type="button">
                  <Link
                    to={`update-employee/${item._id}`}
                    className="edit-link"
                  >
                    {" "}
                    Edit
                  </Link>
                </button>
              </fieldset>
            ))}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
