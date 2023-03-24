import React, { useState, useEffect } from "react";
import axios from "axios";

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/orders/active")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Active Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Quantity</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.userId}</td>
              <td>{order.bookId}</td>
              <td>{order.quantity}</td>
              <td>{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveOrders;
