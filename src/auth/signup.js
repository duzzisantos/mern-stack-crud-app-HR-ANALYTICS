import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./firebase";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";
import { At, Person, ShieldLockFill } from "react-bootstrap-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) {
      alert("Please enter name!");
    } else {
      registerWithEmailAndPassword(name, email, password);
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    } else if (user) {
      navigate("/league-table");
    }
  });
  return (
    <div className="container-fluid d-flex flex-column col-12  justify-content-center align-items-center">
      <h1 className="mt-3 fs-2 fw-bolder">
        <FontAwesomeIcon icon={faRing} /> KEFFI
      </h1>

      <Form className="col-lg-6 col-sm-12 smaller-box-full mt-3 p-4 shadow-sm rounded-2 gap-3 justify-content-center d-flex flex-column">
        <h2 className="fs-3 text-center fw-bold">Sign up</h2>
        <Form.Label htmlFor="fullName">
          <Person /> Full Name
        </Form.Label>
        <Form.Control
          required
          type="text"
          id="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Label htmlFor="email">
          <At /> Email
        </Form.Label>
        <Form.Control
          required
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label htmlFor="password">
          <ShieldLockFill /> Password
        </Form.Label>
        <Form.Control
          required
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex py-2 vstack gap-3">
          <Button
            className="btn-success w-25"
            onClick={register}
            disabled={[email, password, name].some((el) => el === "")}
          >
            Sign up
          </Button>
          <span>
            Already have an account?{" "}
            <a href="/login" className="link">
              Login
            </a>{" "}
            now.
          </span>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
