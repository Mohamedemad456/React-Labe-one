import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <>
      <Container className="my-4">
        <Row className="text-center">
          <Col>
            <h1 className="mb-4">Help Center</h1>
            <div className="d-flex justify-content-center">
              <NavLink to="faq">
                <Button variant="primary" className="mx-2">
                  FAQ
                </Button>
              </NavLink>
              <NavLink to="contactUs">
                <Button variant="secondary" className="mx-2">
                  Contact Us
                </Button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
}
export default HelpLayout;
