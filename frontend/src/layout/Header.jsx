import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="py-10 border-b-2 bg-white flex flex-row justify-around">
      <Search />
      <Navbar />
    </div>
  );
}

export default Header;
