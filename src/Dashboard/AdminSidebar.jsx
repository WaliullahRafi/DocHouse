import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white shadow-xl">
        <div className="flex flex-col justify-between flex-1 mt-24">
          <nav>
            <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200">
              <span className="mx-4 font-medium">Dashboard</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <span className="mx-4 font-medium">All Users</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <span className="mx-4 font-medium">Add a Doctor</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <span className="mx-4 font-medium">Manage Doctors</span>
            </a>

            <Link
              to="/"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <span className="mx-4 font-medium">Home</span>
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default AdminSidebar;
