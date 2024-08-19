import React, { useState } from "react";
import { Button, Container, Row, Col, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Details({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <Container className="bg-light px-3 py-2 rounded offset-md-4 col-md-4">
      <Row>
        <Col>
          <h4>{title}</h4>
        </Col>
        <Col className="text-end">
          <Button
            variant={isOpen ? "danger" : "primary"}
            onClick={toggleCollapse}
            aria-controls="collapse-text"
            aria-expanded={isOpen}
          >
            {isOpen ? "-" : "+"}
          </Button>
        </Col>
        <Collapse in={isOpen}>
          <div id="collapse-text" className="mt-3">
            <div className="p-3 bg-light border rounded">
              <p>{content}</p>
            </div>
          </div>
        </Collapse>
      </Row>
    </Container>
  );
}

export default Details;
