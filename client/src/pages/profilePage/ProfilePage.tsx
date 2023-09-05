import React from "react";
import CreatePost from "./CreatePost";

import Profile from "./Profile";
import "./index.css"; // Import the corresponding CSS file

function ProfilePage() {
	return (
		<div className="profilePage">
			<Profile />
			<CreatePost />
		</div>
	);
}

export default ProfilePage;
