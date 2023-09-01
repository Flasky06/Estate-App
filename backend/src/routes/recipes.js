import express from "express";

import {
	CreateRecipe,
	GetAllRecipes,
	GetAllSavedRecipes,
	GetSavedRecipe,
	SaveRecipe,
} from "../controllers/Recipe.js";

const router = express.Router();

// GET ALL RECIPES
router.get("/", GetAllRecipes);

// CREATE NEW RECIPE
router.post("/", CreateRecipe);

// SAVE RECIPE
router.put("/", SaveRecipe);

// Get id of saved recipes
router.get("/savedRecipes/ids/:userId", GetSavedRecipe);

// GET ALL SAVED RECIPES
router.get("/savedRecipes/:userId", GetAllSavedRecipes);

export { router as recipesRouter };
