import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utility/utility";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="bg-white py-1 w-screen flex justify-between px-6 items-center sticky top-0">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="h-8"/>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
