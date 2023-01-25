import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>Producto Adicionado com Sucesso</Alert.Heading>
      <p>
        <Button variant="success">Voltar</Button>
        <Link to="/cart">
          <Button className="ms-2" variant="danger">
            Ir para o Carrinho
          </Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
