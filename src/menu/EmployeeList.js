import React, { useState } from "react";
import http from "../components/http-config";
import { departments } from "../utils/dropDownOptions";
import { Link } from "react-router-dom";

import { Alert, Button, Container, Form, Stack } from "react-bootstrap";
import useGetEmployeeData from "../http-methods/getEmployeeData";

import {
  Filter,
  PencilSquare,
  PersonFill,
  Trash2Fill,
} from "react-bootstrap-icons";

const EmployeeList = ({ user }) => {
  const accessToken = user?.accessToken;
  const [selection, setSelection] = useState(departments[0]);
  const { employees } = useGetEmployeeData(accessToken);

  const handleDelete = (_id) => {
    const isLocal = process.env.NODE_ENV === "development";
    const isProduction = process.env.NODE_ENV === "production";
    const {
      delete: deleteAxios,
      registerURL,
      registerURLServer,
      headers,
    } = http;
    deleteAxios(
      `${isLocal ? registerURL : isProduction && registerURLServer}/${_id}`,
      headers(accessToken)
    )
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container
        fluid
        className="pt-4 px-4 col-lg-10 col-md-10 col-sm-10 d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="fs-2 fw-bold">Employee List</h1>

        <div
          className="d-flex flex-lg-row flex-sm-column col-lg-4 col-md-10 col-sm-10  mt-3"
          id="department-filter"
        >
          <Form.Label className="fw-bold w-100 mt-2 gap-2" htmlFor="department">
            <Filter /> Filter by department:{" "}
          </Form.Label>

          <Form.Select
            id="department"
            name="department"
            onChange={(e) => setSelection(e.target.value)}
          >
            <option>Please Select</option>
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="d-flex flex-wrap col-lg-12 col-md-10 col-sm-10 gap-3 mb-3">
          {employees
            .filter((item) =>
              selection === "default"
                ? !item
                : selection.match(new RegExp(`${item.department}`), "gi")
                ? item
                : !item
            )
            .map((item) => (
              <fieldset
                className="col-lg-3 col-md-6 col-sm-12 mt-3 shadow-sm p-3 personnel-card"
                key={item._id}
              >
                <span className="text-dark fw-bold">
                  <PersonFill /> {item.firstName} {item.lastName}
                </span>

                <ul className="data-list lh-lg">
                  <li>Staff ID: {item.ID}</li>

                  <li>Email: {item.email}</li>
                  <li>Role: {item.role}</li>
                  <li>Department: {item.department}</li>
                  <li>Birthday: {item.dateBirth}</li>
                  <li>Contract type: {item.contractType}</li>
                  <li>Date of employment: {item.dateEmployment}</li>
                </ul>
                <Stack direction="horizontal" gap={2}>
                  <Button
                    size="sm"
                    className="bg-transparent text-secondary border border-secondary btn-outline-success"
                    title={`Update ${item.firstName}`}
                  >
                    <Link
                      to={`update-employee/${item._id}`}
                      className="text-secondary text-decoration-none"
                    >
                      <PencilSquare />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="btn-secondary text-light border-0 btn-outline-danger"
                    onClick={(_id) => handleDelete(item._id)}
                    title={`Delete ${item.firstName}`}
                  >
                    <Trash2Fill />
                  </Button>
                </Stack>
              </fieldset>
            ))}
          {!employees.filter((el) =>
            selection.match(new RegExp(`${el.department}`), "gi")
          ).length && (
            <Alert variant="warning" className="col-12 mt-3">
              No data to display in this selected department. Please contact the
              administrator, or give it time until the data is ready. If you are
              admin, you may start adding data!
            </Alert>
          )}
        </div>
      </Container>
    </>
  );
};

export default EmployeeList;
