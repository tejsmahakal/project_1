import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Navbar from "./Navbar"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
    <Navbar/>

    <div className="login-container">
      <div className="login-box">
        {/* <Navbar/> */}
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon">👁</span>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
