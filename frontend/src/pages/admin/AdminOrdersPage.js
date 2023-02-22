import OrdersPageComponent from "./components/OrdersPageComponent";
import axios from "axios";

const fetchOrders = async (abctrl) => {
  const { data } = await axios.get("/api/orders/admin", {
    signal: abctrl.signal,
  });
  return data;
};

const AdminOrdersPage = () => {
  return <OrdersPageComponent fetchOrders={fetchOrders}/>
};

export default AdminOrdersPage;
