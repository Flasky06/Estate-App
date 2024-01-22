import React, { useState } from "react";

type Amenities = {
  equippedKitchen: boolean;
  mediaRoom: boolean;
  gym: boolean;
  laundry: boolean;
  backyard: boolean;
  garageAttached: boolean;
  basketballCourt: boolean;
  frontYard: boolean;
  hotBath: boolean;
  pool: boolean;
  centralAir: boolean;
  electricity: boolean;
  heating: boolean;
  naturalGas: boolean;
  ventilation: boolean;
  water: boolean;
  chairAccessible: boolean;
  elevator: boolean;
  fireplace: boolean;
  smokeDetectors: boolean;
  washerAndDryer: boolean;
  wifi: boolean;
};

const AmenitiesListingComponent: React.FC = () => {
  const [amenities, setAmenities] = useState<Amenities>({
    equippedKitchen: false,
    mediaRoom: false,
    gym: false,
    laundry: false,
    backyard: false,
    garageAttached: false,
    basketballCourt: false,
    frontYard: false,
    hotBath: false,
    pool: false,
    centralAir: false,
    electricity: false,
    heating: false,
    naturalGas: false,
    ventilation: false,
    water: false,
    chairAccessible: false,
    elevator: false,
    fireplace: false,
    smokeDetectors: false,
    washerAndDryer: false,
    wifi: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAmenities({ ...amenities, [name]: checked });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(amenities); // Replace with submission logic
  };

  return (
    <div className="p-4 bg-white">
      <h3 className="text-lg font-bold mb-4">Amenities and Features</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
          {/* Interior Details */}
          <div>
            <p className="font-bold mb-2">Interior Details</p>
            <label className="block">
              <input
                type="checkbox"
                name="equippedKitchen"
                checked={amenities.equippedKitchen}
                onChange={handleCheckboxChange}
              />
              Equipped Kitchen
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="mediaRoom"
                checked={amenities.mediaRoom}
                onChange={handleCheckboxChange}
              />
              Media Room
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="gym"
                checked={amenities.gym}
                onChange={handleCheckboxChange}
              />
              Gym
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="laundry"
                checked={amenities.laundry}
                onChange={handleCheckboxChange}
              />
              Laundry
            </label>
          </div>

          {/* Outdoor Details */}
          <div>
            <p className="font-bold mb-2">Outdoor Details</p>
            <label className="block">
              <input
                type="checkbox"
                name="backyard"
                checked={amenities.backyard}
                onChange={handleCheckboxChange}
              />
              Back yard
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="garageAttached"
                checked={amenities.garageAttached}
                onChange={handleCheckboxChange}
              />
              Garage Attached
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="basketballCourt"
                checked={amenities.basketballCourt}
                onChange={handleCheckboxChange}
              />
              Basketball court
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="frontYard"
                checked={amenities.frontYard}
                onChange={handleCheckboxChange}
              />
              Front yard
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="hotBath"
                checked={amenities.hotBath}
                onChange={handleCheckboxChange}
              />
              Hot Bath
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="pool"
                checked={amenities.pool}
                onChange={handleCheckboxChange}
              />
              Pool
            </label>
          </div>

          {/* Utilities */}
          <div>
            <p className="font-bold mb-2">Utilities</p>
            <label className="block">
              <input
                type="checkbox"
                name="centralAir"
                checked={amenities.centralAir}
                onChange={handleCheckboxChange}
              />
              Central Air
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="electricity"
                checked={amenities.electricity}
                onChange={handleCheckboxChange}
              />
              Electricity
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="heating"
                checked={amenities.heating}
                onChange={handleCheckboxChange}
              />
              Heating
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="naturalGas"
                checked={amenities.naturalGas}
                onChange={handleCheckboxChange}
              />
              Natural Gas
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="ventilation"
                checked={amenities.ventilation}
                onChange={handleCheckboxChange}
              />
              Ventilation
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="water"
                checked={amenities.water}
                onChange={handleCheckboxChange}
              />
              Water
            </label>
          </div>

          {/* Other Features */}
          <div>
            <p className="font-bold mb-2">Other Features</p>
            <label className="block">
              <input
                type="checkbox"
                name="chairAccessible"
                checked={amenities.chairAccessible}
                onChange={handleCheckboxChange}
              />
              Chair Accessible
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="elevator"
                checked={amenities.elevator}
                onChange={handleCheckboxChange}
              />
              Elevator
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="fireplace"
                checked={amenities.fireplace}
                onChange={handleCheckboxChange}
              />
              Fireplace
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="smokeDetectors"
                checked={amenities.smokeDetectors}
                onChange={handleCheckboxChange}
              />
              Smoke detectors
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="washerAndDryer"
                checked={amenities.washerAndDryer}
                onChange={handleCheckboxChange}
              />
              Washer and dryer
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="wifi"
                checked={amenities.wifi}
                onChange={handleCheckboxChange}
              />
              WiFi
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AmenitiesListingComponent;
