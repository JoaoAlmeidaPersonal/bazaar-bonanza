import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 style={{ color: "#434343" }}>Melhor Portatil do Mercado!</h3>
          </LinkContainer>
          <p style={{ color: "white" }}>
            Dell Inspiron 15 3000 Laptop, 15.6 inch HD
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 style={{ color: "#434343" }}>Melhores Livros!</h3>
          </LinkContainer>{" "}
          <p>Livro do homem-aranha todo nu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 style={{ color: "#434343" }}>Melhor Cameras do Mercado!</h3>
          </LinkContainer>          <p>
          Encontre o melhor de todos os produtos Câmaras de lentes amovíveis.Descubra a câmara de lentes amovíveis Alpha da Sony com capacidade profissional.          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
