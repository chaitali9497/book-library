import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    publishDate: {
      type: Date,
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    coverImage: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const bookModel = mongoose.model("Book", bookSchema);
export default bookModel;