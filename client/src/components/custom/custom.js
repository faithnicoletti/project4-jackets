import React, { useState } from "react";
import axios from "axios";

export default function Custom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, size, color, description);
    axios
      .post("http://localhost:3001/login-user", {
        email,
        password,
        size,
        color,
        description,
      })
      .then((response) => {
        const data = response.data;
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./myusers";
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h1>Custom Order Form</h1>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Size</label>
            <select
              className="form-select"
              onChange={(e) => setSize(e.target.value)}
              value={size}
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="large">X-Large</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Color</label>
            <select
              className="form-select"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            >
              <option value="">Select Color</option>
              <option value="red">Dark blue denim</option>
              <option value="blue">Black denim</option>
              <option value="green">Light blue denim</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Description:</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter additional details or comments"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
