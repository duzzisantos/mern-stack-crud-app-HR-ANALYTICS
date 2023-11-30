import React, { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { db, auth, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faUser,
  faRing,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPowerOff, faUser, faBars);
const isAdmin = process.env.REACT_APP_IS_ADMIN; //This gives access to admin pages

const Auth = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    //http request to fetch user from firebase store
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    } else if (!user) {
      fetchUserName();
      return navigate("/");
    }
  });

  // handles menu collapse for navbar

  const handleMenuCollapse = () => {
    var navitems = document.getElementById("myTopnav");
    if (navitems.className === "nav-items") {
      navitems.className += " responsive";
    } else {
      navitems.className = "nav-items";
    }
  };

  return (
    <>
      <div className="auth">
        <nav className="navbar">
          {/* <div className="img-holder" id="active"></div> */}
          <ul className="nav-items" id="myTopnav">
            <li className="nav-links" id="active">
              <Link to="/auth/register" className="nav-links">
                Keffi <FontAwesomeIcon icon={faRing} />
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/auth/register" className="link">
                New Employee
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/auth/table" className="link">
                All Employees
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/auth/appraisal" className="link">
                Appraisal Form
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/auth/dashboard" className="link">
                Dashboard
              </Link>
            </li>
            {user?.uid === isAdmin ? (
              <>
                <li className="nav-links">
                  <Link to="/auth/settings" className="link">
                    Settings
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            <li className="nav-links">
              <div className="auth-container">
                <span className="auth-span">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "cornflowerblue" }}
                  />
                </span>
                <span className="auth-span">{name}</span>

                <span className="auth-span">{user?.email}</span>
                <button
                  className="auth-btn"
                  onClick={logout}
                  type="button"
                  title="Logout"
                >
                  <FontAwesomeIcon icon={faPowerOff} />
                </button>
              </div>
            </li>
            <li
              className="nav-links"
              id="hamburger-icon"
              onClick={handleMenuCollapse}
            >
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "30px" }} />
            </li>
          </ul>
        </nav>
      </div>
      <Navbar expand="lg" className="bg-info">
        <Container>
          <Navbar.Brand href="/auth/dashboard">Keffi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto bg-success py-3 px-3 hstack">
              <Nav.Item className="d-flex ">
                <Nav.Link href="/auth/register">Add Employee</Nav.Link>
                <Nav.Link href="/auth/table">Employee Hub</Nav.Link>
                <Nav.Link href="/auth/appraisal">Appraisal</Nav.Link>
                <Nav.Link href="/auth/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/auth/settings">Settings</Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flexhstack gap-2 hstack justify-content-end">
                <li>{user?.email}</li>
                <Button onClick={logout}>Logout</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Auth;
