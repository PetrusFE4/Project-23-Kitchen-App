/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/admin-css/dashboardadmin.css";
import ProductManagement from "./ProductManagement";
import CategoryManagement from "./CategoryManagement";
import OrderManagement from "./OrderManagement";
import UserManagement from "./UserManagement";
import Reports from "./Reports";

const AdminDashboard = () => {
  const [activeContent, setActiveContent] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchProductData();
    fetchCategoryData();
    fetchUserData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setTotalProducts(response.data.length);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setTotalCategories(response.data.length);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      setTotalUsers(response.data.length);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const showProductManagement = () => {
    setActiveContent(<ProductManagement />);
  };

  const showCategoryManagement = () => {
    setActiveContent(<CategoryManagement />);
  };

  const showOrderManagement = () => {
    setActiveContent(<OrderManagement />);
  };

  const showUserManagement = () => {
    setActiveContent(<UserManagement />);
  };

  const showReports = () => {
    setActiveContent(<Reports />);
  };

  const hideActiveContent = () => {
    setActiveContent(null);
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        {/* <div className="dashboard-links">
          <button onClick={showProductManagement}>Manage Products</button>
          <button onClick={showCategoryManagement}>Manage Categories</button>
          <button onClick={showOrderManagement}>Manage Orders</button>
          <button onClick={showUserManagement}>Manage Users</button>
          <button onClick={showReports}>View Reports</button>
        </div> */}
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Total Products</h2>
          <p>{totalProducts}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Categories</h2>
          <p>{totalCategories}</p>
        </div>
        <div className="dashboard-card">
          <h2>Total Users</h2>
          <p>{totalUsers}</p>
        </div>
      </div>
      <div className="dashboard-content">{activeContent}</div>
    </div>
  );
};

export default AdminDashboard;
