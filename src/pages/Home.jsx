import "./Home.css";
import { useState } from "react";
import { booksData } from "../Utils/data";
import BookCard from "../Components/BookCard";

 function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Fiction", "Classic", "Sci-Fi", "Romance"];

  const filteredBooks =
    selectedCategory === "All"
      ? booksData
      : booksData.filter((b) => b.category === selectedCategory);

  return (
    <div className="home">

      <h2 className="title">A smarter way to explore books — all in one place.</h2>
        <p className="sub">Discover, track, and save your favorite reads effortlessly</p>

      <h2 className="sub-title">Categories</h2>
      <div className="categories">
        {categories.map((cat) => (
          <p
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false);
            }}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </p>
        ))}
      </div>

      <h2 className="section-title">Popular Books</h2>

      <div className="book-list">
        {(showAll ? filteredBooks : filteredBooks.slice(0, 5)).map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>

      {filteredBooks.length > 6 && (
        <button className="browse-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Browse More"}
        </button>
      )}
    </div>
  );
}

export default Home;
