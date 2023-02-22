import { Button, Form, Image, ListGroupItem } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CartItemComponent = ({ item, orderCreated = false }) => {
  return (
    <>
      <ListGroupItem>
        <Row>
          <Col md={2}>
            <Image
              crossOrigin="anonymous"
              src={item.image ? item.image.path ?? null : null}
              fluid
            />
          </Col>
          <Col md={3}>{item.name}</Col>
          <Col md={1}>
            <span className="fw-bold">${item.price}</span>
          </Col>
          <Col md={2}>
            <Form.Select
              onChange={() => {}}
              disabled={orderCreated}
              value={item.quantity}
            >
              {[...Array(item.count).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="bi bi-trash" />
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
};

export default CartItemComponent;
