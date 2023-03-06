import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, ListGroup } from "react-bootstrap";
import SortOptionsComponent from "../../components/SortOptionsComponent";
import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../../components/filterQueryResultOptions/AttributesFilterComponent";
import ProductForListComponent from "../../components/ProductForListComponent";
import PaginationComponent from "../../components/PaginationComponent";
import {useEffect, useState} from "react";
import {logout} from "../../redux/actions/userActions";

const ProductListPageComponent = ({getProducts}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => setProducts(res.products))
    }, []);
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="mb-3 mt-3">
                            <SortOptionsComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Filtro: <br/>
                            <PriceFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <RatingFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <CategoryFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <AttributesFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary">Filtrar</Button>{" "}
                            <Button variant="danger">Redefinir filtro</Button>{" "}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {products.map((product) => (
                        <ProductForListComponent
                            key={product._id}
                            images={product.images}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            rating={product.rating}
                            reviewsNumber={product.reviewsNumber}
                            productId={product._id}
                        />
                    ))}
                    <PaginationComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPageComponent;
