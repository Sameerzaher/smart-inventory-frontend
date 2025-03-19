import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>📦 Smart Inventory</h1>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/sales">Sales</Link>
      </div>
    </nav>
  );
};

export default Navbar;
