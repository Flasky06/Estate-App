import React from "react";
import Header from "../../layout/Header";
import Categories from "./Categories";
import Houses from "./Houses";

function Home() {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-1/5 p-4">Side Navigation</div>

      <div className="flex-1 flex flex-col">
        <Header />
        <Categories />
        <Houses />{" "}
      </div>
    </div>
  );
}

export default Home;
