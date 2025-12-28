import express from "express";
import { createBook, getAllBooks } from "../Controller/book.controller.js";


const router = express.Router();

router.post("/books", createBook);
router.get("/books", getAllBooks);

export default router;
