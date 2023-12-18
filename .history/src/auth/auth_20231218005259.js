import React, { useState, useEffect } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
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
import {
  Bank,
  CheckSquareFill,
  People,
  PersonPlus,
  PieChart,
  Table,
} from "react-bootstrap-icons";

library.add(faPowerOff, faUser, faBars);

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

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-dark text-light w-100 shadow-sm"
        sticky="top"
        style={{ height: "fit-content" }}
      >
        <Container>
          <Navbar.Brand href="/auth/dashboard" className="text-light">
            {" "}
            Keffi <FontAwesomeIcon icon={faRing} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex py-3 col-12 px-3 hstack justify-content-between text-light">
              <Nav.Item className="hstack gap-3">
                <Nav.Link href="/auth/register" className="text-light">
                  <PersonPlus /> Add Employee
                </Nav.Link>
                <Nav.Link href="/auth/table" className="text-light">
                  <People /> Employee Hub
                </Nav.Link>
                <Nav.Link href="/auth/appraisal" className="text-light">
                  <CheckSquareFill /> Appraisal
                </Nav.Link>
                <Nav.Link href="/auth/dashboard" className="text-light">
                  <PieChart /> Dashboard
                </Nav.Link>
                <Nav.Link href="/auth/league-table" className="text-light">
                  <Table /> League Table
                </Nav.Link>

                <Dropdown>
                  <Dropdown.Toggle variant="success" size="sm">
                    <Bank /> HR Policies
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-light text-dark">
                    <Nav.Link href="/auth/settings">Settings</Nav.Link>
                    <Nav.Link href="/auth/training">Training</Nav.Link>
                    <Nav.Link href="/auth/improvements">Improvements</Nav.Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>

              <Nav.Item className="d-flex hstack gap-2 ms-auto">
                <li>{user?.email ?? name}</li>
                <Button
                  size="sm"
                  variant="secondary"
                  className="text-light"
                  onClick={logout}
                >
                  Logout
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Auth;
