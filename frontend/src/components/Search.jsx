import React from "react";

function Search() {
  return (
    <div className="p-4 ">
      <div className="max-w-xl mx-auto  border-2 rounded">
        <div className="flex items-center space-x-1">
          <div className="relative flex-grow">
            <div className="flex items-center">
              <select
                id="location"
                name="location"
                className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-1 pr-8 rounded-l shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Location</option>
                <option value="location1">Nairobi</option>
                <option value="location2"> Nakuru</option>
              </select>

              <input
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                className="flex-grow bg-white border border-gray-300 hover:border-gray-500 px-2 py-1 rounded-r shadow  focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="relative">
            <select
              id="size"
              name="size"
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value=""> Size</option>
              <option value="size1">1 Bedroom</option>
              <option value="size2"> 2 Bedroom</option>
            </select>
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
