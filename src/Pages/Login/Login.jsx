import React from "react";
import Img from "../../Assets/Login/sign.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center gap-28">
      <div className="min-h-screen max-w-[50rem] flex items-center justify-center bg-[#07332F] flex-1">
        <img src={Img} alt="" className="w-[35rem]" />
      </div>

      <form className="border-[1px] border-[#E6E6E6] p-14 rounded-xl space-y-6">
        <h2 className="text-2xl font-bold text-center">Sign in to Doc House</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">User Name or Email Address</label>
          <input
            className="p-4 rounded-xl bg-[#F3F3F3] w-[22rem]"
            type="text"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password">Password</label>
            <span className="text-[#F7A582] cursor-pointer hover:underline">Forgot password?</span>
          </div>
          <input
            className="p-4 rounded-xl bg-[#F3F3F3] w-[22rem]"
            type="text"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="submit"
            value="Login"
            className="btn btn-ghost bg-[#F7A582] text-white"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-center">
            Already have an account? Go to{" "}
            <Link
              to="/register"
              className="text-medium text-[#F7A582] font-semibold underline"
            >
              SIGN UP
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
