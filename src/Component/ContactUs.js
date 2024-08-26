// src/ContactUs.js
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';


const ContactUs = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Contact Us</h1>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Enter your message"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
            <div className="social-icons text-center mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-5">
                    <Facebook size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-5">
                    <Twitter size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-5">
                    <Instagram size={30} />
                </a>
            </div>
        </Container>
    );
};

export default ContactUs;
