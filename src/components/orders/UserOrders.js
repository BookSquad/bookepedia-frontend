import React, { useState, useEffect } from "react";
import axios from "axios";
import Order from "./Order";
import accountContext from "../userAccounts/accountContext";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);

  const { userEmail } = React.useContext(accountContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/orders/user-orders/${userEmail}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Active Orders</h2>
      {orders.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  );
};

export default UserOrders;
