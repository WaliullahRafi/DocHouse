import React from "react";
import { Link, NavLink } from "react-router-dom";

function DashboardNavbar() {
  return (
    <div className="bg-[#07332F] fixed w-full">
      <div className="navbar text-white py-6 px-12">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold">
            Doc House
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <NavLink to="/about">
              <a>About</a>
            </NavLink>
            <NavLink to="/appointment">
              <a>Appointment</a>
            </NavLink>
            <NavLink>
              <a>Reviews</a>
            </NavLink>
            <NavLink>
              <a>Contact Us</a>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
