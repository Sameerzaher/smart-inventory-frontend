import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Products = () => {
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
    <div className="products-container">
      <h1 className="page-title">📦 Products</h1>

      {loading ? (
        <p className="loading-text">Loading products...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="table-container">
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>SKU</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Actions</th>
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
                  <td>
                    <button className="edit-btn">
                      <FaEdit /> Edit
                    </button>
                    <button className="delete-btn">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;
