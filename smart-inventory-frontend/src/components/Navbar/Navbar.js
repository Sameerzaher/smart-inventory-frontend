import { Link } from "react-router-dom";
import { logout } from "../../utils/auth";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">📦 Smart Inventory</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/inventory" className="nav-link">Inventory</Link>
        <Link to="/sales" className="nav-link">Sales</Link>
         <div className="logout-btn" onClick={logout}>
               Logout
             </div>
      </div>
    </nav>
  );
};

export default Navbar;
