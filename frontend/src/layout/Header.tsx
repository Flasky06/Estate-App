import React from "react";
import Navbar from "./Navbar.tsx";
import SearchComponent from "./SearchComponent.tsx";

function Header() {
  return (
    <div className="">
      <div className="bg-slate-800 h-8"></div>
      <div className="flex justify-center items-center py-4 max-w-7xl mx-auto">
        <div className="mr-12">logo</div>
        <SearchComponent />
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
