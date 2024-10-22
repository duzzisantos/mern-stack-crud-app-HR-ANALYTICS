import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";
import { At, Google, ShieldLockFill } from "react-bootstrap-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/league-table");
  });
  return (
    <div className="container-fluid d-flex flex-column col-12  justify-content-center align-items-center">
      <h1 className="mt-3 fs-2 fw-bolder text-primary-emphasis">
        <FontAwesomeIcon icon={faRing} /> KEFFI
      </h1>
      <Form
        id="login-form"
        className="col-lg-6 col-sm-12 mt-3 p-4 bg-success-subtle shadow-lg border border-2 border-success-subtle rounded-3 gap-3 justify-content-center d-flex flex-column"
      >
        <h2 className="fs-3 text-center fw-bold text-primary-emphasis">
          Login
        </h2>
        <Form.Label
          htmlFor="login-email"
          className="fw-bold text-primary-emphasis"
        >
          <At /> Email
        </Form.Label>
        <Form.Control
          type="text"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          title="Enter email address"
        />{" "}
        <Form.Label
          htmlFor="login-password"
          className="fw-bold text-primary-emphasis"
        >
          <ShieldLockFill /> Password
        </Form.Label>
        <Form.Control
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          title="Enter password"
        />
        <div className="d-flex justify-content-between hstack py-2">
          <div className="gap-3 hstack">
            <Button
              className="btn-success"
              onClick={() => logInWithEmailAndPassword(email, password)}
              title="Login"
              disabled={email === "" || password === ""}
            >
              Login
            </Button>
            <Button
              onClick={() => signInWithGoogle()}
              variant="transparent"
              className="text-secondary border border-secondary"
            >
              Login with <Google />
            </Button>
          </div>
        </div>
        <div className="gap-3 hstack">
          <span>
            <a
              href="/signup"
              className="link text-decoration-none text-primary"
              title="Create an account"
            >
              Do not have an account?
            </a>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Login;
