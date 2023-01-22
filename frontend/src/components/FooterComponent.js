import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./novologo.JPG";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-dark">
          <Container>
            <img
                src={logo}
                className="rounded mx-auto d-block"
                alt="..."
                height={80}
            />
          </Container>
        </Row>
        {/*<Row >*/}
        {/*  <Col className="bg-dark text-white text-center py-5">*/}
        {/*    {" "}*/}
        {/*    Copyright &copy; Melhor Loja Online*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Container>
    </footer>
  );
};

export default FooterComponent;
