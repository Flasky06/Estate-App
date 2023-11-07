import express from "express";

import { check } from "express-validator";
import {
	LoginController,
	SignupController,
} from "../controllers/authControllers.js";
import {
	CreateHouseController,
	GetHousesController,
	UpdateHouseController,
} from "../controllers/houseControllers.js";

const router = express.Router();

// SIGNUP ROUTE
router.post(
	"/signup",
	[
		check("email", "please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	SignupController
);

// LOGIN ROUTE
router.post("/login", LoginController);

// CREATE  NEW HOUSE
router.post(
	"/create",
	[
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
router.get("/all", GetHousesController);

export default router;
