import React from "react";
import Img from "../Assets/Error.png";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle";

function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <SectionTitle heading="Sorry," subHeading="This page is not found." />
      <img src={Img} alt="" />
      <Link to="/" className="btn btn-ghost bg-[#F7A582] text-white">
        Back to home
      </Link>
    </div>
  );
}

export default ErrorPage;
