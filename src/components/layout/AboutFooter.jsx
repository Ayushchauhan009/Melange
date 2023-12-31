import React from "react";
import {
  melangeLogo2,
  certificate1,
  certificate2,
  linkedin,
  instagram,
} from "../../assets/images";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] px-8 pt-44 md:pt-0">
      <div className="px-0 md:px-20 py-8 md:flex md:items-center justify-between font-nunito">
        {/* Left and Middle sections */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:mb-0">
          {/* Left side */}
          <div className="flex flex-col justify-between">
            <Link to="/">
              <img src={melangeLogo2} alt="" className="mb-6 md:mb-0" />
            </Link>
            <div className="flex flex-col items-start md:my-4 md:w-[70%]">
              <p className="font-bold text-white text-md md:text-lg">
                Sign up for our{" "}
                <span className="multiverse-text -mt-3">
                  monthly news & insights
                </span>
              </p>
              <div className="flex items-center mt-3">
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="bg-transparent border border-gray-600 px-4 text-white rounded-l focus:outline-none h-8 md:w-64"
                />
                <button className="font-semibold subscribe text-sm bg-white text-gray-800 rounded-r h-8 px-2 md:w-20">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center flex-row mt-4">
                <img
                  src={certificate1}
                  alt=""
                  className="mb-2 md:mr-1 invert"
                />
                <img src={certificate2} alt="" className="ml-5" />
              </div>
            </div>
          </div>

          {/* Middle */}

          {/* Right section */}
          <div>
            <div className="text-white mt-8 w-full md:mt-0 lg:-mt-[40%] lg:ml-32 lg:transform quick-links lg:translate-x-[32%]">
              <h1 className="font-bold text-lg md:text-xl">Quick Links</h1>
              <div className="md:mt-0">
                <div className="my-4 cursor-pointer md:text-lg w-10 font-semibold">
                  <Link to="/services">Services</Link>
                </div>
                <div className="my-4 cursor-pointer md:text-lg w-10 font-semibold">
                  <Link to="/work">Work</Link>
                </div>
                <div className="my-4 cursor-pointer md:text-lg w-24 font-semibold">
                  <Link to="/about">About Us</Link>
                </div>
                <div className="my-4 cursor-pointer md:font-semibold w-24 text-lg">
                  <Link to="/contact">Contact Us</Link>
                </div>
                <div className="my-4 cursor-pointer font-semibold text-lg">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
          <div className="text-white lg:pl-36 mt-8 md:mt-5 md:ml-auto flex flex-col lg:items-end md:w-1/2 lg:w-auto">
            <div className="lg:transform lg:translate-x-[-58%]">
              <h1 className="font-bold text-lg md:text-xl">Call Us</h1>
              <a
                href="tel: +917700974123"
                className="text-base md:text-lg mt-2"
              >
                +91 7700974123
              </a>
            </div>
            <div className="my-4 lg:transform lg:translate-x-[-16%]">
              <h1 className="font-bold text-lg md:text-xl">Email Us</h1>
              <a
                href="mailto: hello@melangedigital.in"
                className="text-base mt-2 underline md:text-lg"
              >
                hello@melangedigital.in
              </a>
            </div>
            <div className="transform-none translate-x-0 lg:transform lg:translate-x-[-45%]">
              <h1 className="font-bold text-lg md:text-xl">Connect With Us</h1>
              <div className="flex mt-2 my-1">
                <a
                  href="https://www.facebook.com/melangedigital?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/melangedigital/"
                  className="ml-3"
                >
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </div>
            <div className="my-4">
              <h1 className="font-bold text-lg md:text-xl lg:ml-[46%] 2xl:ml-[51%]">
                Address
              </h1>
              <p className="w-64 md:w-full mt-2 text-base md:text-lg lg:transform lg:translate-x-[77%] 2xl:translate-x-[85%] lg:w-[60%]">
                <a
                  href="https://www.google.com/maps/place/Lodha+Supremus,+Andheri/@19.4280124,68.8564316,9z/data=!4m6!3m5!1s0x3be7c9fbdc277255:0xc0d0f6390ccdf263!8m2!3d19.1220835!4d72.8664415!16s%2Fg%2F11fl9j2bpk?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  L-302, The Trees Godrej, Vikhroli East, Mumbai - 400079
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Down links  */}
      <div className="mx-4 md:mx-12 h-0.5 bg-[#564f4f]"></div>
      <div className="mx-4 md:mx-14 text-white py-5 font-nunito text-center bg-[#1A1A1A]">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mélange Digital. All rights
          reserved.
        </p>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 767px) {
          .pt-44 {
            padding-top: 2rem;
          }
          .md:px-20 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .md:flex {
            display: block;
          }
          .md:items-center {
            align-items: start;
          }
          .md:flex-row {
            flex-direction: column;
          }
          .lg:-mt-[40%] {
            margin-top: -40%;
          }
          .lg:ml-32 {
            margin-left: 2rem;
          }
          .quick-links {
            transform: none;
            translate-x: 0;
            margin-top: 2rem;
          }
          .lg:translate-x-[32%] {
            transform: none;
            translate-x: 0;
          }
          .lg:pl-36 {
            padding-left: 2.25rem;
          }
          .md:w-1/2 {
            width: 100%;
          }
          .lg:items-end {
            align-items: start;
          }
          .lg:w-auto {
            width: 100%;
          }
          .lg:transform {
            transform: none;
          }
          .lg:translate-x-[-58%] {
            transform: none;
            translate-x: 0;
          }
          .lg:translate-x-[-16%] {
            transform: none;
            translate-x: 0;
          }
          .lg:translate-x-[-45%] {
            transform: none;
            translate-x: 0;
          }
          .lg:ml-[47%] {
            margin-left: 47%;
          }
          .lg:transform {
            transform: none;
          }
          .lg:translate-x-[80%] {
            transform: none;
            translate-x: 0;
          }
          .lg:w-[60%] {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
