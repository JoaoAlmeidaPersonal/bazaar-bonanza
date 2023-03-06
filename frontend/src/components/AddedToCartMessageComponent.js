import { Alert, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddedToCartMessageComponent = ({
  showCartMessage,
  setShowCartMessage,
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Alert
      show={showCartMessage}
      variant="success"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
      <Alert.Heading>Producto Adicionado com Sucesso</Alert.Heading>
      <p>
        <Button variant="success" onClick={goBack}>
          Voltar
        </Button>
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
