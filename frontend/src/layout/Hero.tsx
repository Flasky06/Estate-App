import React from "react";
import Header from "./Header.tsx";
import SearchComponent from "../components/SearchComponent.tsx";
import HeroImage from "../assets/image/apartment.jpg";

function Hero() {
  return (
    <div
      className="w-full h-screen  lg:h-96 flex items-end justify-center"
      style={{
        backgroundImage: `url(${HeroImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <SearchComponent />
    </div>
  );
}

export default Hero;
