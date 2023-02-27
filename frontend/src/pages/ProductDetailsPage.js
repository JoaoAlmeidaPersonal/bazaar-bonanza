import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import { Button, Image, ListGroup, Form, Alert } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductsDetailsPage = () => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart());
  };

  const products = useSelector((state) => state.cart.value)

  var options = {
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image
              crossOrigin="anonymous"
              className="mt-2"
              fluid
              src="/images/shoe1.jpg"
            />
          </div>
          <br />
          <div id="second">
            <Image
              crossOrigin="anonymous"
              className="mt-2"
              fluid
              src="/images/shoe2.jpg"
            />
          </div>
          <br />
          <div id="third">
            <Image
              crossOrigin="anonymous"
              className="mt-2"
              fluid
              src="/images/shoe3.jpg"
            />
          </div>
          <br />
          <div id="fourth">
            <Image
              crossOrigin="anonymous"
              className="mt-2"
              fluid
              src="/images/shoe1.jpg"
            />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              {" "}
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Chuck taylor all star lift cuir hi branco CONVERSE</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <b>Detalhes do artigo</b>• Sapatilhas de cano subido • Uso
                  desportivo • Tacão de cunha • Altura do tacão: 4 cm • Apertam:
                  com atacadores • Acabamento liso
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Composição e cuidados</b>• Exterior: 100% pele • Forro:
                  100% tecido • Palmilha: 100% tecido • Rasto: 100% cauchu
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Estado: Em Stock</ListGroup.Item>
                <ListGroup.Item>Preço: 150 Euros</ListGroup.Item>
                <ListGroup.Item>
                  Quantidade
                  <Form.Select aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button onClick={addToCartHandler} variant="danger">
                    Comprar
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 5 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe <br />
                    <Rating readonly initialValue={4} size={20} /> <br />
                    20-09-2001 <br />
                    "Eu adorei o hotel! A localização é ótima, perto de muitos
                    lugares para comer e de uma praia linda. O quarto era
                    espaçoso e limpo, e o café da manhã era incrível. Eu
                    definitivamente recomendo este hotel para quem estiver
                    procurando por uma estadia confortável e agradável."
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Escreve a tua avaliação!</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Avalia</option>
              <option value="1">Muito Bom</option>
              <option value="2">Okay</option>
              <option value="3">Mau</option>
            </Form.Select>
            <Button className="mt-3 mb-3" variant="primary">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsDetailsPage;
