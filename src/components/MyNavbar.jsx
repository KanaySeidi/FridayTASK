import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          TASKS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/counter">
              Counter
            </Link>
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
            <Link className="nav-link" to="/mail">
              FORM email
            </Link>
            <Link className="nav-link" to="/contacts">
              Contact Book
            </Link>
            <Link className="nav-link" to="/contacts/add">
              Add Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
