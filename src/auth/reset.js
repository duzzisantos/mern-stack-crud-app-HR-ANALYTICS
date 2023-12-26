import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  });

  return (
    <div className="container-fluid d-flex flex-column col-12  justify-content-center align-items-center">
      <h1 className="mt-3 fs-2">
        Keffi <FontAwesomeIcon icon={faRing} />
      </h1>
      <Form className="col-lg-6 col-sm-9 mt-3 p-4 smaller-box-full shadow-sm rounded-2 gap-3 justify-content-center d-flex flex-column">
        <h2 className="fs-3 text-center">Reset password</h2>
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <div className="d-flex flex-column py-2 vstack gap-3 ">
          <Button
            className="btn-success"
            onClick={() => sendPasswordReset(email)}
          >
            Reset
          </Button>
          <span>
            <Link to="/" className="link">
              Back to Login
            </Link>{" "}
            now.
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Reset;
