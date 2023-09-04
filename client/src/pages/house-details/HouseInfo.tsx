import React from "react";
import "./index.css"; // Import the corresponding CSS file

function HouseInfo() {
	return (
		<div className="house-info">
			<div className="details">
				<h2>2bdrm Apartment for Rent</h2>
				<p className="price">Ksh 10000</p>
				<p className="location">Freehold Nakuru</p>
				<p className="contact">0717299106</p>
				<div className="details-info">
					24-hour Electricity, Balcony, Dining Area, En Suite, Hot Water,
					Kitchen Cabinets, Kitchen Shelf, Microwave, Pop Ceiling, Pre-Paid
					Meter, Sectionals, Tiled Floor, TV, Wardrobe, Wi-Fi
				</div>
			</div>
		</div>
	);
}

export default HouseInfo;
