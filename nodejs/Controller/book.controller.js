import bookModel from "../Model/Book.model.js";

export const createBook = async (req, res) => {
  try {
    const {
      id,
      title,
      author,
      category,
      publishDate,
      pages,
      coverImage,
      rating,
      description
    } = req.body;

    // 🔹 Validate required fields
    if (
      id === undefined ||
      !title ||
      !author ||
      !category ||
      !publishDate ||
      !pages ||
      !coverImage ||
      rating === undefined ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // 🔹 Check if book already exists
    const existingBook = await bookModel.findOne({ id });
    if (existingBook) {
      return res.status(409).json({
        success: false,
        message: "Book with this ID already exists"
      });
    }

    // 🔹 Create new book
    const newBook = await bookModel.create({
      id,
      title,
      author,
      category,
      publishDate: new Date(publishDate),
      pages,
      coverImage,
      rating,
      description
    });

    return res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating book",
      error: error.message
    });
  }
};
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();

    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
