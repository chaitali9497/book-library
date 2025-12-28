import express from "express";
import { createBook, getAllBooks,getBookById  } from "../Controller/book.controller.js";


const router = express.Router();

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);

export default router;
