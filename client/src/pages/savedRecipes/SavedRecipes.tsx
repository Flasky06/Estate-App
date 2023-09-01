import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../../hooks/useGetUserID";

import "./SavedRecipes.css";

function SavedRecipes() {
	const userID = useGetUserID();

	const [savedRecipes, setSavedRecipes] = useState([]);

	useEffect(() => {
		const fetchSavedRecipe = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3500/recipes/savedRecipes/${userID}`
				);
				setSavedRecipes(response.data.savedRecipes);
				console.log("saved", response.data.savedRecipes);
			} catch (error) {
				console.log(error);
			}
		};

		fetchSavedRecipe();
		console.log(fetchSavedRecipe);
	}, [userID]);

	return (
		<div className="home">
			<h1>Recipes</h1>
			<ul>
				{savedRecipes?.map((recipe) => (
					<>
						<li key={recipe._id}>
							<div className="name">
								<h2>{recipe.name}</h2>
							</div>
							<div className="instructions">
								<p>{recipe.instructions}</p>
							</div>
							<img src={recipe.imageUrl} alt="" />
							<p>cooking Time : {recipe.cookingTime} (minutes)</p>
						</li>
					</>
				))}
			</ul>
		</div>
	);
}

export default SavedRecipes;
