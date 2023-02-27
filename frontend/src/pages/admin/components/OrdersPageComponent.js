import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../../redux/actions/userActions";


const OrdersPageComponent = ({fetchOrders}) => {
    const [orders, setOrders] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        const abctrl = new AbortController();
        fetchOrders(abctrl)
            .then((res) => setOrders(res))
            .catch((er) =>
                dispatch(logout())
            );
        return () => abctrl.abort();
    }, []);

    return (
      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>Orders</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Payment Method</th>
                <th>Order Details</th>
              </tr>
            </thead>
            <tbody>
            {orders.map((order, idx) => (
                <tr key={idx}>
                    {console.log(order)}
                    <td>{idx + 1}</td>
                    <td>
                        {order.user !== null ? (
                            <>
                                {order.user.name} {order.user.lastName}
                            </>
                        ) : null}
                    </td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.orderTotal.cartSubtotal}</td>
                    <td>
                        {order.isDelivered ? (
                            <i className="bi bi-check-lg text-success"></i>
                        ) : (
                            <i className="bi bi-x-lg text-danger"></i>
                        )}
                    </td>
                    <td>{order.paymentMethod}</td>
                    <td>
                        <Link to={`/admin/order-details/${order._id}`}>
                            go to order
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
};

export default OrdersPageComponent;
