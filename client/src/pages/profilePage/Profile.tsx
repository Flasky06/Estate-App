import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import the corresponding CSS file

function Profile() {
	return (
		<div className="profile">
			<div className="settings-icon">
				<Link to="/edit-details">Settings (icon)</Link>
			</div>
			<div className="header">
				<div className="logo-placeholder">Logo</div>
				<h3>Ngotho Commercial Agency</h3>
			</div>
			<div className="contact">
				<div className="profile-contact">0717299106</div>
				<div className="profile-contact">0717299106</div>
				<div className="profile-email">bonnienjuguna@gmai.com</div>
			</div>
		</div>
	);
}

export default Profile;
