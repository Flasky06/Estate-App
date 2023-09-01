import React from "react";
import "./index.css"; // Import the corresponding CSS file

function HouseInfo() {
	return (
		<div className="house-info">
			<div className="info-container"></div>
			<div className="info-container">
				<div className="details-info">2 bedroom </div>
			</div>
			<div className="info-container">
				<div className="details-info">0717299106</div>
			</div>
			<div className="info-container">
				<div className="info-head"> location</div>
				<div className="details-info"> Freehold</div>
			</div>
			<div className="info-container">
				<div className="info-head">cost</div>
				<div className="details-info">KSh 12000</div>
			</div>
			<div className="info-container">
				<div className="info-head">facilities</div>
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
