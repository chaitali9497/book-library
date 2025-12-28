import { useEffect, useState } from "react";
import { fetchBooks } from "../Utils/bookUtils";
import BookCard from "../Components/BookCard";
import "./BrowseBooks.css";

function BrowseBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const filteredBooks =
    search.trim() === ""
      ? []
      : books.filter(
          (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        );

  if (loading) {
    return <h2 className="no-results">Loading books...</h2>;
  }

  return (
    <div className="browse">
      <h1>Find your next great story</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-list">
        {search.trim() === "" ? (
          <>
            <p className="no-results">
              Type something to find your next read.....
            </p>

            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </>
        ) : filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="no-results">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
