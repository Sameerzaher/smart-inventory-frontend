import { Link } from "react-router-dom";

import "./Sidebar.css";
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

    
    </div>
  );
};

export default Sidebar;
