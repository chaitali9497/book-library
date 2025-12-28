import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../Utils/bookUtils";
import StarRating from "../Components/StarRating.jsx";
import noImage from "../assets/No-Image.svg";
import "./AddBook.css";
import { toast } from "react-toastify";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    rating: 0,
    description: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.title.trim() === "" ||
      form.author.trim() === "" ||
      form.category.trim() === "" ||
      form.rating === 0
    ) {
      toast.error("All fields are required!");
      return;
    }

    const newBook = {
      title: form.title,
      author: form.author,
      category: form.category,
      rating: form.rating,
      description: form.description,
      coverImage: noImage,
      pages: 0,
      publishDate: new Date().toISOString()
    };

    try {
      await addBook(newBook);
      toast.success("Book added successfully!");
      navigate(`/books/${form.category}?added=true`);
    } catch (error) {
      toast.error("Failed to add book");
      console.error(error);
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h1>Add New Book</h1>

      <label>Title</label>
      <input
        type="text"
        value={form.title}
        placeholder="Enter title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <label>Author</label>
      <input
        type="text"
        value={form.author}
        placeholder="Enter author"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <label>Category</label>
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select category</option>
        <option value="Classic">Classic</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romance">Romance</option>
      </select>

      <label>Description</label>
      <textarea
        value={form.description}
        placeholder="Enter description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <label className="rating-label">Rating the Book</label>
      <StarRating
        rating={form.rating}
        setRating={(value) => setForm({ ...form, rating: value })}
      />

      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
