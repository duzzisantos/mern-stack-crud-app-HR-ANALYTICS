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
      <h2>
        Keffi <FontAwesomeIcon icon={faRing} />
      </h2>

      <Form className="col-lg-6 col-sm-9 mt-3 p-4 gap-3 bg-warning justify-content-center d-flex flex-column">
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

        <div className="d-flex flex-row justify-content-between">
          <Button className="btn-success" onClick={register}>
            Register
          </Button>
        </div>
        <span>
          Already have an account?{" "}
          <Link to="/" className="link">
            Login
          </Link>{" "}
          now.
        </span>
      </Form>
    </div>
  );
};

export default SignUp;
