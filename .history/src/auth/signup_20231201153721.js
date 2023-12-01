import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "./firebase";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";

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
      navigate("/");
    }
  });
  return (
    <div className="container-fluid d-flex flex-column col-12  justify-content-center align-items-center">
      <h1 className="mt-3 fs-2">
        Keffi <FontAwesomeIcon icon={faRing} />
      </h1>

      <Form className="col-lg-6 col-sm-9 mt-3 p-4 shadow-lg rounded-2 gap-3 justify-content-center d-flex flex-column">
        <h3>Sign up</h3>
        <Form.Label htmlFor="fullName">Full Name</Form.Label>
        <Form.Control
          type="text"
          id="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex justify-content-between py-2">
          <Button className="btn-success" onClick={register}>
            Register
          </Button>
          <span>
            Already have an account?{" "}
            <Link to="/" className="link">
              Login
            </Link>{" "}
            now.
          </span>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
