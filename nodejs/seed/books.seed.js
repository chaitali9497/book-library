import mongoose from "mongoose";
import bookModel from "../Model/Book.model.js";
import { booksData } from "../Data/booksData.js";

const seedBooks = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookDB");

    await bookModel.deleteMany();
    console.log("Old books removed");

    await bookModel.insertMany(
      booksData.map(book => ({
        ...book,
        publishDate: new Date(book.publishDate)
      }))
    );

    console.log("Books seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedBooks();
