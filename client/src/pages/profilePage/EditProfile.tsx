import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import the corresponding CSS file

function EditProfile() {
	const [name, setName] = useState("Ngotho Commercial Agency");
	const [phone1, setPhone1] = useState("0717299106");
	const [phone2, setPhone2] = useState("0717299106");
	const [email, setEmail] = useState("bonnienjuguna106@gmail.coms");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhone1Change = (event) => {
		setPhone1(event.target.value);
	};

	const handlePhone2Change = (event) => {
		setPhone2(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handleSave = () => {
		// Perform actions to save the edited profile details, e.g., API calls, database updates, etc.
		// Redirect to the profile page after saving
	};

	return (
		<div className="edit-profile">
			<div className="settings-icon">
				<Link to="/profile">Back to Profile</Link>
			</div>
			<div className="header">
				<div className="logo-placeholder">change Logo</div>
			</div>
			<div className="form">
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" value={name} onChange={handleNameChange} />

				<label htmlFor="phone1">Phone 1:</label>
				<input
					type="text"
					id="phone1"
					value={phone1}
					onChange={handlePhone1Change}
				/>

				<label htmlFor="phone2">Phone 2:</label>
				<input
					type="text"
					id="phone2"
					value={phone2}
					onChange={handlePhone2Change}
				/>

				<label htmlFor="contact-email">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={handleEmailChange}
				/>

				<button onClick={handleSave}>Save</button>
			</div>
		</div>
	);
}

export default EditProfile;
