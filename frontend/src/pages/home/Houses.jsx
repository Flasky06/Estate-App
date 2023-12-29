import React, { useEffect, useState } from "react";
import axios from "axios";

function Houses() {
  const [houses, setHouses] = useState("");
  const URL = "http://localhost:7000/houses/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setHouses(response.data);
      } catch (error) {
        console.error("Failed to fetch houses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-bold my-8">Explore houses</h1>
      {houses ? (
        <ul>
          {houses.map((house, index) => (
            <div>
              <img src={house.imageUrl} alt={house.name} />
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading houses...</p>
      )}
    </div>
  );
}

export default Houses;
