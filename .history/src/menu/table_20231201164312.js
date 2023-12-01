import React, { useEffect, useState } from "react";
import http from "../components/http-config";
import axios from "axios";
import { Link } from "react-router-dom";
import Auth from "../auth/auth";
import { Button, Form, Stack } from "react-bootstrap";

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
                className="col-lg-3 col-md-6 col-sm-12 mt-3 shadow-sm border border-secondary p-3"
                key={item._id}
              >
                <legend
                  className=""
                  style={{
                    height: "85px",
                    width: "auto",
                    padding: "0 10px",
                    borderBottom: "none",
                  }}
                >
                  <img
                    src={item.photo}
                    alt="Staff"
                    style={{ height: "85px", width: "120px" }}
                  />
                </legend>

                <span className="text-dark fw-bold">
                  {item.firstName} {item.lastName}
                </span>

                <ul className="data-list lh-lg">
                  <li>
                    <b>Staff ID</b>: {item.ID}
                  </li>

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
                <Stack direction="horizontal" gap={2}>
                  <Button className="bg-transparent tetx-dark border border-secondary">
                    <Link
                      to={`update-employee/${item._id}`}
                      className="text-dark text-decoration-none"
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button
                    className="btn-danger"
                    onClick={(_id) => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </fieldset>
            ))}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
