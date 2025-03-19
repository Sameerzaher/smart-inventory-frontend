import { Link } from "react-router-dom";
import { logout } from "../utils/auth";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>📦 Smart Inventory</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/sales">Sales</Link>
      </nav>

      {/* Logout Button */}
      <div className="logout-btn" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
