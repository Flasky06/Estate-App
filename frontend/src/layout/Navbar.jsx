import React from "react";
import { MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div>Post your house</div>

      <div className="flex flex-row space-x-2">
        <MdMenu className="text-xl" />
        <CgProfile className="text-xl" />
      </div>
    </div>
  );
}

export default Navbar;
