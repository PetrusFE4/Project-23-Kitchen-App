/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Admin/admin-css/reports.css";

const Reports = () => {
  const [salesData, setSalesData] = useState([]);
  const [filterType, setFilterType] = useState("day"); // Default filter type is "day"

  useEffect(() => {
    fetchSalesData(filterType);
  }, [filterType]);

  const fetchSalesData = (type) => {
    let url = "";
    switch (type) {
      case "day":
        url = "https://fakestoreapi.com/orders?limit=10";
        break;
      case "month":
        url = "https://fakestoreapi.com/orders?limit=30";
        break;
      case "year":
        url = "https://fakestoreapi.com/orders";
        break;
      default:
        url = "https://fakestoreapi.com/orders?limit=10";
        break;
    }

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const formattedData = formatData(data, type);
        renderChart(formattedData);
      })
      .catch((error) => console.error("Error fetching sales data:", error));
  };

  const formatData = (data, type) => {
    let formattedData = [];
    switch (type) {
      case "day":
      case "month":
      case "year":
        formattedData = data.map((order) => ({
          label: `Order #${order.id}`,
          value: order.total,
        }));
        break;
      default:
        formattedData = [];
        break;
    }
    return formattedData;
  };

  const renderChart = (data) => {
    const ctx = document.getElementById("salesChart");
    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: "Sales",
              data: data.map((item) => item.value),
              backgroundColor: "rgba(54, 162, 235, 0.6)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Orders",
              },
            },
            y: {
              title: {
                display: true,
                text: "Total Sales ($)",
              },
              suggestedMin: 0,
            },
          },
        },
      });
    }
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="reports">
      <h2>Sales Reports</h2>
      <div className="filter-container">
        <label htmlFor="filterType">Filter by:</label>
        <select
          id="filterType"
          value={filterType}
          onChange={handleFilterChange}
        >
          <option value="day">Day</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <canvas id="salesChart" width="400" height="200"></canvas>
    </div>
  );
};

export default Reports;
