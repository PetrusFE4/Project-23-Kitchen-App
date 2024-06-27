/* eslint-disable no-unused-vars */
// src/components/Admin/CategoryManagement.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/admin-css/Category-admin.css";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editCategory, setEditCategory] = useState({ id: "", name: "" });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get("http://localhost:8888/resep")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  const handleAddCategory = () => {
    if (newCategory) {
      axios
        .post("https://fakestoreapi.com/products/categories", {
          name: newCategory,
        })
        .then((response) => {
          fetchCategories();
          setNewCategory("");
        })
        .catch((error) => console.error("Error adding category:", error));
    }
  };

  const handleEditCategory = (category) => {
    setEditCategory(category);
  };

  const handleUpdateCategory = () => {
    if (editCategory.name) {
      axios
        .put(
          `https://fakestoreapi.com/products/categories/${editCategory.id}`,
          { name: editCategory.name }
        )
        .then((response) => {
          fetchCategories();
          setEditCategory({ id: "", name: "" });
        })
        .catch((error) => console.error("Error updating category:", error));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "newCategory") {
      setNewCategory(value);
    } else {
      setEditCategory((prev) => ({ ...prev, name: value }));
    }
  };

  return (
    <div className="category-management">
      <h2>Manage Categories</h2>
      <div className="add-category">
        <input
          type="text"
          name="newCategory"
          value={newCategory}
          onChange={handleInputChange}
          placeholder="Add new category"
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>
      <table className="category-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>
                {editCategory.id === index ? (
                  <input
                    type="text"
                    name="editCategory"
                    value={editCategory.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  category
                )}
              </td>
              <td>
                {editCategory.id === index ? (
                  <button onClick={handleUpdateCategory}>Save</button>
                ) : (
                  <button
                    onClick={() =>
                      handleEditCategory({ id: index, name: category })
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;
