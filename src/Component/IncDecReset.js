import React, { useState } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function IncDecReset() {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber((prevNumber) => prevNumber + 1);
  const decrement = () =>
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0)); // Prevent going below 0
  const reset = () => setNumber(0);
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center flex-column bg-light rounded mb-5"
        style={{ width: "300px", height: "200px" }}
      >
        <Row>
          <div
            className="d-flex justify-content-center align-items-center text-dark lead rounded"
            style={{ width: "100px", height: "100px", fontSize: "90px" }}
          >
            {number}
          </div>
        </Row>
        <Row className="p-4 rounded">
          <Col className="d-flex ">
            <Button variant="primary" className="mx-2" onClick={increment}>
              {" "}
              +{" "}
            </Button>
            <Button variant="primary" className="mx-2" onClick={decrement}>
              {" "}
              -{" "}
            </Button>
            <Button
              style={{ backgroundColor: "#F5511E" }}
              className="mx-2"
              onClick={reset}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IncDecReset;
