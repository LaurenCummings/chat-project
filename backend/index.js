import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
