import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./Routes/books.routes.js";

const app = express();


app.use(cors());

// middleware
app.use(express.json());

// routes
app.use("/api", bookRoutes);

// db
mongoose
  .connect("mongodb://127.0.0.1:27017/bookDB")
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.error(err));

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
