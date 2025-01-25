import React, { useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "./Dashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const DashboardPage = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

  // Dummy data for aware and unaware areas
  const data = {
    aware: 70, // Percentage of aware areas
    unaware: 30, // Percentage of unaware areas
    locations: [
      { id: 1, name: "Pune", status: "Aware", description: "Highly active in environmental campaigns." },
      { id: 2, name: "Amravati", status: "Aware", description: "Strong recycling initiatives in place." },
      { id: 3, name: "Pimpri", status: "Unaware", description: "Lack of public awareness about waste management." },
      { id: 4, name: "Delhi", status: "Unaware", description: "Minimal government programs for awareness." },
    ],
  };

  // Doughnut chart data
  const doughnutData = {
    labels: ["Aware Areas", "Unaware Areas"],
    datasets: [
      {
        data: [data.aware, data.unaware],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#66bb6a", "#ef5350"],
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: data.locations.map((location) => location.name),
    datasets: [
      {
        label: "Awareness Levels",
        data: data.locations.map((location) => (location.status === "Aware" ? 100 : 30)),
        backgroundColor: data.locations.map((location) =>
          location.status === "Aware" ? "#4caf50" : "#f44336"
        ),
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="dash-container">
      <h1>Awareness Dashboard</h1>
      <Link to="/">
           <button className="dash-back-button">Back</button>
        </Link>
      </div>
      

      {/* Doughnut Chart */}
      <div className="chart-container">
        <h2>Overall Awareness</h2>
        <Doughnut data={doughnutData} />
      </div>

      {/* Map Effect with Hover */}
      <div className="map-container">
        <h2>Area Details</h2>
        <div className="map">
          {data.locations.map((location) => (
            <div
              key={location.id}
              className={`map-point ${location.status.toLowerCase()}`}
              onMouseEnter={() => setHoveredArea(location)}
              onMouseLeave={() => setHoveredArea(null)}
            >
              <span className="map-tooltip">
                {location.name}
                {hoveredArea?.id === location.id && (
                  <div className="tooltip-content">
                    <p>Status: {location.status}</p>
                    <p>{location.description}</p>
                  </div>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="chart-container">
        <h2>Awareness by Location</h2>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default DashboardPage;
