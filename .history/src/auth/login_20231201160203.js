import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";
import { Google } from "react-bootstrap-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/auth/register");
  });
  return (
    <div className="container-fluid d-flex flex-column col-12  justify-content-center align-items-center">
      <h1 className="mt-3 fs-2">
        Keffi <FontAwesomeIcon icon={faRing} />
      </h1>
      <Form className="col-lg-6 col-sm-9 mt-3 p-4 shadow-lg rounded-2 gap-3 justify-content-center d-flex flex-column">
        <h2 className="fs-3 text-center">Login</h2>
        <Form.Label htmlFor="login-email">Email</Form.Label>
        <Form.Control
          type="text"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          title="Enter email address"
        />{" "}
        <Form.Label htmlFor="login-password">Password</Form.Label>
        <Form.Control
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          title="Enter password"
        />
        <div className="d-flex justify-content-between hstack py-2">
          <Button
            className="btn-success"
            onClick={() => logInWithEmailAndPassword(email, password)}
            title="Login"
          >
            Login
          </Button>
          <Button>
            Login with <Google />
          </Button>
          <div className="gap-3 hstack">
            <span>
              <Link to="reset" className="link" title="Reset password">
                Forgot Password?
              </Link>
            </span>
            <span>
              <Link to="signup" className="link" title="Create an account">
                Do not have an account?
              </Link>
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
