import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../../hooks/useGetUserID";

import "./Home.css";

function Home() {
	const userID = useGetUserID();
	const [recipes, setRecipes] = useState([]);
	const [savedRecipes, setSavedRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const response = await axios.get("http://localhost:3500/recipes");
				setRecipes(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		const fetchSavedRecipe = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3500/recipes/savedRecipes/ids/${userID}`
				);
				setSavedRecipes(response.data.savedRecipes);
				console.log("saved", response.data.savedRecipes);
			} catch (error) {
				console.log(error);
			}
		};
		fetchRecipe();
		fetchSavedRecipe();
	}, [userID]);

	const saveRecipe = async (recipeID: any) => {
		try {
			const response = await axios.put("http://localhost:3500/recipes", {
				recipeID,
				userID,
			});
			setSavedRecipes(response.data.savedRecipes);
			console.log("res", response.data);
		} catch (error) {
			console.log(error);
		}
	};
	const isRecipeSaved = (id: any) => savedRecipes.includes(id);

	return (
		<div className="home">
			<h1>Recipes</h1>
			<ul>
				{recipes.map((recipe) => (
					<>
						<li key={recipe._id}>
							<div className="name">
								<h2>{recipe.name}</h2>
								<button
									className="btn"
									onClick={() => saveRecipe(recipe._id)}
									disabled={isRecipeSaved(recipe._id)}
								>
									{isRecipeSaved(recipe._id) ? "saved" : "save"}
								</button>
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

export default Home;
