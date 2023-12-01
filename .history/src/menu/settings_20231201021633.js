import React, { useState, useEffect } from "react";
import axios from "axios";
import http from "../components/http-config";
import Auth from "../auth/auth";
import { Container } from "react-bootstrap";

const Settings = () => {
  const [employee, setDeleteEmployee] = useState([]);
  const [appraisal, setDeleteAppraisal] = useState([]);

  const getEmployeeData = async () => {
    try {
      const response = await axios.get(http.registerURL);
      console.log(response.statusText);
      setDeleteEmployee(response.data);
    } catch (err) {
      console.log(err.statusText);
      console.log(err.message);
    }
  };

  const getAppraisalData = async () => {
    try {
      const response = await axios.get(http.appraisalURL);
      console.log(response.statusText);
      setDeleteAppraisal(response.data);
    } catch (err) {
      console.log(err.statusText);
      console.log(err.message);
    }
  };

  useEffect(() => {
    getEmployeeData();
    getAppraisalData();
  }, []);

  const deleteAllAppraisals = () => {
    axios
      .delete(http.appraisalURL)
      .then((res) => {
        console.log(res.statusText);
        alert("All appraisals have been deleted");
        getAppraisalData();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteAllEmployees = () => {
    axios
      .delete(http.registerURL)
      .then((res) => {
        console.log(res.status);
        alert("All employees have been deleted");
        getEmployeeData();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <Auth />
      <Container
        fluid
        className="py-4 d-flex flex-column gap-3 justify-content-center align-items-center col-9"
      >
        <h1 className="fw-bold fs-3">Settings</h1>
        <div className="col-9 mb-3">
          <h2 className="fs-6">
            Employee database currently has {employee.length}{" "}
            {employee.length === 1 ? "file" : "files"} as at{" "}
            {new Date().toLocaleDateString()}.
          </h2>

          <div className="p-2 rounded-1 d-flex flex-column">
            <small className="fs-6">Head Count</small>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={deleteAllEmployees}
            >
              Delete All
            </button>
          </div>
        </div>

        <div className="col-9 mb-3">
          <h2 className="fs-6">
            Appraisal database currently has {appraisal.length}{" "}
            {appraisal.length === 1 ? "file" : "files"} as at{" "}
            {new Date().toLocaleDateString()}.
          </h2>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={deleteAllAppraisals}
          >
            Delete All
          </button>
        </div>
      </Container>
    </>
  );
};

export default Settings;
