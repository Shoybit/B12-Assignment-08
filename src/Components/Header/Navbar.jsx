import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import github from "../../assets/fi_2111432.png";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-sm">
      <div className="navbar max-w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link
                className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white w-[70px]  mx-auto text-center rounded-2xl transition-all duration-300"
                to="/"
              >
                <li>Home</li>
              </Link>
              <Link
                className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white w-[70px] mx-auto text-center rounded-2xl transition-all duration-300"
                to="/Apps"
              >
                <li>Apps</li>
              </Link>
              <Link
                className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white w-[70px] mx-auto text-center rounded-2xl transition-all duration-300"
                to="/Installation"
              >
                <li>Installation</li>
              </Link>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="HERO.IO Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <span className="text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7">
            <Link
              className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white w-[70px] mx-auto text-center rounded-2xl transition-all duration-300"
              to="/"
            >
              <li>Home</li>
            </Link>
            <Link
              className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white w-[70px] mx-auto text-center rounded-2xl transition-all duration-300"
              to="/Apps"
            >
              <li>Apps</li>
            </Link>
            <Link
              className="hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white w-[100px] mx-auto text-center rounded-2xl transition-all duration-300"
              to="/Installation"
            >
              <li>Installation</li>
            </Link>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/Shoybit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5729CC] hover:to-[#8D55DD] text-white border-none hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              <img src={github} alt="github-profile" />
              Contribute
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
