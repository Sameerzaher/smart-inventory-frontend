import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Shows on Desktop, Collapses on Mobile */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Dashboard Content */}
        <main className="p-6 mt-16 lg:ml-64 flex justify-center items-center h-full w-full">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
