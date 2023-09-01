import React from "react";
import CreatePost from "./CreatePost";
import PostContainer from "./PostContainerModal";
import Profile from "./Profile";

function ProfilePage() {
	return (
		<div>
			<Profile />
			<CreatePost />
		</div>
	);
}

export default ProfilePage;
