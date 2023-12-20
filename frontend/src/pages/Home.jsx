import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex h-screen">
      {/* Side Navigation */}
      <div className="bg-gray-800 text-white w-1/5 p-4">
        {/* Add your side navigation content here */}
        Side Navigation
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Body */}
        <div className="flex-1 p-4">
          {/* Your main content goes here */}
          Main Content
        </div>
      </div>
    </div>
  );
}

export default Home;
