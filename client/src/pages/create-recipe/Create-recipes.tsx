import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../../hooks/useGetUserID";
import "./create-recipe.css";

function CreateRecipes() {
	const userID = useGetUserID();
	const navigate = useNavigate();

	const [recipe, setRecipe] = useState({
		name: "",
		ingredients: [],
		instructions: "",

		cookingTime: 0,
		userOwner: userID,
	});

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setRecipe({ ...recipe, [name]: value });
		console.log({ ...recipe, [name]: value });
	};

	const handleIngredientChange = (event: any, idx: any) => {
		const { name, value } = event.target;

		const ingredients = recipe.ingredients;

		ingredients[idx] = value;

		setRecipe({ ...recipe, ingredients });
	};

	const addIngredient = (event: any) => {
		event.preventDefault();
		setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		try {
			await axios.post("http://localhost:3500/recipes", recipe);
			alert("Recipe Created");
			navigate("/");
		} catch (error) {
			console.error("Err", error);
		}
	};

	return (
		<div className="create-recipe">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" onChange={handleChange} />

				<label htmlFor="description">description</label>

				<textarea id="description" name="description" onChange={handleChange} />
				<label htmlFor="ingredients">ingredients</label>
				{recipe.ingredients.map((ingredient, idx) => (
					<input
						type="text"
						id="ingredients"
						name="ingredients"
						value={ingredient}
						onChange={(event) => handleIngredientChange(event, idx)}
					/>
				))}

				<button onClick={addIngredient} type="button" className="addIngredient">
					Add Ingredient
				</button>
				<label htmlFor="instructions">instructions</label>
				<textarea
					id="instructions"
					name="instructions"
					onChange={handleChange}
				/>

				<label htmlFor="imageUrl">Image URL</label>
				<textarea id="imageUrl" name="imageUrl" onChange={handleChange} />

				<label htmlFor="cookingTime">cookingTime</label>

				<input
					type="number"
					id="cookingTime"
					name="cookingTime"
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default CreateRecipes;
