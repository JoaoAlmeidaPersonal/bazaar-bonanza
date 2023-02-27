import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {setReduxUserState} from "../../redux/actions/userActions";

const LoginPageComponent = ({ loginUserApiRequest,
                              reduxDispatch,
                              setReduxUserState
                            }) => {
  const [validated, setValidated] = useState(false);
  const [loginUserResponseState, setLoginUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;

    const email = form.email.value;
    const password = form.password.value;
    const doNotLogout = form.doNotLogout.checked;

    if (event.currentTarget.checkValidity() === true && email && password) {
      setLoginUserResponseState({ loading: true });
      loginUserApiRequest(email, password, doNotLogout)
        .then((res) => {
          setLoginUserResponseState({
            success: res.success,
            loading: false,
            error: "",
          });
          if (res.userLoggedIn) {
            reduxDispatch(setReduxUserState(res.userLoggedIn));
          }

          if (res.success === "user logged in" && !res.userLoggedIn.isAdmin) {
            window.location.href = "/user";
          } else {
            window.location.href = "/admin/orders";
          }
        })
        .catch((er) =>
          setLoginUserResponseState({
            error: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          })
        );
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
              {loginUserResponseState &&
              loginUserResponseState.loading === true ? (
                <Spinner
                  className="me-2"
                  as="span"
                  role="status"
                  aria-hidden="true"
                  animation="border"
                  size="sm"
                />
              ) : (
                ""
              )}
              Login
            </Button>
            <Alert
              show={
                loginUserResponseState &&
                loginUserResponseState.error === "Wrong Credentials"
              }
              variant="danger"
            >
              Wrong credentials!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPageComponent;
