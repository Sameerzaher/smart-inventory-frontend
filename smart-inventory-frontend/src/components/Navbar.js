import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">📦 Smart Inventory</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/inventory" className="nav-link">Inventory</Link>
        <Link to="/sales" className="nav-link">Sales</Link>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
