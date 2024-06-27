/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/admin-css/produkadmin.css";

const ProductManagement = () => {
  const [resepData, setResepData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [editResepId, setEditResepId] = useState(null);
  const [editResepName, setEditResepName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      setIsAuthenticated(true);
      setUserId(user.id);
    }
  }, []);

  const getResep = async () => {
    try {
      const response = await axios.get("http://localhost:8888/resep");
      setResepData(response.data);
    } catch (error) {
      console.error("Error fetching resep:", error);
    }
  };

  useEffect(() => {
    getResep();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/resep/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      getResep(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting resep:", error);
    }
  };

  const handleEdit = (id, nama_resep) => {
    setEditResepId(id);
    setEditResepName(nama_resep);
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `http://localhost:8888/resep/${editResepId}/update`,
        { name: editResepName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setEditResepId(null);
      setEditResepName("");
      getResep(); // Refresh the list after update
    } catch (error) {
      console.error("Error updating resep:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditResepId(null);
    setEditResepName("");
  };

  return (
    <div className="product-management">
      <h2>Manage Products</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resepData.map((resep) => (
            <tr key={resep.id}>
              <td>{resep.id}</td>
              <td>
                {editResepId === resep.id ? (
                  <input
                    type="text"
                    value={editResepName}
                    onChange={(e) => setEditResepName(e.target.value)}
                  />
                ) : (
                  resep.nama_resep
                )}
              </td>
              <td>
                {editResepId === resep.id ? (
                  <>
                    <button className="save-btn" onClick={handleUpdate}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(resep.id, resep.nama_resep)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(resep.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
