/* eslint-disable no-unused-vars */
// src/components/Admin/OrderManagement.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/admin-css/ordermanagement.css";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from an API (using Fake Store API for example)
    axios
      .get("https://fakestoreapi.com/carts")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div className="order-management">
      <h2>Manage Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.userId}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
