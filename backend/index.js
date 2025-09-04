import dotenv from "dotenv";

const express = require("express");

const app = express();

dotenv.config();

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
