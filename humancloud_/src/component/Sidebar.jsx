import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownStudent, setShowDropdownStudent] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate(-1);
  };

  return (
    <div className="sidebar">
      <ul>
        <li><span>📊 Dashboard</span>  </li>
        <br />
        <br />
        <li>📅 Calendar</li>
        <br />
        <br />
        {/* Teachers Dropdown */}
        <li onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer">
          👨‍🏫 Teachers  ▼
        </li>
        {showDropdown && (
          <select className="dropdown">
            <option>List</option>
            <option>Paper</option>
            <option>Question Banks</option>
            <option>Salary</option>
          </select>
        )}
        <br />
        <br />
         {/* Student dropdown */}
        <li onClick={() => setShowDropdownStudent(!showDropdownStudent)} className="cursor-pointer">
        📚 Students  ▼
        </li>
        {showDropdownStudent && (
          <select className="dropdown">
            <option>Attendance</option>
            <option>Exams</option>
            <option>Results</option>
          </select>
        )}

<br />
        <br />
        <li>💳 Fees</li>
        <br />
        <br />
        <li>⚙️ Settings</li>
        <br />
        
        <li onClick={handleLogout} className="cursor-pointer">🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
