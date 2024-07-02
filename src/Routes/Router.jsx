import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Error/ErrorPage";
import HomeLayout from "../Layouts/HomeLayout";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/doctor-profile/:id",
        element: <DoctorProfile />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
