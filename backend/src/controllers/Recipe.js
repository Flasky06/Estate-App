import { RecipesModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

export const GetAllRecipes = async (req, res) => {
	try {
		const response = await RecipesModel.find({});
		res.json(response);
	} catch (err) {
		res.json(err);
	}
};
export const CreateRecipe = async (req, res) => {
	const recipe = new RecipesModel(req.body);

	try {
		const response = await recipe.save();

		res.json(response);
	} catch (err) {
		res.json(err);
	}
};

export const SaveRecipe = async (req, res) => {
	const recipe = await RecipesModel.findById(req.body.recipeID);
	const user = await UserModel.findById(req.body.userID);
	try {
		user.savedRecipes.push(recipe);
		await user.save();
		res.status(201).json({ savedRecipes: user.savedRecipes });
	} catch (err) {
		res.status(500).json(err);
	}
};
export const GetAllSavedRecipes = async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.userId);
		const savedRecipes = await RecipesModel.find({
			_id: { $in: user.savedRecipes },
		});

		res.status(201).json({ savedRecipes });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

export const GetSavedRecipe = async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.userId);
		res.status(201).json({ savedRecipes: user?.savedRecipes });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};
