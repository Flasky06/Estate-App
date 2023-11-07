import express from "express";

import { check } from "express-validator";
import {
	LoginController,
	SignupController,
} from "../controllers/authControllers.js";

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

// GET USER ROUTE
router.get("/id");

export default router;
