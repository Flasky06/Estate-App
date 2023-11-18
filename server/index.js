import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import houseRoutes from "./routes/houseRoutes.js";

// Middleware to parse JSON requests
const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Use the cors middleware

// Define a route for the root URL
app.get("/", (req, res) => {
	res.send("Hi, I am working");
});

// Routes
app.use("/auth", authRoutes);
app.use("/houses", houseRoutes);

// Connect to Mongo DB
const connect = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://bony:bony@cluster0.psbvfio.mongodb.net/"
		);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error.message);
	}

	mongoose.connection.on("disconnected", () => {
		console.log("MongoDB disconnected");
	});

	mongoose.connection.on("error", (err) => {
		console.error("MongoDB connection error:", err);
	});

	mongoose.connection.on("connected", () => {
		console.log("MongoDB reconnected");
	});

	process.on("SIGINT", () => {
		mongoose.connection.close(() => {
			console.log("MongoDB connection closed due to application termination");
			process.exit(0);
		});
	});
};

// Start the server and listen on port 8500
const port = 8600;
app.listen(port, () => {
	connect();
	console.log(`Server is now running on port ${port}`);
});
