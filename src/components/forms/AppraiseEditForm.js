import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { monthsArray } from "../../utils/dropDownOptions";
import http from "../http-config";
const AppriaseEditForm = ({ accessToken, selectedID, appraisalData }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);
  const [department, setDepartment] = useState("");
  const [ID, setID] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [qualityOfWork, setQualityOfWork] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [responsibility, setResponsibility] = useState(0);
  const [quantityOfWork, setQuantityOfWork] = useState(0);
  const [punctuality, setPunctuality] = useState(0);
  const [supervisorComment, setSupervisorComment] = useState("");
  const [hrComment, setHRComment] = useState("");

  const found = appraisalData.filter(
    (element) => element._id === selectedID
  )[0];

  //set form values with found data from admin table, and afterwards change form data if you need to
  useEffect(() => {
    if (found) {
      setMonth(found.month);
      setYear(found.year);
      setDepartment(found.department);
      setID(found.ID);
      setFirstName(found.firstName);
      setLastName(found.lastName);
      setQualityOfWork(found.qualityOfWork);
      setQuantityOfWork(found.quantityOfWork);
      setDelivery(found.delivery);
      setResponsibility(found.responsibility);
      setPunctuality(found.punctuality);
      setSupervisorComment(found.supervisorComment);
      setHRComment(found.hrComment);
    }
  }, [found]);

  const isLocal = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  const handleSubmit = (id) => {
    const { update, appraisalURL, appraiseURLServer, headers } = http;
    update(
      isLocal
        ? appraisalURL + "/" + id
        : isProduction && appraiseURLServer + "/" + id,
      {
        month,
        year,
        department,
        ID,
        firstName,
        lastName,
        qualityOfWork,
        delivery,
        responsibility,
        quantityOfWork,
        punctuality,
        supervisorComment,
        hrComment,
      },
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
    <div className="">
      <form
        className="py-3 rounded-3 d-flex flex-column gap-3 justify-content-center align-items-center"
        encType="multipart/formdata"
      >
        <h1 className="fs-2 fw-bold">Update Appraisal</h1>
        <div className="col-12">
          <Form.Label htmlFor="month">Month</Form.Label>
          <Form.Select
            className="selection"
            id="month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option name="Select" disabled>
              --Select--
            </option>
            {monthsArray.map((element, i) => (
              <option key={i}>{element}</option>
            ))}
          </Form.Select>
        </div>
        <div className="col-12">
          <Form.Label htmlFor="year">Year</Form.Label>
          <Form.Control
            required
            id="year"
            name="year"
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="department">Department</Form.Label>
          <Form.Select
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
          </Form.Select>
        </div>
        <div className="col-12">
          <Form.Label htmlFor="ID1">Staff ID</Form.Label>
          <Form.Control
            required
            id="ID"
            name="ID"
            type="number"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="col-12">
          {" "}
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            required
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            required
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="qtyWork">Quality of Work</Form.Label>
          <Form.Range
            className="border-0"
            id="qtyWork"
            name="qtyWork"
            type="range"
            min={0}
            max={5}
            step={1}
            value={qualityOfWork}
            onChange={(e) => setQualityOfWork(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="delivery">Delivery</Form.Label>
          <Form.Range
            className="border-0"
            id="delivery"
            name="delivery"
            type="range"
            min={0}
            max={5}
            step={1}
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="responsibility">Responsibility</Form.Label>
          <Form.Range
            className="border-0"
            id="responsibility"
            name="responsibility"
            type="range"
            min={0}
            max={5}
            step={1}
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="qntyWork">Quantity of Work</Form.Label>
          <Form.Range
            className="border-0"
            id="qntyWork"
            name="qntyWork"
            type="range"
            min={0}
            max={5}
            step={1}
            value={quantityOfWork}
            onChange={(e) => setQuantityOfWork(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="punctuality">Punctuality</Form.Label>
          <Form.Range
            className="border-0"
            id="punctuality"
            name="punctuality"
            type="range"
            min={0}
            max={5}
            step={1}
            value={punctuality}
            onChange={(e) => setPunctuality(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Form.Label htmlFor="superVisorComment">
            Supervisor Comment
          </Form.Label>
          <Form.Control
            required
            type="text"
            as={"textarea"}
            rows={3}
            id="supervisorComment"
            name="supervisorComment"
            value={supervisorComment}
            onChange={(e) => setSupervisorComment(e.target.value)}
          />
        </div>
        <div className="col-12 mb-3">
          <Form.Label htmlFor="hrComment">HR Comment</Form.Label>
          <Form.Control
            required
            type="text"
            as={"textarea"}
            rows={3}
            id="hrComment"
            name="hrComment"
            value={hrComment}
            onChange={(e) => setHRComment(e.target.value)}
          />
        </div>
        <div className="col-12">
          <Button
            className="btn-success"
            type="button"
            onClick={(id) => handleSubmit(selectedID)}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AppriaseEditForm;
