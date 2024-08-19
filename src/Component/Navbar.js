import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import logo from "../logo.svg";

function MyNavbar() {
  return (
    <>
      {" "}
      <style>
        {`
          #basic-nav-dropdown::after {
            color: white !important;
          }
        `}
      </style>
      <Navbar
        expand="md"
        style={{ backgroundColor: "#F5511E" }}
        id="home"
        className="mb-5"
      >
        <Container fluid>
          <Navbar.Brand
            href="Lab-13.html"
            className="text-light h1 fs-1 mx-5 lead"
          >
            <img src={logo} alt="Logo" /> Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="fs-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link
                href="Lab-13.html"
                className="text-light active h5 fs-2 mx-5 lead"
              >
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-light h5 fs-2 mx-5 lead">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-light h5 fs-2 mx-5 lead">
                Contact Us
              </Nav.Link>
              <NavDropdown
                title={<span className="text-light">Dropdown</span>}
                id="basic-nav-dropdown"
                className="mx-5 lead h5 fs-2"
              >
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
