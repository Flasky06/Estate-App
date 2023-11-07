import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import JWT from "jsonwebtoken";
import User from "../models/User.js";

// Register New User
export const SignupController = async (req, res) => {
	const { email, password } = req.body;

	// Validate Input
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		// Check if the user already exists in the database
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res
				.status(400)
				.json({ errors: [{ msg: "This user already exists" }] });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		console.log("Hashed Password :", hashedPassword);

		// Create a new user in the DB
		const newUser = new User({ email, password: hashedPassword });

		await newUser.save();

		// Generate JWT token
		const token = JWT.sign({ email }, "secret", { expiresIn: 3600000 });
		res.send({ token });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ errors: [{ msg: "Server error" }] });
	}
};
export const LoginController = async (req, res) => {
	const { password, email } = req.body;

	try {
		// Find the user by email in the database
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
		}

		// Compare the provided password with the hashed password from the user
		let isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
		}

		// If the credentials are valid, generate a JWT token
		const token = await JWT.sign({ email }, "secret", { expiresIn: 36000000 });

		res.send({ token });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ errors: [{ msg: "Server error" }] });
	}
};
