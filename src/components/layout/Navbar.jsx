import React, { useState } from "react";
import { logo } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bg-white z-50 shadow-md w-full">
      <div className="flex justify-between  items-center px-4 sm:px-24 h-10 sm:h-[4.6rem] font-nunito">
        <div className="relative w-44 h-8 md:h-12 overflow-hidden">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-auto md:w-full h-8 md:h-full"
            />
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <RiCloseLine className="hamburger-icon" />
            ) : (
              <RiMenu3Line className="hamburger-icon" />
            )}
          </button>
        </div>
        <div
          className={`hidden sm:flex font-extrabold text-[17px] justify-evenly items-center w-2/3 md:w-[45%] ${
            isMenuOpen ? "hidden" : ""
          }`}
        >
          <div className="navbar-link cursor-pointer">
            <NavLink
              to="/services"
              activeClassName="active-link"
              exact
              className="nav-link"
            >
              Services
            </NavLink>
          </div>
          <div className="navbar-link cursor-pointer">
            <NavLink
              to="/work"
              activeClassName="active-link"
              exact
              className="nav-link"
            >
              Work
            </NavLink>
          </div>
          <div className="navbar-link cursor-pointer">
            <NavLink
              to="/about"
              activeClassName="active-link"
              exact
              className="nav-link"
            >
              About Us
            </NavLink>
          </div>
          <div className="navbar-contact shadow-lg rounded-2xl cursor-pointer bg-[#1A1A1A] font-medium text-[17px] text-[#fff] hidden sm:block">
            <NavLink
              to="/contact"
              activeClassName="active-link"
              exact
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="bg-[submit-bg] flex flex-col items-center py-20 justify-evenly h-screen font-extrabold ">
            <div className="navbar-link cursor-pointer">
              <NavLink
                to="/services"
                activeClassName="active-link"
                exact
                className="nav-link text-[28px]"
              >
                Services
              </NavLink>
            </div>
            <div className="navbar-link cursor-pointer">
              <NavLink
                to="/work"
                activeClassName="active-link"
                exact
                className="nav-link text-[28px]"
              >
                Work
              </NavLink>
            </div>
            <div className="navbar-link cursor-pointer">
              <NavLink
                to="/about"
                activeClassName="active-link"
                exact
                className="nav-link text-[28px]"
              >
                About Us
              </NavLink>
            </div>
            <div className="navbar-link cursor-pointer">
              <NavLink
                to="/contact"
                activeClassName="active-link"
                exact
                className="nav-link text-[28px]"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
