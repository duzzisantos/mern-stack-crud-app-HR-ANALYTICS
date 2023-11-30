import React, { useState } from "react";
import http from "../components/http-config";
import ButtonClass from "../components/buttons";
import Auth from "../auth/auth";
import { Container } from "react-bootstrap";

const Appraisal = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const [appraise, setAppraise] = useState({
    month: "January",
    year: currentYear,
    department: "",
    ID: 0,
    firstName: "",
    lastName: "",
    qualityOfWork: 0,
    delivery: 0,
    responsibility: 0,
    quantityOfWork: 0,
    punctuality: 0,
    supervisorComment: "",
    hrComment: "",
  });

  const handleSubmit = () => {
    http
      .post(http.appraisalURL, appraise, http.headers)
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Auth />
      <Container fluid className="bg-success d-flex justify-content-center">
        <h3>Appraise Employee</h3>
        <form
          className="col-lg-6 d-flex flex-column bg-primary"
          encType="multipart/formdata"
          onSubmit={handleSubmit}
        >
          <label htmlFor="month">Month</label>
          <select
            className="selection"
            id="month"
            name="month"
            value={appraise.month}
            onChange={(e) =>
              setAppraise({ ...appraise, month: e.target.value })
            }
          >
            <option name="Select" disabled>
              --Select--
            </option>
            <option name="January">January</option>
            <option name="February">February</option>
            <option name="March">March</option>
            <option name="April">April</option>
            <option name="May">May</option>
            <option name="June">June</option>
            <option name="July">July</option>
            <option name="August">August</option>
            <option name="September">September</option>
            <option name="October">October</option>
            <option name="November">November</option>
            <option name="December">December</option>
          </select>
          <label htmlFor="year">Year</label>
          <input
            id="year"
            name="year"
            type="text"
            disabled
            value={appraise.year}
            onChange={(e) => setAppraise({ ...appraise, year: e.target.value })}
          />
          <label htmlFor="department">Department</label>
          <select
            id="department"
            value={appraise.department}
            onChange={(e) =>
              setAppraise({ ...appraise, department: e.target.value })
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
          <label htmlFor="ID1">Staff ID</label>
          <input
            id="ID"
            name="ID"
            type="number"
            value={appraise.ID}
            onChange={(e) => setAppraise({ ...appraise, ID: e.target.value })}
          />
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={appraise.firstName}
            onChange={(e) =>
              setAppraise({ ...appraise, firstName: e.target.value })
            }
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={appraise.lastName}
            onChange={(e) =>
              setAppraise({ ...appraise, lastName: e.target.value })
            }
          />
          <label htmlFor="qtyWork">Quality of Work</label>
          <input
            id="qtyWork"
            name="qtyWork"
            type="range"
            min={0}
            max={5}
            step={1}
            value={appraise.qualityOfWork}
            onChange={(e) =>
              setAppraise({ ...appraise, qualityOfWork: e.target.value })
            }
          />
          <label htmlFor="delivery">Delivery</label>
          <input
            id="delivery"
            name="delivery"
            type="range"
            min={0}
            max={5}
            step={1}
            value={appraise.delivery}
            onChange={(e) =>
              setAppraise({ ...appraise, delivery: e.target.value })
            }
          />
          <label htmlFor="responsibility">Responsibility</label>
          <input
            id="responsibility"
            name="responsibility"
            type="range"
            min={0}
            max={5}
            step={1}
            value={appraise.responsibility}
            onChange={(e) =>
              setAppraise({ ...appraise, responsibility: e.target.value })
            }
          />
          <label htmlFor="qntyWork">Quantity of Work</label>
          <input
            id="qntyWork"
            name="qntyWork"
            type="range"
            min={0}
            max={5}
            step={1}
            value={appraise.quantityOfWork}
            onChange={(e) =>
              setAppraise({ ...appraise, quantityOfWork: e.target.value })
            }
          />
          <label htmlFor="punctuality">Punctuality</label>
          <input
            id="punctuality"
            name="punctuality"
            type="range"
            min={0}
            max={5}
            step={1}
            value={appraise.punctuality}
            onChange={(e) =>
              setAppraise({ ...appraise, punctuality: e.target.value })
            }
          />
          <label htmlFor="superVisorComment">Supervisor Comment</label>
          <textarea
            id="supervisorComment"
            name="supervisorComment"
            value={appraise.supervisorComment}
            onChange={(e) =>
              setAppraise({ ...appraise, supervisorComment: e.target.value })
            }
          />
          <label htmlFor="hrComment">HR Comment</label>
          <textarea
            id="hrComment"
            name="hrComment"
            value={appraise.hrComment}
            onChange={(e) =>
              setAppraise({ ...appraise, hrComment: e.target.value })
            }
          />
          <ButtonClass.Primary />
        </form>
      </Container>
    </>
  );
};

export default Appraisal;
