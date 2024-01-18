import React from "react";
import Header from "./Header.tsx";
import SearchComponent from "../components/SearchComponent.tsx";

function Hero() {
  return (
    <div className="h-96 bg-slate-200 flex items-end justify-center  ">
      <Header />
      <SearchComponent />
    </div>
  );
}

export default Hero;
