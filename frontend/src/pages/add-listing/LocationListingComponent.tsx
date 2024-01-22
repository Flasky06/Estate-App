import React, { useState } from "react";

// Define a type for the form data
type FormData = {
  city: string;
  area: string;
};

const LocationListingComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ city: "", area: "" });

  const areasByCity: Record<string, string[]> = {
    Nairobi: ["Kileleshwa", "Kitengela", "Westlands", "Lavington"],
    Nakuru: ["Ngala", "Freehold", "Kiamunyi", "Shaabab"],
    Mombasa: ["Bombolulu", "Nyali", "Pembe mbili"],
    Machakos: ["Katolono", "Mumbuni", "Miwani", "Eastliegh"],
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, city: event.target.value, area: "" });
  };

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, area: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData); // Here you can handle the form submission, e.g., sending data to a server.
  };

  return (
    <div className="p-4 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleCityChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select City</option>
            {Object.keys(areasByCity).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="area"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Area
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleAreaChange}
            disabled={!formData.city}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Area</option>
            {formData.city &&
              areasByCity[formData.city].map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default LocationListingComponent;
