import React, { useState } from "react";
import PostContainer from "./PostContainerModal";
import "./index.css"; // Import the corresponding CSS file

function CreatePost() {
	const [isPostVisible, setIsPostVisible] = useState(false);

	const handleTogglePost = () => {
		setIsPostVisible(!isPostVisible);
	};

	return (
		<div className="app">
			<button onClick={handleTogglePost}>
				{isPostVisible ? "Close Post" : "post house"}
			</button>
			{isPostVisible && (
				<PostContainer onClose={() => setIsPostVisible(false)} />
			)}
		</div>
	);
}

export default CreatePost;
