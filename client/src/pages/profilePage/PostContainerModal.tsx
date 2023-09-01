import React, { useState } from "react";
import "./index.css"; // Import the corresponding CSS file

function PostContainerModal({ onClose }) {
	const [images, setImages] = useState([]);
	const [houseType, setHouseType] = useState([]);
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [cost, setCost] = useState("");

	const handleImageChange = (event) => {
		const selectedImages = Array.from(event.target.files);
		setImages(selectedImages);
	};
	const handleHouseTypeChange = (event) => {
		setLocation(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};

	const handleCostChange = (event) => {
		setCost(event.target.value);
	};

	const handlePostSubmit = () => {
		// Perform actions to post the data, e.g., API calls, database updates, etc.
		// Placeholder: Just log the posted data for demonstration
		console.log("Posted Data:", {
			images,
			houseType,
			description,
			location,
			cost,
		});

		// Close the component after posting
		onClose();
	};

	return (
		<div className="post-container">
			<div className="post-image">
				<input type="file" multiple onChange={handleImageChange} />
			</div>{" "}
			<div className="house-type">
				<select value={houseType} onChange={handleHouseTypeChange}>
					<option value="">house type</option>
					<option value="location1">Bedsitter</option>
					<option value="location2">1 bedroom</option>
					<option value="location2">2 bedroom</option>
					<option value="location2">3 bedroom</option>
					{/* Add more locations */}
				</select>
			</div>
			<div className="house-description">
				<textarea
					placeholder="Facilities..."
					value={description}
					onChange={handleDescriptionChange}
				></textarea>
			</div>
			<div className="post-location">
				<select value={location} onChange={handleLocationChange}>
					<option value="">Select location</option>
					<option value="location1">Location 1</option>
					<option value="location2">Location 2</option>
					{/* Add more locations */}
				</select>
			</div>
			<div className="post-cost">
				<input
					type="number"
					placeholder="rent price"
					value={cost}
					onChange={handleCostChange}
				/>
			</div>
			<button onClick={handlePostSubmit}>Submit</button>
		</div>
	);
}

export default PostContainerModal;
