import { Link } from "react-router-dom";
import noImage from "../assets/No-Image.svg"; 
import "./BookCard.css";

 function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.coverImage}
        alt={book.title}
        className="book-cover"
        onError={(e) => {
          e.target.onerror = null;   
          e.target.src = noImage; 
        }}
      />

      <h3>{book.title}</h3>
      <p>by {book.author}</p>

      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}
export default BookCard;
