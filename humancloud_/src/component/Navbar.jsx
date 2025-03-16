import React from "react";
import "./styles.css";
// import './Navbar.css';
// import { useNavigate } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyu6tU2FZF9MWGXQ81IijsrG4ud5gOCuhuA&s" alt="Concept School" />
      <h1>Concept School</h1>
      </div>
      <div className="profile">
        <img  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="User" />
      </div>
    </nav>
  );
};

export default Navbar;
