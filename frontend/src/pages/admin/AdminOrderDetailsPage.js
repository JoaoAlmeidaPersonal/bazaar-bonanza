import OrderDetailsComponent from "./components/OrderDetailsComponent";

import axios from "axios";

const fetchOrderDetails = async (id) => {
  const { data } = await axios.get("/api/orders/user/" + id);
  return data;
};

const markAsDelivered = async (id) => {
  const { data } = await axios.put("/api/orders/delivered/" + id);
  if (data) {
    return data;
  }
}

const AdminOrderDetailsPage = () => {
  return (
    <OrderDetailsComponent
      fetchOrderDetails={fetchOrderDetails}
      markAsDelivered={markAsDelivered}
    />
  );
};

export default AdminOrderDetailsPage;
