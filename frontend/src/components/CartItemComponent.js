import {Button, Form, Image, ListGroupItem} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CartItemComponent = () => {
  return (
    <>
      <ListGroupItem>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous" src="/images/games-category.png" fluid />
          </Col>
          <Col md={3}>Apple Watch Segunda Geração</Col>
          <Col md={1}><span className="fw-bold">500€</span></Col>
          <Col md={2}>
            <Form.Select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button type="button"
                    variant="secondary" onClick={() =>
            window.confirm("Are you sure?")}>
              <i className="bi bi-trash"/>
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
};

export default CartItemComponent;
