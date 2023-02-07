import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Alert, Button, Form, InputGroup, Spinner} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector("input[name=password]")
    const confirm = document.querySelector("input[name=confirmPassword]")
    if(password.value  === confirm.value) {
      confirm.setCustomValidity("")
    } else {
      confirm.setCustomValidity("Passwords do not match!")
    }
  }

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
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Primeiro Nome</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label className="mt-3">Ultimo nome</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="mt-3">E-mail</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your e-mail"
                name="email"
                onChange={onChange}
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
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password should have at leastgma
                gma
                6 characters!
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPasswordRepeat">
              <Form.Label className="mt-3">Repita a Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Introduza novamente a password"
                name="confirmPassword"
                minLength={6}
              />
              <Form.Control.Feedback type="invalid">
                Passwords should match
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="pb-2">
              <Col>
                Do you have an account already?
                <Link to={"/login"}>
                  <span className="ms-1">Login</span>
                </Link>
              </Col>
            </Row>
            <Button className="mt-2" type="submit">
              <Spinner
                className="me-2"
                as="span"
                role="status"
                aria-hidden="true"
                animation="border"
                variant="danger"
                size="sm"
              />
              Registar
            </Button>
            <Alert show={true} variant="danger">
              Utilizador já existente!
            </Alert>
            <Alert show={true} variant="info">
              Utilizador Criado
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
