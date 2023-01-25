import { Card, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({images,idx}) => {
  return (
    <Card
      style={{
        marginTop: "13px",
        marginBottom: "50px",
      }}
    >
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={"/images/" +
          images[idx] + "-category.png"} />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className="h4">
              $123
              <LinkContainer to="/product-details">
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
