import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Badge,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand  href="/">
            <img src="logo.JPG" alt="..." height="36" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="Todos">
                <Dropdown.Item>Perfumes</Dropdown.Item>
                <Dropdown.Item>Roupa</Dropdown.Item>
                <Dropdown.Item>Maquilhagem</Dropdown.Item>
                <Dropdown.Item>Cremes</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Pesquise na loja..." />
              <Button variant="warning">
                <i className="bi bi-search text-dark" />
              </Button>{" "}
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Administrador
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle" />
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="João Almeida" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                Encomendas
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                Meu Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Log Out</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>LogIn</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Registar</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                {" "}
                <Badge pill bg="danger">
                  2
                </Badge>
                <i className="bi bi-cart"></i>
                Carrinho
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;