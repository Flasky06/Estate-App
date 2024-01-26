const express = require("express");
const app = express();
express;
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// routes

app.listen(5000, () => {
  console.log("server running on port 5000");
});
