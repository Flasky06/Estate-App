import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="p-4 ">
      <div className="max-w-xl mx-auto  border-2 rounded bg-violet-500 ">
        <form className="flex items-center space-x-2  bg-orange-600 rounded-full px-4 py-1">
          <div className="relative flex ">
            <div className="flex items-center">
              <select
                id="location"
                name="location"
                className="appearance-none bg-white   px-2 py-1 pr-2 rounded-l shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Location</option>
                <option value="location1">Nairobi</option>
                <option value="location2"> Nakuru</option>
              </select>
            </div>
          </div>
          <div>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="max price"
              className="flex-grow bg-white px-2 py-1 rounded-r shadow  focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="relative">
            <select
              id="size"
              name="size"
              className="block appearance-none w-full bg-white px-2 py-1 pr-8 rounded shadow  focus:outline-none focus:shadow-outline"
            >
              <option value=""> Size</option>
              <option value="size1">1 Bedroom</option>
              <option value="size2"> 2 Bedroom</option>
            </select>
          </div>

          <button
            type="button"
            className="bg-green-500 flex flex-row items-center space-x-2 text-white px-4 py-1 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            <FaSearch className="text-lg" />
            <span className="text-sm"> Search</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
