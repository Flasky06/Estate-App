import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header: React.FC = () => {
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] =
    useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-white fixed z-20 top-0 shadow">
      <div className="flex items-center px-3">
        <div className="mr-12">logo</div>
        <div className="container  flex items-center justify-end ">
          <div className="px-4 cursor-pointer">Home</div>
          <div className="relative px-4">
            <button
              onClick={() =>
                setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen)
              }
              className="cursor-pointer"
            >
              Properties
            </button>
            {isPropertiesDropdownOpen && (
              <div className="absolute right-0 w-32 py-2 mt-2 bg-white rounded-md shadow-xl z-10">
                <a
                  href="/for-sale"
                  className="block px-4 py-2 text-sm text-slate-800 hover:bg-gray-100"
                >
                  For Sale
                </a>
                <a
                  href="/for-rent"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  For Rent
                </a>
              </div>
            )}
          </div>
          <div className="relative px-4">
            <button
              onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
              className="cursor-pointer flex space-x-1 items-center"
            >
              <MdMenu className="text-xl" />
              <CgProfile className="text-2xl" />
            </button>
            {isMenuDropdownOpen && (
              <div className="absolute right-0 w-32 py-2 mt-2 bg-white rounded-md shadow-xl z-10">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
          <div>
            <button className=" bg-blue-500 text-white py-2 px-3 text-sm font-bold rounded">
              Add Listing
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
