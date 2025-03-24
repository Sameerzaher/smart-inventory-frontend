import { useEffect, useState } from "react";

const ProductsList = () => {
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
          {Array.isArray(products) && products.length > 0 ? (
  products.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.sku}</td>
      <td>{product.stock_quantity}</td>
      <td>${product.selling_price}</td>
    </tr>
  ))
) : (
  <tr><td colSpan="5">No products found</td></tr>
)}

          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsList;
