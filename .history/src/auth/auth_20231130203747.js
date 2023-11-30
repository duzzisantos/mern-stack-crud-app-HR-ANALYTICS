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
      <Navbar expand="lg" className="bg-primary text-light w-100" sticky="top">
        <Container>
          <Navbar.Brand href="/auth/dashboard" className="text-light">
            {" "}
            Keffi <FontAwesomeIcon icon={faRing} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex py-3 px-3 hstack justify-content-between text-light">
              <Nav.Link href="/auth/register" className="text-light">
                Add Employee
              </Nav.Link>
              <Nav.Link href="/auth/table" className="text-light">
                Employee Hub
              </Nav.Link>
              <Nav.Link href="/auth/appraisal" className="text-light">
                Appraisal
              </Nav.Link>
              <Nav.Link href="/auth/dashboard" className="text-light">
                Dashboard
              </Nav.Link>
              <Nav.Link href="/auth/settings" className="text-light">
                Settings
              </Nav.Link>

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
