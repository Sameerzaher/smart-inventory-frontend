import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-card">
          <h1>📊 Dashboard</h1>
          <p>Welcome to Smart Inventory System</p>

          {/* Quick Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="dashboard-card">
              <h2>Total Products</h2>
              <p>120</p>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
