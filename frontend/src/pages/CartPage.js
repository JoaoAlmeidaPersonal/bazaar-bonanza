import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Alert, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../components/CartItemComponent";

const CartPage = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">

          {Array.from({ length: 5 }).map((item,idx) => (
            <>
              <CartItemComponent item={{image: {path:"/images/tablets-category.png"}, name: "Product name", price:10, count:10, quantity:10}} key={idx} />
            </>
          ))}
          </ListGroup>
          <Alert variant="info">O seu carrinho está vazio</Alert>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>Subtotal(2 produtos)</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              Preço <span className="fw-bold"> 450 €</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/cart-details">
                <Button type="button" variant="outline-info">
                  Proceder ao Checkout
                </Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
