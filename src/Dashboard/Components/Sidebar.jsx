import React from "react";
import GuestSidebar from "../GuestSidebar";
import DashboardNavbar from "./DashboardNavbar";

function Sidebar() {
  return (
    <div>
      <div>
        <DashboardNavbar />
      </div>

      <div>
        <GuestSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
