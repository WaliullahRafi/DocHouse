import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar & Footer/Navbar";
import Footer from "../Components/Navbar & Footer/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-68px)] pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
