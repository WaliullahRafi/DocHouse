import React from "react";
import Img from "../../Assets/Login/sign.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { ImSpinner } from "react-icons/im";

function Register() {
  const { registerNewUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.userName.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;
    const user = { name, email, image, password };

    const formData = new FormData();
    formData.append(`image`, image);

    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );

      // register user_
      const result = await registerNewUser(email, password);
      console.log(result);

      await updateUserProfile(name, data.data.display_url);
      toast.success("User Registered Successfully");
      navigate("/");
      setLoading(false);

      // end
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center gap-28">
      <div className="min-h-screen max-w-[50rem] flex items-center justify-center bg-[#07332F] flex-1">
        <img src={Img} alt="" className="w-[35rem]" />
      </div>

      <form
        onSubmit={handleRegister}
        className="border-[1px] border-[#E6E6E6] p-14 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up to Doc House</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="userName">User Name</label>
          <input
            className="p-4 rounded-xl bg-[#F3F3F3] w-[22rem]"
            type="text"
            name="userName"
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            className="p-4 rounded-xl bg-[#F3F3F3] w-[22rem]"
            type="text"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="image">PhotoURL</label>
          <input
            className="p-4 rounded-xl bg-[#F3F3F3] w-[22rem]"
            type="file"
            name="image"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input
            className="p-4 rounded-xl bg-[#F3F3F3] w-[22rem]"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="p-4 rounded-xl bg-[#F7A582] w-[22rem] text-white font-semibold flex items-center justify-center"
        >
          {loading ? <ImSpinner className="animate-spin" /> : "Create Account"}
        </button>
        <div className="flex flex-col space-y-2">
          <p className="text-center">
            Already registered? Go to{" "}
            <Link
              to="/login"
              className="text-medium text-[#F7A582] font-semibold underline"
            >
              SIGN IN
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
