import React, { useState } from "react";
import { FiAward } from "react-icons/fi";
import studentData from "./students.json";
// import "./StudentCards.css";

const StudentCards = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openCategory = (category) => setSelectedCategory(category);
  const closeCategory = () => setSelectedCategory(null);

  const cards = [
    { title: "Topper Student", range: "100% to 75%", className: "topper" },
    { title: "Average Student", range: "75% to 50%", className: "average" },
    { title: "Below Average Student", range: "50% to 35%", className: "below-average" },
  ];

  return (
    <div className="dashboard-container">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.className}`}>
            <div className="card-content">
              <div className="text">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-range">{card.range}</p>
              </div>
              <div className="icon">
                <FiAward size={28} />
              </div>
            </div>
            <div className="view-all" onClick={() => openCategory(card.title)}>View All</div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="student-info-box">
          <div className="student-info-header">
            <h2>{selectedCategory}</h2>
            <button className="close-btn" onClick={closeCategory}>×</button>
          </div>
          <table className="student-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Percentage (%)</th>
              </tr>
            </thead>
            <tbody>
              {studentData[selectedCategory]?.map((student, i) => (
                <tr key={i}>
                  <td>{student.name}</td>
                  <td>{student.percentage}</td>
                </tr>
              )) || (
                <tr><td colSpan="2">No Data Available</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentCards;