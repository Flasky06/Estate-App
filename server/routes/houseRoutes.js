import express from "express";
import { check } from "express-validator";
import {
	CreateHouseController,
	GetHouseController,
	UpdateHouseController,
} from "../controllers/houseControllers.js";

const router = express.Router();
// CREATE  NEW HOUSE
router.post(
	"/create",
	[
		// Update House Details

		check("title", "title cannot be blank").isLength({ min: 3 }),
		check("description", "Description cannot be empty").isLength({ min: 3 }),
	],
	CreateHouseController
);

// UPDATE HOUSE
router.put(
	"/update/:id",
	[
		check("title", "title cannot be blank").isLength({ min: 3 }),
		check("description", "Description cannot be empty").isLength({ min: 3 }),
	],
	UpdateHouseController
);

// GET ALL HOUSES
router.get("/all", GetHouseController);

export default router;
