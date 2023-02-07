import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const AdminOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent/>
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
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>Mark</td>
                  <td>2022-01-01</td>
                  <td>$124</td>
                  <td>PayPal</td>
                  <td>
                    <i className={item} />
                  </td>
                  <td>
                    <Link to="/admin/order-details">Go to Order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminOrdersPage;
