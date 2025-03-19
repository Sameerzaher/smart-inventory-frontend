import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <Navbar />

        <div className="dashboard-card">
          <h1>📊 Dashboard</h1>
          <p>Welcome to Smart Inventory System</p>

          {/* Quick Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="dashboard-card">
              <h2>Total Products</h2>
              <p>{products.length}</p>
            </div>
            <div className="dashboard-card">
              <h2>Stock Value</h2>
              <p>$45,000</p>
            </div>
            <div className="dashboard-card">
              <h2>Sales Today</h2>
              <p>$5,200</p>
            </div>
          </div>

          {/* Products List (without Actions) */}
          <div className="products-list-container">
            <h2 className="products-title">🛒 Products List</h2>

            {loading ? (
              <p className="loading-text">Loading products...</p>
            ) : error ? (
              <p className="error-text">{error}</p>
            ) : (
              <table className="products-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Stock</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.sku}</td>
                      <td>{product.stock_quantity}</td>
                      <td>${product.selling_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
