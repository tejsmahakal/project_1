import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./styles.css";
// import './Dashboard.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import StudentCards from "./StudentCards";
import { GiHamburgerMenu } from "react-icons/gi";


const data = [
  { name: "Jan", eleventh: 40, twelfth: 30 },
  { name: "Feb", eleventh: 55, twelfth: 40 },
  { name: "Mar", eleventh: 30, twelfth: 35 },
  { name: "Apr", eleventh: 70, twelfth: 60 },
  { name: "May", eleventh: 65, twelfth: 50 },
  { name: "Jun", eleventh: 75, twelfth: 55 },
  { name: "Jul", eleventh: 65, twelfth: 45 },
  { name: "Aug", eleventh: 86, twelfth: 70 },
  { name: "Sep", eleventh: 72, twelfth: 65 },
  { name: "Oct", eleventh: 67, twelfth: 55 },
  { name: "Nov", eleventh: 90, twelfth: 80 },
  { name: "Dec", eleventh: 60, twelfth: 50 },
];

const pieData = [
  { name: "11th Class", value: 45 },
  { name: "12th Class", value: 55 },
];

const COLORS = ["#904094", "#2f1c30"];

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <Sidebar />
          <div className="main-content">
           <h2>  <GiHamburgerMenu />
          Dashboard </h2>
            <StudentCards />

            <div className="charts">
              <div className="chart">
                <h3>Student Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="eleventh" fill="#904094" name="11th Class" />
                    <Bar dataKey="twelfth" fill="#2f1c30" name="12th Class" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="chart">
                <h3>Pie Chart</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
