import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ProductsList from "../../components/ProductsList";
import "./Dashboard.css";
const Dashboard = () => {
  const [inventory, setInventory] = useState([]);
  const [sales, setSales] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inventoryRes = await fetch("http://localhost:5000/api/inventory", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const salesRes = await fetch("http://localhost:5000/api/sales", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        if (!inventoryRes.ok || !salesRes.ok) {
          throw new Error("Failed to fetch data.");
        }

        const inventoryData = await inventoryRes.json();
        const salesData = await salesRes.json();

        setInventory(inventoryData);
        setSales(salesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load dashboard data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          <h1 className="dashboard-title">📊 Dashboard</h1>
          <p className="dashboard-subtitle">Welcome to Smart Inventory System</p>

          {/* Quick Stats Section */}
          <div className="stats-grid">
            <div className="stats-card">
              <h2>Total Products</h2>
              <p>{inventory.length}</p>
            </div>
            <div className="stats-card">
              <h2>Stock Value</h2>
              <p>$45,000</p>
            </div>
            <div className="stats-card">
              <h2>Sales Today</h2>
              <p>$5,200</p>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="error-text">{error}</p>}

          {/* Inventory Section */}
          <div className="section">
            <h2>📦 Inventory</h2>
            <div className="table-container">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.length > 0 ? (
                    inventory.map((item) => (
                      <tr key={item.id}>
                        <td>{item.Product?.name || "Unknown"}</td>
                        <td>{item.stock_quantity}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2">No inventory data available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sales Section */}
          <div className="section">
            <h2>💰 Sales</h2>
            <div className="table-container">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity Sold</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.length > 0 ? (
                    sales.map((sale) => (
                      <tr key={sale.id}>
                        <td>{sale.Product?.name || "Unknown"}</td>
                        <td>{sale.quantity}</td>
                        <td>${sale.total_price}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No sales data available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Products Section */}
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
