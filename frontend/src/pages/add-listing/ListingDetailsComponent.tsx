import React, { useState } from "react";

type PropertyDetails = {
  size: number | "";
  rooms: number | "";
  bedrooms: number | "";
  bathrooms: number | "";
  garages: string;
  yearBuilt: number | "";
  extraDetails: string;
  floorsNo: number | "";
};

const ListingDetailsComponent: React.FC = () => {
  const [details, setDetails] = useState<PropertyDetails>({
    size: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    yearBuilt: "",
    extraDetails: "",
    floorsNo: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  // Generate a range of years from 1990 to the current year
  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    let years = [];
    for (let year = 1990; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  return (
    <div className="p-4 bg-white">
      <h3 className="text-lg font-bold mb-4">Property Details</h3>
      <form>
        <div className="mb-4">
          <label
            htmlFor="rooms"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rooms (only numbers)
          </label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            value={details.rooms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>

        {/* Bedrooms field */}
        <div className="mb-4">
          <label
            htmlFor="bedrooms"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={details.bedrooms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Bedrooms</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Bathrooms field */}
        <div className="mb-4">
          <label
            htmlFor="bathrooms"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bathrooms
          </label>
          <select
            id="bathrooms"
            name="bathrooms"
            value={details.bathrooms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Bathrooms</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Garages field */}
        <div className="mb-4">
          <label
            htmlFor="garages"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Garages
          </label>
          <input
            type="text"
            id="garages"
            name="garages"
            value={details.garages}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Extra Details field */}
        <div className="mb-4">
          <label
            htmlFor="extraDetails"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Extra Details
          </label>
          <input
            type="text"
            id="extraDetails"
            name="extraDetails"
            value={details.extraDetails}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Floors No field */}
        <div className="mb-4">
          <label
            htmlFor="floorsNo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Floors No
          </label>
          <select
            id="floorsNo"
            name="floorsNo"
            value={details.floorsNo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Floor Number</option>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ListingDetailsComponent;
