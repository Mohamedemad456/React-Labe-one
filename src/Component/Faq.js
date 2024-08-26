import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";

function Faq() {
  return (
    <Container className="mt-5">
      <Row className="my-4">
        <Col>
          <h1>Frequently Asked Questions</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is React?</Accordion.Header>
              <Accordion.Body>
                React is a JavaScript library for building user interfaces. It
                allows developers to create single-page applications with a
                component-based architecture.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How do I get started with React?
              </Accordion.Header>
              <Accordion.Body>
                To get started with React, you can use the Create React App CLI
                tool, which sets up a new React project with a sensible default
                configuration. You can also learn from the official React
                documentation.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What are React hooks?</Accordion.Header>
              <Accordion.Body>
                React hooks are functions that let you use state and other React
                features without writing a class. Examples of hooks include
                useState, useEffect, and useContext.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Can I use React with other libraries?
              </Accordion.Header>
              <Accordion.Body>
                Yes, React can be used with various other libraries and
                frameworks. It is often paired with state management libraries
                like Redux or MobX, and can be integrated with back-end services
                and other tools as needed.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Faq;
