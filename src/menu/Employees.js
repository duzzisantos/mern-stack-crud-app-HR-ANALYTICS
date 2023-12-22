import React, { useEffect, useState } from "react";
import http from "../components/http-config";
import { departments } from "../utils/dropDownOptions";
import { Link } from "react-router-dom";

import { Alert, Button, Form, Stack } from "react-bootstrap";
import useGetEmployeeData from "../http-methods/getEmployeeData";

const EmployeeList = ({ user }) => {
  const [accessToken, setAccessToken] = useState("");
  const [selection, setSelection] = useState(departments[0]);
  const getEmployees = useGetEmployeeData(accessToken);

  useEffect(() => {
    user &&
      user
        .getIdToken()
        .then((token) => setAccessToken(token))
        .catch((err) => console.warn(err.message));
  }, [user]);

  const { isLoading, isError, data, refetch } = getEmployees;

  if (isLoading) {
    return <Alert>Page is currently loading</Alert>;
  } else if (isError) {
    <Alert variant="warning">
      Error in loading resources{" "}
      <Button
        variant="secondary"
        onClick={() => {
          refetch();
        }}
      >
        Reload
      </Button>
    </Alert>;
  } else if (!data || data === undefined) {
    <Alert>Data is unavailable at the moment. Please try again later.</Alert>;
  }

  const handleDelete = (_id) => {
    const { delete: deleteAxios, registerURL, headers } = http;
    deleteAxios(
      `${registerURL}/${_id}`,
      (headers.Authorization = `Bearer ${accessToken}`)
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

        <div className="d-flex flex-wrap p-4 col-12 gap-3">
          {data
            .filter((item) =>
              selection === "default"
                ? !item
                : selection.match(new RegExp(`${item.department}`), "gi")
                ? item
                : !item
            )
            .map((item) => (
              <fieldset
                className="col-lg-3 col-md-6 col-sm-12 mt-3 shadow-sm p-3"
                key={item._id}
              >
                <span className="text-dark fw-bold">
                  {item.firstName} {item.lastName}
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
                    className="bg-transparent text-dark border border-secondary btn-outline-success"
                    title={`Update ${item.firstName}`}
                  >
                    <Link
                      to={`update-employee/${item._id}`}
                      className="text-dark text-decoration-none"
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="btn-secondary text-light border-0 btn-outline-danger"
                    onClick={(_id) => handleDelete(item._id)}
                    title={`Delete ${item.firstName}`}
                  >
                    Delete
                  </Button>
                </Stack>
              </fieldset>
            ))}
          {!data.filter((el) =>
            selection.match(new RegExp(`${el.department}`), "gi")
          ).length && (
            <Alert variant="warning" className="col-12">
              No data to display in this selected department. Please contact the
              administrator, or give it time until the data is ready. If you are
              admin, you may start adding data!
            </Alert>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
