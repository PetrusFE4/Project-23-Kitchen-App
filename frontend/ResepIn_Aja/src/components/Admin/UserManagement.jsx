/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/admin-css/usermanagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: { firstname: "", lastname: "" },
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("https://localhost:8888/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setEditedUser({ ...user, password: "" }); // Initialize password to an empty string
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstname" || name === "lastname") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        name: {
          ...prevUser.name,
          [name]: value,
        },
      }));
    } else {
      setEditedUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    closeModal();
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="user-management">
      <h2>Manage Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user.name.firstname} ${user.name.lastname}`}</td>
              <td>{user.email}</td>
              <td>
                <button className="edit-btn" onClick={() => openModal(user)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit User</h3>
            <label>
              First Name:
              <input
                type="text"
                name="firstname"
                value={editedUser.name.firstname}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={editedUser.name.lastname}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={editedUser.password}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
