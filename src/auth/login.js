import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./firebase";
// import { signInWithFacebook } from "./facebook-auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRing } from "@fortawesome/free-solid-svg-icons";

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
    <div className="login">
      <h2>
        Keffi <FontAwesomeIcon icon={faRing} />
      </h2>
      <div className="login-container">
        <h3>Login</h3>
        <label htmlFor="login-email">Email</label>
        <input
          type="text"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          title="Enter email address"
        />{" "}
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          title="Enter password"
        />
        <div className="sign-btns">
          <button
            className="login-btn"
            onClick={() => logInWithEmailAndPassword(email, password)}
            title="Login"
          >
            Login
          </button>
        </div>
        <span className="login-span">
          <Link to="reset" className="link" title="Reset password">
            Forgot Password?
          </Link>
        </span>
        <span className="login-span">
          <Link to="signup" className="link" title="Create an account">
            Do not have an account?
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
