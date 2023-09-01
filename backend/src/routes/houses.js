import express from "express";
import {
	CreateHouse,
	GetAllHouses,
	GetHouse,
	SaveHouse,
} from "../controllers/Houses.js";

import {} from "../controllers/Recipe.js";

const router = express.Router();

// CREATE NEW HOUSE
router.post("/", CreateHouse);

// GET ALL HOUSES
router.get("/", GetAllHouses);

// GET ALL RECIPES
router.get("/:id", GetHouse);

// SAVE HOUSE
router.put("/", SaveHouse);

export { router as houseRouter };
