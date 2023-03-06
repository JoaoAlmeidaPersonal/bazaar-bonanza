import { Card, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({ productId, name, description, price, images, rating, reviewsNumber }) => {
  return (
    <Card
      style={{
        marginTop: "13px",
        marginBottom: "50px",
      }}
    >
      <Row>
        <Col lg={5}>
          <Card.Img
              crossOrigin="anonymous"
              variant="top"
              src={images[0] ? images[0].path : ''}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={rating} /> ({reviewsNumber})
            </Card.Text>
            <Card.Text className="h4">
              ${price}{" "}
              <LinkContainer to={`/product-details/${productId}`}>
                <Button className="ms-3" variant="primary">
                  Ver Produto
                </Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
