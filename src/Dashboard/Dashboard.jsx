import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function Dashboard() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
