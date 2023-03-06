import UserCartDetailsPageComponent from "./components/UserCartDetailsPageComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import axios from "axios";

const UserCartDetailsPage = () => {
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const reduxDispatch = useDispatch();

  const getUser = async () => {
    const { data } = await axios.get("/api/users/profile/" + userInfo._id);
    return data;
  };

  const createOrder = async (orderData) => {
    const { data } = await axios.post("/api/orders/", {
      ...orderData,
    });
    return data;
  };

  return (
    <UserCartDetailsPageComponent
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      userInfo={userInfo}
      itemsCount={itemsCount}
      cartItems={cartItems}
      cartSubtotal={cartSubtotal}
      reduxDispatch={reduxDispatch}
      getUser={getUser}
      createOrder={createOrder}
    />
  );
};

export default UserCartDetailsPage;
