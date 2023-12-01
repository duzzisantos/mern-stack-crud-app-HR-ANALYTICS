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
      <Container fluid>
        <h3 style={{ color: "tomato" }}>Danger Zone!</h3>
        <hr></hr>
        <h4>Delete all employees</h4>
        <p>
          Employee database currently has {employee.length}{" "}
          {employee.length === 1 ? "file" : "files"} as at{" "}
          {new Date().toLocaleDateString()}.
        </p>
        <p style={{ color: "tomato" }}>
          Warning! By clicking delete, you are taking full responsibility for
          this action.
        </p>
        <button type="button" className="wipe-btn" onClick={deleteAllEmployees}>
          Delete All
        </button>

        <hr></hr>
        <h4>Delete all appraisals</h4>
        <p>
          Appraisal database currently has {appraisal.length}{" "}
          {appraisal.length === 1 ? "file" : "files"} as at{" "}
          {new Date().toLocaleDateString()}.
        </p>
        <p style={{ color: "tomato" }}>
          Warning! By clicking delete, you are taking full responsibility for
          this action.
        </p>
        <button
          type="button"
          className="wipe-btn"
          onClick={deleteAllAppraisals}
        >
          Delete All
        </button>
      </Container>
    </>
  );
};

export default Settings;
