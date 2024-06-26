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
  CheckSquareFill,
  Gear,
  Mortarboard,
  People,
  PeopleFill,
  PersonPlus,
  PieChart,
  Power,
  Table,
} from "react-bootstrap-icons";

library.add(faPowerOff, faUser, faBars);

const Navigation = () => {
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
      return navigate("/login");
    }
  });

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark text-light shadow-sm" sticky="top">
        <Container>
          <Navbar.Brand href="/league-table" className="text-light fw-bolder">
            {" "}
            <FontAwesomeIcon icon={faRing} /> KEFFI
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            as={"button"}
            className=" border-0 text-bg-secondary"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="gap-2">
              <Nav.Item className="me-auto vstack d-flex flex-lg-nowrap flex-lg-row flex-sm-wrap flex-sm-column gap-1 text-start">
                <Nav.Link href="/register" className="text-light">
                  <PersonPlus /> Add Employee
                </Nav.Link>
                <Nav.Link href="/table" className="text-light">
                  <People /> Employee Hub
                </Nav.Link>
                <Nav.Link href="/appraisal" className="text-light">
                  <CheckSquareFill /> Appraisal
                </Nav.Link>
                <Nav.Link href="/dashboard" className="text-light">
                  <PieChart /> Dashboard
                </Nav.Link>
                <Nav.Link href="/league-table" className="text-light">
                  <Table /> League Table
                </Nav.Link>

                <Dropdown className="mt-2">
                  <Dropdown.Toggle
                    variant="success"
                    size="sm"
                    title="HR Manager"
                  >
                    <Gear /> HR Manager
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="bg-dark shadow-lg"
                    style={{ width: "200px" }}
                  >
                    <Nav.Link href="/settings" className="text-light">
                      <PeopleFill /> HR Management
                    </Nav.Link>
                    <Nav.Link href="/recommendations" className="text-light">
                      <Mortarboard /> HR Recommendations
                    </Nav.Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>

              <Nav.Item className="d-flex hstack gap-2 mx-lg-5">
                <li>{user?.email ?? name}</li>
                <Button
                  size="sm"
                  variant="secondary"
                  className="text-light text-light btn-outline-danger border-0"
                  onClick={handleLogOut}
                  title="Log out"
                >
                  <Power /> Logout
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
