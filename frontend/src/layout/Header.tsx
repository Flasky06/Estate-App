import React from "react";
import Navbar from "./Navbar.tsx";
import SearchComponent from "./SearchComponent.tsx";

function Header() {
  return (
    <div className="fixed bg-white top-0  z-40 w-full">
      <div className="bg-slate-800 h-4"></div>
      <div className="flex justify-center items-center py-4  mx-auto  ">
        <div className="mr-12">logo</div>
        <SearchComponent />
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
