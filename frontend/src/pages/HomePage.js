import CarouselComponent from "../components/CarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Books",
    "Videos",
  ];
  return (
    <>
      <CarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-2">
          {categories.map((category,idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
