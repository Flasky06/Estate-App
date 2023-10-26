import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/index";

const app = express();

app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// INITIATING ROUTER
app.use("/", router());

const server = http.createServer(app);

// STARTING EXPRESS SERVER
server.listen(8080, () => {
	console.log("Server running on http://localhost:8080");
});

// CONNECTING TO MONGOOSE
const MONGO_URL = "mongodb+srv://bony:bony@estate.3bbgkgp.mongodb.net/";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
