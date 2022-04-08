import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/png/logo.png";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font fixed w-full z-50">
      <div className="container max-w-7xl mx-auto flex flex-wrap pt-2 lg:pt-5 px-5 bg-white flex-col md:flex-row items-center">
        <Link
          to="/"
          className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 rounded-sm"
        >
          <div className="flex justify-center items-end h-[50px]">
            <img className="w-[41px] h-[41px]" src={logo} alt="logo" />
          </div>
          <span className="text-xl font-serif">Tribunal</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
