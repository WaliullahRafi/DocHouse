import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
import useAuth from "../../Hooks/useAuth";

function Navbar() {
  const { user } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-[#07332F] fixed w-full z-10 py-6">
      <div className="navbar max-w-[1140px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img src={logo} alt="logo here" className="w-[10rem]" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium text-white">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
