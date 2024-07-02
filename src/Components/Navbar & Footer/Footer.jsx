import React from "react";
import img from "../../Assets/footerLogo.png";

function Footer() {
  return (
    <div className="bg-[#F3F3F3]">
      <footer className="max-w-[1140px] mx-auto">
        <div className="container px-6 py-8 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="space-y-4">
              <img src={img} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. has been since the printer took.
              </p>
              <button className="btn btn-ghost border-[1px] border-[#F7A582] text-[#F7A582]">
                Appointment
              </button>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-400 uppercase">
                Quick Links
              </div>

              <a
                href="#"
                className="block mt-5 text-sm font-medium duration-700  hover:text-gray-400 hover:underline"
              >
                About Us
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700  hover:text-gray-400 hover:underline"
              >
                Service
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700  hover:text-gray-400 hover:underline"
              >
                Doctors
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700  hover:text-gray-400 hover:underline"
              >
                Departments
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700  hover:text-gray-400 hover:underline"
              >
                Online Payment
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700  hover:text-gray-400 hover:underline"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700  hover:text-gray-400 hover:underline"
              >
                My Account
              </a>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-400 uppercase">
                Doc House Services
              </div>

              <a
                href="#"
                className="block mt-5 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Pediatric Clinic
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Diagnosis Clinic
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Cardiac Clinic
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Laboratory Analysis
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Gynecological Clinic
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Personal Counseling
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Dental Clinic
              </a>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-400 uppercase">
                Working Hours
              </div>

              <a
                href="#"
                className="block mt-5 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Monday - 10 am to 7 pm
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Tuesday - 10 am to 7 pm
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Wednesday - 10 am to 7 pm
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Thursday - 10 am to 7 pm
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Friday - 10 am to 7 pm
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Saturday - 10 am to 7 pm
              </a>
              <a
                href="#"
                className="block mt-3 text-sm font-medium duration-700 hover:text-gray-400 hover:underline"
              >
                Sunday - 10 am to 7 pm
              </a>
            </div>
          </div>

          <hr className="my-10 border-[#CECECE]" />

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Copyright © 2022 - All right reserved by Doc House Ltd
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
