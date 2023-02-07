import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="mt-3">E-mail</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your e-mail"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid e-mail
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Introduza a password"
                name="password"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="doNotLogout"
                label="Do not logout"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Don't have an account?
                <Link to={"/register"}>
                  <span className="ms-1">Register</span>
                </Link>
              </Col>
            </Row>
            <Button variant="primary" className="mt-2" type="submit">
              <Spinner
                className="me-2"
                as="span"
                role="status"
                aria-hidden="true"
                animation="border"
                size="sm"
              />
              Login
            </Button>
            <Alert show={true} variant="danger">
              Wrong credentials!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
